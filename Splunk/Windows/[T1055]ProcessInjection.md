```
(
  (index=sysmon (EventCode=8 OR EventCode=10)
    AND TargetImage IN ("C:\\Windows\\System32\\lsass.exe", "C:\\Windows\\explorer.exe")
  )
  OR
  (index=wineventlog EventCode=4673 OR EventCode=4674
    AND Message="lsass.exe" OR Message="explorer.exe"
  )
)
| table _time, EventCode, Image, TargetImage, SourceProcessId, TargetProcessId, TargetProcessName, ProcessGuid, ComputerName, Message
| sort _time
```