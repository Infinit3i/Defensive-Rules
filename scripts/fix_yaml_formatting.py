#!/usr/bin/env python3
"""Fix YAML formatting issues in Sigma rules"""

import os
from pathlib import Path

def fix_yaml_file(file_path):
    """Fix common YAML formatting issues"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Skip if already has document start
        if content.startswith('---'):
            # Just ensure newline at end
            if not content.endswith('\n'):
                content += '\n'
        else:
            # Add document start and ensure newline at end
            content = '---\n' + content
            if not content.endswith('\n'):
                content += '\n'

        # Write back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)

        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Fix all YAML files"""
    sigma_dir = Path('Sigma')
    fixed = 0
    errors = 0

    for yaml_file in sigma_dir.rglob('*.yml'):
        if fix_yaml_file(yaml_file):
            fixed += 1
        else:
            errors += 1

    print(f"Fixed {fixed} files, {errors} errors")

if __name__ == '__main__':
    main()