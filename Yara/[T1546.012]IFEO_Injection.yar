rule IFEO_Injection_Persistence
{
    meta:
        author = "Infinit3i"
        date = "2026-04-27"
        description = "Detects Image File Execution Options injection for persistence"
        mitre_attack = "T1546.012"
        severity = "high"

    strings:
        // IFEO registry paths
        $ifeo_path = "SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Image File Execution Options" ascii wide
        $ifeo_debugger = "\\Debugger" ascii wide
        $ifeo_globalflag = "\\GlobalFlag" ascii wide
        $ifeo_verifier = "\\VerifierDlls" ascii wide

        // Common IFEO targets
        $target_sethc = "sethc.exe" ascii wide
        $target_utilman = "utilman.exe" ascii wide
        $target_osk = "osk.exe" ascii wide
        $target_narrator = "narrator.exe" ascii wide
        $target_magnify = "magnify.exe" ascii wide

        // Suspicious debugger values
        $debugger_cmd = "cmd.exe" ascii wide
        $debugger_ps = "powershell.exe" ascii wide
        $debugger_rundll = "rundll32.exe" ascii wide

        // GlobalFlag values for heap verification
        $globalflag_heap = "0x200" ascii wide
        $globalflag_decimal = "512" ascii wide

        // Registry manipulation
        $reg_key = "RegCreateKeyEx" ascii
        $reg_set = "RegSetValueEx" ascii
        $reg_query = "RegQueryValueEx" ascii

        // Process creation with IFEO
        $ifeo_process = "Image File Execution Options" ascii wide

        // Verifier DLL loading
        $verifier_dll = "VerifierDlls" ascii wide
        $pageheap_dll = "vrfcore.dll" ascii wide

    condition:
        ($ifeo_path and ($ifeo_debugger or $ifeo_globalflag or $ifeo_verifier)) or
        (any of ($target_*) and any of ($debugger_*)) or
        ($ifeo_path and any of ($globalflag_*)) or
        (2 of ($reg_*) and $ifeo_path)
}