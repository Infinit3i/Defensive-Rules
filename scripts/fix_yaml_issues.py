#!/usr/bin/env python3
"""Fix YAML formatting issues - long lines and comment indentation"""

import os
import re
from pathlib import Path

def fix_long_lines(content):
    """Break long description lines"""
    lines = content.split('\n')
    fixed_lines = []

    for line in lines:
        if line.strip().startswith('description:') and len(line) > 200:
            # Extract description content
            match = re.match(r'^(\s*)description:\s*(.+)$', line)
            if match:
                indent = match.group(1)
                desc = match.group(2).strip('"')

                # Break into multiple lines at sentence boundaries
                if '. ' in desc:
                    sentences = desc.split('. ')
                    fixed_lines.append(f'{indent}description: >')
                    for i, sentence in enumerate(sentences):
                        if i < len(sentences) - 1:
                            sentence += '.'
                        fixed_lines.append(f'{indent}  {sentence}')
                else:
                    # Break at word boundaries
                    words = desc.split()
                    fixed_lines.append(f'{indent}description: >')
                    line_buf = f'{indent}  '
                    for word in words:
                        if len(line_buf + word) > 180:
                            fixed_lines.append(line_buf.rstrip())
                            line_buf = f'{indent}  {word} '
                        else:
                            line_buf += word + ' '
                    if line_buf.strip():
                        fixed_lines.append(line_buf.rstrip())
            else:
                fixed_lines.append(line)
        else:
            fixed_lines.append(line)

    return '\n'.join(fixed_lines)

def fix_comment_indentation(content):
    """Fix comment indentation issues"""
    lines = content.split('\n')
    fixed_lines = []

    for i, line in enumerate(lines):
        # Fix comments that should be indented to match content
        if '# ' in line and not line.strip().startswith('#'):
            # Find the base indentation of surrounding content
            prev_indent = 0
            next_indent = 0

            # Check previous non-comment line
            for j in range(i-1, -1, -1):
                if lines[j].strip() and not lines[j].strip().startswith('#'):
                    prev_indent = len(lines[j]) - len(lines[j].lstrip())
                    break

            # Check next non-comment line
            for j in range(i+1, len(lines)):
                if lines[j].strip() and not lines[j].strip().startswith('#'):
                    next_indent = len(lines[j]) - len(lines[j].lstrip())
                    break

            # Use the most common indentation
            target_indent = max(prev_indent, next_indent)

            if target_indent > 0:
                comment_text = line.strip()
                if comment_text.startswith('# '):
                    # Ensure at least 2 spaces before comment
                    if target_indent >= 2:
                        fixed_lines.append(' ' * (target_indent - 2) + '  ' + comment_text)
                    else:
                        fixed_lines.append(' ' * target_indent + comment_text)
                else:
                    fixed_lines.append(' ' * target_indent + comment_text)
            else:
                fixed_lines.append(line)
        else:
            fixed_lines.append(line)

    return '\n'.join(fixed_lines)

def fix_yaml_file(file_path):
    """Fix YAML file issues"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Apply fixes
        content = fix_long_lines(content)
        content = fix_comment_indentation(content)

        # Write back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)

        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Fix all problematic YAML files"""
    problem_files = [
        "Sigma/03 Initial Access/[T1195]Unauthorized_Package_Manager_Activity_Networking.yml",
        "Sigma/07 Defense Evasion/[T1622]Module_Loads_Debug_DLLs_from_UserPaths.yml",
        "Sigma/07 Defense Evasion/[T1622]Sysmon_CommandLine_Debugger_Tool_Invocations.yml",
        "Sigma/07 Defense Evasion/[T1497.003]Long_Delay_In_Compiled_Binary_via_Sleep_or_NtDelayExecution.yml",
        "Sigma/07 Defense Evasion/[T1622]PowerShell_IsDebuggerPresent_and_Debug_API_checks.yml",
        "Sigma/07 Defense Evasion/[T1106]Syscall_Indicators_In_Scripts.yml",
        "Sigma/07 Defense Evasion/[T1622]Syslog_Auditd_ptrace_or_gdb_activity.yml",
        "Sigma/07 Defense Evasion/[T1070.004]Unusual_File_Access_or_Modification.yml",
        "Sigma/07 Defense Evasion/[T1622]Zeek_HTTP_Debugger_Downloads_or_UserAgent.yml",
        "Sigma/07 Defense Evasion/[T1070]Log_Tampering_or_Deletion.yml",
        "Sigma/06 Privilege Escalation/[T1543_003]named_pipe.yml",
        "Sigma/06 Privilege Escalation/[T1134]token_theft.yml",
        "Sigma/12 Command and Control/[T1071.001]Suspicious_Web_C2_Patterns.yml",
        "Sigma/07 Defense Evasion/[T1218.011]Rundll32_Proxy_Execution.yml"
    ]

    fixed = 0
    for file_path in problem_files:
        if os.path.exists(file_path):
            if fix_yaml_file(file_path):
                fixed += 1
                print(f"Fixed: {file_path}")
        else:
            print(f"Not found: {file_path}")

    print(f"Fixed {fixed} files")

if __name__ == '__main__':
    main()