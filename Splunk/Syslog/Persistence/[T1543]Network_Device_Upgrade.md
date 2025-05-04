# [T1543] Network Device Upgrade

### Mitre Tactic:  
*Persistence*

#### Description:  
Detects software installation or upgrade events on network devices (e.g., routers, switches, firewalls). Monitors syslog messages for keywords like `install add file`, `install activate`, `upgrade file`, or `software install`, which may indicate malicious firmware upgrades or persistence mechanisms.

```bash
index=syslog sourcetype="network_syslog" ("install add file" OR "install activate" OR "upgrade file" OR "software install")
| table _time, host, Message
```