
# [T1071.001] Application Layer Protocol: Web Protocols

### Mitre Tactic:

*Command and Control, Exfiltration*

#### Description:

Detects **excessive HTTP POST requests** within a short time window that may indicate data exfiltration, beaconing, or web-based C2 traffic. Adversaries often abuse HTTP POST to send encoded payloads or exfiltrate data in bulk. This rule leverages Zeek HTTP logs to count POST requests per source-destination pair over 5-minute windows and flags cases exceeding 20 requests.

```bash
index=zeek sourcetype="zeek:http" method="POST"
| bin _time span=5m
| stats count by id.orig_h, id.resp_h, uri, _time
| where count > 20
| sort - count
| table _time, id.orig_h, id.resp_h, uri, count
```
