```
index=wineventlog source="WinEventLog:System" EventCode=7045 ("\\.\pipe\" OR "\\.\\pipe\\")
| table _time, host, EventCode, ServiceName, ServiceFileName, Message
```
