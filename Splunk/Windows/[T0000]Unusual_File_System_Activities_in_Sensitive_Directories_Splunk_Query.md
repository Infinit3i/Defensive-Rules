```
index=sysmon EventCode=11 (TargetFilename="C:\Windows\System32\*" OR TargetFilename="C:\Windows\Temp\*" OR TargetFilename="C:\Program Files\*" OR TargetFilename="C:\Windows\SysWOW64\*")
| table _time, host, TargetFilename, ProcessId, ProcessName, CommandLine
```