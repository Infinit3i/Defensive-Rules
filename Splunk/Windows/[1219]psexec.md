```
index=wineventlog (EventCode=4688 OR EventCode=1) (CommandLine="*psexec*" OR Image="*\\psexec.exe")
| table _time, host, user, CommandLine, Image, ParentProcessName
```