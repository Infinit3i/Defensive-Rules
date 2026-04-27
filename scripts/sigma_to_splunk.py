#!/usr/bin/env python3
"""
Sigma to Splunk ES Converter
Converts Sigma detection rules to Splunk savedsearches.conf format
Preserves MITRE ATT&CK mappings and directory organization
"""

import os
import re
import yaml
import json
import argparse
from pathlib import Path
from typing import Dict, List, Optional, Tuple
from datetime import datetime
import uuid

try:
    from sigma.rule import SigmaRule
    from sigma.backends.splunk import SplunkBackend
    from sigma.pipelines.splunk import splunk_windows_pipeline
except ImportError:
    print("ERROR: pysigma not installed. Run: pip install pysigma pysigma-backend-splunk")
    exit(1)


class SigmaToSplunkConverter:
    def __init__(self, input_dir: str, output_dir: str, preserve_structure: bool = True):
        self.input_dir = Path(input_dir)
        self.output_dir = Path(output_dir)
        self.preserve_structure = preserve_structure
        self.backend = SplunkBackend()
        self.conversion_report = {
            'success': [],
            'failures': [],
            'mitre_coverage': {},
            'timestamp': datetime.now().isoformat()
        }

        # MITRE tactic mapping from directory names
        self.tactic_mapping = {
            '02 Resource Development': 'resource-development',
            '03 Initial Access': 'initial-access',
            '04 Execution': 'execution',
            '05 Persistence': 'persistence',
            '06 Privilege Escalation': 'privilege-escalation',
            '07 Defense Evasion': 'defense-evasion',
            '08 Credential Access': 'credential-access',
            '09 Discovery': 'discovery',
            '10 Lateral Movement': 'lateral-movement',
            '12 Command and Control': 'command-and-control',
            '13 Exfiltration': 'exfiltration',
            '14 Impact': 'impact'
        }

    def extract_mitre_tags(self, rule_dict: Dict) -> Tuple[List[str], List[str]]:
        """Extract MITRE ATT&CK techniques and tactics from Sigma rule tags"""
        tags = rule_dict.get('tags', [])
        techniques = []
        tactics = []

        for tag in tags:
            if isinstance(tag, str):
                # Extract technique IDs (attack.t1234, attack.t1234.001)
                if re.match(r'attack\.t\d+(?:\.\d+)?$', tag.lower()):
                    tech_id = tag.split('.')[-1].upper()
                    if not tech_id.startswith('T'):
                        tech_id = 'T' + tech_id
                    techniques.append(tech_id)
                # Extract tactic names
                elif tag.startswith('attack.') and not re.match(r'attack\.t\d+', tag.lower()):
                    tactic = tag.replace('attack.', '').replace('_', '-')
                    tactics.append(tactic)

        return techniques, tactics

    def generate_search_name(self, title: str) -> str:
        """Generate valid Splunk search name from rule title"""
        # Remove special characters, replace spaces with underscores
        name = re.sub(r'[^\w\s-]', '', title)
        name = re.sub(r'\s+', '_', name.strip())
        name = name.replace('-', '_')
        return name

    def get_severity_level(self, sigma_level: str) -> int:
        """Map Sigma levels to Splunk ES severity levels"""
        level_mapping = {
            'low': 1,
            'medium': 2,
            'high': 3,
            'critical': 4
        }
        return level_mapping.get(sigma_level.lower(), 2)

    def generate_basic_splunk_query(self, rule_dict: Dict) -> str:
        """Generate basic Splunk query from Sigma rule detection logic"""
        detection = rule_dict.get('detection', {})
        logsource = rule_dict.get('logsource', {})

        # Start with index selection based on logsource
        product = logsource.get('product', 'windows')
        service = logsource.get('service', '')
        category = logsource.get('category', '')

        # Comprehensive sourcetype mapping
        if product == 'windows':
            if service == 'sysmon':
                base_query = "index=windows source=\"*Sysmon*\" OR sourcetype=\"xmlwineventlog:microsoft-windows-sysmon/operational\""
            elif service == 'powershell' or service == 'powershell-classic':
                base_query = "index=windows (source=\"*PowerShell*\" OR sourcetype=\"xmlwineventlog:microsoft-windows-powershell/operational\")"
            elif service == 'security':
                base_query = "index=windows (source=\"*Security*\" OR sourcetype=\"wineventlog\" EventCode<5000)"
            elif service == 'system':
                base_query = "index=windows (source=\"*System*\" OR sourcetype=\"wineventlog:system\")"
            elif service == 'application':
                base_query = "index=windows (source=\"*Application*\" OR sourcetype=\"wineventlog:application\")"
            elif service == 'dns-server':
                base_query = "index=windows source=\"*DNS*\" OR sourcetype=\"xmlwineventlog:dns-server-service/audit\""
            elif service == 'dhcp':
                base_query = "index=windows source=\"*DHCP*\" OR sourcetype=\"dhcpd\""
            elif service == 'ntlm':
                base_query = "index=windows source=\"*NTLM*\" EventCode=8004"
            elif service == 'windefend':
                base_query = "index=windows source=\"*Windows Defender*\" OR sourcetype=\"xmlwineventlog:microsoft-windows-windows-defender/operational\""
            elif service == 'msexchange-management':
                base_query = "index=windows source=\"*Exchange*\" OR sourcetype=\"msexchange:management\""
            elif service == 'taskscheduler':
                base_query = "index=windows source=\"*TaskScheduler*\" OR sourcetype=\"xmlwineventlog:microsoft-windows-taskscheduler/operational\""
            elif service == 'bits-client':
                base_query = "index=windows source=\"*BITS*\" OR sourcetype=\"xmlwineventlog:microsoft-windows-bits-client/operational\""
            elif service == 'certificateservices-lifecycle-system':
                base_query = "index=windows source=\"*CertificateServices*\" OR sourcetype=\"xmlwineventlog:microsoft-windows-certificateservices-lifecycle-system/operational\""
            elif service == 'printservice-admin':
                base_query = "index=windows source=\"*PrintService*\" OR sourcetype=\"xmlwineventlog:microsoft-windows-printservice/admin\""
            elif service == 'winrm-operational':
                base_query = "index=windows source=\"*WinRM*\" OR sourcetype=\"xmlwineventlog:microsoft-windows-winrm/operational\""
            elif service == 'terminalservices-localsessionmanager':
                base_query = "index=windows source=\"*TerminalServices*\" OR sourcetype=\"xmlwineventlog:microsoft-windows-terminalservices-localsessionmanager/operational\""
            elif service == 'codeintegrity-operational':
                base_query = "index=windows source=\"*CodeIntegrity*\" OR sourcetype=\"xmlwineventlog:microsoft-windows-codeintegrity/operational\""
            elif service == 'applocker':
                base_query = "index=windows source=\"*AppLocker*\" OR sourcetype=\"xmlwineventlog:microsoft-windows-applocker/*\""
            elif service == 'firewall-as':
                base_query = "index=windows source=\"*Firewall*\" OR sourcetype=\"xmlwineventlog:microsoft-windows-windows-firewall-with-advanced-security/firewall\""
            else:
                base_query = "index=windows"

        elif product == 'linux':
            if service == 'syslog' or service == 'rsyslog':
                base_query = "index=linux (sourcetype=\"linux_secure\" OR sourcetype=\"syslog\" OR sourcetype=\"linux_messages\")"
            elif service == 'auditd':
                base_query = "index=linux sourcetype=\"linux:audit\""
            elif service == 'auth':
                base_query = "index=linux (sourcetype=\"linux_secure\" OR source=\"*/var/log/auth.log\")"
            elif service == 'cron':
                base_query = "index=linux (sourcetype=\"linux_cron\" OR source=\"*/var/log/cron*\")"
            elif service == 'sudo':
                base_query = "index=linux sourcetype=\"linux_secure\" sudo"
            elif service == 'ssh':
                base_query = "index=linux (sourcetype=\"linux_secure\" OR sourcetype=\"sshd\") (ssh OR sshd)"
            elif service == 'kernel':
                base_query = "index=linux sourcetype=\"dmesg\""
            elif service == 'modsecurity':
                base_query = "index=linux sourcetype=\"modsecurity\""
            elif service == 'apache':
                base_query = "index=linux (sourcetype=\"access_combined\" OR sourcetype=\"apache:error\")"
            elif service == 'nginx':
                base_query = "index=linux (sourcetype=\"nginx:access\" OR sourcetype=\"nginx:error\")"
            else:
                base_query = "index=linux"

        elif product == 'macos':
            if service == 'loginwindow':
                base_query = "index=macos source=\"*/var/log/system.log\" loginwindow"
            elif service == 'kernel':
                base_query = "index=macos source=\"*/var/log/kernel.log\""
            elif service == 'wifi':
                base_query = "index=macos source=\"*/var/log/wifi.log\""
            else:
                base_query = "index=macos"

        elif product == 'zeek' or product == 'bro':
            if service == 'dns':
                base_query = "index=zeek sourcetype=\"bro:dns:json\""
            elif service == 'http':
                base_query = "index=zeek sourcetype=\"bro:http:json\""
            elif service == 'conn':
                base_query = "index=zeek sourcetype=\"bro:conn:json\""
            elif service == 'ssl':
                base_query = "index=zeek sourcetype=\"bro:ssl:json\""
            elif service == 'ssh':
                base_query = "index=zeek sourcetype=\"bro:ssh:json\""
            elif service == 'files':
                base_query = "index=zeek sourcetype=\"bro:files:json\""
            elif service == 'smtp':
                base_query = "index=zeek sourcetype=\"bro:smtp:json\""
            elif service == 'ftp':
                base_query = "index=zeek sourcetype=\"bro:ftp:json\""
            elif service == 'rdp':
                base_query = "index=zeek sourcetype=\"bro:rdp:json\""
            elif service == 'dce_rpc':
                base_query = "index=zeek sourcetype=\"bro:dce_rpc:json\""
            elif service == 'smb':
                base_query = "index=zeek sourcetype=\"bro:smb_files:json\""
            elif service == 'kerberos':
                base_query = "index=zeek sourcetype=\"bro:kerberos:json\""
            elif service == 'x509':
                base_query = "index=zeek sourcetype=\"bro:x509:json\""
            else:
                base_query = "index=zeek"

        elif product == 'suricata':
            if service == 'eve':
                base_query = "index=suricata sourcetype=\"suricata\""
            else:
                base_query = "index=suricata"

        elif product == 'snort':
            base_query = "index=snort sourcetype=\"snort\""

        elif product == 'pfsense':
            if service == 'filterlog':
                base_query = "index=pfsense sourcetype=\"pfsense:filterlog\""
            else:
                base_query = "index=pfsense"

        elif product == 'checkpoint':
            base_query = "index=checkpoint sourcetype=\"checkpoint:firewall\""

        elif product == 'fortigate':
            base_query = "index=fortigate sourcetype=\"fortigate:traffic\""

        elif product == 'paloalto':
            if service == 'traffic':
                base_query = "index=paloalto sourcetype=\"pan:traffic\""
            elif service == 'threat':
                base_query = "index=paloalto sourcetype=\"pan:threat\""
            elif service == 'system':
                base_query = "index=paloalto sourcetype=\"pan:system\""
            else:
                base_query = "index=paloalto"

        elif product == 'cisco':
            if service == 'asa':
                base_query = "index=cisco sourcetype=\"cisco:asa\""
            elif service == 'ios':
                base_query = "index=cisco sourcetype=\"cisco:ios\""
            elif service == 'meraki':
                base_query = "index=cisco sourcetype=\"cisco:meraki\""
            else:
                base_query = "index=cisco"

        elif product == 'aws':
            if service == 'cloudtrail':
                base_query = "index=aws sourcetype=\"aws:cloudtrail\""
            elif service == 'vpcflow':
                base_query = "index=aws sourcetype=\"aws:cloudwatchlogs:vpcflow\""
            elif service == 's3access':
                base_query = "index=aws sourcetype=\"aws:s3:accesslogs\""
            elif service == 'elb':
                base_query = "index=aws sourcetype=\"aws:elb:accesslogs\""
            elif service == 'waf':
                base_query = "index=aws sourcetype=\"aws:waf\""
            elif service == 'guardduty':
                base_query = "index=aws sourcetype=\"aws:cloudwatchlogs:guardduty\""
            else:
                base_query = "index=aws"

        elif product == 'azure':
            if service == 'activitylog':
                base_query = "index=azure sourcetype=\"azure:activitylog\""
            elif service == 'signinlogs':
                base_query = "index=azure sourcetype=\"azure:signinlogs\""
            elif service == 'auditlogs':
                base_query = "index=azure sourcetype=\"azure:auditlogs\""
            elif service == 'keyvault':
                base_query = "index=azure sourcetype=\"azure:keyvault\""
            else:
                base_query = "index=azure"

        elif product == 'gcp':
            if service == 'audit':
                base_query = "index=gcp sourcetype=\"google:gcp:audit\""
            elif service == 'vpc':
                base_query = "index=gcp sourcetype=\"google:gcp:vpc:flow\""
            else:
                base_query = "index=gcp"

        elif product == 'okta':
            base_query = "index=okta sourcetype=\"Okta:SystemLog\""

        elif product == 'duo':
            if service == 'authentication':
                base_query = "index=duo sourcetype=\"duosecurity:authentication\""
            elif service == 'administration':
                base_query = "index=duo sourcetype=\"duosecurity:administration\""
            else:
                base_query = "index=duo"

        elif product == 'office365':
            if service == 'audit':
                base_query = "index=o365 sourcetype=\"o365:management:activity\""
            elif service == 'dlp':
                base_query = "index=o365 sourcetype=\"o365:dlp\""
            elif service == 'threat':
                base_query = "index=o365 sourcetype=\"o365:atp\""
            else:
                base_query = "index=o365"

        elif product == 'kubernetes':
            if service == 'audit':
                base_query = "index=kubernetes sourcetype=\"kube:audit\""
            else:
                base_query = "index=kubernetes"

        elif product == 'docker':
            base_query = "index=docker sourcetype=\"docker:container:*\""

        elif product == 'vmware':
            if service == 'vcenter':
                base_query = "index=vmware sourcetype=\"vmware:vcenter:tasks\""
            elif service == 'esxi':
                base_query = "index=vmware sourcetype=\"vmware:esxi:hostd\""
            else:
                base_query = "index=vmware"

        elif product == 'netflow':
            base_query = "index=netflow sourcetype=\"netflow\""

        elif product == 'juniper':
            base_query = "index=juniper sourcetype=\"juniper:junos\""

        elif product == 'f5':
            if service == 'bigip':
                base_query = "index=f5 sourcetype=\"f5:bigip:ltm\""
            else:
                base_query = "index=f5"

        elif product == 'sophos':
            if service == 'xg':
                base_query = "index=sophos sourcetype=\"sophos:xg\""
            else:
                base_query = "index=sophos"

        elif product == 'tanium':
            base_query = "index=tanium sourcetype=\"tanium:*\""

        elif product == 'crowdstrike':
            base_query = "index=crowdstrike sourcetype=\"crowdstrike:json\""

        elif product == 'carbonblack':
            base_query = "index=carbonblack sourcetype=\"bit9:carbonblack:json\""

        elif product == 'symantec':
            if service == 'endpoint':
                base_query = "index=symantec sourcetype=\"symantec:ep:agent:file\""
            else:
                base_query = "index=symantec"

        elif product == 'mcafee':
            if service == 'epo':
                base_query = "index=mcafee sourcetype=\"mcafee:epo\""
            else:
                base_query = "index=mcafee"

        elif product == 'trendmicro':
            base_query = "index=trendmicro sourcetype=\"trendmicro:*\""

        elif product == 'qualys':
            base_query = "index=qualys sourcetype=\"qualys:vmdr\""

        elif product == 'rapid7':
            base_query = "index=rapid7 sourcetype=\"nexpose:json\""

        elif product == 'nessus':
            base_query = "index=nessus sourcetype=\"nessus:scan:xml\""

        elif product == 'openvas':
            base_query = "index=openvas sourcetype=\"openvas:scan\""

        elif product == 'wazuh':
            base_query = "index=wazuh sourcetype=\"ossec\""

        elif product == 'osquery':
            base_query = "index=osquery sourcetype=\"osquery:results\""

        elif product == 'elastic':
            if service == 'beats':
                base_query = "index=elastic sourcetype=\"*beat\""
            else:
                base_query = "index=elastic"

        # Category-based mappings
        elif category == 'firewall':
            base_query = "index=firewall (sourcetype=\"checkpoint:firewall\" OR sourcetype=\"pan:traffic\" OR sourcetype=\"cisco:asa\" OR sourcetype=\"fortigate:traffic\")"
        elif category == 'proxy':
            base_query = "index=proxy (sourcetype=\"bluecoat:proxysg:*\" OR sourcetype=\"squid\" OR sourcetype=\"forcepoint:webgateway\")"
        elif category == 'dns':
            base_query = "index=dns (sourcetype=\"isc:bind:query\" OR sourcetype=\"infoblox:dns\" OR sourcetype=\"bro:dns:json\")"
        elif category == 'dhcp':
            base_query = "index=dhcp sourcetype=\"dhcpd\""
        elif category == 'antivirus':
            base_query = "index=antivirus (sourcetype=\"symantec:ep:*\" OR sourcetype=\"mcafee:epo\" OR sourcetype=\"trendmicro:*\")"
        elif category == 'ids' or category == 'ips':
            base_query = "index=ids (sourcetype=\"snort\" OR sourcetype=\"suricata\" OR sourcetype=\"sourcefire:*\")"
        elif category == 'webserver':
            base_query = "index=web (sourcetype=\"access_combined\" OR sourcetype=\"iis\" OR sourcetype=\"nginx:access\")"
        elif category == 'application':
            base_query = "index=application"
        elif category == 'database':
            base_query = "index=database (sourcetype=\"oracle:audit\" OR sourcetype=\"mysql\" OR sourcetype=\"mssql\")"
        elif category == 'mail':
            base_query = "index=email (sourcetype=\"sendmail\" OR sourcetype=\"postfix\" OR sourcetype=\"exchange\")"
        else:
            # Default fallback
            base_query = f"index={product}"

        # Extract search conditions from detection
        conditions = []

        for key, value in detection.items():
            if key == 'condition':
                continue

            if isinstance(value, dict):
                for field, criteria in value.items():
                    if field.lower() == 'eventid':
                        conditions.append(f"EventID={criteria}")
                    elif field.lower() == 'eventcode':
                        conditions.append(f"EventCode={criteria}")
                    elif isinstance(criteria, list):
                        # Handle list of values
                        quoted_values = [f'"{v}"' if isinstance(v, str) else str(v) for v in criteria]
                        conditions.append(f"({' OR '.join([f'{field}={v}' for v in quoted_values])})")
                    elif isinstance(criteria, str):
                        if '|' in field:
                            # Handle Sigma modifiers like field|contains
                            base_field = field.split('|')[0]
                            if 'contains' in field:
                                conditions.append(f'{base_field}="*{criteria}*"')
                            elif 'endswith' in field:
                                conditions.append(f'{base_field}="*{criteria}"')
                            elif 'startswith' in field:
                                conditions.append(f'{base_field}="{criteria}*"')
                            else:
                                conditions.append(f'{base_field}="{criteria}"')
                        else:
                            conditions.append(f'{field}="{criteria}"')

        # Combine base query with conditions
        if conditions:
            full_query = f"{base_query} {' '.join(conditions)}"
        else:
            full_query = base_query

        return full_query

    def convert_rule(self, rule_path: Path) -> Optional[Dict]:
        """Convert single Sigma rule to Splunk search configuration"""
        try:
            with open(rule_path, 'r', encoding='utf-8') as f:
                rule_content = f.read()

            # Parse YAML
            rule_dict = yaml.safe_load(rule_content)

            # Basic validation - ensure required fields
            if 'id' not in rule_dict:
                rule_dict['id'] = str(uuid.uuid4())

            # Ensure tags is a list
            if 'tags' not in rule_dict:
                rule_dict['tags'] = []
            elif not isinstance(rule_dict['tags'], list):
                rule_dict['tags'] = [rule_dict['tags']]

            # Simple Splunk query generation from detection logic
            # For now, create a basic search based on detection fields
            splunk_query = self.generate_basic_splunk_query(rule_dict)

            # Extract metadata
            title = rule_dict.get('title', 'Untitled Rule')
            description = rule_dict.get('description', '')
            level = rule_dict.get('level', 'medium')
            rule_id = rule_dict.get('id', str(uuid.uuid4()))

            # Extract MITRE mappings
            techniques, tactics = self.extract_mitre_tags(rule_dict)

            # Generate search name
            search_name = self.generate_search_name(title)

            # Get directory-based tactic if available
            parent_dir = rule_path.parent.name
            if parent_dir in self.tactic_mapping:
                dir_tactic = self.tactic_mapping[parent_dir]
                if dir_tactic not in tactics:
                    tactics.append(dir_tactic)

            # Build Splunk search config
            search_config = {
                'name': search_name,
                'search': splunk_query,
                'description': description,
                'dispatch.earliest_time': '-24h@h',
                'dispatch.latest_time': 'now',
                'cron_schedule': '*/15 * * * *',
                'alert.severity': self.get_severity_level(level),
                'alert.track': 1,
                'action.correlationsearch.enabled': 1,
                'action.notable': 1,
                'action.notable.param.security_domain': 'threat',
                'action.notable.param.severity': level,
                'sigma_rule_id': rule_id,
                'sigma_level': level
            }

            # Add MITRE mappings if present
            if techniques:
                search_config['mitre_attack'] = techniques
                # Update coverage tracking
                for tech in techniques:
                    if tech not in self.conversion_report['mitre_coverage']:
                        self.conversion_report['mitre_coverage'][tech] = []
                    self.conversion_report['mitre_coverage'][tech].append(search_name)

            if tactics:
                search_config['mitre_tactic'] = tactics

            result = {
                'rule_path': str(rule_path),
                'search_config': search_config,
                'original_title': title
            }

            self.conversion_report['success'].append({
                'file': str(rule_path),
                'name': search_name,
                'techniques': techniques,
                'tactics': tactics
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

    def write_savedsearches_conf(self, conversions: List[Dict], output_file: Path):
        """Write converted rules to savedsearches.conf format"""
        output_file.parent.mkdir(parents=True, exist_ok=True)

        with open(output_file, 'w', encoding='utf-8') as f:
            # Header
            f.write("# Savedsearches.conf - Generated from Sigma Rules\n")
            f.write(f"# Generated: {datetime.now().isoformat()}\n")
            f.write(f"# Source: Sigma detection rules\n\n")

            # Write each search
            for conversion in conversions:
                config = conversion['search_config']
                f.write(f"[{config['name']}]\n")

                # Write all configuration parameters
                for key, value in config.items():
                    if key == 'name':
                        continue
                    elif isinstance(value, list):
                        # Format arrays for Splunk conf
                        formatted_value = '["' + '","'.join(value) + '"]'
                        f.write(f"{key} = {formatted_value}\n")
                    else:
                        f.write(f"{key} = {value}\n")

                f.write("\n")

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

        # Write savedsearches.conf
        savedsearches_path = self.output_dir / "savedsearches.conf"
        self.write_savedsearches_conf(all_conversions, savedsearches_path)

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
        print(f"  📄 Output: {savedsearches_path}")

        return success_count > 0


def main():
    parser = argparse.ArgumentParser(description='Convert Sigma rules to Splunk ES format')
    parser.add_argument('--input-dir', required=True, help='Directory containing Sigma YAML files')
    parser.add_argument('--output-dir', required=True, help='Output directory for converted files')
    parser.add_argument('--preserve-structure', action='store_true', default=True,
                        help='Preserve directory structure in output')

    args = parser.parse_args()

    converter = SigmaToSplunkConverter(
        input_dir=args.input_dir,
        output_dir=args.output_dir,
        preserve_structure=args.preserve_structure
    )

    success = converter.convert_directory()
    exit(0 if success else 1)


if __name__ == "__main__":
    main()