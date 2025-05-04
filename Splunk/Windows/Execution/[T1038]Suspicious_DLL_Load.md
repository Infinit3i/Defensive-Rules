# [T1038] Suspicious DLL Load

### Mitre Tactic:  
*Execution*

#### Description:  
Detects DLLs loaded from suspicious or non-standard locations such as `C:\Users\`, `%TEMP%`, or network shares. These paths are often abused to load malicious payloads without detection. This rule uses Sysmon Event ID 7 (Image Load) to monitor DLL activity from these risky directories.

```bash
index=sysmon EventCode=7
| where ImageLoaded LIKE "C:\\Users\\%" OR ImageLoaded LIKE "C:\\Windows\\Temp\\%" OR ImageLoaded LIKE "\\\\%"
| table _time, Image, ImageLoaded, ProcessId, ComputerName
| sort _time desc
```