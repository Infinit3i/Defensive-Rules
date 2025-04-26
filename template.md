# [T####] Technique Name

# Mitre Tactic

**Description**:  
Detects suspicious PowerShell execution using script block content such as AMSI bypasses, base64-encoded commands, or known C2 techniques. Uses Sysmon Event ID 1 and PowerShell Operational Log Event ID 4104.

```spl
(
  index=sysmon EventCode=1 Image="*powershell.exe*" AND (
    CommandLine LIKE "%FromBase64String%" OR
    CommandLine LIKE "%amsi%" OR
    CommandLine LIKE "%IEX%" OR
    CommandLine LIKE "%Invoke-Obfuscation%" OR
    CommandLine LIKE "%DownloadString%"
  )
)
OR
(
  index=wineventlog EventCode=4104 Message="*powershell*" AND (
    Message LIKE "%FromBase64String%" OR
    Message LIKE "%amsi%" OR
    Message LIKE "%IEX%" OR
    Message LIKE "%Invoke-Obfuscation%" OR
    Message LIKE "%DownloadString%"
  )
)
| table _time, EventCode, Image, CommandLine, Message, ComputerName, ProcessId, ParentImage
| sort _time desc
```