```
index=syslog sourcetype="syslog" ("sudo:" AND "COMMAND=")
| table _time, host, user, Message
```