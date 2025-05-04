# [T1049] Unusual Outbound Network Activity by Scripting Binaries

### Mitre Tactic:  
*Command and Control*

#### Description:  
Detects unusual outbound network activity from processes that typically should not initiate external connections. This includes legitimate Windows utilities like `powershell.exe`, `regsvr32.exe`, `mshta.exe`, and `rundll32.exe`. These are often abused by adversaries to bypass security controls and establish command and control channels. The detection leverages Sysmon Event ID 3 (Network Connection) for visibility into suspicious outbound traffic.

```spl
index=sysmon EventCode=3
| where Image LIKE "%powershell.exe%" OR Image LIKE "%regsvr32.exe%" OR Image LIKE "%mshta.exe%" OR Image LIKE "%rundll32.exe%"
| table _time, Image, SourceIp, SourcePort, DestinationIp, DestinationPort, Protocol, Initiated, ProcessId, ComputerName
| sort _time desc
```