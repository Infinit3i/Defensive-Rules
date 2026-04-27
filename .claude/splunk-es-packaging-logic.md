# Splunk ES Packaging Logic & Workflow

## Overview
Convert Sigma detection rules → Splunk ES package for enterprise deployment.
Keep YARA rules separate. Remove manual Splunk/ directory.

## Pipeline Architecture

```
Sigma Rules (114) → pysigma-backend-splunk → Splunk Queries → ES Package → Deployment Tarball
YARA Rules (3) → Copy direct → ES Package/lookups/
```

## Conversion Logic

### Sigma → Splunk Process
1. **Parse Sigma YAML**: Extract title, description, detection logic, MITRE tags
2. **Convert detection**: Use pysigma-backend-splunk for query generation
3. **Preserve metadata**: Map Sigma fields to Splunk savedsearches.conf format
4. **MITRE mapping**: Extract attack.t#### tags for ES correlation

### MITRE ATT&CK Preservation
- Sigma tags: `attack.execution`, `attack.t1059.001` 
- Splunk mapping: `mitre_attack = ["T1059.001"]` in savedsearches.conf
- Tactic preservation: Directory structure → ES category mapping

## Splunk ES Package Structure

```
defensive-rules-es/
├── metadata/
│   └── default.meta
├── default/
│   ├── app.conf
│   ├── savedsearches.conf      # Generated Sigma→Splunk queries
│   ├── correlationsearches.conf # ES correlation rules
│   └── macros.conf             # Reusable search macros
├── lookups/
│   ├── yara_rules.csv          # YARA rule metadata
│   └── mitre_tactics.csv       # ATT&CK framework mapping
└── appserver/static/
    └── README.html
```

## Conversion Mappings

### Sigma → savedsearches.conf
```yaml
# Sigma input
title: "Script Block Logging With Suspicious Content"
level: high
logsource: {product: windows, service: powershell}
detection: {selection: {...}, condition: selection}
tags: [attack.execution, attack.t1059.001]
```

```ini
# Splunk output  
[Script_Block_Logging_With_Suspicious_Content]
search = index=windows EventCode=4104 | search (suspicious patterns)
description = Attack technique description
dispatch.earliest_time = -24h@h
dispatch.latest_time = now
cron_schedule = */15 * * * *
alert.severity = 3
alert.track = 1
mitre_attack = ["T1059.001"]
mitre_tactic = ["execution"]
```

## Automation Workflow

### Stage 1: Conversion
```bash
python scripts/sigma_to_splunk.py \
  --input-dir Sigma/ \
  --output-dir build/queries/ \
  --preserve-structure
```

### Stage 2: Package Creation  
```bash
scripts/build_es_package.sh \
  --queries build/queries/ \
  --yara Yara/ \
  --output defensive-rules-es.tar.gz
```

### Stage 3: Deployment
```bash
# Splunk deployment
$SPLUNK_HOME/bin/splunk install app defensive-rules-es.tar.gz
$SPLUNK_HOME/bin/splunk restart
```

## Quality Validation

### Pre-conversion Checks
- Sigma YAML syntax validation
- Required fields present (title, detection, level)
- MITRE tag format validation
- UUID uniqueness check

### Post-conversion Validation  
- Splunk query syntax check
- ES metadata format compliance
- MITRE mapping completeness
- Package structure verification

## MITRE Coverage Tracking
- Extract technique coverage from converted rules
- Generate coverage matrix for ATT&CK Navigator
- Track gaps in detection coverage by tactic

## Dependencies
- `pysigma` (core Sigma library)
- `pysigma-backend-splunk` (Splunk conversion)
- `yamllint` (syntax validation)
- `splunk-sdk-python` (optional: deployment validation)

## Output Artifacts
1. **defensive-rules-es.tar.gz**: Deployable Splunk ES app
2. **conversion-report.json**: Conversion success/failure details  
3. **mitre-coverage.json**: Technique coverage analysis
4. **validation-results.txt**: Quality check results