---
tags:
  - notes
  - SOC
  - detections
---
**EXPLOITATION OF REMOTE SERVICES**

[DS0015](https://attack.mitre.org/datasources/DS0015)
```SPL
sourcetype="WinEventLog:System" (EventCode=7031 OR EventCode=1000) OR sourcetype="linux:syslog" OR sourcetype="macos:system"| search Message="service terminated unexpectedly" OR Message="segmentation fault" OR Message="service restart"| stats count by Host, ServiceName, Message, _time| eval exploitation_suspicious=if(count > threshold OR match(Message, "segmentation fault|service terminated unexpectedly"), "suspicious", "normal")| where exploitation_suspicious="suspicious"| table _time, Host, ServiceName, Message, exploitation_suspicious
```

[DS0029](https://attack.mitre.org/datasources/DS0029)
```SPL
sourcetype="network:packet_capture" OR sourcetype="ids:alert"| search (alert IN ("SMB Exploit Detected", "RDP Exploit Attempt", "MySQL Exploit Attempt")) OR (src_port IN (445, 3389, 3306))| stats count by src_ip, dest_ip, dest_port, protocol, signature, _time| eval anomaly_detected=if(count > threshold OR match(signature, "Exploit Attempt|Remote Code Execution"), "suspicious", "normal")| where anomaly_detected="suspicious"| table _time, src_ip, dest_ip, dest_port, protocol, signature, anomaly_detected
```
**INTERNAL SPEARPHISHING**


[DS0015](https://attack.mitre.org/datasources/DS0015)
```SPL
sourcetype="office365:audit" OR sourcetype="googleworkspace:email" OR sourcetype="chat:log"| search action IN ("SendEmail", "AddAttachment", "CreateMailItem") OR event IN ("message_sent", "attachment_added")| eval sender_domain=split(sender, "@")[1]| where sender_domain="internaldomain.com" AND (like(subject, "%urgent%") OR like(body, "%reset your password%") OR match(attachment, ".(exe|vbs|js|docm|xlsm|zip)"))| stats count by sender, recipient, subject, attachment, _time| eval spearphishing_detected=if(count > threshold OR match(subject, "reset|verify|urgent|important"), "suspicious", "normal")| where spearphishing_detected="suspicious"| table _time, sender, recipient, subject, attachment, spearphishing_detected
```

[DS0029](https://attack.mitre.org/datasources/DS0029)
```SPL
sourcetype="network:packet_capture" OR sourcetype="ids:alert"| search (http_request_uri="*.php?login" OR dns IN ("suspiciousdomain.com", "newly-registered-domain.com")) OR (http_method="POST" AND url_length > threshold)| stats count by src_ip, dest_ip, dest_port, protocol, http_request_uri, _time| eval anomaly_detected=if(count > threshold OR match(http_request_uri, "login|credentials|reset"), "suspicious", "normal")| where anomaly_detected="suspicious"| table _time, src_ip, dest_ip, http_request_uri, protocol, anomaly_detected
```


**~~LATERAL TOOL TRANSFER~~**
 nada


**REMOTE SERVICE SESSION HIJACKING**

```SPL
(source="WinEventLog:Microsoft-Windows-Sysmon/Operational" EventCode="1") OR (source="WinEventLog:Security" EventCode="4688")| search (command_line="_attach-session_" OR command_line="_tmux attach_" OR command_line="_screen -r_" OR command_line="_rdpwrap_")| stats count by user, host, parent_process_name, process_name, command_line, _time| eval hijacking_attempt=if(count > threshold OR match(command_line, "attach|hijack|reconnect"), "suspicious", "normal")| where hijacking_attempt="suspicious"
```

```SPL
sourcetype IN ("WinEventLog:Security", "linux_secure", "macos_secure")| search event_code=4624 OR process="sshd" OR message="Accepted password for"| eval abnormal_login=if(logon_type IN ("3", "10") AND src_ip IN ("_untrusted_ip_range_") AND user NOT IN ("allowed_users"), "suspicious", "normal")| where abnormal_login="suspicious"| stats count by src_ip, user, host, logon_type, _time| table _time, src_ip, user, host, logon_type, abnormal_login
```

```SPL
sourcetype=flow| search (dest_port=22 OR dest_port=3389 OR dest_port=23) AND (connection_state="ESTABLISHED")| eval session_hijack=if(session_duration > threshold_duration AND connection_origin="suspicious_ip", "possible_hijack", "normal")| where session_hijack="possible_hijack"| stats count by src_ip, dest_ip, dest_port, connection_state, _time| table _time, src_ip, dest_ip, dest_port, session_hijack
```


**REMOTE SERVICES**


[DS0017](https://attack.mitre.org/datasources/DS0017)
```SPL
index=* (sourcetype="WinEventLog:Microsoft-Windows-Sysmon/Operational" OR sourcetype="/var/log/auth.log") AND (EventCode= 1 OR EventCode=sshd)| search parent_process_name="sshd" OR parent_process_name="mstsc.exe" OR parent_process_name="rdpclip.exe"| eval suspicious_command=case( match(command_line, "net user|powershell|/etc/passwd|nc|curl|socat"), "high", match(command_line, "whoami|ls|dir|pwd"), "low", true(), "normal" )| stats count by host, process_name, command_line, suspicious_command, _time| where count > threshold AND suspicious_command="high"| table _time, host, process_name, command_line, suspicious_command
```

[DS0028](https://attack.mitre.org/datasources/DS0028)
```SPL
(sourcetype="WinEventLog:Security" EventCode IN (4624, 4648, 4625)) AND LogonType="3" AND UserName NOT '_$' | rename UserLogonId AS LogonID| join type=inner LogonID[| search (source="_WinEventLog:Security" EventCode="4697") | rename UserLogonId as LogonID]
```

[DS0029](https://attack.mitre.org/datasources/DS0029)
```SPL
index="network_logs" sourcetype="network_connection"| search protocol IN ("tcp/22", "tcp/3389", "tcp/5900")| stats count by src_ip, dest_ip, dest_port, _time| eval suspicious_connection=if(src_ip NOT IN ("trusted_sources") AND count > threshold, "high", "normal")| where suspicious_connection="high"| table _time, src_ip, dest_ip, dest_port, suspicious_connection
```
AND
```SPL
sourcetype="netflow" | search dest_port=22 OR dest_port=3389 OR dest_port=5900 OR dest_port=3283 // SSH, RDP, VNC, ARD
```

[DS0009](https://attack.mitre.org/datasources/DS0009)
```SPL
(sourcetype="WinEventLog:Microsoft-Windows-Sysmon/Operational" EventCode="1") OR (sourcetype="WinEventLog:Security" EventCode="4688") AND CommandLine="-R . _-pw" OR CommandLine="-pw ._ . _._@._" OR CommandLine="sekurlsa" OR CommandLine=" -hp " OR CommandLine="._ a .*"
```


**REPLICATION THROUGH REMOVABLE MEDIA**


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


**SOFTWARE DEPLOYMENT TOOLS**


[DS0015](https://attack.mitre.org/datasources/DS0015)
```SPL
sourcetype= aws_system_manager OR sourcetype=azure_arc | search (event_description="_deployment_" OR action="_push_" OR result="success" OR result="failure" OR command="run script")
```
AND
```SPL
sourcetype="aws:cloudtrail" OR sourcetype="windows:eventlog" OR sourcetype="sccm:execmgr"| search EventName="SendCommand" OR EventName="StartSession" OR "SoftwareDeploymentEvent"| stats count by UserIdentity.Arn, SourceIPAddress, EventTime, EventName, Command| eval suspicious=if(count > threshold_limit OR match(UserIdentity.Arn, "unexpected_user_pattern"), "suspicious", "normal")| where suspicious="suspicious"| table EventTime, UserIdentity.Arn, SourceIPAddress, EventName, Command, suspicious
```

[DS0009](https://attack.mitre.org/datasources/DS0009)
```SPL
sourcetype=WinEventLog:Security OR sourcetype=linux_audit | search (process_name IN ("cmd.exe", "powershell.exe", "sh", "bash", "python", "wscript", "msiexec.exe", "installer") AND user IN ("SYSTEM", "Admin", "SCCM"))
```


**TAINT SHARED CONTENT**


[DS0022](https://attack.mitre.org/datasources/DS0022)
```SPL
sourcetype="WinEventLog:Security" EventCode=4663 OR sourcetype="linux:audit" syscall IN ("creat", "open")| search ObjectType="File" AccessMask="0x2" // 0x2 indicates write access| stats count by ObjectName, AccountName, ProcessName, SourceIPAddress, _time| eval suspicious=if(match(ObjectName, "\.exe$|\.lnk$|\.scr$|\.bat$|\.vbs$") AND AccountName!="known_admin_user", "suspicious", "normal")
```
AND
```SPL
sourcetype="WinEventLog:Security" EventCode=4663 OR sourcetype="linux:audit" syscall="write"| search ObjectType="File" AccessMask="0x2"| stats count by ObjectName, AccountName, ProcessName, SourceIPAddress, _time| eval modification_suspicious=if(match(ObjectName, "\.exe$|\.dll$|\.lnk$") AND ProcessName!="approved_tool.exe", "suspicious", "normal")| where modification_suspicious="suspicious"
```

[DS0033](https://attack.mitre.org/datasources/DS0033)
```SPL
sourcetype="WinEventLog:Security" EventCode=5145| search ObjectType="File"| stats count by ShareName, AccountName, AccessMask, SourceIPAddress, _time| eval access_suspicious=if(match(ShareName, "\hidden_directory\") AND AccessMask="0x2", "suspicious", "normal")| where access_suspicious="suspicious"| table _time, ShareName, AccountName, AccessMask, SourceIPAddress, access_suspicious
```

[DS0009](https://attack.mitre.org/datasources/DS0009)
```SPL
sourcetype="WinEventLog:Microsoft-Windows-Sysmon/Operational" EventID=1 OR sourcetype="linux:audit" syscall="execve"| search ParentImage IN ("\network_share\_.exe", "\network_share\_.bat")| stats count by Image, ParentImage, AccountName, CommandLine, _time| eval exec_suspicious=if(match(ParentImage, "\network_share\") AND AccountName!="known_service_account", "suspicious", "normal")| where exec_suspicious="suspicious"
```


**~~USE ALTERNATE AUTHENTICATION MATERIAL~~**

nada