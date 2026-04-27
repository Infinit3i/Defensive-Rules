#!/usr/bin/env python3
"""
Workflow Test Runner - Simulates GitHub Actions testing locally
"""

import subprocess
import sys
import os
import json
from pathlib import Path

def test_yaml_validation():
    """Test YAML validation workflow step"""
    print("🔍 Testing YAML validation...")

    try:
        result = subprocess.run(['yamllint', 'Sigma/', '-d',
                               '{extends: default, rules: {line-length: {max: 200}}}'],
                               capture_output=True, text=True, cwd='.')

        if result.returncode == 0:
            print("✅ YAML validation passed")
            return True
        else:
            print(f"❌ YAML validation failed:\n{result.stdout}\n{result.stderr}")
            return False
    except FileNotFoundError:
        print("⚠️  yamllint not found, skipping validation")
        return True

def test_sigma_conversion():
    """Test Sigma conversion workflow steps"""
    print("🔄 Testing Sigma conversions...")

    platforms = ['splunk', 'sentinel']
    results = {}

    for platform in platforms:
        script_path = f"scripts/sigma_to_{platform}.py"
        if os.path.exists(script_path):
            try:
                # Test with small subset
                cmd = [sys.executable, script_path,
                      '--input-dir', 'Sigma/03 Initial Access',
                      '--output-dir', f'test-output-{platform}',
                      '--validate-only']

                result = subprocess.run(cmd, capture_output=True, text=True, timeout=60)
                results[platform] = result.returncode == 0

                if results[platform]:
                    print(f"✅ {platform.title()} conversion test passed")
                else:
                    print(f"❌ {platform.title()} conversion test failed")

            except subprocess.TimeoutExpired:
                print(f"❌ {platform.title()} conversion test timed out")
                results[platform] = False
        else:
            print(f"⚠️  {script_path} not found")
            results[platform] = False

    return all(results.values())

def test_yara_validation():
    """Test YARA validation workflow step"""
    print("🛡️  Testing YARA validation...")

    yara_files = list(Path('Yara').glob('*.yar'))
    if not yara_files:
        print("⚠️  No YARA files found")
        return True

    try:
        # Test if yara command exists
        subprocess.run(['yara', '--help'], capture_output=True, check=True)

        for yara_file in yara_files:
            result = subprocess.run(['yara', str(yara_file), '/dev/null'],
                                   capture_output=True, text=True)
            if result.returncode != 0:
                print(f"❌ YARA validation failed for {yara_file}")
                return False

        print(f"✅ YARA validation passed for {len(yara_files)} files")
        return True

    except (subprocess.CalledProcessError, FileNotFoundError):
        print("⚠️  YARA not found, skipping validation")
        return True

def test_mitre_coverage():
    """Test MITRE coverage analysis"""
    print("📊 Testing MITRE coverage analysis...")

    try:
        import yaml

        techniques = set()
        tactics = set()

        for sigma_file in Path('Sigma').rglob('*.yml'):
            try:
                with open(sigma_file) as f:
                    data = yaml.safe_load(f)

                tags = data.get('tags', [])
                for tag in tags:
                    if isinstance(tag, str):
                        if tag.startswith('attack.t') and not tag.startswith('attack.tactic'):
                            techniques.add(tag.replace('attack.', '').upper())
                        elif tag.startswith('attack.') and not tag.startswith('attack.t'):
                            tactics.add(tag.replace('attack.', ''))
            except Exception:
                continue

        coverage_data = {
            'techniques': sorted(list(techniques)),
            'tactics': sorted(list(tactics)),
            'technique_count': len(techniques),
            'tactic_count': len(tactics)
        }

        with open('workflow-mitre-coverage.json', 'w') as f:
            json.dump(coverage_data, f, indent=2)

        print(f"✅ MITRE coverage: {len(techniques)} techniques, {len(tactics)} tactics")
        return True

    except Exception as e:
        print(f"❌ MITRE coverage test failed: {e}")
        return False

def test_package_build():
    """Test package building workflow"""
    print("📦 Testing package build...")

    try:
        # Test make commands if Makefile exists
        if os.path.exists('Makefile'):
            commands = ['make clean', 'make convert']

            for cmd in commands:
                result = subprocess.run(cmd.split(), capture_output=True, text=True, timeout=120)
                if result.returncode != 0:
                    print(f"❌ Command '{cmd}' failed")
                    return False

            print("✅ Package build test passed")
            return True
        else:
            print("⚠️  Makefile not found, skipping package build test")
            return True

    except subprocess.TimeoutExpired:
        print("❌ Package build test timed out")
        return False
    except Exception as e:
        print(f"❌ Package build test failed: {e}")
        return False

def main():
    """Run all workflow tests"""
    print("🚀 Running GitHub Actions Workflow Tests")
    print("="*50)

    tests = [
        ("YAML Validation", test_yaml_validation),
        ("Sigma Conversion", test_sigma_conversion),
        ("YARA Validation", test_yara_validation),
        ("MITRE Coverage", test_mitre_coverage),
        ("Package Build", test_package_build)
    ]

    results = {}

    for test_name, test_func in tests:
        print(f"\n--- {test_name} ---")
        results[test_name] = test_func()

    print("\n" + "="*50)
    print("📋 WORKFLOW TEST SUMMARY")
    print("="*50)

    passed = sum(results.values())
    total = len(results)

    for test_name, result in results.items():
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"   {test_name}: {status}")

    print(f"\nOverall: {passed}/{total} tests passed")

    if passed == total:
        print("🎉 All workflow tests passed! Ready for CI/CD")
        return 0
    else:
        print("⚠️  Some workflow tests failed - check configuration")
        return 1

if __name__ == "__main__":
    sys.exit(main())