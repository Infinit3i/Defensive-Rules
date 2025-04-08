```
index=zeek sourcetype="zeek:http" method="POST"
| bin _time span=5m
| stats count by id.orig_h, id.resp_h, uri, _time
| where count > 20
| sort - count
| table _time, id.orig_h, id.resp_h, uri, count
```
