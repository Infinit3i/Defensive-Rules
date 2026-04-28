rule DLL_Search_Order_Hijacking
{
    meta:
        author = "Infinit3i"
        date = "2026-04-27"
        description = "Detects DLL search order hijacking and malicious DLL placement"
        mitre_attack = "T1574.001"
        severity = "high"

    strings:
        // Commonly hijacked DLLs
        $dll_version = "version.dll" ascii wide
        $dll_uxtheme = "uxtheme.dll" ascii wide
        $dll_dwmapi = "dwmapi.dll" ascii wide
        $dll_winmm = "winmm.dll" ascii wide
        $dll_wtsapi = "wtsapi32.dll" ascii wide
        $dll_dbghelp = "dbghelp.dll" ascii wide
        $dll_psapi = "psapi.dll" ascii wide

        // Suspicious DLL paths
        $path_temp = "\\Temp\\" ascii wide
        $path_users = "\\Users\\" ascii wide
        $path_appdata = "\\AppData\\" ascii wide
        $path_programdata = "\\ProgramData\\" ascii wide
        $path_system32_fake = "C:\\Windows\\System32\\" ascii wide

        // DLL loading functions
        $loadlibrary = "LoadLibrary" ascii
        $loadlibraryex = "LoadLibraryEx" ascii
        $getprocaddress = "GetProcAddress" ascii
        $setdlldirectory = "SetDllDirectory" ascii

        // DLL export functions (common hijack targets)
        $export_dllmain = "DllMain" ascii
        $export_dllentrypoint = "DllEntryPoint" ascii
        $export_ordinal = "#1" ascii

        // Side-loading indicators
        $side_load1 = "Current directory" ascii
        $side_load2 = "application directory" ascii

        // Manifest manipulation
        $manifest_dll = ".dll.manifest" ascii wide
        $manifest_local = ".local" ascii wide

    condition:
        (any of ($dll_*) and any of ($path_temp, $path_users, $path_appdata)) or
        (2 of ($loadlibrary*, $getprocaddress, $setdlldirectory)) or
        ($path_system32_fake and any of ($dll_*)) or
        (any of ($manifest_*) and any of ($dll_*))
}