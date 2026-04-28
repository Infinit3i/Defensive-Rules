#!/usr/bin/env python3
"""
Comprehensive Testing Framework for Defensive Rules
Tests Sigma conversions, SOAR integrations, and rule quality
"""

import os
import json
import yaml
import subprocess
import tempfile
import unittest
from pathlib import Path
from typing import Dict, List, Tuple
import logging
from datetime import datetime

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class SigmaRuleValidator:
    """Validates Sigma rules for quality and correctness"""

    def __init__(self, sigma_dir: str):
        self.sigma_dir = Path(sigma_dir)

    def validate_yaml_syntax(self) -> List[Dict]:
        """Validate YAML syntax of all Sigma rules"""
        errors = []

        for rule_file in self.sigma_dir.rglob("*.yml"):
            try:
                with open(rule_file, 'r') as f:
                    yaml.safe_load(f.read())
            except yaml.YAMLError as e:
                errors.append({
                    'file': str(rule_file),
                    'error': str(e),
                    'type': 'yaml_syntax'
                })

        return errors

    def validate_yamllint_formatting(self) -> List[Dict]:
        """Validate YAML formatting using yamllint"""
        errors = []

        try:
            # Run yamllint on the entire Sigma directory
            result = subprocess.run(['yamllint', str(self.sigma_dir)],
                                  capture_output=True, text=True, timeout=120)

            if result.returncode != 0:
                # Parse yamllint output
                for line in result.stdout.split('\n'):
                    if line.strip() and not line.startswith(' '):
                        # Extract file path and error
                        parts = line.split(':', 3)
                        if len(parts) >= 4:
                            errors.append({
                                'file': parts[0],
                                'line': parts[1] if parts[1].isdigit() else 0,
                                'column': parts[2] if parts[2].isdigit() else 0,
                                'error': parts[3].strip(),
                                'type': 'yamllint'
                            })
        except FileNotFoundError:
            errors.append({
                'file': 'system',
                'error': 'yamllint not installed - run: pip install yamllint',
                'type': 'yamllint_missing'
            })
        except subprocess.TimeoutExpired:
            errors.append({
                'file': 'system',
                'error': 'yamllint validation timeout',
                'type': 'yamllint_timeout'
            })
        except Exception as e:
            errors.append({
                'file': 'system',
                'error': f'yamllint error: {str(e)}',
                'type': 'yamllint_error'
            })

        return errors

    def validate_required_fields(self) -> List[Dict]:
        """Validate required Sigma fields"""
        errors = []
        required_fields = ['title', 'id', 'status', 'description', 'logsource', 'detection', 'level']

        for rule_file in self.sigma_dir.rglob("*.yml"):
            try:
                with open(rule_file, 'r') as f:
                    rule_data = yaml.safe_load(f.read())

                for field in required_fields:
                    if field not in rule_data:
                        errors.append({
                            'file': str(rule_file),
                            'error': f'Missing required field: {field}',
                            'type': 'missing_field'
                        })

            except Exception as e:
                errors.append({
                    'file': str(rule_file),
                    'error': str(e),
                    'type': 'validation_error'
                })

        return errors

    def validate_mitre_tags(self) -> List[Dict]:
        """Validate MITRE ATT&CK tag format"""
        errors = []

        for rule_file in self.sigma_dir.rglob("*.yml"):
            try:
                with open(rule_file, 'r') as f:
                    rule_data = yaml.safe_load(f.read())

                tags = rule_data.get('tags', [])
                for tag in tags:
                    if isinstance(tag, str) and tag.startswith('attack.t'):
                        # Validate technique ID format
                        tech_id = tag.replace('attack.', '')
                        if not tech_id.startswith('t') or not any(char.isdigit() for char in tech_id):
                            errors.append({
                                'file': str(rule_file),
                                'error': f'Invalid MITRE tag format: {tag}',
                                'type': 'mitre_tag_format'
                            })

            except Exception as e:
                continue

        return errors

    def check_duplicate_ids(self) -> List[Dict]:
        """Check for duplicate rule IDs"""
        id_map = {}
        duplicates = []

        for rule_file in self.sigma_dir.rglob("*.yml"):
            try:
                with open(rule_file, 'r') as f:
                    rule_data = yaml.safe_load(f.read())

                rule_id = rule_data.get('id')
                if rule_id:
                    if rule_id in id_map:
                        duplicates.append({
                            'files': [id_map[rule_id], str(rule_file)],
                            'id': rule_id,
                            'type': 'duplicate_id'
                        })
                    else:
                        id_map[rule_id] = str(rule_file)

            except Exception as e:
                continue

        return duplicates

