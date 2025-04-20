```
index=wineventlog (EventCode=4688 OR EventCode=1) "ADMIN$"
| table _time, host, user, CommandLine, Image, ParentProcessName
```