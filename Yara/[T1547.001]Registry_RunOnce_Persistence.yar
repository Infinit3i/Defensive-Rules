/*
   YARA Rule for Registry RunOnce Persistence
   Author: Infinit3i
   Date: 2026/04/27
   Description: Detects malware using RunOnce keys for persistence and cleanup evasion
   Reference: https://attack.mitre.org/techniques/T1547/001/
*/

rule Registry_RunOnce_Persistence
{
    meta:
        description = "Detects malware using RunOnce keys with cleanup and evasion techniques"
        author = "Infinit3i"
        date = "2026-04-27"
        reference = "https://attack.mitre.org/techniques/T1547/001/"
        mitre_technique = "T1547.001"
        severity = "high"

    strings:
        // RunOnce specific registry paths
        $runonce1 = "SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\RunOnce" nocase
        $runonce2 = "SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\RunOnceEx" nocase
        $runonce3 = "HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\RunOnce" nocase

        // Cleanup and evasion commands
        $cleanup_reg = /reg\s+delete\s+[^\\]+\\RunOnce/ nocase
        $cleanup_ps = "Remove-ItemProperty" nocase
        $cleanup_del = /del\s+\/[fq]+\s+/ nocase
        $cleanup_sdelete = "sdelete" nocase

        // Delay mechanisms
        $delay_ping = /ping\s+-n\s+\d+/ nocase
        $delay_timeout = /timeout\s+\/t\s+\d+/ nocase
        $delay_sleep = /Start-Sleep\s+-Seconds\s+\d+/ nocase
        $delay_choice = /choice\s+\/t\s+\d+/ nocase
        $delay_waitfor = /waitfor\s+\w+\s+\/t\s+\d+/ nocase

        // Command chaining
        $chain_and = " && " nocase
        $chain_semi = " ; " nocase
        $chain_pipe = " | " nocase
        $chain_or = " || " nocase

        // Evasive techniques
        $mshta_exec = /mshta\s+["']?[^"'\s]+\.hta["']?/ nocase
        $regsvr32_silent = /regsvr32\s+\/s\s+/ nocase
        $certutil_decode = /certutil\s+-decode/ nocase
        $bitsadmin_transfer = /bitsadmin\s+\/transfer/ nocase

    condition:
        any of ($runonce*) and
        (
            (any of ($cleanup_*) and any of ($chain_*)) or
            (any of ($delay_*) and any of ($chain_*)) or
            any of ($mshta_*, $regsvr32_*, $certutil_*, $bitsadmin_*)
        )
}