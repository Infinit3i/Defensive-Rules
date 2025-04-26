# [T1047] wmiexec

### Mitre Tactic:  
*Persistence*

---

#### Description:  
Detects invocation of `wmiexec` via process creation or command-line events in Windows Event Logs, indicating potential WMI-based remote execution or persistence abuse.

---

```bash
index=wineventlog (EventCode=4688 OR EventCode=1) (CommandLine="*wmiexec*")
| table _time, host, user, CommandLine, ParentProcessName
```
