# [T1055] Failed Priv Esc Attempts

### Mitre Tactic:  
*Defense Evasion*

#### Description:  
Detects failed attempts to escalate privileges using `sudo` or `su`. This includes authentication failures, or users not being in the sudoers file, which may indicate misconfigured scripts, insider attempts, or brute-force privilege escalation efforts.

```bash
index=syslog sourcetype="syslog" (
   ("sudo:" AND ("authentication failure" OR "not in the sudoers file"))
   OR
   ("su:" AND ("FAILED" OR "authentication failure"))
)
| table _time, host, Message
```