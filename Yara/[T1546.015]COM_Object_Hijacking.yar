rule COM_Object_Hijacking_Persistence
{
    meta:
        author = "Infinit3i"
        date = "2026-04-27"
        description = "Detects COM object hijacking through registry manipulation"
        mitre_attack = "T1546.015"
        severity = "high"

    strings:
        // Registry keys for COM objects
        $clsid_hklm = "HKEY_LOCAL_MACHINE\\SOFTWARE\\Classes\\CLSID" ascii wide
        $clsid_hkcu = "HKEY_CURRENT_USER\\SOFTWARE\\Classes\\CLSID" ascii wide
        $clsid_short1 = "HKLM\\SOFTWARE\\Classes\\CLSID" ascii wide
        $clsid_short2 = "HKCU\\SOFTWARE\\Classes\\CLSID" ascii wide

        // COM server types
        $inproc_server = "InprocServer32" ascii wide
        $local_server = "LocalServer32" ascii wide
        $inproc_handler = "InprocHandler32" ascii wide

        // Suspicious file paths
        $temp_path = "\\Temp\\" ascii wide
        $users_path = "\\Users\\" ascii wide
        $appdata_path = "\\AppData\\" ascii wide
        $programdata_path = "\\ProgramData\\" ascii wide

        // COM-related executables
        $dllhost = "dllhost.exe" ascii wide
        $rundll32 = "rundll32.exe" ascii wide
        $regsvr32 = "regsvr32.exe" ascii wide

        // COM interface identifiers (common hijack targets)
        $iid_shell = "{000214E6-0000-0000-C000-000000000046}" ascii wide
        $iid_context = "{000214E4-0000-0000-C000-000000000046}" ascii wide

        // Registry manipulation functions
        $reg_create = "RegCreateKey" ascii
        $reg_set = "RegSetValue" ascii
        $reg_open = "RegOpenKey" ascii

    condition:
        (any of ($clsid_*) and any of ($inproc_*, $local_server)) or
        (any of ($com_*) and any of ($temp_path, $users_path, $appdata_path)) or
        (any of ($reg_*) and $inproc_server and any of ($temp_path, $users_path))
}