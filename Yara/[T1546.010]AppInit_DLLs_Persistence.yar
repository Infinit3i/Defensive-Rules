import "pe"

rule AppInit_DLLs_Persistence_Detection
{
  meta:
    author = "Infinit3i"
    purpose = "Detects potential AppInit_DLLs persistence mechanisms"
    date = "2026-04-27"
    references = "T1546.010 - Event Triggered Execution: AppInit DLLs"
    severity = "high"
    mitre_technique = "T1546.010"

  strings:
    // Registry key strings for AppInit_DLLs
    $reg_appinit = "AppInit_DLLs" ascii wide nocase
    $reg_loadappinit = "LoadAppInit_DLLs" ascii wide nocase
    $reg_appinit_path1 = "SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Windows" ascii wide nocase
    $reg_appinit_path2 = "SOFTWARE\\Wow6432Node\\Microsoft\\Windows NT\\CurrentVersion\\Windows" ascii wide nocase

    // Registry API functions
    $api_regsetvalue = "RegSetValueEx" ascii wide nocase
    $api_regcreatekey = "RegCreateKey" ascii wide nocase
    $api_regcreatekey_ex = "RegCreateKeyEx" ascii wide nocase
    $api_regopenkeyex = "RegOpenKeyEx" ascii wide nocase

    // DLL loading related APIs
    $api_loadlibrary = "LoadLibrary" ascii wide nocase
    $api_getprocaddress = "GetProcAddress" ascii wide nocase

    // Suspicious path patterns in DLL persistence
    $path_appdata = "\\AppData\\Local\\" ascii wide nocase
    $path_temp = "\\Temp\\" ascii wide nocase
    $path_programdata = "\\ProgramData\\" ascii wide nocase

  condition:
    pe.number_of_signatures >= 0 and
    (
      // Must have registry manipulation capabilities
      (pe.imports("advapi32.dll", "RegSetValueExA") or
       pe.imports("advapi32.dll", "RegSetValueExW") or
       pe.imports("advapi32.dll", "RegCreateKeyA") or
       pe.imports("advapi32.dll", "RegCreateKeyW") or
       pe.imports("advapi32.dll", "RegCreateKeyExA") or
       pe.imports("advapi32.dll", "RegCreateKeyExW")) and

      // References AppInit_DLLs mechanism
      ($reg_appinit or $reg_loadappinit) and

      // Has registry path references
      ($reg_appinit_path1 or $reg_appinit_path2) and

      // Shows signs of DLL loading capability
      (2 of ($api_*)) and

      // May reference suspicious paths
      (1 of ($path_*) or filesize < 500KB)
    )
}