```
index=sysmon (EventCode=1 OR EventCode=3)
| where (ParentImage LIKE "%wmiprvse.exe%" AND (
    Image LIKE "%powershell.exe%" OR
    Image LIKE "%cmd.exe%" OR
    Image LIKE "%mshta.exe%" OR
    Image LIKE "%wscript.exe%" OR
    Image LIKE "%cscript.exe%"
  ))
| table _time, EventCode, Image, ParentImage, CommandLine, ProcessId, ParentProcessId, DestinationIp, DestinationPort, Protocol, ComputerName
| sort _time desc
```
