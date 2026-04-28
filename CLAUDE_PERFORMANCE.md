# CLAUDE_PERFORMANCE.md

Performance optimization and tuning guidelines for Sigma detection rules in enterprise environments.

## Query Optimization Principles

### Field Selection Strategy

**Use Indexed Fields**
```yaml
# Prefer indexed fields for better performance
selection:
    EventID: 1           # Usually indexed
    Image|endswith:      # Better than contains for exact matches
        - '\malware.exe'
```

**Avoid Expensive Operations**
```yaml
# Expensive: regex patterns
CommandLine|re: '.*complex_regex.*'

# Better: simple string matching
CommandLine|contains: 'specific_string'

# Best: exact matches when possible  
CommandLine|endswith: 'known_suffix'
```

### Detection Logic Efficiency

**Order Conditions by Selectivity**
```yaml
# Put most selective conditions first
detection:
    rare_event:           # High selectivity (few matches)
        EventID: 4625     # Failed logon
        LogonType: 3      # Network logon
    common_filter:        # Lower selectivity  
        IpAddress|contains: '192.168'
    condition: rare_event and not common_filter
```

**Minimize Condition Complexity**
```yaml
# Inefficient: complex nested conditions
condition: (a and b and c) or (d and e and f) or (g and h and i)

# Better: break into multiple rules or use aggregation
condition: base_selection and suspicious_indicators
```

## Time Window Optimization

### Aggregation Periods

**Right-size Time Windows**
```yaml
# Short windows for fast attacks (seconds-minutes)
detection:
    timeframe: 30s      # Rapid bruteforce attempts

# Medium windows for persistence (minutes-hours)  
detection:
    timeframe: 10m      # File system changes

# Long windows for APT activities (hours-days)
detection:
    timeframe: 24h      # Long-term reconnaissance
```

**Avoid Excessive Lookbacks**
```yaml
# Expensive: very long time windows
timeframe: 30d          # Avoid unless necessary

# Better: progressive escalation
# Rule 1: 1h window for immediate threats
# Rule 2: 24h window for correlating events
```

## Platform-Specific Optimization

### Splunk Performance

**Index Strategy**
```yaml
# Target specific indexes
logsource:
    product: windows
    service: sysmon
    index: 'wineventlog_sysmon'  # Specific index reduces search scope
```

**Search Optimization**
```spl
# Efficient Splunk conversion patterns
index=sysmon EventCode=1 
| where match(CommandLine, "malicious_pattern")
| stats count by Computer, User
```

**Field Extraction**
```yaml
# Prefer automatic field extractions over manual parsing
selection:
    EventID: 1                    # Auto-extracted
    CommandLine|contains: 'value' # Auto-extracted
# Avoid complex field manipulation in detection logic
```

### Elasticsearch/ELK Performance

**Mapping Considerations**
```yaml
# Leverage analyzed vs non-analyzed fields
selection:
    process.executable.keyword: 'exact_match'    # keyword field (fast)
    process.command_line: 'fuzzy_search'         # text field (slower)
```

**Query Structure**
```json
{
  "bool": {
    "must": [
      {"term": {"event.code": 1}},           // Fast exact match first
      {"wildcard": {"process.name": "*mal*"}} // Slower pattern last
    ]
  }
}
```

### Microsoft Sentinel

**KQL Optimization**
```kql
// Efficient: filter early, aggregate late
SecurityEvent
| where EventID == 4624
| where LogonType == 3  
| summarize count() by Account, Computer
| where count_ > 10
```

**Table Selection**
```yaml
# Use specific tables when possible
logsource:
    product: azure
    service: signinlogs        # Specific table
# Rather than generic "office365" product
```

## Memory and CPU Optimization

### Rule Complexity Limits

**Maximum Condition Elements**
```yaml
# Guideline: <20 selection elements per rule
detection:
    selection1: {...}     # Keep each selection focused
    selection2: {...}     # Avoid massive OR lists
    condition: selection1 and selection2
```

**String List Optimization**
```yaml
# Efficient: grouped similar patterns
CommandLine|contains:
    - 'powershell -enc'
    - 'powershell -e '
    - 'powershell /enc'

# Less efficient: scattered different types
CommandLine|contains:
    - 'powershell'        # Very broad
    - 'totally_different_tool'
    - 'another_unrelated_string'
```

### Resource Monitoring

**CPU Usage Patterns**
```bash
# Monitor rule execution cost
# High CPU indicators:
# - Complex regex patterns
# - Large time windows  
# - Multiple aggregations
# - Excessive OR conditions
```

**Memory Consumption**
```bash
# Memory-intensive operations:
# - Long timeframes with state tracking
# - Large correlation tables
# - Complex group-by operations
```

## False Positive Reduction

### Baseline-Driven Tuning

**Environment Profiling**
```yaml
# Build environment-specific filters
filter_approved:
    Image|startswith:
        - 'C:\Program Files\Approved\'
        - 'C:\Windows\System32\legitimate_'
condition: selection and not filter_approved
```

**Dynamic Thresholds**
```yaml
# Adjust counts based on environment size
# Small environment (<100 hosts): count > 5
# Medium environment (100-1000): count > 20  
# Large environment (1000+): count > 50
```

### Progressive Severity

**Tiered Alert Levels**
```yaml
# Level 1: High confidence, immediate action
level: critical
condition: selection and high_confidence_indicators

# Level 2: Medium confidence, investigate  
level: high
condition: selection and moderate_indicators

# Level 3: Low confidence, baseline tracking
level: medium  
condition: selection_only
```

## Scalability Guidelines

### Rule Distribution Strategy

**Platform-Specific Deployment**
```yaml
# Deploy heavy rules to dedicated detection systems
# Deploy light rules to endpoint agents
# Use rule complexity scoring: sum of conditions + time window + aggregations
```

**Load Balancing**
```yaml
# Distribute CPU-intensive rules across time
# Stagger execution of correlation rules
# Batch similar detections when possible
```

### Growth Planning

**Rule Lifecycle Management**
```bash
# Regular performance audits
# 1. Identify slowest rules (>1s execution)
# 2. Analyze alert volume vs value ratio
# 3. Archive low-value rules
# 4. Optimize or split complex rules
```

## Monitoring and Alerting

### Performance Metrics

**Key Performance Indicators**
```yaml
# Track per-rule:
# - Average execution time
# - Peak memory usage  
# - Alert volume per day
# - False positive rate
# - Time to first alert
```

**Thresholds for Concern**
```yaml
# Rule execution time >5 seconds
# Memory usage >100MB per rule
# False positive rate >90%
# Alert volume >1000/day without investigation
```

### Automated Tuning

**Self-Optimizing Rules**
```yaml
# Implement adaptive thresholds
# Track baseline metrics over time
# Automatically adjust count thresholds
# Flag rules for manual review when performance degrades
```

## Best Practices Summary

### Rule Design
1. Start with high-selectivity fields
2. Use exact matches over patterns when possible
3. Keep time windows as short as practical
4. Limit condition complexity
5. Test on representative data volumes

### Deployment Strategy  
1. Gradual rollout with performance monitoring
2. A/B testing for rule variations
3. Load balancing across detection infrastructure
4. Regular performance reviews and optimization

### Maintenance
1. Quarterly performance audits
2. Baseline updates for environment changes
3. Archive obsolete or low-value rules
4. Document performance characteristics for each rule

### Emergency Optimization
1. Disable resource-intensive rules during incidents
2. Implement circuit breakers for runaway rules
3. Have performance rollback procedures
4. Maintain lightweight "emergency mode" rule sets