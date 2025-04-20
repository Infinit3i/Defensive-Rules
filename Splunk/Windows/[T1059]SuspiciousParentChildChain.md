```
index=sysmon EventCode=1
| where (ParentImage LIKE "%winword.exe%" OR ParentImage LIKE "%excel.exe%" OR ParentImage LIKE "%outlook.exe%")
  AND (Image LIKE "%powershell.exe%" OR Image LIKE "%mshta.exe%" OR Image LIKE "%cmd.exe%" OR Image LIKE "%wscript.exe%" OR Image LIKE "%cscript.exe%")
| table _time, ParentImage, Image, CommandLine, ProcessId, ParentProcessId, ComputerName
| sort _time desc
```