index=syslog sourcetype=syslog
| where NOT cidrmatch("10.0.0.0/8", src_ip) AND NOT cidrmatch("192.168.0.0/16", src_ip) AND NOT cidrmatch("172.16.0.0/12", src_ip)
| where src_port=500 OR dest_port=500
| eval hash_sha256=if(isnull(hash_sha256), "N/A", lower(hash_sha256)),
hunting_trigger="Detects suspicious connections to non-private IPs or port 500 usage.",
mitre_category="Discovery",
mitre_technique="Network Service Scanning",
mitre_technique_id="T1046",
mitre_subtechnique="",
mitre_subtechnique_id="",
apt="Volt Typhoon",
mitre_link="https://attack.mitre.org/techniques/T1046/",
creator="Matthew Iverson",
last_tested="",
upload_date="2025-04-15",
last_modify_date="2025-04-15",
mitre_version="v16",
priority="high"
| table _time, event_description, hash_sha256, src_ip, dest_ip, src_port, dest_port, http_header, mitre_category, mitre_technique, mitre_technique_id, hunting_trigger, mitre_subtechnique, mitre_subtechnique_id, apt, mitre_link, creator, last_tested, upload_date, last_modify_date, mitre_version, priority