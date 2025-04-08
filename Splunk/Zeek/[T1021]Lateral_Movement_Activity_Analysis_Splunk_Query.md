```
index=zeek sourcetype="zeek:conn"
| search service="smb" OR service="rdp" OR service="ssh" OR service="winrm"
| where like(id.orig_h, "192.168.%") AND like(id.resp_h, "192.168.%")
| stats count by id.orig_h, id.resp_h, service
| sort - count
| table id.orig_h, id.resp_h, service, count
```