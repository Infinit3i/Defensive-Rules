```
index=zeek sourcetype="zeek:files"
| eval large_file=if(total_bytes > 50000000, "yes", "no")
| where mime_type="application/x-dosexec" OR mime_type="application/x-sh" OR mime_type="application/x-executable" OR mime_type="application/x-msdownload" OR large_file="yes" OR tx_hosts="ftp"
| stats count by fuid, mime_type, total_bytes, tx_hosts, rx_hosts, source, uri
| table fuid, mime_type, total_bytes, tx_hosts, rx_hosts, source, uri
```