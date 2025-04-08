```
index=wineventlog (EventCode=4688 OR EventCode=1) (CommandLine="*wmiexec*")
| table _time, host, user, CommandLine, ParentProcessName
```
