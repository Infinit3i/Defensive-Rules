# [T1047] Wmiexec WMI Operational Events

### Mitre Tactic:  
*Execution*

#### Description:  
Detects evidence of WMI command execution via `wmiexec.py` in the Microsoft-Windows-WMI-Activity/Operational log. Relevant Event IDs include 5857 and 5858.

```bash
index=wineventlog source="Microsoft-Windows-WMI-Activity/Operational" EventCode IN (5857, 5858)
| table _time, host, EventCode, Message
| sort _time desc
```