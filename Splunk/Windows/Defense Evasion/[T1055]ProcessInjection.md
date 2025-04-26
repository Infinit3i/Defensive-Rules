# [T1055] Process Injection

### Mitre Tactic:  
*Defense Evasion*

---

#### Description:  
Detects suspicious process‐injection or handle‐access attempts against high‐value Windows processes (`lsass.exe`, `explorer.exe`). Monitors Sysmon Event ID 8 (CreateRemoteThread) and Event ID 10 (Process Access) where the target image is one of these processes, and correlates with Windows Security Event ID 4673/4674 events indicating privileged operations against them.

---

```bash
(
  (index=sysmon (EventCode=8 OR EventCode=10)
    AND TargetImage IN ("C:\\Windows\\System32\\lsass.exe", "C:\\Windows\\explorer.exe")
  )
  OR
  (index=wineventlog EventCode=4673 OR EventCode=4674
    AND Message="lsass.exe" OR Message="explorer.exe"
  )
)
| table _time, EventCode, Image, TargetImage, SourceProcessId, TargetProcessId, TargetProcessName, ProcessGuid, ComputerName, Message
| sort _time
```
