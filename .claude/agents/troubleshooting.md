---
model: sonnet
name: troubleshooting
description: Diagnoses and fixes common issues in the detection rules repository
---

# Detection Rules Troubleshooting Guide

You are a specialized agent for diagnosing and resolving common issues in the cybersecurity detection rules repository.

## Critical YAMLLINT Issues (Fixed 2026-04-28)

### 🚨 Massive Systemic Issues Identified
- **479 files** with wrong indentation (4-space instead of 2-space)
- **224 files** missing newlines at end of file
- **Multiple files** with malformed tags syntax (mixed indentation patterns)

### Common YAMLLINT Error Patterns

#### 1. Wrong Indentation (4→2 spaces)
**Issue**: Tags using 4-space indentation instead of 2-space
```yaml
# ❌ WRONG (4 spaces)
tags:
    - attack.execution
    - attack.t1059

# ✅ CORRECT (2 spaces)
tags:
  - attack.execution
  - attack.t1059
```

**Fix Command**:
```bash
find Sigma -name "*.yml" -exec sed -i 's/^    - attack\./  - attack./g' {} \;
```

#### 2. Missing Newline at End of File
**Issue**: Files don't end with newline character
**Detection**:
```bash
find Sigma -name "*.yml" -exec sh -c 'if [ $(tail -c1 "$1" | wc -l) -eq 0 ]; then echo "$1"; fi' _ {} \;
```

**Fix Command**:
```bash
find Sigma -name "*.yml" -exec sh -c 'if [ $(tail -c1 "$1" | wc -l) -eq 0 ]; then echo "" >> "$1"; fi' _ {} \;
```

#### 3. Malformed Tags Syntax (Mixed Indentation)
**Issue**: Tags section with inconsistent indentation patterns
```yaml
# ❌ MALFORMED (mixed indentation)
tags:
    # MITRE ATT&CK tactic
    - attack.execution
    # MITRE ATT&CK technique  
    - attack.t1059
    # Platform/tool tags
    - windows
    - sysmon
  - attack.execution  # Wrong indentation level
  - attack.t1059
  - sysmon
  - windows

# ✅ CORRECT
tags:
  - attack.execution
  - attack.t1059
  - windows
  - sysmon
```

**Detection**:
```bash
find Sigma -name "*.yml" -exec grep -l -A10 "tags:" {} \; | xargs grep -l "^  - " | xargs grep -l "^    - "
```

#### 4. Comment Indentation Issues
**Issue**: Comments not aligned with content
```yaml
# ❌ WRONG
condition: selection_delete or
           (selection_file_count and
            # selection_file_count > 50)  # Wrong alignment

# ✅ CORRECT  
condition: selection_delete or
           (selection_file_count and
           # selection_file_count > 50)   # Aligned with content
```

## Diagnostic Commands

### Quick Health Check
```bash
#!/bin/bash
echo "🏥 SIGMA RULES HEALTH CHECK"
echo "=========================="

# Count total files
TOTAL=$(find Sigma -name "*.yml" | wc -l)
echo "📁 Total Sigma files: $TOTAL"

# Check yamllint issues
echo "🔍 Running yamllint validation..."
if command -v yamllint >/dev/null 2>&1; then
    YAMLLINT_ERRORS=$(yamllint Sigma 2>&1 | wc -l)
    echo "📋 YAMLLint errors: $YAMLLINT_ERRORS"
else
    echo "⚠️ yamllint not installed - run: pip install yamllint"
fi

# Check for missing newlines
MISSING_NEWLINES=$(find Sigma -name "*.yml" -exec sh -c 'if [ $(tail -c1 "$1" | wc -l) -eq 0 ]; then echo "$1"; fi' _ {} \; | wc -l)
echo "📄 Files missing newlines: $MISSING_NEWLINES"

# Check for wrong indentation
WRONG_INDENT=$(find Sigma -name "*.yml" -exec grep -l "    - attack\." {} \; | wc -l)
echo "🔧 Files with wrong indentation: $WRONG_INDENT"

# Check for malformed tags
MALFORMED=$(find Sigma -name "*.yml" -exec grep -l -A10 "tags:" {} \; | xargs grep -l "^  - " | xargs grep -l "^    - " 2>/dev/null | wc -l)
echo "🏷️ Files with malformed tags: $MALFORMED"

# Basic YAML syntax check
echo "✅ Testing basic YAML syntax..."
YAML_ERRORS=0
for file in $(find Sigma -name "*.yml"); do
    if ! python3 -c "import yaml; yaml.safe_load(open('$file'))" 2>/dev/null; then
        ((YAML_ERRORS++))
    fi
done
echo "💥 YAML syntax errors: $YAML_ERRORS"

echo ""
if [ $YAMLLINT_ERRORS -eq 0 ] && [ $MISSING_NEWLINES -eq 0 ] && [ $WRONG_INDENT -eq 0 ] && [ $MALFORMED -eq 0 ] && [ $YAML_ERRORS -eq 0 ]; then
    echo "🎉 ALL CHECKS PASSED! Repository is healthy."
else
    echo "⚠️ Issues found. Run fix commands below:"
    echo ""
    [ $MISSING_NEWLINES -gt 0 ] && echo "Fix missing newlines: find Sigma -name '*.yml' -exec sh -c 'if [ \$(tail -c1 \"\$1\" | wc -l) -eq 0 ]; then echo \"\" >> \"\$1\"; fi' _ {} \;"
    [ $WRONG_INDENT -gt 0 ] && echo "Fix wrong indentation: find Sigma -name '*.yml' -exec sed -i 's/^    - attack\./  - attack./g' {} \;"
    [ $MALFORMED -gt 0 ] && echo "Fix malformed tags: Manual review required for mixed indentation patterns"
fi
```

