```
index=syslog sourcetype="syslog" (
   ("sudo:" AND ("authentication failure" OR "not in the sudoers file"))
   OR
   ("su:" AND ("FAILED" OR "authentication failure"))
)
| table _time, host, Message
```