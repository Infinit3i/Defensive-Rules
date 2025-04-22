```ad-note
title: MITRE ATTACK V17 DETECTION RULES
```

already looked through recon and resource dev start at initial access


# **Initial Access**

CONTENT INJECTION https://attack.mitre.org/techniques/T1659/

[DS0022](https://attack.mitre.org/datasources/DS0022)
```SPL
(EventCode=11 OR source="/var/log/audit/audit.log" type="open")| where (file_type IN ("exe", "dll", "js", "vbs", "ps1", "sh", "php"))| where (process_path="C:\Users\_\AppData\Local\Temp\_" OR process_path="/tmp/_" OR process_path="/var/tmp/_")| eval risk_score=case( like(file_name, "%.exe"), 8, like(file_name, "%.js"), 9, like(file_name, "%.sh"), 7)| where risk_score >= 7| stats count by _time, host, user, file_name, process_path, risk_score
```
[DS0029](https://attack.mitre.org/datasources/DS0029)
```SPL
(EventCode=3)OR (source="zeek_http_logs" response_code IN (302, 307) AND url IN (malicious_redirect_list))OR (source="proxy_logs" response_body_content IN (suspicious_script_list))| eval risk_score=case( response_code=302 AND url IN (malicious_redirect_list), 9, response_body_content IN (suspicious_script_list), 8, url LIKE "%@%", 7)| where risk_score >= 7| stats count by _time, host, user, url, response_code, risk_score
```
[DS0009](https://attack.mitre.org/datasources/DS0009)
```SPL
(EventCode=1 OR source="/var/log/audit/audit.log" type="execve")| where (parent_process IN ("chrome.exe", "firefox.exe", "edge.exe", "safari.exe", "iexplore.exe"))| where (process_name IN ("powershell.exe", "cmd.exe", "wget", "curl", "bash", "python"))| eval risk_score=case( process_name IN ("powershell.exe", "cmd.exe"), 9, process_name IN ("wget", "curl"), 8, parent_process IN ("chrome.exe", "firefox.exe"), 7)| where risk_score >= 7| stats count by _time, host, user, process_name, parent_process, risk_score
```

DRIVE-BY-COMPROMISE https://attack.mitre.org/techniques/T1189/


[DS0022](https://attack.mitre.org/datasources/DS0022)
```SPL
(sourcetype="WinEventLog:Microsoft-Windows-Sysmon/Operational" EventCode=11 Image="C:\Program Files\Mozilla Firefox\firefox.exe" OR Image="C:\Program Files\Google\Chrome\Application\chrome.exe")OR (sourcetype="/var/log/audit/audit.log" SYSCALL="open" path="/tmp/%" process="firefox" OR process="chrome")| eval risk_score = case( like(path, "%\Temp\%"), 5, like(path, "%AppData%"), 4, like(path, "%/var/tmp%"), 6)| where risk_score >= 5| table _time, host, process, path, risk_score
```



[DS0029](https://attack.mitre.org/datasources/DS0029)
```SPL
(sourcetype="WinEventLog:Microsoft-Windows-Sysmon/Operational" EventCode=3 process="chrome.exe" OR process="firefox.exe")OR (source="cloud_dns_logs" category="newly_registered_domain")OR (source="/var/log/zeek/conn.log" dest_ip IN (malicious_ip_list))| stats count by src_ip, dest_ip, domain, process| where count > 5
```
AND
```SPL
(EventCode=5156 dest_port=80 OR dest_port=443 process="chrome.exe" OR process="firefox.exe")OR (source="/var/log/zeek/http.log" method="GET" uri IN (suspicious_js_files))| stats count by src_ip, dest_ip, uri, user_agent| where count > 3
```


EXPLOIT PUBLIC-FACING APPLICATION

[DS0015](https://attack.mitre.org/datasources/DS0015)
```SPL
(source="C:\inetpub\logs\LogFiles\W3SVC*" OR source="/var/log/apache2/access.log" OR source="/var/log/nginx/access.log")| eval exploit_attempt=if(like(cs_uri_query, "%exec%") OR like(cs_uri_query, "%cmd%") OR like(cs_uri_query, "%cat /etc/passwd%") OR like(cs_uri_query, "%../../%"), 1, 0)| stats count by src_ip, cs_uri_query, sc_status| where exploit_attempt=1 AND count > 5| table _time, src_ip, cs_uri_query, sc_status, count
```

[DS0029](https://attack.mitre.org/datasources/DS0029)
```SPL
(source="/var/log/zeek/http.log" OR source="C:\Windows\System32\LogFiles\Firewall")| regex http_request="(?i)select._from|union._select|cmd=._|exec=._"| stats count by src_ip, dest_ip, http_method, uri_path| where count > 10| table _time, src_ip, dest_ip, http_method, uri_path, count
```


EXTERNAL REMOTE SERVICES

[DS0015](https://attack.mitre.org/datasources/DS0015)
```SPL
index="remote_access_logs" sourcetype="vpn_logs" OR sourcetype="rdp_logs" OR sourcetype="citrix_logs"| stats count by src_ip, dest_ip, user, status, _time| where status="failed" AND count > 5| table _time, user, src_ip, dest_ip, status
```

[DS0029](https://attack.mitre.org/datasources/DS0029)
```SPL
index=network sourcetype="network_traffic"| stats count by src_ip, dest_ip, dest_port, protocol| where dest_port=22 OR dest_port=3389 OR dest_port=8443| table _time, src_ip, dest_ip, dest_port, protocol
```
AND
```SPL
index=network sourcetype="network_packet_capture"| stats count by src_ip, dest_ip, data_size, protocol| where data_size > 1000000| table _time, src_ip, dest_ip, data_size, protocol
```
AND
```SPL
index=network sourcetype="network_traffic_flow"| stats count by src_ip, dest_ip, bytes_sent, bytes_received| where bytes_sent > 1000000 OR bytes_received > 1000000| table _time, src_ip, dest_ip, bytes_sent, bytes_received
```


HARDWARE ADDITIONS

[DS0015](https://attack.mitre.org/datasources/DS0015)
```SPL
(EventCode=6416) OR (source="/var/log/messages" OR source="/var/log/syslog" "usb" OR "thunderbolt")OR (source="sysmon" EventCode=1 Image="C:\Windows\System32\cmd.exe" CommandLine="_usb_")| eval risk_score=case( like(DeviceID, "%BadUSB%"), 8, like(DeviceID, "%RubberDucky%"), 9, like(DeviceID, "%LanTap%"), 7)| where risk_score >= 7| stats count by _time, host, DeviceID, user, risk_score
```

[DS0016](https://attack.mitre.org/datasources/DS0016)
```SPL
(EventCode=4663 OR EventCode=11)OR (source="/var/log/messages" OR source="/var/log/syslog" "block device added")OR (source="macOS_logs" Event="com.apple.diskarbitrationd")| eval risk_score=case( like(DeviceName, "%Kingston%"), 7, like(DeviceName, "%SanDisk%"), 6, like(DeviceName, "%Unknown%"), 9)| where risk_score >= 7| stats count by _time, host, DeviceName, user, risk_score
```

[DS0029](https://attack.mitre.org/datasources/DS0029)
```SPL
(EventCode=10400)OR (source="/var/log/syslog" "new MAC address detected")OR (source="firewall_logs" "DHCP Lease Granted" mac_address NOT IN (trusted_macs))| eval risk_score=case( like(mac_address, "%00:0C:29%"), 8, like(mac_address, "%Unknown%"), 9, like(mac_address, "%RaspberryPi%"), 7)| where risk_score >= 7| stats count by _time, host, mac_address, ip_address, risk_score
```

PHISHING

[DS0015](https://attack.mitre.org/datasources/DS0015)
```SPL
(source="o365_message_trace" OR source="gmail_security_logs" OR source="/var/log/maillog")| search ("dkim=fail" OR "spf=fail" OR "dmarc=fail" OR "suspicious attachment")| eval risk_score=case( like(subject, "%password reset%"), 8, like(subject, "%urgent action required%"), 7, like(subject, "%invoice%"), 6)| where risk_score >= 6| stats count by _time, src_email, dest_email, subject, attachment_name, risk_score
```

[DS0022](https://attack.mitre.org/datasources/DS0022)
```SPL
(EventCode=11 OR EventCode=1116)OR (source="/var/log/audit/audit.log" SYSCALL="open" path IN ("/home/user/Downloads", "C:\Users\Public\Downloads"))| eval risk_score=case( like(path, "%.vbs"), 8, like(path, "%.lnk"), 7, like(path, "%.exe"), 6)| where risk_score >= 6| stats count by _time, host, path, user, risk_score
```

[DS0029](https://attack.mitre.org/datasources/DS0029)
```SPL
(EventCode=3)OR (source="zeek_http_logs" uri IN (malicious_url_list))OR (source="proxy_logs" url IN (malicious_url_list))| eval risk_score=case( domain IN ("bit.ly", "tinyurl.com"), 8, domain IN ("_.xyz", "_.top"), 7, uri IN (malicious_url_list), 9)| where risk_score >= 7| stats count by _time, host, user, uri, domain, risk_score
```
AND
```SPL
(EventCode=3)OR (source="zeek_conn.log" dest_ip IN (malicious_ip_list))OR (source="proxy_logs" url IN (malicious_url_list))| eval risk_score=case( dest_ip IN (malicious_ip_list), 9, dest_port IN (4444, 1337, 8080), 8, user_agent LIKE "%curl%", 7)| where risk_score >= 7| stats count by _time, host, user, dest_ip, dest_port, risk_score
```

REPLICATION THROUGH REMOVABLE MEDIA

[DS0016](https://attack.mitre.org/datasources/DS0016)
```SPL
index=windows sourcetype="WinEventLog:Microsoft-Windows-Partition/Operational" EventID=1006| stats count by DeviceName, VolumeName, EventID, ComputerName, _time| where count > 1| table _time, DeviceName, VolumeName, ComputerName
```

[DS0022](https://attack.mitre.org/datasources/DS0022)
```SPL
index=windows sourcetype="WinEventLog:Security" EventID=4663Accesses="ReadData (or ListDirectory)" AND ObjectType="File"| stats count by ObjectName, Account_Name, ProcessName, ComputerName, _time| where match(ObjectName, "._:\\RemovableMedia\\._") OR match(ObjectName, "._:\\USB._")| table _time, ObjectName, Account_Name, ProcessName, ComputerName
```
AND
```SPL
index=windows sourcetype="WinEventLog:Security" EventID=4663Accesses="WriteData (or AddFile)" AND ObjectType="File"| stats count by ObjectName, Account_Name, ProcessName, ComputerName, _time| where match(ObjectName, "._:\\RemovableMedia\\._") OR match(ObjectName, "._:\\USB._")| table _time, ObjectName, Account_Name, ProcessName, ComputerName
```

[DS0009](https://attack.mitre.org/datasources/DS0009)
```SPL
index=windows sourcetype="WinEventLog:Security" EventID=4688| stats count by New_Process_Name, Creator_Process_Name, Account_Name, ComputerName, _time| where match(New_Process_Name, "._:\\RemovableMedia\\._") OR match(New_Process_Name, "._:\\USB._")| table _time, New_Process_Name, Creator_Process_Name, Account_Name, ComputerName
```

SUPPLY CHAIN COMPROMISE

[DS0022](https://attack.mitre.org/datasources/DS0022)
```SPL
((sourcetype="WinEventLog:Microsoft-Windows-Sysmon/Operational" EventCode=15) OR (sourcetype="WinEventLog:Security" EventCode=4663)) OR (source="/var/log/audit/audit.log" SYSCALL="open" path IN ("/bin", "/usr/bin", "/etc"))| eval risk_score=case( like(path, "%system32%"), 7, like(path, "%/usr/local/bin%"), 6, like(path, "%Program Files%"), 5)| where risk_score >= 5| stats count by host, user, path, process, risk_score| table _time, host, user, path, process, risk_score
```

[DS0013](https://attack.mitre.org/datasources/DS0013)
```SPL
(EventCode=7045 OR EventCode=1116)OR (source="/var/log/system.log" message="Blocked binary execution")| eval risk_score=case( like(Image, "%Temp%"), 7, like(Image, "%AppData%"), 6, like(Image, "%C:\Users\Public%"), 8)| where risk_score >= 6| stats count by host, user, Image, CommandLine, risk_score| table _time, host, user, Image, CommandLine, risk_score
```

TRUSTED RELATIONSHIP

[DS0028](https://attack.mitre.org/datasources/DS0028)
```SPL
(EventCode=4624 OR EventCode=4625) OR (source="/var/log/auth.log" OR source="/var/log/secure" "sshd")OR (source="o365_audit_logs" operation="UserLoggedIn")OR (source="aws_cloudtrail" eventName="ConsoleLogin")| eval risk_score=case( like(User, "%thirdparty%"), 8, failed_attempts > 5, 7, geo_location!="expected_location", 6)| where risk_score >= 6| stats count by _time, host, User, geo_location, risk_score
```
AND
```SPL
(EventCode=4776) OR (source="o365_audit_logs" operation IN ("RefreshTokenUsed", "MFABypassed"))OR (source="aws_cloudtrail" eventName IN ("GetSessionToken", "AssumeRole"))| eval risk_score=case( session_duration > 12*3600, 7, multiple_locations_within_10min=true, 8, mfa_bypass=true, 9)| where risk_score >= 7| stats count by _time, host, User, session_duration, mfa_bypass, risk_score
```

[DS0029](https://attack.mitre.org/datasources/DS0029)
```SPL
(EventCode=3)OR (source="/var/log/zeek/conn.log" "SSH")OR (source="aws_vpc_logs" dest_port IN (3389, 22, 443))| eval risk_score=case( like(src_ip, "%thirdparty%"), 8, lateral_movement_detected=true, 7, new_connection_from_cloud=true, 9)| where risk_score >= 7| stats count by _time, host, src_ip, dest_ip, protocol, risk_score
```

VALID ACCOUNTS

[DS0028](https://attack.mitre.org/datasources/DS0028)
```SPL
sourcetype="WinEventLog:Security" EventCode=4624 | stats count by _time, user, src_ip, dest_ip, LogonType| where LogonType IN ("2", "10") // Interactive or RDP logon| eval is_suspicious=if(src_ip!="expected_ip", "True", "False")| where is_suspicious="True"| table _time, user, src_ip, dest_ip, LogonType
```

WI-FI NETWORKS

