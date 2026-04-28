/*
   YARA Rule for Registry Run Keys Persistence
   Author: Infinit3i
   Date: 2026/04/27
   Description: Detects malware samples that establish persistence through Registry Run keys
   Reference: https://attack.mitre.org/techniques/T1547/001/
*/

rule Registry_Run_Keys_Persistence
{
    meta:
        description = "Detects malware establishing persistence via Registry Run keys"
        author = "Infinit3i"
        date = "2026-04-27"
        reference = "https://attack.mitre.org/techniques/T1547/001/"
        mitre_technique = "T1547.001"
        severity = "high"

    strings:
        // Registry paths for Run keys
        $run_hklm = "SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run" nocase
        $run_hkcu = "HKEY_CURRENT_USER\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run" nocase
        $runonce_hklm = "SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\RunOnce" nocase
        $runonce_hkcu = "HKEY_CURRENT_USER\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\RunOnce" nocase

        // Registry API calls
        $regsetvalue = "RegSetValueEx" nocase
        $regcreatekey = "RegCreateKeyEx" nocase
        $regopenkeyex = "RegOpenKeyEx" nocase

        // Common persistence patterns
        $persistence_cmd = /cmd\.exe\s+\/c\s+["'][^"']+["']/ nocase
        $persistence_ps = /powershell\.exe\s+-[a-z]+\s+["'][^"']+["']/ nocase
        $persistence_rundll = /rundll32\.exe\s+[^,]+,\s*\w+/ nocase

        // Evasive techniques
        $encoded_cmd = /-e[nc]*\s+[A-Za-z0-9+/]{10,}={0,2}/ nocase
        $hidden_window = /-w[indowstyle]*\s+hidden/ nocase
        $bypass_policy = /-ExecutionPolicy\s+Bypass/ nocase

    condition:
        any of ($run_*, $runonce_*) and
        any of ($regsetvalue, $regcreatekey, $regopenkeyex) and
        (any of ($persistence_*) or any of ($encoded_*, $hidden_*, $bypass_*))
}