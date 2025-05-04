# [T1078] User Account Changes

### Mitre Tactic:  
*Persistence*

#### Description:  
Detects user and group management activities such as adding, modifying, or deleting users or groups, and password changes. These actions may indicate legitimate administrative tasks or unauthorized persistence mechanisms.

```bash
index=syslog sourcetype="syslog" ("useradd" OR "usermod" OR "userdel" OR "groupadd" OR "groupdel" OR "passwd: password changed")
| table _time, host, Message
```