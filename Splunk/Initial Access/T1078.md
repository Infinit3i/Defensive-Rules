# [T1078] NTLM Network Logon

### Mitre Tactic:  
*Initial Access*

#### Description:  
Detects network-based logons (Logon Type 3) using the NTLM authentication protocol. This may indicate lateral movement, legacy authentication usage, or the misuse of valid credentials. Adversaries often exploit NTLM authentication over the network for unauthorized access. Detection is based on Windows Security Event ID 4624.

```spl
index=wineventlog EventCode=4624 LogonType=3 AuthenticationPackageName="NTLM"
| table _time, host, Account_Name, Workstation_Name, Source_Network_Address, AuthenticationPackageName
```