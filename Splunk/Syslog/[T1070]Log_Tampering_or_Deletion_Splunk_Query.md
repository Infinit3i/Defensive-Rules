```
index=syslog sourcetype="syslog" ("rm -rf /var/log" OR "rm -f /var/log" OR "deleted log" OR "truncated log" OR "log cleared")
| table _time, host, Message
```