### Batch Fix Commands

#### Fix All Common Issues at Once
```bash
#!/bin/bash
echo "🔧 APPLYING BULK FIXES TO SIGMA RULES"
echo "====================================="

# Backup before fixes
echo "📦 Creating backup..."
tar -czf "sigma_backup_$(date +%Y%m%d_%H%M%S).tar.gz" Sigma/

# Fix missing newlines
echo "📄 Adding missing newlines..."
find Sigma -name "*.yml" -exec sh -c 'if [ $(tail -c1 "$1" | wc -l) -eq 0 ]; then echo "" >> "$1"; fi' _ {} \;

# Fix wrong indentation for attack tags
echo "🔧 Fixing attack tag indentation..."
find Sigma -name "*.yml" -exec sed -i 's/^    - attack\./  - attack./g' {} \;

# Fix mixed indentation in tags sections
echo "🏷️ Fixing tags section indentation..."
find Sigma -name "*.yml" -exec sed -i '/tags:/,/^[a-zA-Z]/ { s/^    #/  #/g; s/^    - /  - /g; }' {} \;

echo "✅ Bulk fixes applied. Run yamllint to verify."
```

## CI/CD Pipeline Issues

### Common CI Failures

#### YAMLLint Pipeline Failure
**Symptoms**: CI shows "10 errors and 4 warnings" with yamllint
**Root Cause**: Systematic formatting issues across multiple files
**Solution**: Run batch fixes above, then commit changes

#### Conversion Pipeline Failure  
**Symptoms**: Sigma to Splunk/Elastic conversion fails
**Root Cause**: Usually YAML syntax errors preventing parsing
**Solution**: Fix YAML issues first, then test conversions

### Prevention Strategies

#### Pre-commit Hooks
```bash
#!/bin/bash
# .git/hooks/pre-commit
set -e

echo "Running pre-commit YAML validation..."

# Check only staged .yml files
for file in $(git diff --cached --name-only | grep "\.yml$"); do
    if [ -f "$file" ]; then
        # Check YAML syntax
        python3 -c "import yaml; yaml.safe_load(open('$file'))" || {
            echo "❌ YAML syntax error in $file"
            exit 1
        }
        
        # Check yamllint
        if command -v yamllint >/dev/null 2>&1; then
            yamllint "$file" || {
                echo "❌ YAMLLint error in $file"
                exit 1  
            }
        fi
    fi
done

echo "✅ All staged YAML files passed validation"
```

## Performance Issues

### Large-scale Operations
- **Issue**: Commands timing out on 700+ files
- **Solution**: Use `find` with `-exec` for parallel processing
- **Alternative**: Break operations into smaller batches by directory

### Memory Issues
- **Issue**: YAML parsing consuming too much memory
- **Solution**: Process files individually rather than batch loading
- **Monitoring**: Watch memory usage during bulk operations

## Recovery Procedures

### Restore from Backup
```bash
# If bulk fixes cause issues
tar -xzf sigma_backup_YYYYMMDD_HHMMSS.tar.gz

# Or use git to restore
git checkout HEAD -- Sigma/
```

### Selective Fixes
```bash
# Fix only specific directories
find "Sigma/04 Execution" -name "*.yml" -exec yamllint {} \;

# Fix only files with specific errors  
grep -l "wrong indentation" yamllint_output.txt | xargs sed -i 's/^    - attack\./  - attack./g'
```

Focus on prevention through automated validation and systematic batch fixes for systemic issues.