class ConversionTester:
    """Tests Sigma to SIEM conversions"""

    def __init__(self, project_dir: str):
        self.project_dir = Path(project_dir)

    def test_splunk_conversion(self) -> Dict:
        """Test Sigma to Splunk conversion"""
        test_dir = self.project_dir / "build" / "test-splunk"
        test_dir.mkdir(parents=True, exist_ok=True)

        # Test with sample rules
        sample_rules = list(self.project_dir.glob("Sigma/04 Execution/*.yml"))[:5]

        for rule_file in sample_rules:
            test_file = test_dir / rule_file.name
            test_file.write_text(rule_file.read_text())

        # Run conversion
        cmd = [
            "python3", str(self.project_dir / "scripts" / "sigma_to_splunk.py"),
            "--input-dir", str(test_dir),
            "--output-dir", str(test_dir / "output")
        ]

        try:
            result = subprocess.run(cmd, capture_output=True, text=True, timeout=60)

            # Check outputs
            output_dir = test_dir / "output"
            results = {
                'success': result.returncode == 0,
                'stdout': result.stdout,
                'stderr': result.stderr,
                'files_created': []
            }

            if output_dir.exists():
                results['files_created'] = [str(f) for f in output_dir.iterdir()]

            return results

        except subprocess.TimeoutExpired:
            return {'success': False, 'error': 'Conversion timeout'}
        except Exception as e:
            return {'success': False, 'error': str(e)}

    def test_sentinel_conversion(self) -> Dict:
        """Test Sigma to Sentinel conversion"""
        test_dir = self.project_dir / "build" / "test-sentinel"
        test_dir.mkdir(parents=True, exist_ok=True)

        # Test with sample rules
        sample_rules = list(self.project_dir.glob("Sigma/09 Discovery/*.yml"))[:3]

        for rule_file in sample_rules:
            test_file = test_dir / rule_file.name
            test_file.write_text(rule_file.read_text())

        # Run conversion
        cmd = [
            "python3", str(self.project_dir / "scripts" / "sigma_to_sentinel.py"),
            "--input-dir", str(test_dir),
            "--output-dir", str(test_dir / "output")
        ]

        try:
            result = subprocess.run(cmd, capture_output=True, text=True, timeout=60)

            output_dir = test_dir / "output"
            results = {
                'success': result.returncode == 0,
                'stdout': result.stdout,
                'stderr': result.stderr,
                'arm_template_valid': False
            }

            # Validate ARM template
            if output_dir.exists():
                arm_file = output_dir / "analytics-rules-template.json"
                if arm_file.exists():
                    try:
                        with open(arm_file) as f:
                            json.load(f)  # Validate JSON
                        results['arm_template_valid'] = True
                    except json.JSONDecodeError:
                        results['arm_template_valid'] = False

            return results

        except Exception as e:
            return {'success': False, 'error': str(e)}

