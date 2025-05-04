# [T1047] Wmiexec Logon Events

### Mitre Tactic:  
*Execution*

#### Description:  
Detects authentication and interactive logon activity triggered by `wmiexec.py`. These include credential validation (4776), privilege use (4672), and network-based logon (4624) in multiple rounds.

```bash
index=wineventlog EventCode IN (4776, 4672, 4624) LogonType=3
| table _time, host, EventCode, SubjectUserName, TargetUserName, AuthenticationPackageName, LogonType
| sort _time desc
```