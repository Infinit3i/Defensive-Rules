rule MOTD_Script_Persistence_Strings
{
    meta:
        description = "Detects MOTD script persistence indicators on Linux"
        author = "Infinit3i"
        date = "2026-04-27"
        reference = "https://attack.mitre.org/techniques/T1037/001/"
        mitre_attack = "T1037.001"

    strings:
        // MOTD paths
        $motd1 = "/etc/update-motd.d/" ascii
        $motd2 = "/etc/motd" ascii
        $motd3 = "/var/run/motd" ascii
        $motd4 = "/run/motd.dynamic" ascii

        // Common script headers
        $header1 = "#!/bin/bash" ascii
        $header2 = "#!/bin/sh" ascii
        $header3 = "#!/usr/bin/env" ascii

        // Suspicious commands in MOTD
        $cmd1 = "nc -" ascii
        $cmd2 = "wget " ascii
        $cmd3 = "curl " ascii
        $cmd4 = "python" ascii
        $cmd5 = "perl " ascii
        $cmd6 = "bash -i" ascii
        $cmd7 = "/dev/tcp/" ascii

        // System information gathering
        $info1 = "uname -a" ascii
        $info2 = "whoami" ascii
        $info3 = "id" ascii
        $info4 = "ps aux" ascii

    condition:
        (any of ($motd*) and any of ($header*)) and
        (any of ($cmd*) or 2 of ($info*))
}