class SOARTester:
    """Tests SOAR integration functionality"""

    def __init__(self, project_dir: str):
        self.project_dir = Path(project_dir)

    def test_soar_framework(self) -> Dict:
        """Test SOAR integration framework"""
        try:
            # Import and test SOAR framework
            import sys
            sys.path.insert(0, str(self.project_dir / "scripts"))

            from soar_integration import SOARManager, Alert

            # Create test alert
            test_alert = Alert(
                id="test-001",
                title="Test Alert",
                severity="low",
                description="Test alert for validation",
                source_system="Test",
                timestamp=datetime.now(),
                entities=[{"type": "host", "value": "test-host"}],
                mitre_techniques=["T1059"],
                raw_data={"test": True}
            )

            # Test manager creation
            manager = SOARManager()

            # Test alert conversion functions
            from soar_integration import create_alert_from_splunk, create_alert_from_sentinel

            splunk_data = {
                "sid": "test-sid",
                "search_name": "Test Search",
                "alert.severity": "medium",
                "description": "Test description",
                "host": "test-host",
                "user": "test-user",
                "mitre_attack": ["T1059"]
            }

            splunk_alert = create_alert_from_splunk(splunk_data)

            return {
                'success': True,
                'manager_created': True,
                'alert_conversion_works': True,
                'connectors_available': list(manager.connectors.keys()) if hasattr(manager, 'connectors') else []
            }

        except Exception as e:
            return {'success': False, 'error': str(e)}

    def test_webhook_config(self) -> Dict:
        """Test webhook configuration validation"""
        config_file = self.project_dir / "templates" / "soar-config" / "soar_config_template.json"

        try:
            with open(config_file) as f:
                config = json.load(f)

            # Validate config structure
            required_sections = ['platforms', 'integrations', 'rules']
            missing_sections = [s for s in required_sections if s not in config]

            return {
                'success': len(missing_sections) == 0,
                'config_valid': True,
                'missing_sections': missing_sections,
                'platforms_defined': list(config.get('platforms', {}).keys())
            }

        except Exception as e:
            return {'success': False, 'error': str(e)}

class QualityMetrics:
    """Calculate quality metrics for rule repository"""

    def __init__(self, project_dir: str):
        self.project_dir = Path(project_dir)

    def calculate_coverage_metrics(self) -> Dict:
        """Calculate MITRE ATT&CK coverage metrics"""
        techniques = set()
        tactics = set()

        for rule_file in self.project_dir.glob("Sigma/**/*.yml"):
            try:
                with open(rule_file, 'r') as f:
                    rule_data = yaml.safe_load(f.read())

                tags = rule_data.get('tags', [])
                for tag in tags:
                    if isinstance(tag, str):
                        if tag.startswith('attack.t') and not tag.startswith('attack.tactic'):
                            techniques.add(tag.replace('attack.', '').upper())
                        elif tag.startswith('attack.') and not tag.startswith('attack.t'):
                            tactics.add(tag.replace('attack.', ''))

            except Exception:
                continue

        return {
            'unique_techniques': len(techniques),
            'unique_tactics': len(tactics),
            'techniques': sorted(list(techniques)),
            'tactics': sorted(list(tactics))
        }

    def calculate_rule_metrics(self) -> Dict:
        """Calculate rule quality metrics"""
        total_rules = 0
        rules_with_mitre = 0
        rules_with_description = 0
        severity_counts = {'low': 0, 'medium': 0, 'high': 0, 'critical': 0}

        for rule_file in self.project_dir.glob("Sigma/**/*.yml"):
            try:
                with open(rule_file, 'r') as f:
                    rule_data = yaml.safe_load(f.read())

                total_rules += 1

                # Check MITRE tags
                tags = rule_data.get('tags', [])
                if any(tag.startswith('attack.t') for tag in tags if isinstance(tag, str)):
                    rules_with_mitre += 1

                # Check description
                if rule_data.get('description'):
                    rules_with_description += 1

                # Count severity levels
                level = rule_data.get('level', 'medium').lower()
                if level in severity_counts:
                    severity_counts[level] += 1

            except Exception:
                continue

        return {
            'total_rules': total_rules,
            'mitre_coverage_percent': (rules_with_mitre / total_rules * 100) if total_rules > 0 else 0,
            'description_coverage_percent': (rules_with_description / total_rules * 100) if total_rules > 0 else 0,
            'severity_distribution': severity_counts
        }

