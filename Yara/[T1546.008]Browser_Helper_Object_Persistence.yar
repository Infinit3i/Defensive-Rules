import "pe"

rule Browser_Helper_Object_Persistence_Detection
{
  meta:
    author = "Infinit3i"
    purpose = "Detects potential Browser Helper Object (BHO) persistence mechanisms"
    date = "2026-04-27"
    references = "T1546.008 - Event Triggered Execution: Accessibility Features"
    severity = "high"
    mitre_technique = "T1546.008"

  strings:
    // BHO registry paths
    $bho_path1 = "SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Browser Helper Objects" ascii wide nocase
    $bho_path2 = "SOFTWARE\\Wow6432Node\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Browser Helper Objects" ascii wide nocase
    $clsid_path = "SOFTWARE\\Classes\\CLSID" ascii wide nocase

    // BHO interface strings
    $interface_bho = "IObjectWithSite" ascii wide nocase
    $interface_browser = "IBrowserService" ascii wide nocase
    $interface_disp = "IDispatch" ascii wide nocase

    // COM/CLSID related strings
    $com_inproc = "InprocServer32" ascii wide nocase
    $com_threading = "ThreadingModel" ascii wide nocase
    $com_apartment = "Apartment" ascii wide nocase

    // Registry manipulation APIs
    $api_regsetvalue = "RegSetValueEx" ascii wide nocase
    $api_regcreatekey = "RegCreateKey" ascii wide nocase
    $api_regqueryvalue = "RegQueryValueEx" ascii wide nocase

    // COM APIs
    $api_cocreateinstance = "CoCreateInstance" ascii wide nocase
    $api_coregisterclassobject = "CoRegisterClassObject" ascii wide nocase
    $api_dllregisterserver = "DllRegisterServer" ascii wide nocase

    // Browser process names
    $browser_ie = "iexplore.exe" ascii wide nocase
    $browser_chrome = "chrome.exe" ascii wide nocase
    $browser_firefox = "firefox.exe" ascii wide nocase

  condition:
    pe.number_of_signatures >= 0 and
    (
      // Must be a DLL
      pe.characteristics & pe.DLL and

      // Must have COM/registry manipulation capabilities
      (pe.imports("advapi32.dll", "RegSetValueExA") or
       pe.imports("advapi32.dll", "RegSetValueExW") or
       pe.imports("ole32.dll", "CoCreateInstance") or
       pe.exports("DllRegisterServer")) and

      // References BHO registry locations
      (1 of ($bho_path*) or $clsid_path) and

      // Shows BHO interface usage
      (1 of ($interface_*)) and

      // Has COM-related strings
      (2 of ($com_*)) and

      // May reference browser processes
      (1 of ($browser_*) or
       // Or has typical BHO export functions
       pe.exports("DllCanUnloadNow") or
       pe.exports("DllGetClassObject"))
    )
}