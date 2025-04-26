# [T1047] WMI Persistence

### Mitre Tactic:  
*Persistence*

---

#### Description:  
Detects suspicious process executions and network connections spawned via WMI (wmiprvse.exe), a common technique for establishing persistence or performing remote execution through Windows Management Instrumentation. Monitors for Sysmon Event ID 1 (Process Creation) and Event ID 3 (Network Connection) where the parent process is `wmiprvse.exe` and the child is a high-risk interpreter or scripting host.

---

```bash
index=sysmon (EventCode=1 OR EventCode=3)
| where (ParentImage LIKE "%wmiprvse.exe%" AND (
    Image LIKE "%powershell.exe%" OR
    Image LIKE "%cmd.exe%" OR
    Image LIKE "%mshta.exe%" OR
    Image LIKE "%wscript.exe%" OR
    Image LIKE "%cscript.exe%"
  ))
| table _time, EventCode, Image, ParentImage, CommandLine, ProcessId, ParentProcessId, DestinationIp, DestinationPort, Protocol, ComputerName
| sort _time desc
```