def run_comprehensive_tests(project_dir: str) -> Dict:
    """Run all tests and return comprehensive results"""
    project_path = Path(project_dir)

    print("🧪 Running comprehensive test suite...")

    results = {
        'timestamp': datetime.now().isoformat(),
        'sigma_validation': {},
        'conversion_tests': {},
        'soar_tests': {},
        'quality_metrics': {}
    }

    # Sigma validation
    print("📝 Validating Sigma rules...")
    validator = SigmaRuleValidator(str(project_path / "Sigma"))

    results['sigma_validation'] = {
        'yaml_errors': validator.validate_yaml_syntax(),
        'field_errors': validator.validate_required_fields(),
        'mitre_errors': validator.validate_mitre_tags(),
        'duplicate_ids': validator.check_duplicate_ids()
    }

    # Conversion tests
    print("🔄 Testing conversions...")
    converter_tester = ConversionTester(str(project_path))

    results['conversion_tests'] = {
        'splunk': converter_tester.test_splunk_conversion(),
        'sentinel': converter_tester.test_sentinel_conversion()
    }

    # SOAR tests
    print("🤖 Testing SOAR integration...")
    soar_tester = SOARTester(str(project_path))

    results['soar_tests'] = {
        'framework': soar_tester.test_soar_framework(),
        'webhook_config': soar_tester.test_webhook_config()
    }

    # Quality metrics
    print("📊 Calculating quality metrics...")
    metrics = QualityMetrics(str(project_path))

    results['quality_metrics'] = {
        'coverage': metrics.calculate_coverage_metrics(),
        'rules': metrics.calculate_rule_metrics()
    }

    return results

def generate_test_report(results: Dict, output_file: str = None):
    """Generate human-readable test report"""
    if output_file is None:
        output_file = f"test-report-{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"

    # Save detailed results
    with open(output_file, 'w') as f:
        json.dump(results, f, indent=2)

    # Print summary
    print("\n" + "="*50)
    print("🏁 TEST SUMMARY")
    print("="*50)

    sigma_val = results['sigma_validation']
    print(f"📝 Sigma Validation:")
    print(f"   YAML Errors: {len(sigma_val['yaml_errors'])}")
    print(f"   Field Errors: {len(sigma_val['field_errors'])}")
    print(f"   MITRE Errors: {len(sigma_val['mitre_errors'])}")
    print(f"   Duplicate IDs: {len(sigma_val['duplicate_ids'])}")

    conv_tests = results['conversion_tests']
    print(f"\n🔄 Conversion Tests:")
    print(f"   Splunk: {'✅ PASS' if conv_tests['splunk']['success'] else '❌ FAIL'}")
    print(f"   Sentinel: {'✅ PASS' if conv_tests['sentinel']['success'] else '❌ FAIL'}")

    soar_tests = results['soar_tests']
    print(f"\n🤖 SOAR Tests:")
    print(f"   Framework: {'✅ PASS' if soar_tests['framework']['success'] else '❌ FAIL'}")
    print(f"   Config: {'✅ PASS' if soar_tests['webhook_config']['success'] else '❌ FAIL'}")

    metrics = results['quality_metrics']
    print(f"\n📊 Quality Metrics:")
    print(f"   Total Rules: {metrics['rules']['total_rules']}")
    print(f"   MITRE Coverage: {metrics['rules']['mitre_coverage_percent']:.1f}%")
    print(f"   Techniques: {metrics['coverage']['unique_techniques']}")
    print(f"   Tactics: {metrics['coverage']['unique_tactics']}")

    print(f"\n📄 Full report: {output_file}")

if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(description='Run defensive rules test suite')
    parser.add_argument('--project-dir', default='.', help='Project directory path')
    parser.add_argument('--output', help='Output report file')

    args = parser.parse_args()

    results = run_comprehensive_tests(args.project_dir)
    generate_test_report(results, args.output)