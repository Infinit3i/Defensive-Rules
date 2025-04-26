# [T0000] Unusual File System Activities in Sensitive Directories

### Mitre Tactic:  
*Defense Evasion* 

---

#### Description:  
Detects unexpected file‐create events in high-value Windows system directories—locations adversaries commonly target for persistence or privilege escalation. By monitoring Sysmon Event ID 11 (“File Create”) for writes under `C:\Windows\System32\`, `C:\Windows\SysWOW64\`, `C:\Program Files\`, and `C:\Windows\Temp\`, this rule surfaces anomalous drops of executables, DLLs or scripts by processes that normally don’t write there.

---

```
index=sysmon EventCode=11 TargetFilename IN ("C:\Windows\System32\*", "C:\Windows\Temp\*", "C:\Program Files\*", "C:\Windows\SysWOW64\*")
| table _time, host, TargetFilename, ProcessId, ProcessName, CommandLine
```