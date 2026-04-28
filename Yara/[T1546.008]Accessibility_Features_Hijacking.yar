rule Accessibility_Features_Hijacking
{
    meta:
        author = "Infinit3i"
        date = "2026-04-27"
        description = "Detects hijacking of Windows accessibility features for persistence"
        mitre_attack = "T1546.008"
        severity = "critical"

    strings:
        // Accessibility executables
        $acc_sethc = "sethc.exe" ascii wide
        $acc_utilman = "utilman.exe" ascii wide
        $acc_osk = "osk.exe" ascii wide
        $acc_narrator = "narrator.exe" ascii wide
        $acc_magnify = "magnify.exe" ascii wide
        $acc_displayswitch = "displayswitch.exe" ascii wide
        $acc_atbroker = "atbroker.exe" ascii wide

        // System paths where accessibility tools reside
        $sys_path1 = "C:\\Windows\\System32\\" ascii wide
        $sys_path2 = "C:\\Windows\\SysWOW64\\" ascii wide

        // Replacement executables
        $replace_cmd = "cmd.exe" ascii wide
        $replace_ps = "powershell.exe" ascii wide
        $replace_rundll = "rundll32.exe" ascii wide

        // Registry paths for accessibility
        $reg_ifeo = "Image File Execution Options" ascii wide
        $reg_accessibility = "Control Panel\\Accessibility" ascii wide
        $reg_debugger = "Debugger" ascii wide

        // File operations
        $file_copy = "CopyFile" ascii
        $file_move = "MoveFile" ascii
        $file_replace = "ReplaceFile" ascii

        // Winlogon context (parent process)
        $winlogon = "winlogon.exe" ascii wide
        $userinit = "userinit.exe" ascii wide

        // Sticky keys activation sequence
        $sticky_keys = "Sticky Keys" ascii wide
        $utility_manager = "Utility Manager" ascii wide

        // Command line indicators
        $cmdline_sticky = "sethc" ascii wide
        $cmdline_util = "utilman" ascii wide

    condition:
        (any of ($acc_*) and any of ($replace_*)) or
        (any of ($acc_*) and any of ($sys_path*) and any of ($file_*)) or
        ($reg_ifeo and any of ($acc_*) and $reg_debugger) or
        (any of ($winlogon, $userinit) and any of ($acc_*))
}