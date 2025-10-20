# Defensive-Rules

<p align="center">
  <img src="https://github.com/Infinit3i/Defensive-Rules/blob/4b512a47b36fd47ab62d20a30582fd2f5c090aef/Assets/Images/detections_cover_image.jpeg?raw=true" alt="Detections Cover" />
</p>

<p align="center">
  <br><br>
    <a title="Hits" target="_blank" href="https://github.com/infinit3i/Defensive-Rules"><img src="https://hits.b3log.org/infinit3i/Defensive-Rules.svg"></a>
    <a href="https://github.com/infinit3i/Defensive-Rules/releases"><img src="https://img.shields.io/github/downloads/infinit3i/Defensive-Rules/total.svg"></a>
    <a title="GitHub Pull Requests" target="_blank" href="https://github.com/infinit3i/Defensive-Rules/pulls"><img src="https://img.shields.io/github/issues-pr-closed/infinit3i/Defensive-Rules.svg?style=flat-square&color=FF9966"></a>
  <br>
    <a title="GitHub Commits" target="_blank" href="https://github.com/infinit3i/Defensive-Rules/commits/master"><img src="https://img.shields.io/github/commit-activity/m/infinit3i/Defensive-Rules.svg?style=flat-square"></a>
    <a title="Last Commit" target="_blank" href="https://github.com/infinit3i/Defensive-Rules/commits/master"><img src="https://img.shields.io/github/last-commit/infinit3i/Defensive-Rules.svg?style=flat-square&color=FF9900"></a>
  <br><br>
    <a title="Twitter" target="_blank" href="https://x.com/infinit3i"><img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/b3logos?label=Follow&style=social"></a>
    <a title="Discord" target="_blank" href="https://discord.gg/rzSTrk39yE"><img alt="Chat on Discord" src="https://img.shields.io/discord/805844406920806440?label=Discord&logo=Discord&style=social"></a>
</p>


This repository is a curated collection of detection rules authored by Matthew Iverson, Sigma Rules by data source (Windows, Syslog, Zeek). The goal is to provide defenders with a centralized, modular resource for quickly identifying and deploying high-fidelity detections across multiple log types and platforms. While these rules are currently untested, they are based on real-world use cases, mapped to MITRE ATT&CK, and written with clarity and customization in mind.

**NONE OF THESE ARE TESTED YET**

[Uncoder](https://uncoder.io/)


## Most Command Techniques
- [5] 1	T1082	System Information Discovery
- [5] 2	T1106	Native API
- [5] 3	T1489	Service Stop
- [5] 4	T1497.003	Virtualization/Sandbox Evasion: Time Based Evasion
- [5] 5	T1622	Debugger Evasion
- [5] 6	T1083	File and Directory Discovery
- [5] 7	T1124	System Time Discovery
- [5] 8	T1057	Process Discovery
- [5] 9	T1105	Ingress Tool Transfer
- [5] 10	T1071.001	Application Layer Protocol: Web Protocols

### Next most common Techniques
- [2] 11	T1078	Cloud Accounts
- [2] 12	T1059	Command and Scripting Interpreter
- [2] 13	T1218.011	Rundll32
- [2] 14	T1047	Windows Management Instrumentation
- [2] 15	T1086	PowerShell
16	T1059.003	Windows Command Shell
17	T1003	Credential Dumping
18	T1027	Obfuscated Files or Information
19	T1055	Process Injection
20	T1566.001	Ingress Tool Transfer (Phishing/Download)
21	T1053	Scheduled Task
22	T1035	Service Execution
23	T1216	MSHTA
24	T1112	Modify Registry
25	T1118	Regsvr32
26	T1562.001	Disable or Modify Tools
27	T1220	XSL Script Processing / JavaScript Execution
28	T1021.002	SMB/Proxy Access (Remote Services)
29	T1552.001	LSASS Memory
30	T1553.002	Masquerading









#### TODO




Create windows start up process tree
Detect typical malware
- add template