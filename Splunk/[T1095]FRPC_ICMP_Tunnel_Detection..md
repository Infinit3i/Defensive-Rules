index=zeek* sourcetype=zeek*
| where icmp_type=0 OR icmp_type=8
| eval hash_sha256=lower(hash_sha256),
    hunting_trigger="Detects ICMP-based communication indicative of covert FRPC tunneling.",
    mitre_category="Command and Control",
    mitre_technique="Non-Application Layer Protocol",
    mitre_technique_id="T1095",
    mitre_subtechnique="",
    mitre_subtechnique_id="",
    apt="Volt Typhoon",
    mitre_link="https://attack.mitre.org/techniques/T1095/",
    creator="Matthew Iverson",
    last_tested="",
    upload_date="2025-04-15",
    last_modify_date="2025-04-15",
    mitre_version="v16.1",
    priority="high"
| table _time indextime event_description src_ip dest_ip icmp_type icmp_code mitre_category mitre_technique mitre_technique_id hunting_trigger mitre_subtechnique mitre_subtechnique_id apt mitre_link creator last_tested upload_date last_modify_date mitre_version priority