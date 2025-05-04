# [T1057] Named Pipe Service

### Mitre Tactic:  
*Discovery*

#### Description:  
Detects the installation of new services using named pipes (e.g., `\\.\pipe\`), which may indicate lateral movement, persistence, or execution of malicious payloads. Named pipes are often used for inter-process communication and can be abused by adversaries to stealthily interact with malicious services. This detection uses Windows System Event ID 7045, which logs new service installations.

```spl
index=wineventlog source="WinEventLog:System" EventCode=7045 ("\\.\pipe\" OR "\\.\\pipe\\")
| table _time, host, EventCode, ServiceName, ServiceFileName, Message
```