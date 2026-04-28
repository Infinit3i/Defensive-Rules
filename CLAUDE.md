# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a cybersecurity detection rules repository containing Sigma rules, Splunk queries, and YARA rules for threat detection. Rules are organized by MITRE ATT&CK tactics and techniques, currently in experimental status and requiring validation.

## Working Guidelines

**NEVER PUSH OR COMMIT CODE** - User controls all git operations and repository state

**USE /tmp FOR TEMPORARY FILES** - Create all throwaway/temporary files in /tmp directory, not in project scripts/

## Architecture & Organization

### Directory Structure
- `Sigma/`: 114+ YAML detection rules organized by MITRE ATT&CK tactics (02-14)
- `Splunk/`: 63+ Markdown files with Splunk queries for same techniques  
- `Yara/`: 4 binary pattern matching rules
- Rules are self-contained and independently mappable to MITRE framework

### File Naming Convention
- Format: `[TTACTIC_ID]RuleName.yml` or `[TTACTIC_ID]RuleName.md`
- Examples: `[T1059.001]ScriptBlockLogging.yml`, `[T1047]WMI_Remote_Execution.md`
- Custom techniques use `[T0000]` for unmapped detections

### Rule Structure Standards

**Sigma Rules (YAML):**
```yaml
title: Human-readable detection name
id: UUID v4 identifier
status: experimental (all current rules)
description: Attack technique description
logsource: {product: windows/linux, service: sysmon/powershell/etc}
detection: {selection: {...}, condition: selection}
level: critical/high/medium/low
tags: [attack.tactic, attack.technique, platform]
```

### CRITICAL Formatting Requirements

**ALL Sigma rule generation MUST follow these standards:**

#### Line Length & Structure
- **Maximum 200 characters per line**
- **Descriptions max 150 chars**: Format as "Detects [threat] through [method]"
- **Break long conditions** at logical operators:
```yaml
condition: (sel_one and sel_two) or
           (sel_three and sel_four)
```

#### YAML Structure Requirements
- **NO duplicate keys** - merge multiple values into single list
- **NO blank lines within YAML structure**
- **Exactly ONE newline at file end**
- **NO trailing spaces anywhere**
- **Comments indented 4 spaces under parent element**

#### Validation Checklist
Before finalizing any Sigma rule:
1. Run yamllint validation
2. Verify no duplicate keys exist
3. Check all line length limits
4. Confirm proper 4-space indentation
5. Test condition syntax validity

**These standards prevent the 100+ validation errors previously found across all tactics.**

**Splunk Rules (Markdown):**
```markdown
# [TTACTIC] Rule Title
### Mitre Tactic: (tactic names)
#### Description: (explanation)
```spl
index=sysmon EventCode=1 | search suspicious_patterns
```
```

## Common Development Tasks

### Rule Validation
```bash
# Install Sigma for rule validation
pip install pysigma pysigma-backend-splunk

# Validate Sigma rule syntax
sigma check Sigma/path/to/rule.yml

# Convert Sigma to Splunk for testing
sigma convert --backend splunk Sigma/path/to/rule.yml

# Convert entire directory
sigma convert --backend splunk Sigma/04\ Execution/
```

### Rule Testing Infrastructure
```bash
# Test Sigma rules against sample data (when available)
sigma apply --backend elasticsearch rules/ --data test_data/

# Validate YARA rules
yara -r Yara/ test_samples/

# Check MITRE ATT&CK tag validity
grep -r "attack\." Sigma/ | grep -E "t[0-9]{4}" # Find technique tags
```

### Quality Assurance
```bash
# Find duplicate rule IDs
grep -r "^id:" Sigma/ | sort | uniq -d

# Check for missing required fields
find Sigma/ -name "*.yml" -exec grep -L "^level:" {} \;
find Sigma/ -name "*.yml" -exec grep -L "^tags:" {} \;

# Validate YAML syntax
yamllint Sigma/

# Check MITRE reference URLs
grep -r "references:" Sigma/ | grep -v "attack.mitre.org"
```

## Data Sources & Log Types

### Primary Log Sources
- **Windows**: Sysmon (EventCode 1,3,7,8,10,11), PowerShell (4103,4104), Security (4624,4625)
- **Linux**: auditd/syslog, SSH logs  
- **Network**: Zeek (dns, http, ssh, conn, ssl logs)
- **Cloud**: Azure AD, AWS CloudTrail

### LogSource Mappings
```yaml
# Windows process events
logsource: {product: windows, service: sysmon}
# PowerShell activity  
logsource: {product: windows, service: powershell-classic}
# Network traffic
logsource: {product: zeek, service: dns}
```

## MITRE ATT&CK Integration

### Tactic Organization
Rules organized by numbered directories matching MITRE tactics:
- 02 Resource Development → 14 Impact

### Tagging Convention
```yaml
tags:
  - attack.execution        # Tactic
  - attack.t1059           # Technique  
  - attack.t1059.001       # Sub-technique
  - sysmon                 # Platform/tool
  - windows                # OS
```

### Technique Coverage
Most covered techniques: T1082 (System Discovery), T1106 (Native API), T1497.003 (Time-based Evasion), T1622 (Debugger Evasion)

## Platform-Specific Considerations

### Windows Detection
- Heavy reliance on Sysmon Event IDs 1,3,7,8,10,11
- PowerShell script block logging (4104) for script analysis
- Process parent-child relationship detection patterns
- Registry and file system modification monitoring

### Network Detection  
- DNS tunneling and exfiltration patterns
- HTTP user-agent and beaconing analysis
- SSH brute force and lateral movement
- SSL/TLS certificate anomaly detection

### Linux Detection
- auditd log parsing for system calls and file access
- SSH authentication monitoring 
- Kernel module loading detection
- Cron job and service manipulation

## Current Limitations

- **All rules status: experimental** - require field testing
- **No automated testing** - validation needed against real event data
- **No false positive baselining** - require tuning for environments
- **Missing test data** - need representative log samples for validation

## External Dependencies

- **Uncoder.io**: Rule format conversion between SIEM platforms
- **Sigma**: Rule format standard and conversion tool
- **YARA**: Binary pattern matching (minimal usage)
- **MITRE ATT&CK Navigator**: Technique coverage mapping