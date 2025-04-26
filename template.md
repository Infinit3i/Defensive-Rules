# [T####.###] <NAME OF FILE>

### Mitre Tactic:  
*<CATEGORY>*

---

#### Description:  
Describe the spl query

---

```bash
index=sysmon EventCode=11 TargetFilename IN ("C:\Windows\System32\*", "C:\Windows\Temp\*", "C:\Program Files\*", "C:\Windows\SysWOW64\*")
| table _time, host, TargetFilename, ProcessId, ProcessName, CommandLine
```