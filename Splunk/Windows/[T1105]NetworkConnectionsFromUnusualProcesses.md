**Description**:  
Detects unusual outbound network activity from processes that typically should not make external connections, such as `powershell.exe`, `regsvr32.exe`, `mshta.exe`, or `rundll32.exe`. Based on Sysmon Event ID 3 (Network Connection).

```spl
index=sysmon EventCode=3
| where Image LIKE "%powershell.exe%" OR Image LIKE "%regsvr32.exe%" OR Image LIKE "%mshta.exe%" OR Image LIKE "%rundll32.exe%"
| table _time, Image, SourceIp, SourcePort, DestinationIp, DestinationPort, Protocol, Initiated, ProcessId, ComputerName
| sort _time desc
```