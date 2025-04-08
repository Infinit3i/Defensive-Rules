```
index=wineventlog (EventCode=4688 OR EventCode=1) ("psexec" OR "winrs" OR "wmic /node:" OR "wmiexec")
| table _time, host, user, CommandLine, Image, ParentProcessName
```