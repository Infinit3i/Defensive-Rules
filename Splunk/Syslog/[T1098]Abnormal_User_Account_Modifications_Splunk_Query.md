```
index=syslog sourcetype="syslog" ("useradd" OR "usermod" OR "userdel" OR "groupadd" OR "groupdel" OR "passwd: password changed")
| table _time, host, Message
```