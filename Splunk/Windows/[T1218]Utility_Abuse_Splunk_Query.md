```
index=sysmon (Image="*\\regsvr32.exe" OR Image="*\\rundll32.exe")
| table _time, host, Image, CommandLine, ParentProcessName
```