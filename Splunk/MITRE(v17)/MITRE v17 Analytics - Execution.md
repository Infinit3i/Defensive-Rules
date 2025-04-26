```ad-note
title: MITRE ATTACK V17 DETECTION RULES - Execution
```

## **CLOUD ADMINISTRATION COMMAND**

[DS0017](https://attack.mitre.org/datasources/DS0017)

```SPL
index=cloud_logs sourcetype=aws:ssm OR sourcetype=azure:activity| search action IN ("RunCommand", "StartSSMCommand", "ExecuteCommand")
```

[DS0009](https://attack.mitre.org/datasources/DS0009)

```SPL
sourcetype=process_creation| search process_name IN ("WindowsAzureGuestAgent.exe", "ssm-agent.exe")| where process_name IN ("WindowsAzureGuestAgent.exe", "ssm-agent.exe") AND process_path != "/usr/local/bin/"
```

[DS0012](https://attack.mitre.org/datasources/DS0012)

```SPL
sourcetype=azure:activity| search script_name IN ("script.sh", "run.ps1", "start.cmd")| where script_name IN ("script.sh", "run.ps1", "start.cmd") AND user NOT IN ("known_admins")
```

## **COMMAND AND SCRIPTING INTERPRETER**

[DS0017](https://attack.mitre.org/datasources/DS0017)

```SPL
(sourcetype=WinEventLog:Security OR OR sourcetype=sysmon OR sourcetype=linux_secure OR sourcetype=linux_audit OR sourcetype=mac_os_log OR sourcetype=azure:audit OR sourcetype=o365:audit)| search Image IN ("bash", "sh", "cmd", "powershell", "python", "java", "perl", "ruby", "node", "osascript", "wmic")| eval suspicious_cmds=if(like(command_line, "%Invoke-Obfuscation%") OR like(command_line, "%-EncodedCommand%") OR like(command_line, "%IEX%") OR like(command_line, "%wget%") OR like(command_line, "%curl%"), "Yes", "No")
```

[DS0011](https://attack.mitre.org/datasources/DS0011)

```SPL
sourcetype=WinEventLog:Microsoft-Windows-Sysmon/Operational| search EventCode=7 ImageLoaded IN ("C:\Windows\System32\JScript.dll", "C:\Windows\System32\vbscript.dll", "System.Management.Automation.dll")
```

[DS0009](https://attack.mitre.org/datasources/DS0009)

```SPL
(sourcetype=WinEventLog:Security OR sourcetype=sysmon OR sourcetype=linux_secure OR sourcetype=linux_audit OR sourcetype=mac_os_log OR sourcetype=azure:audit OR sourcetype=o365:audit)(EventCode=4688 OR EventID=1 OR _raw=_sh_ OR _raw=_python_ OR _raw=_powershell_ OR _raw=_cmd_ OR _raw=_script_ OR _raw=_wscript_ OR _raw=_bash_)
```

[DS0012](https://attack.mitre.org/datasources/DS0012)

```SPL
index=windows (EventCode=1 OR EventCode=4688 OR EventCode=4103 OR EventCode=4104) (CommandLine="_script_")| search script_name IN ("_.ps1", "_.sh", "_.py", "_.rb", "_.js", "_.vbs")| eval suspicious_script=if(like(script_name, "%.sh") AND hour(_time) NOT BETWEEN 8 AND 18, "Yes", "No")| where suspicious_script="Yes"
```

## **CONTAINER ADMINISTRATION COMMAND**

[DS0017](https://attack.mitre.org/datasources/DS0017)

```SPL
sourcetype=docker:daemon OR sourcetype=kubernetes:apiserver| search command IN ("docker exec", "kubectl exec")
```

[DS0009](https://attack.mitre.org/datasources/DS0009)

```SPL
sourcetype=docker:daemon OR sourcetype=kubernetes:container| search action="start" OR action="exec"
```

## **DEPLOY CONTAINER**

[DS0015](https://attack.mitre.org/datasources/DS0015)

```SPL
sourcetype=docker:daemon OR sourcetype=kubernetes:event| where action IN ("create", "start")
```

[DS0032](https://attack.mitre.org/datasources/DS0032)

```SPL
sourcetype=docker:daemon OR sourcetype=kubernetes:event| search action="create"| where image NOT IN ("known_images_list")
```

AND

```SPL
sourcetype=docker:daemon OR sourcetype=kubernetes:event| search action="start"| where user NOT IN ("known_admins")
```

## **ESXI ADMINISTRATION COMMAND**

[DS0015](https://attack.mitre.org/datasources/DS0015)

```SPL
sourcetype="vmware:log"| eval guest_operation=coalesce('eventMessage', 'message')| search guest_operation="StartProgramInGuest" OR guest_operation="ListProcessesInGuest" OR guest_operation="ListFileInGuest" OR guest_operation="InitiateFileTransferFromGuest"| stats count by host, vm_name, user, guest_operation, _time| eventstats count as total_operations by host| where total_operations > 10 OR (user!="expected_admin" AND total_operations > 1)| table _time, host, vm_name, user, guest_operation
```

## **INPUT INJECTION**

[DS0016](https://attack.mitre.org/datasources/DS0016)

```SPL
index=wineventlog sourcetype="WinEventLog:System" EventCode=400 OR EventCode=20001| eval usb_device=coalesce(UsbDevice, DeviceName)| search usb_device="_keyboard_" OR usb_device="_HID_"| transaction usb_device maxspan=30s| join usb_device [ search index=main sourcetype="WinEventLog:Security" (EventCode=4688 OR EventCode=4104) | stats count by usb_device, _time, CommandLine, ParentProcessName, NewProcessName ]| where count > 0| table _time, usb_device, NewProcessName, CommandLine, ParentProcessName
```

[DS0009](https://attack.mitre.org/datasources/DS0009)

```SPL
index=main sourcetype="WinEventLog:Security" OR sourcetype=sysmon(NewProcessName="_powershell.exe" OR NewProcessName="_cmd.exe" OR NewProcessName="_bash" OR NewProcessName="_osascript")| stats earliest(_time) as start_time, latest(_time) as end_time, values(ParentProcessName) as parent, values(CommandLine) as cmd by NewProcessName, user| where parent="explorer.exe" OR parent="winlogon.exe" OR parent="unknown"| eval duration = end_time - start_time| where duration < 10| table start_time, NewProcessName, cmd, parent, user
```

[DS0012](https://attack.mitre.org/datasources/DS0012)

```SPL
(index=main sourcetype="WinEventLog:Microsoft-Windows-PowerShell/Operational" EventCode=4104)OR (index=main sourcetype=sysmon EventCode=1 CommandLine="_osascript_" OR CommandLine="_python_" OR CommandLine="_bash_")| transaction user maxspan=15s| join user [ search index=wineventlog sourcetype="WinEventLog:System" (EventCode=400 OR EventCode=20001) | search DeviceName="_HID_" OR DeviceName="_Keyboard_" | stats count by user, _time, DeviceName ]| table _time, user, CommandLine, DeviceName
```

## **INTER-PROCESS COMMUNICATION**

[DS0011](https://attack.mitre.org/datasources/DS0011)

```SPL
sourcetype=Sysmon EventCode=7| search module_path != "/usr/lib/_" OR module_path != "/windows/system32/_" OR module_path != "/lib/*"| stats count by module_path process_name user| where module_path IN ("suspicious_modules.dll", "unknown.so")
```

[DS0009](https://attack.mitre.org/datasources/DS0009)

```SPL
sourcetype=Sysmon EventCode=10| search access_type="IPC" AND process_privilege!="high"| stats count by process_name target_process_name user| where target_process_name IN ("VPNService", "Systemd", "svchost.exe")
```

AND

```SPL
(( sourcetype=WinEventLog:Security EventCode=4688) OR (sourcetype=Sysmon EventCode=1))| search parent_process IN ("XPCService", "com.apple.securityd") OR process_name IN ("cmd.exe", "bash", "osascript")
```

## **NATIVE API**

[DS0011](https://attack.mitre.org/datasources/DS0011)

```SPL
sourcetype=Sysmon EventCode=7| stats count by module_name process_name user| where module_name IN ("ntdll.dll", "kernel32.dll", "advapi32.dll", "user32.dll", "gdi32.dll")
```

## **SCHEDULED TASK/JOB**

[DS0017](https://attack.mitre.org/datasources/DS0017)

```SPL
index=security (sourcetype="WinEventLog:Security" OR sourcetype="linux_secure" OR sourcetype="macos_secure" OR sourcetype="container_logs")| eval CommandLine = coalesce(CommandLine, process)| where (sourcetype="WinEventLog:Security" AND EventCode IN (4697, 4702, 4698)) OR (sourcetype="linux_secure" AND CommandLine LIKE "%cron%" OR CommandLine LIKE "%at%") OR (sourcetype="macos_secure" AND CommandLine LIKE "%launchctl%" OR CommandLine LIKE "%cron%") OR (sourcetype="container_logs" AND (CommandLine LIKE "%cron%" OR CommandLine LIKE "%at%"))| where (sourcetype="WinEventLog:Security" AND (CommandLine LIKE "%/create%" OR CommandLine LIKE "%/delete%" OR CommandLine LIKE "%/change%")) OR (sourcetype="linux_secure" AND (CommandLine LIKE "%-f%" OR CommandLine LIKE "%-m%" OR CommandLine LIKE "%--env%")) OR (sourcetype="macos_secure" AND (CommandLine LIKE "%/Library/LaunchDaemons%" OR CommandLine LIKE "%/Library/LaunchAgents%" OR CommandLine LIKE "%/System/Library/LaunchDaemons%" OR CommandLine LIKE "%/System/Library/LaunchAgents%")) OR (sourcetype="container_logs" AND (CommandLine LIKE "%-f%" OR CommandLine LIKE "%--schedule%" OR CommandLine LIKE "%--env%"))
```

[DS0032](https://attack.mitre.org/datasources/DS0032)

```SPL
index=container_logs sourcetype="docker_events" OR sourcetype="kubernetes_events"| eval event_action=coalesce(action, status)| where (event_action="create" OR event_action="start")| search event_type="container"| search (parameters="_--privileged_" OR parameters="_--cap-add=_" OR parameters="_--volume=_" OR parameters="_--network=host_" OR parameters="_--device_")
```

[DS0022](https://attack.mitre.org/datasources/DS0022)

```SPL
index=security_logs OR index=system_logs(sourcetype="docker_events" OR sourcetype="kubernetes_events" OR sourcetype="wineventlog:security" OR sourcetype="linux_secure" OR sourcetype="syslog" OR sourcetype="file_monitoring")| eval platform=case( sourcetype=="docker_events" OR sourcetype=="kubernetes_events", "Containers", sourcetype=="wineventlog:security", "Windows", sourcetype=="linux_secure" OR sourcetype=="syslog", "Linux", sourcetype=="mac_os_events", "macOS")| search ( (platform="Containers" AND (event_type="file_create" AND (file_path="_/etc/cron.d/_" OR file_path="_/etc/systemd/system/_"))) OR (platform="Windows" AND EventCode=4663 AND (ObjectName="C:\Windows\System32\Tasks\_" OR ObjectName="C:\Windows\Tasks\_")) OR (platform="Linux" AND (file_path="/etc/cron.d/_" OR file_path="/etc/systemd/system/_")) OR (platform="macOS" AND (file_path="/Library/LaunchDaemons/_" OR file_path="/Library/LaunchAgents/_")))
```

AND

```SPL
index=security_logs OR index=system_logs(sourcetype="docker_events" OR sourcetype="kubernetes_events" OR sourcetype="wineventlog:security" OR sourcetype="linux_secure" OR sourcetype="syslog" OR sourcetype="file_monitoring")| eval platform=case( sourcetype=="docker_events" OR sourcetype=="kubernetes_events", "Containers", sourcetype=="wineventlog:security", "Windows", sourcetype=="linux_secure" OR sourcetype=="syslog", "Linux", sourcetype=="mac_os_events", "macOS")| search ( (platform="Containers" AND (event_type="file_modify" AND (file_path="_/etc/cron.d/_" OR file_path="_/etc/systemd/system/_" OR file_path="/etc/crontab"))) OR (platform="Windows" AND EventCode=4663 AND (ObjectName="C:\Windows\System32\Tasks\_" OR ObjectName="C:\Windows\Tasks\_")) OR (platform="Linux" AND (file_path="/etc/cron.d/_" OR file_path="/etc/systemd/system/_" OR file_path="/etc/crontab")) OR (platform="macOS" AND (file_path="/Library/LaunchDaemons/_" OR file_path="/Library/LaunchAgents/_")))
```

[DS0009](https://attack.mitre.org/datasources/DS0009)

```SPL
(sourcetype="WinEventLog:Microsoft-Windows-Sysmon/Operational" OR sourcetype="WinEventLog:Security" OR sourcetype="linux_auditd" OR sourcetype="syslog") | where Image IN ("schtasks.exe", "at.exe", "Taskeng.exe", "cron", "crontab", "systemd-timers")
```

[DS0003](https://attack.mitre.org/datasources/DS0003)

```SPL
source="*WinEventLog:Security" EventCode="4698" | where NOT (TaskName IN ("\Microsoft\Windows\UpdateOrchestrator\Reboot", "\Microsoft\Windows\Defrag\ScheduledDefrag"))| search TaskContent="powershell.exe" OR TaskContent="cmd.exe"
```

## **SERVERLESS EXECUTION**

[DS0015](https://attack.mitre.org/datasources/DS0015)

```SPL
sourcetype=aws:lambda OR sourcetype=azure:function OR sourcetype=gcp:function| where result_status != "Success"
```

[DS0025](https://attack.mitre.org/datasources/DS0025)

```SPL
index=cloud_logs sourcetype=aws:iam OR sourcetype=azure:activity OR sourcetype=gcp:iam| search action IN ("iam:PassRole", "iam:CreateFunction", "iam:AddPermission", "iam:UpdateFunctionConfiguration")
```

~~**SHARED MODULES*~~*
<https://attack.mitre.org/techniques/T1129/>
nada

## **SOFTWARE DEPLOYMENT TOOLS**

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

## **SYSTEM SERVICES**

[DS0017](https://attack.mitre.org/datasources/DS0017)

```SPL
sourcetype=command_logs| search command IN ("systemctl", "sc", "launchctl")
```

[DS0022](https://attack.mitre.org/datasources/DS0022)

```SPL
sourcetype=file_monitor| search file_path IN ("/etc/systemd/system/_", "/etc/init.d/_", "/Library/LaunchDaemons/*", "C:\Windows\System32\services.exe")
```

[DS0009](https://attack.mitre.org/datasources/DS0009)

```SPL
sourcetype=process_logs| search process IN ("services.exe", "systemd", "launchd")
```

[DS0019](https://attack.mitre.org/datasources/DS0019)

```SPL
sourcetype=service_logs| search service_action="create" OR service_action="modify"| where user NOT IN ("known_admins") AND service_name NOT IN ("known_services")
```

[DS0024](https://attack.mitre.org/datasources/DS0024)

```SPL
sourcetype= Sysmon EventCode=12| search registry_path="HKLM\SYSTEM\CurrentControlSet\Services\*" | where registry_action="modified" AND user NOT IN ("known_admins")
```

## **USER EXECUTION**

[DS0015](https://attack.mitre.org/datasources/DS0015)

```SPL
sourcetype=application_log EventCode=1000 OR EventCode=1001| search application IN ("winword.exe", "excel.exe", "chrome.exe", "firefox.exe", "adobe.exe", "zip.exe")| stats count by application event_description| where event_description IN ("opened document", "clicked link", "executed file")
```

[DS0017](https://attack.mitre.org/datasources/DS0017)

```SPL
sourcetype=WinEventLog:Powershell EventCode=4104| search process_name IN ("powershell.exe", "cmd.exe", "zip.exe", "winrar.exe")| stats count by process_name command_line user| where command_line LIKE "%unzip%" OR command_line LIKE "%decode%"
```

[DS0032](https://attack.mitre.org/datasources/DS0032)

```SPL
sourcetype=container_creation OR sourcetype=container_start| stats count by container_name event_description user| where container_name NOT IN ("") AND event_description IN ("created", "started")
```

[DS0029](https://attack.mitre.org/datasources/DS0029)

```SPL
sourcetype=sysmon EventCode=3| search process_name IN ("winword.exe", "chrome.exe", "firefox.exe") | stats count by src_ip dest_ip dest_port process_name| where dest_ip NOT IN ("")
```

[DS0009](https://attack.mitre.org/datasources/DS0009)

```SPL
((sourcetype=WinEventLog:Security EventCode=4688) OR (sourcetype=Sysmon EventCode=1))| search parent_process IN ("winword.exe", "excel.exe", "chrome.exe", "firefox.exe")| stats count by parent_process process_name command_line user| where process_name NOT IN ("chrome.exe", "firefox.exe", "winword.exe", "excel.exe")
```

## **WINDOWS MANAGEMENT INSTRUMENTATION**

[DS0017](https://attack.mitre.org/datasources/DS0017)

```SPL
index=windows_logs sourcetype=WinEventLog:Security OR sourcetype=WinEventLog:Microsoft-Windows-Sysmon/Operational| eval CommandLine=coalesce(CommandLine, ParentCommandLine)| eval ProcessName=lower(ProcessName), CommandLine=lower(CommandLine)| search ProcessName IN ("wmic.exe", "powershell.exe", "wbemtool.exe", "wmiprvse.exe", "wmiadap.exe", "scrcons.exe")| search CommandLine IN ("_process call create_", "_shadowcopy delete_", "_process start_", "_createobject_")| stats count by _time, ComputerName, User, ProcessName, CommandLine, ParentProcessName, ParentCommandLine, dest, src_ip, dest_ip| eval alert_message="Suspicious WMI activity detected: " + ProcessName + " executed by " + User + " on " + ComputerName + " with command: " + CommandLine| where NOT (User="SYSTEM" OR ProcessName="wmiprvse.exe" OR CommandLine="_wmic shadowcopy delete_" AND src_ip="trusted_ip_range")| table _time, ComputerName, User, ProcessName, CommandLine, ParentProcessName, ParentCommandLine, src_ip, dest_ip, alert_message
```

[DS0029](https://attack.mitre.org/datasources/DS0029)

```SPL
index=windows_logs sourcetype=WinEventLog:Security OR sourcetype=WinEventLog:Microsoft-Windows-Sysmon/Operational OR sourcetype=WinEventLog:Microsoft-Windows-Security-Auditing| eval ProcessName=lower(ProcessName), CommandLine=lower(CommandLine)| search ProcessName IN ("wmic.exe", "powershell.exe", "wmiprvse.exe", "wmiadap.exe", "scrcons.exe", "wbemtool.exe")| search CommandLine IN ("_process call create_", "_win32_process_", "_win32_service_", "_shadowcopy delete_", "_network_")| search (sourcetype="WinEventLog:Security" EventCode=4688) OR (sourcetype="WinEventLog:Microsoft-Windows-Sysmon/Operational" EventCode=1)| join ProcessName [ search index=windows_logs sourcetype=WinEventLog:Microsoft-Windows-Sysmon/Operational EventCode=3 | eval DestinationIp = coalesce(DestinationIp, dest_ip)| eval DestinationPort = coalesce(DestinationPort, dest_port)| search DestinationPort IN (135, 5985, 5986) ]| stats count by _time, ComputerName, User, ProcessName, CommandLine, DestinationIp, DestinationPort, dest, src_ip, dest_ip| eval alert_message="Suspicious WMI Network Connection Detected: " + ProcessName + " executed by " + User + " on " + ComputerName + " with command: " + CommandLine + " connecting to " + DestinationIp + ":" + DestinationPort| where NOT (User="SYSTEM" OR ProcessName="wmiprvse.exe" OR (src_ip="trusted_ip_range" AND DestinationIp="trusted_ip_range"))| table _time, ComputerName, User, ProcessName, CommandLine, DestinationIp, DestinationPort, src_ip, dest_ip, alert_message
```

[DS0009](https://attack.mitre.org/datasources/DS0009)

```SPL
index=security sourcetype="WinEventLog:Security" (EventCode=4688 OR EventCode=4656 OR EventCode=4103 OR EventCode=800) | eval command_line = coalesce(CommandLine, ParentCommandLine) | where (ProcessName="wmic.exe" AND (command_line LIKE "%/node:%" OR command_line LIKE "%process call create%"))OR (command_line LIKE "_Invoke-WmiMethod_" OR command_line LIKE "_Get-WmiObject_" OR command_line LIKE "_gwmi_" OR command_line LIKE "_win32_process_")
```

[DS0005](https://attack.mitre.org/datasources/DS0005)

```SPL
index=security sourcetype="WinEventLog:Microsoft-Windows-WMI-Activity/Operational" (EventCode=5861 OR EventCode=5857 OR EventCode=5858) | eval CommandLine = coalesce(CommandLine, ParentCommandLine) | where (EventCode=5861 AND (CommandLine LIKE "_create_" OR CommandLine LIKE "_process_")) OR (EventCode=5857 AND (CommandLine LIKE "_exec_" OR CommandLine LIKE "_invoke_")) OR (EventCode=5858 AND (CommandLine LIKE "_payload_" OR CommandLine LIKE "_wmic_"))
```
