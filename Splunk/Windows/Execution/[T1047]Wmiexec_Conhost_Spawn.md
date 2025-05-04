# [T1047] Wmiexec Conhost Spawn

### Mitre Tactic:  
*Execution*

#### Description:  
Detects `cmd.exe` spawning `conhost.exe` with `0xffffffff -ForceV1`, a common behavior of Impacket’s `wmiexec.py` after issuing commands through WMI.

```bash
index=wineventlog EventCode=4688
| where Image="*\\conhost.exe" AND CommandLine LIKE "%0xffffffff%" AND CommandLine LIKE "%ForceV1%"
| table _time, host, SubjectUserName, Image, CommandLine, ParentImage
| sort _time desc
```