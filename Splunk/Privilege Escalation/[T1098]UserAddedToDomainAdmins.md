# [T1136.001] Domain Admins Group Addition

### Mitre Tactic:  
*Privilege Escalation*

#### Description:  
Detects privilege escalation via user account addition to the Domain Admins group. Uses Windows Security Event ID 4728 and correlates with Sysmon Event ID 1 for visibility into the responsible process.

```bash
(
  index=wineventlog EventCode=4728 GroupName="Domain Admins"
)
OR
(
  index=sysmon EventCode=1
  AND (
    CommandLine LIKE "%net group%Domain Admins% /add%" OR
    CommandLine LIKE "%dsadd%" OR
    CommandLine LIKE "%Add-ADGroupMember%"
  )
)
| table _time, EventCode, SubjectUserName, TargetUserName, GroupName, CommandLine, Image, ComputerName
| sort _time desc
```