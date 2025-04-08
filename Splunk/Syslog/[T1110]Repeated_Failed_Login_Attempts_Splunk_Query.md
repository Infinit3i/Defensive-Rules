```
index=syslog sourcetype="syslog" "Failed password for"
| rex "Failed password for (?:invalid user )?\\S+ from (?<src_ip>\\d{1,3}(?:\\.\\d{1,3}){3})"
| bin _time span=5m
| stats count by _time, src_ip
| where count > 5
| sort - _time
| table _time, src_ip, count
```