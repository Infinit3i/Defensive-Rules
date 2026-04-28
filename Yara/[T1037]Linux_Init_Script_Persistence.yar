rule Linux_Init_Script_Persistence
{
    meta:
        description = "Detects malicious Linux init scripts used for persistence"
        author = "Infinit3i"
        date = "2026-04-27"
        attack_technique = "T1037.004"
        severity = "high"

    strings:
        // Init script headers
        $init1 = "#!/bin/bash" ascii
        $init2 = "#!/bin/sh" ascii
        $init3 = "#! /bin/bash" ascii

        // LSB init script headers
        $lsb1 = "### BEGIN INIT INFO" ascii
        $lsb2 = "# Provides:" ascii
        $lsb3 = "# Required-Start:" ascii

        // Suspicious network activity
        $net1 = "curl -s" ascii
        $net2 = "wget -q" ascii
        $net3 = "nc -l" ascii
        $net4 = "/dev/tcp/" ascii
        $net5 = "bash -i >& /dev/tcp/" ascii

        // Persistence indicators
        $persist1 = "update-rc.d" ascii
        $persist2 = "chkconfig" ascii
        $persist3 = "systemctl enable" ascii
        $persist4 = "/etc/rc.local" ascii

        // Obfuscation techniques
        $obfus1 = "base64 -d" ascii
        $obfus2 = "echo -e" ascii
        $obfus3 = "python -c" ascii
        $obfus4 = "eval $(echo" ascii

    condition:
        (($init1 or $init2 or $init3) or ($lsb1 and $lsb2)) and
        (any of ($net*) or any of ($obfus*)) and
        any of ($persist*)
}