```
index=syslog sourcetype="network_syslog" ("install add file" OR "install activate" OR "upgrade file" OR "software install")
| table _time, host, Message
```