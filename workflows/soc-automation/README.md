# SOC Automation Workflows

This directory contains automated workflows designed to help Security Operations Centers (SOCs) streamline incident response, threat hunting, triage, and remediation processes.

## Directory Structure

```
soc-automation/
├── incident-response/     # Immediate response workflows
├── threat-hunting/        # Proactive hunting procedures  
├── triage/               # Alert classification and prioritization
└── remediation/          # Containment and cleanup workflows
```

## Workflow Categories

### Incident Response
- **high-severity-alert-response.json** - Automated response for critical alerts
- Immediate notification, evidence collection, and containment assessment
- SLA-driven escalation procedures

### Threat Hunting  
- **suspicious-process-hunt.json** - Proactive process behavior analysis
- Scheduled hunting queries for common attack patterns
- Risk scoring and lead generation

### Triage
- **automated-alert-triage.json** - Intelligent alert classification
- ML-driven priority scoring
- Automatic false positive filtering

### Remediation
- **malware-containment.json** - Complete malware response lifecycle
- Multi-phase containment, eradication, and recovery
- Approval gates and rollback procedures

## Implementation Platforms

These workflows are designed to be platform-agnostic but can be adapted for:

### SOAR Platforms
- **Microsoft Sentinel + Logic Apps**
- **Splunk SOAR (formerly Phantom)**
- **IBM SOAR (formerly Resilient)**
- **Demisto/XSOAR**
- **Shuffle (Open Source)**

### Integration Points
- **SIEM**: Splunk, Sentinel, QRadar, ArcSight
- **EDR**: Defender for Endpoint, CrowdStrike, Carbon Black
- **Ticketing**: ServiceNow, Jira, Remedy  
- **Communication**: Teams, Slack, Email
- **Threat Intel**: VirusTotal, MISP, ThreatFox

## Usage Instructions

### 1. Workflow Adaptation
```bash
# Review workflow JSON structure
cat incident-response/high-severity-alert-response.json

# Customize for your environment:
# - Update notification channels
# - Configure integration endpoints  
# - Adjust timing and thresholds
# - Map to your MITRE technique coverage
```

### 2. Platform Implementation

#### Sentinel Logic Apps
```bash
# Deploy using ARM template
az deployment group create \
  --template-file workflow-template.json \
  --parameters @workflow-parameters.json
```

#### Splunk SOAR  
```bash
# Import as playbook
# Configure app connections
# Set trigger conditions
```

#### Open Source (Shuffle)
```bash
# Convert JSON to Shuffle workflow format
# Configure webhooks and API connections
```

### 3. Testing and Validation
```bash
# Test with simulated alerts
# Validate notification channels
# Verify integration connectivity
# Conduct tabletop exercises
```

## Workflow Configuration

### Required Customizations
1. **Notification Endpoints** - Teams webhooks, email addresses
2. **Integration APIs** - SIEM, EDR, ticketing system credentials  
3. **Thresholds** - Risk scores, timing, escalation triggers
4. **Approval Gates** - Define who can authorize destructive actions
5. **Asset Context** - Critical systems, user privilege mappings

### Environment Variables
```json
{
  "siem_api_endpoint": "https://your-siem.company.com/api",
  "edr_api_key": "your-edr-api-key",
  "notification_webhook": "https://hooks.slack.com/services/...",
  "ticketing_system": "https://company.servicenow.com",
  "threat_intel_feeds": ["virustotal", "misp"]
}
```

## Metrics and KPIs

Track these metrics to measure SOC automation effectiveness:

- **Mean Time to Detection (MTTD)** - Alert generation to identification  
- **Mean Time to Response (MTTR)** - Alert to containment action
- **False Positive Rate** - Automated vs manual triage accuracy
- **Escalation Rate** - Automated resolution vs human intervention
- **Containment Success Rate** - Successful automated remediation

## Compliance and Audit

Workflows include audit trails for:
- **SOX Compliance** - Financial system incident response
- **GDPR** - Data breach notification timelines  
- **HIPAA** - Healthcare data protection procedures
- **PCI DSS** - Payment system security requirements

## Contributing

To add new workflows:
1. Follow JSON schema structure
2. Include comprehensive error handling  
3. Add rollback procedures for destructive actions
4. Document required integrations and permissions
5. Test thoroughly in non-production environment

## Support

For implementation assistance:
- Review SOAR platform documentation
- Test workflows in sandbox environment
- Validate with small subset of alerts initially
- Monitor and tune based on false positive rates