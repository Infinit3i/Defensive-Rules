# [T1055] Process_Injection_Techniques_Splunk_Query

### Mitre Tactic:  
*Defense Evasion*

---

#### Description:  
Detects high-privilege handle requests or remote thread creation indicative of process injection. Monitors Sysmon Event ID 10 for access masks granting full or debug rights (e.g., `0x1F0FFF`, `0x1FFFFF`, `0x1410`, `0x143A`) and Event ID 8 for CreateRemoteThread events. Outputs source and target image paths, access masks, invoking user, and command line context to facilitate investigation of potential in-memory code injection.

---

```bash
index=sysmon (
    (EventCode=10 AND (
        GrantedAccess="*0x1F0FFF*" OR 
        GrantedAccess="*0x1FFFFF*" OR 
        GrantedAccess="*0x1410*" OR 
        GrantedAccess="*0x143A*"
    ))
    OR
    (EventCode=8)
)
| table _time, host, EventCode, SourceImage, TargetImage, GrantedAccess, User, CommandLine
```
