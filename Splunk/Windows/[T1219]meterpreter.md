```
( index=wineventlog (EventCode=4688 OR EventCode=5140)"meterpreter") OR ( index=sysmon (EventCode=1 OR EventCode=3 OR EventCode=11 OR EventCode=22) "meterpreter")
| table _time host EventCode CommandLine ParentCommandLine Image ParentImage
```