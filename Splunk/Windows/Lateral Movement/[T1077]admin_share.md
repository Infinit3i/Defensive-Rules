# [T1021.005] SMB Default and Admin Share Access

### Mitre Tactic:  
*Lateral Movement*

#### Description:  
Extracts the SMB share name from any `\\<share>$` path in the command line, then uses `IN` to filter only the shares of interest (ADMIN, C, D, IPC, PRINT). This lets you leverage `IN` for exact matching on the extracted share, while still matching it anywhere in the command line.

```bash
index=wineventlog (EventCode=4688 OR EventCode=1)
| rex field=CommandLine "(?:.*\\\\)(?<Share>[^\\\\]+)\\$"
| where Share IN ("ADMIN","C","D","IPC","PRINT")
| table _time, host, user, CommandLine, Image, ParentProcessName
| sort _time desc
```