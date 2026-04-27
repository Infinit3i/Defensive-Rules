# Splunk ES Packaging Implementation Checklist

## Phase 1: Repository Cleanup
- [ ] Backup existing Splunk/ directory (optional)
- [ ] Remove Splunk/ directory from repository  
- [ ] Update .gitignore for generated build/ artifacts
- [ ] Update CLAUDE.md to reflect new structure

## Phase 2: Conversion Infrastructure

### Sigma Converter Script
- [ ] Install pysigma dependencies (`pip install pysigma pysigma-backend-splunk`)
- [ ] Create `scripts/sigma_to_splunk.py`
  - [ ] Parse Sigma YAML files recursively
  - [ ] Extract MITRE ATT&CK tags from rule metadata
  - [ ] Convert detection logic using pysigma-backend-splunk  
  - [ ] Generate savedsearches.conf format output
  - [ ] Preserve directory/tactic organization
  - [ ] Handle conversion errors gracefully
  - [ ] Generate conversion report

### MITRE Mapping Logic
- [ ] Extract `attack.t####` tags from Sigma rules
- [ ] Map tactic directories (04 Execution → execution)
- [ ] Create technique→rule mapping for ES correlation
- [ ] Generate MITRE ATT&CK Navigator JSON

## Phase 3: Splunk ES Package Structure

### Directory Framework  
- [ ] Create `templates/splunk-es-app/` structure
- [ ] Build `metadata/default.meta` (permissions)
- [ ] Create `default/app.conf` (app metadata)
- [ ] Template `default/savedsearches.conf` structure
- [ ] Create `lookups/` for YARA rules and MITRE data

### Configuration Files
- [ ] **app.conf**: App name, version, author, description
- [ ] **savedsearches.conf**: Generated detection rules with ES metadata
- [ ] **correlationsearches.conf**: ES correlation rule templates
- [ ] **macros.conf**: Reusable search macros for common patterns
- [ ] **default.meta**: Access permissions for ES environment

## Phase 4: Build Automation

### Package Builder Script
- [ ] Create `scripts/build_es_package.sh`
  - [ ] Run Sigma→Splunk conversion
  - [ ] Copy YARA rules to lookups/
  - [ ] Generate app metadata with version/timestamp
  - [ ] Validate Splunk configuration syntax
  - [ ] Create deployable .tar.gz package
  - [ ] Generate deployment documentation

### Makefile Integration
- [ ] **make convert**: Run Sigma conversion only
- [ ] **make package**: Build full ES package
- [ ] **make validate**: Run quality checks
- [ ] **make clean**: Remove build artifacts
- [ ] **make deploy**: Upload to Splunk (optional)

## Phase 5: Quality & Validation

### Pre-conversion Validation
- [ ] YAML syntax check (`yamllint`)
- [ ] Required Sigma fields validation
- [ ] UUID uniqueness verification  
- [ ] MITRE tag format validation
- [ ] Duplicate rule detection

### Post-conversion Validation
- [ ] Splunk query syntax validation
- [ ] ES savedsearches.conf format check
- [ ] MITRE mapping completeness verification
- [ ] Package structure compliance

### Testing Framework
- [ ] Unit tests for conversion functions
- [ ] Integration test with sample Sigma rules
- [ ] Splunk syntax validation pipeline
- [ ] ES deployment simulation

## Phase 6: Documentation & Deployment

### User Documentation
- [ ] Update README.md with new workflow
- [ ] Create deployment guide for Splunk ES
- [ ] Document conversion troubleshooting
- [ ] Add MITRE coverage visualization

### CI/CD Integration (Optional)
- [ ] GitHub Actions for conversion validation
- [ ] Automatic package building on release tags
- [ ] MITRE coverage reporting in PRs
- [ ] Splunk syntax checking on Sigma changes

## Phase 7: Testing & Validation

### End-to-End Testing
- [ ] Test conversion with subset of rules (10-15)
- [ ] Validate generated savedsearches.conf syntax
- [ ] Test package installation in Splunk ES dev environment
- [ ] Verify MITRE ATT&CK integration works
- [ ] Confirm YARA rules properly included

### Production Readiness
- [ ] Performance test with full 114 rule conversion
- [ ] Memory/disk space validation for large conversions
- [ ] Error handling for malformed Sigma rules
- [ ] Rollback procedures documentation

## Success Criteria
- ✅ All 114 Sigma rules convert without errors
- ✅ Generated package installs cleanly in Splunk ES
- ✅ MITRE ATT&CK mapping preserved and functional
- ✅ YARA rules accessible via lookups
- ✅ Build process runs in <2 minutes
- ✅ Generated searches execute without syntax errors

## Dependencies Installation
```bash
# Python requirements
pip install pysigma pysigma-backend-splunk yamllint

# Optional Splunk SDK for validation
pip install splunk-sdk-python  

# System requirements
# - Python 3.8+
# - Access to Splunk ES instance for testing
```