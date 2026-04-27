#!/usr/bin/env python3
"""
Sigma to Microsoft Sentinel Converter
Converts Sigma detection rules to Microsoft Sentinel KQL Analytics Rules
Preserves MITRE ATT&CK mappings and metadata
"""

import os
import re
import yaml
import json
import argparse
from pathlib import Path
from typing import Dict, List, Optional, Tuple
from datetime import datetime, timedelta
import uuid

class SigmaToSentinelConverter:
    def __init__(self, input_dir: str, output_dir: str, preserve_structure: bool = True):
        self.input_dir = Path(input_dir)
        self.output_dir = Path(output_dir)
        self.preserve_structure = preserve_structure
        self.conversion_report = {
            'success': [],
            'failures': [],
            'mitre_coverage': {},
            'timestamp': datetime.now().isoformat()
        }

        # MITRE tactic mapping
        self.tactic_mapping = {
            '02 Resource Development': 'ResourceDevelopment',
            '03 Initial Access': 'InitialAccess',
            '04 Execution': 'Execution',
            '05 Persistence': 'Persistence',
            '06 Privilege Escalation': 'PrivilegeEscalation',
            '07 Defense Evasion': 'DefenseEvasion',
            '08 Credential Access': 'CredentialAccess',
            '09 Discovery': 'Discovery',
            '10 Lateral Movement': 'LateralMovement',
            '12 Command and Control': 'CommandAndControl',
            '13 Exfiltration': 'Exfiltration',
            '14 Impact': 'Impact'
        }

        # Severity mapping
        self.severity_mapping = {
            'low': 'Low',
            'medium': 'Medium',
            'high': 'High',
            'critical': 'High'  # Sentinel uses High as max
        }

    def map_logsource_to_tables(self, logsource: Dict) -> List[str]:
        """Map Sigma logsources to Sentinel table names"""
        product = logsource.get('product', '').lower()
        service = logsource.get('service', '').lower()
        category = logsource.get('category', '').lower()

        tables = []

        if product == 'windows':
            if service == 'sysmon':
                tables = ['Event']
            elif service in ['powershell', 'powershell-classic']:
                tables = ['Event']
            elif service == 'security':
                tables = ['SecurityEvent']
            elif service == 'system':
                tables = ['Event']
            elif service == 'application':
                tables = ['Event']
            elif service == 'dns-server':
                tables = ['DnsEvents']
            elif service == 'dhcp':
                tables = ['Event']
            elif service == 'windefend':
                tables = ['SecurityAlert']
            elif service == 'firewall-as':
                tables = ['WindowsFirewall']
            else:
                tables = ['Event', 'SecurityEvent']

        elif product == 'linux':
            if service in ['syslog', 'rsyslog']:
                tables = ['Syslog']
            elif service == 'auditd':
                tables = ['Syslog']
            elif service in ['auth', 'ssh']:
                tables = ['Syslog']
            elif service in ['apache', 'nginx']:
                tables = ['W3CIISLog']
            else:
                tables = ['Syslog']

        elif product == 'macos':
            tables = ['Syslog']

        elif product in ['zeek', 'bro']:
            if service == 'dns':
                tables = ['DnsEvents']
            elif service in ['http', 'ssl']:
                tables = ['CommonSecurityLog']
            elif service == 'conn':
                tables = ['CommonSecurityLog']
            else:
                tables = ['CommonSecurityLog']

        elif product == 'suricata':
            tables = ['CommonSecurityLog']

        elif product == 'aws':
            if service == 'cloudtrail':
                tables = ['AWSCloudTrail']
            elif service == 'vpcflow':
                tables = ['AWSVpcFlow']
            elif service == 'guardduty':
                tables = ['SecurityAlert']
            else:
                tables = ['AzureActivity']

        elif product == 'azure':
            if service == 'activitylog':
                tables = ['AzureActivity']
            elif service == 'signinlogs':
                tables = ['SigninLogs']
            elif service == 'auditlogs':
                tables = ['AuditLogs']
            elif service == 'keyvault':
                tables = ['KeyVaultDiagnosticLogs']
            else:
                tables = ['AzureActivity']

        elif product == 'gcp':
            tables = ['GCPAuditLogs']

        elif product == 'office365':
            if service == 'audit':
                tables = ['OfficeActivity']
            elif service == 'dlp':
                tables = ['SecurityAlert']
            else:
                tables = ['OfficeActivity']

        elif product == 'okta':
            tables = ['Okta_CL']

        elif product == 'kubernetes':
            tables = ['KubePodInventory']

        elif product == 'docker':
            tables = ['ContainerLog']

        elif category == 'firewall':
            tables = ['CommonSecurityLog', 'AzureNetworkAnalytics_CL']
        elif category == 'proxy':
            tables = ['CommonSecurityLog']
        elif category == 'dns':
            tables = ['DnsEvents']
        elif category == 'webserver':
            tables = ['W3CIISLog']
        elif category == 'antivirus':
            tables = ['SecurityAlert']
        elif category in ['ids', 'ips']:
            tables = ['CommonSecurityLog']
        else:
            tables = ['SecurityEvent', 'Event']

        return tables if tables else ['Event']

    def extract_mitre_tags(self, rule_dict: Dict) -> Tuple[List[str], List[str]]:
        """Extract MITRE ATT&CK techniques and tactics"""
        tags = rule_dict.get('tags', [])
        techniques = []
        tactics = []

        for tag in tags:
            if isinstance(tag, str):
                if re.match(r'attack\.t\d+(?:\.\d+)?$', tag.lower()):
                    tech_id = tag.split('.')[-1].upper()
                    if not tech_id.startswith('T'):
                        tech_id = 'T' + tech_id
                    techniques.append(tech_id)
                elif tag.startswith('attack.') and not re.match(r'attack\.t\d+', tag.lower()):
                    tactic = tag.replace('attack.', '').replace('_', '-')
                    tactics.append(tactic)

        return techniques, tactics

    def generate_kql_query(self, rule_dict: Dict, tables: List[str]) -> str:
        """Generate KQL query from Sigma detection logic"""
        detection = rule_dict.get('detection', {})

        # Start with table union
        if len(tables) == 1:
            base_query = tables[0]
        else:
            base_query = f"union {', '.join(tables)}"

        # Add time filter
        base_query += "\n| where TimeGenerated > ago(24h)"

        # Process detection selections
        conditions = []

        for key, value in detection.items():
            if key == 'condition':
                continue

            if isinstance(value, dict):
                for field, criteria in value.items():
                    if isinstance(criteria, list):
                        # Handle list of values
                        or_conditions = []
                        for item in criteria:
                            if isinstance(item, str):
                                or_conditions.append(f'{field} has "{item}"')
                            else:
                                or_conditions.append(f'{field} == "{item}"')
                        if or_conditions:
                            conditions.append(f"({' or '.join(or_conditions)})")

                    elif isinstance(criteria, str):
                        if '|' in field:
                            # Handle Sigma modifiers
                            base_field = field.split('|')[0]
                            modifier = field.split('|')[1]

                            if modifier == 'contains':
                                conditions.append(f'{base_field} contains "{criteria}"')
                            elif modifier == 'endswith':
                                conditions.append(f'{base_field} endswith "{criteria}"')
                            elif modifier == 'startswith':
                                conditions.append(f'{base_field} startswith "{criteria}"')
                            elif modifier == 're':
                                conditions.append(f'{base_field} matches regex "{criteria}"')
                            else:
                                conditions.append(f'{base_field} == "{criteria}"')
                        else:
                            conditions.append(f'{field} == "{criteria}"')

        # Combine conditions
        if conditions:
            where_clause = " and ".join(conditions)
            full_query = f"{base_query}\n| where {where_clause}"
        else:
            full_query = base_query

        return full_query

    def generate_rule_name(self, title: str) -> str:
        """Generate valid Sentinel rule name"""
        # Keep alphanumeric, spaces, hyphens, underscores
        name = re.sub(r'[^\w\s\-_]', '', title)
        return name.strip()

    def convert_rule(self, rule_path: Path) -> Optional[Dict]:
        """Convert single Sigma rule to Sentinel Analytics Rule"""
        try:
            with open(rule_path, 'r', encoding='utf-8') as f:
                rule_content = f.read()

            # Parse YAML
            rule_dict = yaml.safe_load(rule_content)

            # Extract metadata
            title = rule_dict.get('title', 'Untitled Rule')
            description = rule_dict.get('description', '')
            level = rule_dict.get('level', 'medium')
            rule_id = rule_dict.get('id', str(uuid.uuid4()))
            author = rule_dict.get('author', 'Unknown')
            date_field = rule_dict.get('date', datetime.now().strftime('%Y/%m/%d'))
            # Ensure date is a string
            if hasattr(date_field, 'strftime'):
                date = date_field.strftime('%Y/%m/%d')
            else:
                date = str(date_field)

            # Map logsource to tables
            logsource = rule_dict.get('logsource', {})
            tables = self.map_logsource_to_tables(logsource)

            # Generate KQL query
            kql_query = self.generate_kql_query(rule_dict, tables)

            # Extract MITRE mappings
            techniques, tactics = self.extract_mitre_tags(rule_dict)

            # Get directory-based tactic
            parent_dir = rule_path.parent.name
            if parent_dir in self.tactic_mapping:
                dir_tactic = self.tactic_mapping[parent_dir]
                if dir_tactic not in tactics:
                    tactics.append(dir_tactic)

            # Generate rule name
            rule_name = self.generate_rule_name(title)

            # Build Sentinel Analytics Rule
            analytics_rule = {
                "kind": "Scheduled",
                "properties": {
                    "displayName": rule_name,
                    "description": description,
                    "severity": self.severity_mapping.get(level, 'Medium'),
                    "enabled": False,  # Start disabled for review
                    "query": kql_query,
                    "queryFrequency": "PT15M",  # 15 minutes
                    "queryPeriod": "PT24H",     # 24 hours
                    "triggerOperator": "GreaterThan",
                    "triggerThreshold": 0,
                    "suppressionDuration": "PT1H",
                    "suppressionEnabled": False,
                    "alertRuleTemplateName": None,
                    "incidentConfiguration": {
                        "createIncident": True,
                        "groupingConfiguration": {
                            "enabled": False,
                            "reopenClosedIncident": False,
                            "lookbackDuration": "PT5H",
                            "matchingMethod": "AllEntities",
                            "groupByEntities": [],
                            "groupByAlertDetails": [],
                            "groupByCustomDetails": []
                        }
                    },
                    "eventGroupingSettings": {
                        "aggregationKind": "SingleAlert"
                    },
                    "alertDetailsOverride": None,
                    "customDetails": {
                        "SigmaRuleId": rule_id,
                        "SigmaLevel": level,
                        "SigmaAuthor": author,
                        "SigmaDate": date
                    },
                    "entityMappings": [
                        {
                            "entityType": "Account",
                            "fieldMappings": [
                                {
                                    "identifier": "Name",
                                    "columnName": "Account"
                                }
                            ]
                        },
                        {
                            "entityType": "Host",
                            "fieldMappings": [
                                {
                                    "identifier": "HostName",
                                    "columnName": "Computer"
                                }
                            ]
                        }
                    ],
                    "sentinelEntitiesMappings": None,
                    "templateVersion": None
                }
            }

            # Add MITRE mappings
            if techniques:
                analytics_rule["properties"]["tactics"] = []
                analytics_rule["properties"]["techniques"] = techniques

                # Map techniques to tactics
                for technique in techniques:
                    if technique.startswith('T1'):
                        # Add corresponding tactics based on technique
                        tactic_map = {
                            'T1059': 'Execution',
                            'T1082': 'Discovery',
                            'T1106': 'Execution',
                            'T1489': 'Impact',
                            'T1105': 'CommandAndControl'
                        }
                        base_tech = technique.split('.')[0]
                        if base_tech in tactic_map:
                            tactic = tactic_map[base_tech]
                            if tactic not in analytics_rule["properties"]["tactics"]:
                                analytics_rule["properties"]["tactics"].append(tactic)

                # Update coverage tracking
                for tech in techniques:
                    if tech not in self.conversion_report['mitre_coverage']:
                        self.conversion_report['mitre_coverage'][tech] = []
                    self.conversion_report['mitre_coverage'][tech].append(rule_name)

            result = {
                'rule_path': str(rule_path),
                'analytics_rule': analytics_rule,
                'original_title': title,
                'rule_name': rule_name
            }

            self.conversion_report['success'].append({
                'file': str(rule_path),
                'name': rule_name,
                'techniques': techniques,
                'tactics': tactics,
                'tables': tables
            })

            return result

        except Exception as e:
            error_info = {
                'file': str(rule_path),
                'error': str(e),
                'type': type(e).__name__
            }
            self.conversion_report['failures'].append(error_info)
            print(f"ERROR converting {rule_path}: {e}")
            return None

    def write_analytics_rules(self, conversions: List[Dict]):
        """Write converted rules to ARM template format"""
        self.output_dir.mkdir(parents=True, exist_ok=True)

        # Create ARM template for bulk deployment
        arm_template = {
            "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
            "contentVersion": "1.0.0.0",
            "parameters": {
                "workspaceName": {
                    "type": "string",
                    "metadata": {
                        "description": "Name of the Log Analytics workspace"
                    }
                }
            },
            "variables": {},
            "resources": []
        }

        # Add each rule as a resource
        for i, conversion in enumerate(conversions):
            rule = conversion['analytics_rule']
            rule_name = conversion['rule_name']

            resource = {
                "type": "Microsoft.OperationalInsights/workspaces/providers/alertRules",
                "apiVersion": "2022-11-01-preview",
                "name": f"[concat(parameters('workspaceName'), '/Microsoft.SecurityInsights/', '{rule_name}')]",
                "dependsOn": [],
                **rule
            }

            arm_template["resources"].append(resource)

            # Also write individual JSON file
            individual_file = self.output_dir / f"{rule_name}.json"
            with open(individual_file, 'w', encoding='utf-8') as f:
                json.dump(rule, f, indent=2)

        # Write ARM template
        arm_file = self.output_dir / "analytics-rules-template.json"
        with open(arm_file, 'w', encoding='utf-8') as f:
            json.dump(arm_template, f, indent=2)

        print(f"ARM template written to: {arm_file}")
        print(f"Individual rules written to: {self.output_dir}")

    def convert_directory(self) -> bool:
        """Convert all Sigma rules in input directory"""
        print(f"Converting Sigma rules from {self.input_dir} to {self.output_dir}")

        # Find all YAML files
        yaml_files = list(self.input_dir.rglob("*.yml")) + list(self.input_dir.rglob("*.yaml"))

        if not yaml_files:
            print(f"No YAML files found in {self.input_dir}")
            return False

        print(f"Found {len(yaml_files)} Sigma rule files")

        all_conversions = []

        for rule_path in yaml_files:
            print(f"Converting: {rule_path.name}")
            conversion = self.convert_rule(rule_path)
            if conversion:
                all_conversions.append(conversion)

        # Write analytics rules
        if all_conversions:
            self.write_analytics_rules(all_conversions)

        # Write conversion report
        report_path = self.output_dir / "conversion-report.json"
        with open(report_path, 'w', encoding='utf-8') as f:
            json.dump(self.conversion_report, f, indent=2)

        # Write MITRE coverage
        coverage_path = self.output_dir / "mitre-coverage.json"
        with open(coverage_path, 'w', encoding='utf-8') as f:
            json.dump(self.conversion_report['mitre_coverage'], f, indent=2)

        # Summary
        success_count = len(self.conversion_report['success'])
        failure_count = len(self.conversion_report['failures'])
        coverage_count = len(self.conversion_report['mitre_coverage'])

        print(f"\nConversion complete:")
        print(f"  ✅ Success: {success_count}")
        print(f"  ❌ Failures: {failure_count}")
        print(f"  📊 MITRE Techniques: {coverage_count}")
        print(f"  📄 ARM Template: {self.output_dir}/analytics-rules-template.json")

        return success_count > 0


def main():
    parser = argparse.ArgumentParser(description='Convert Sigma rules to Microsoft Sentinel format')
    parser.add_argument('--input-dir', required=True, help='Directory containing Sigma YAML files')
    parser.add_argument('--output-dir', required=True, help='Output directory for Sentinel rules')
    parser.add_argument('--preserve-structure', action='store_true', default=True,
                        help='Preserve directory structure in output')

    args = parser.parse_args()

    converter = SigmaToSentinelConverter(
        input_dir=args.input_dir,
        output_dir=args.output_dir,
        preserve_structure=args.preserve_structure
    )

    success = converter.convert_directory()
    exit(0 if success else 1)


if __name__ == "__main__":
    main()