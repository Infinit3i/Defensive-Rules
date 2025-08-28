
# \[T1105] Ingress Tool Transfer

### Mitre Tactic:

*Command and Control, Defense Evasion*

#### Description:

Detects suspicious file transfers such as executables, scripts, or unusually large files observed in Zeek file logs. Adversaries often transfer tools into the environment for later execution. This rule inspects MIME types associated with executables (`application/x-dosexec`, `application/x-sh`, `application/x-executable`, `application/x-msdownload`), large files over 50 MB, and file transfers over FTP. It extracts relevant metadata including source, destination, file size, and URI for further investigation.

```bash
index=zeek sourcetype="zeek:files"
| eval large_file=if(total_bytes > 50000000, "yes", "no")
| where mime_type="application/x-dosexec" OR mime_type="application/x-sh" OR mime_type="application/x-executable" OR mime_type="application/x-msdownload" OR large_file="yes" OR tx_hosts="ftp"
| stats count by fuid, mime_type, total_bytes, tx_hosts, rx_hosts, source, uri
| table fuid, mime_type, total_bytes, tx_hosts, rx_hosts, source, uri
```