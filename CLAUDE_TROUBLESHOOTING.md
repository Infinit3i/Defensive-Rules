# CLAUDE_TROUBLESHOOTING.md

Common issues and solutions for Sigma detection rules development and validation.

## Sigma Rule Validation Errors

### YAML Syntax Issues

**Duplicate Keys Error**
```bash
# Error: duplicate key "CommandLine" 
# Fix: Merge into single list
CommandLine|contains:
    - 'value1'
    - 'value2'
```

**Indentation Problems**
```bash
# Error: inconsistent indentation
# Fix: Use exactly 4 spaces, no tabs
detection:
    selection:
        EventID: 1
    condition: selection
```

**Line Length Violations**
```bash
# Error: line exceeds 200 characters
# Fix: Break long conditions
condition: (selection_one and selection_two) or
           (selection_three and selection_four)
```

### MITRE ATT&CK Tag Issues

**Invalid Technique IDs**
```bash
# Error: attack.t10059 (extra zero)
# Fix: attack.t1059

# Error: attack.T1059 (uppercase T)  
# Fix: attack.t1059
```

**Missing Required Tags**
```yaml
# Always include:
tags:
    - attack.{tactic}     # e.g., attack.execution
    - attack.t{number}    # e.g., attack.t1059
    - {platform}          # windows/linux/macos
```

### LogSource Configuration Problems

**Incorrect Product/Service Combinations**
```yaml
# Error: Invalid combination
logsource:
    product: windows
    service: auditd        # Linux service on Windows

# Fix: Match platform and service
logsource:
    product: windows
    service: sysmon
```

**Missing Required LogSource Fields**
```yaml
# Minimal required:
logsource:
    product: windows       # Required
    service: sysmon        # Required for most rules
```

## Detection Logic Issues

### Condition Syntax Errors

**Invalid Boolean Logic**
```bash
# Error: missing parentheses
condition: sel1 and sel2 or sel3 and sel4

# Fix: explicit grouping
condition: (sel1 and sel2) or (sel3 and sel4)
```

**Undefined Selection References**
```yaml
# Error: references non-existent selection
condition: selection and unknown_selection

# Fix: define all referenced selections
detection:
    selection:
        EventID: 1
    condition: selection
```

### Field Mapping Problems

**Case Sensitivity Issues**
```yaml
# Error: incorrect case
CommandLine|contains: 'powershell'

# Fix: use proper field names (varies by platform)
# Sysmon: CommandLine
# Sigma standard: check documentation
```

**Invalid Field Names**
```yaml
# Error: non-existent field
InvalidFieldName: value

# Fix: use documented log source fields
# Sysmon EventID 1: Image, CommandLine, ProcessId, etc.
```

## Platform-Specific Issues

### Windows Rules

**PowerShell Event ID Confusion**
```yaml
# Error: wrong EventID for PowerShell Classic
logsource:
    service: powershell-classic
detection:
    selection:
        EventID: 4103      # Wrong for script blocks

# Fix: use correct EventID
        EventID: 4104      # Script block logging
```

**Sysmon Field Variations**
```yaml
# Some Sysmon versions use different field names
# Check your Sysmon config and version
# Common variations: Image vs ProcessName
```

### Linux Rules

**AuditD Log Format Issues**
```yaml
# Error: Windows-style paths in Linux rule
CommandLine|contains: 'C:\Windows'

# Fix: use Linux paths
CommandLine|contains: '/tmp/'
```

## Tool Integration Problems

### Sigma Conversion Issues

**Backend Compatibility**
```bash
# Error: rule features not supported by target SIEM
# Check backend capabilities:
sigma backends                    # List available backends
sigma check --backend splunk rule.yml   # Validate for specific backend
```

**Missing Dependencies**
```bash
# Install required Sigma components
pip install pysigma pysigma-backend-splunk pysigma-backend-elasticsearch
```

### YARA Integration

**Rule Reference Errors**
```bash
# Error: YARA rule references Sigma fields
# Fix: keep YARA and Sigma rules separate
# YARA: binary patterns, file analysis
# Sigma: log analysis, behavioral detection
```

## Validation Workflow

### Pre-Commit Validation
```bash
# 1. YAML syntax check
yamllint Sigma/

# 2. Sigma rule validation  
find Sigma/ -name "*.yml" -exec sigma check {} \;

# 3. Check for duplicate IDs
grep -r "^id:" Sigma/ | sort | uniq -d

# 4. Verify required fields
find Sigma/ -name "*.yml" -exec grep -L "^level:" {} \;
find Sigma/ -name "*.yml" -exec grep -L "^tags:" {} \;
```

### Runtime Testing
```bash
# Test rule conversion
sigma convert --backend splunk rule.yml

# Validate against sample data (if available)
sigma apply --backend elasticsearch rules/ --data test_data/
```

## Common False Positive Issues

### Overly Broad Detection
```yaml
# Problem: too many false positives
selection:
    CommandLine|contains: 'powershell'

# Solution: add specificity
selection:
    CommandLine|contains: 'powershell'
suspicious_flags:
    CommandLine|contains:
        - '-EncodedCommand'
        - '-WindowStyle Hidden'
condition: selection and suspicious_flags
```

### Environment-Specific Tuning
```yaml
# Add environment exclusions
filter:
    Image|endswith:
        - '\legitimate_tool.exe'
        - '\approved_script.ps1'
condition: selection and not filter
```

## Performance Troubleshooting

### High Resource Usage
- See CLAUDE_PERFORMANCE.md for optimization guidelines
- Monitor rule execution time in SIEM
- Adjust time windows and aggregation periods

### Alert Fatigue
- Tune thresholds based on environment baseline
- Implement progressive severity levels
- Use correlation rules to reduce noise

## Emergency Response

### Rule Causing SIEM Issues
```bash
# 1. Immediately disable problematic rule
# 2. Check SIEM logs for performance impact
# 3. Analyze rule logic for efficiency issues
# 4. Test fixes in development environment first
```

### Mass False Positives
```bash
# 1. Temporarily increase alert threshold
# 2. Add quick filter for known false positive pattern  
# 3. Analyze root cause
# 4. Deploy permanent fix
```

## Getting Help

### Debug Information to Collect
```yaml
# Include in bug reports:
# 1. Full rule YAML
# 2. Sample log data that should/shouldn't match
# 3. SIEM platform and version
# 4. Sigma version and backend
# 5. Error messages (exact text)
```

### Useful Commands
```bash
# Validate single rule
sigma check rule.yml

# Test rule conversion
sigma convert --backend splunk rule.yml --dry-run

# Check rule statistics
sigma info rule.yml

# Validate entire directory
find Sigma/ -name "*.yml" | xargs -I {} sigma check {}
```