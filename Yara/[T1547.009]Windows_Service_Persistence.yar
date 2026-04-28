/*
   YARA Rule for Windows Service Persistence
   Author: Infinit3i
   Date: 2026/04/27
   Description: Detects malware establishing persistence through Windows services
   Reference: https://attack.mitre.org/techniques/T1547/009/
*/

rule Windows_Service_Persistence
{
    meta:
        description = "Detects malware creating or modifying Windows services for persistence"
        author = "Infinit3i"
        date = "2026-04-27"
        reference = "https://attack.mitre.org/techniques/T1547/009/"
        mitre_technique = "T1547.009"
        severity = "high"

    strings:
        // Service creation commands
        $sc_create = /sc\s+create\s+\w+/ nocase
        $sc_config = /sc\s+config\s+\w+/ nocase
        $ps_newservice = "New-Service" nocase
        $ps_setservice = "Set-Service" nocase

        // Service registry paths
        $svc_reg1 = "SYSTEM\\CurrentControlSet\\Services\\" nocase
        $svc_reg2 = "HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\" nocase

        // Service registry values
        $imagepath = "ImagePath" nocase
        $servicedll = "ServiceDll" nocase
        $start_type = /Start.*REG_DWORD.*0x00000002/ nocase
        $service_type = /Type.*REG_DWORD.*0x00000010/ nocase

        // Suspicious service paths
        $susp_path1 = /binpath=\s*["']?[^"'\s]*\\AppData\\/ nocase
        $susp_path2 = /binpath=\s*["']?[^"'\s]*\\Temp\\/ nocase
        $susp_path3 = /binpath=\s*["']?[^"'\s]*\\Users\\Public\\/ nocase
        $susp_path4 = /binpath=\s*["']?[^"'\s]*\\ProgramData\\/ nocase

        // Evasive service techniques
        $ps_encoded = /-e[nc]*\s+[A-Za-z0-9+/]{10,}/ nocase
        $rundll_service = /rundll32\.exe\s+[^,]+,\s*\w+/ nocase
        $cmd_service = /cmd\.exe\s+\/c\s+/ nocase

        // Service API calls
        $createservice = "CreateServiceA" nocase
        $openscmanager = "OpenSCManagerA" nocase
        $changeserviceconfig = "ChangeServiceConfigA" nocase

    condition:
        (
            any of ($sc_*, $ps_*) or
            (any of ($svc_reg*) and any of ($imagepath, $servicedll, $start_type, $service_type))
        ) and
        (
            any of ($susp_path*) or
            any of ($ps_encoded, $rundll_service, $cmd_service) or
            any of ($createservice, $openscmanager, $changeserviceconfig)
        )
}