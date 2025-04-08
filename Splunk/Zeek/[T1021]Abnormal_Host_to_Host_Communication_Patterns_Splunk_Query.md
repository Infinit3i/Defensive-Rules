```
index=zeek sourcetype="zeek:conn"
| where like(id.orig_h, "192.168.%") AND like(id.resp_h, "192.168.%") AND (service="rdp" OR service="winrm" OR service="dcerpc" OR service="msrpc")
| stats count by id.orig_h, id.resp_h, service
| sort - count
| table id.orig_h, id.resp_h, service, count
```