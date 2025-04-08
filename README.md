# Defensive_Rules
sigma, spl rules

**NONE OF THESE ARE TESTED YET**


`windows`


7. Process Injection Techniques  
8. DLL Hijacking or Side-Loading  
9. Credential Dumping and Abnormal Memory Reads  
10. Unusual File System Activities in Sensitive Directories  
11. Anomalous Network Traffic / C2 Beaconing  
12. Abuse of Remote Administration Tools  
13. Utility Abuse (Regsvr32, Rundll32, etc.)  
14. Event Log Tampering or Clearing  
15. Suspicious Driver Installations or Modifications

    
`syslog`

1. SSH Brute-Force Attack Detection  
2. Repeated Failed Login Attempts  
3. Suspicious Sudo Command Usage  
4. Unauthorized Cron Job Creation  
5. Abnormal User Account Modifications  
6. Log Tampering or Deletion  
7. Unexpected Service Start/Stop  
8. Privilege Escalation Attempts  
9. Abnormal Kernel Module Loading  
10. Unauthorized Package Manager Activity  
11. Unusual File Access or Modification  
12. Unexpected System Reboots or Shutdowns  
13. Anomalous Network Connection Logs  
14. Suspicious Remote Access Attempts  
15. Abnormal Firewall Configuration Changes

    
`zeek`

1. DNS Tunneling Detection  
2. Malicious Domain Resolution  
3. Anomalous DNS Query Patterns  
4. Suspicious HTTP User-Agent Strings  
5. Abnormal TLS/SSL Certificate Anomalies  
6. Unusual File Transfer Activity  
7. Internal Port Scanning Detection  
8. Anomalous Connection Volume and Duration  
9. Brute-Force SSH Attempts  
10. Uncommon Protocol Usage  
11. Unusual ICMP Traffic Patterns  
12. Proxy or VPN Bypass Indicators  
13. Command-and-Control Communication Detection  
14. Lateral Movement Activity Analysis  
15. Abnormal Host-to-Host Communication Patterns
