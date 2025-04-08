```
index=syslog sourcetype="syslog" ("crontab: installing new crontab" OR "crontab: installing for")
| table _time, host, user, Message
```