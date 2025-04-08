```
index=syslog sourcetype="syslog" "sshd" "Failed password for"
| stats count by src_ip
| where count > 5
| sort - count
| table src_ip, count
```