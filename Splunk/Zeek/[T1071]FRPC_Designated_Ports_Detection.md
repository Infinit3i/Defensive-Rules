```
index=zeek* sourcetype=zeek* (id.orig_p IN (6000,7000) AND id.resp_p=*) OR (id.resp_p IN (6000,7000) AND id.orig_p=*)
| eval hash_sha256=lower(hash_sha256),
    hunting_trigger="Detects FRPC communication using designated ports.",
    mitre_category="Command and Control",
    mitre_technique="Application Layer Protocol",
    mitre_technique_id="T1071",
    mitre_subtechnique="",
    mitre_subtechnique_id="",
    apt="Volt Typhoon",
    mitre_link="https://attack.mitre.org/techniques/T1071/",
    creator="Matthew Iverson",
    last_tested="2025-04-15",
    upload_date="2025-04-15",
    last_modify_date="2025-04-15",
    mitre_version="v16.1",
    priority="high"
| table _time indextime id.orig_p id.orig_h id.resp_p id.resp_h mitre_category mitre_technique mitre_technique_id hunting_trigger mitre_subtechnique mitre_subtechnique_id apt mitre_link creator last_tested upload_date last_modify_date mitre_version priority
```