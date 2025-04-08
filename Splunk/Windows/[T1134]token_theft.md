```
index=sysmon (
    (EventCode=10 AND (TargetImage="*\\lsass.exe" OR TargetImage="*\\winlogon.exe" OR TargetImage="*\\spoolsv.exe")
     AND GrantedAccess="*0x1F0FFF*" OR GrantedAccess="*0x1fffff*" OR GrantedAccess="*0x143a*" OR GrantedAccess="*0x1410*")
    )
    OR
    (EventCode=8 AND (TargetImage="*\\lsass.exe" OR TargetImage="*\\winlogon.exe" OR TargetImage="*\\spoolsv.exe"))
)
| table _time, host, EventCode, SourceImage, TargetImage, GrantedAccess, User
```
