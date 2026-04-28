import "pe"

rule Netsh_Helper_DLL_Persistence_Detection
{
  meta:
    author = "Infinit3i"
    purpose = "Detects potential Netsh Helper DLL persistence mechanisms"
    date = "2026-04-27"
    references = "T1546.007 - Event Triggered Execution: Netsh Helper DLL"
    severity = "high"
    mitre_technique = "T1546.007"

  strings:
    // Netsh registry path
    $netsh_registry = "SOFTWARE\\Microsoft\\Netsh" ascii wide nocase

    // Required Netsh helper exports
    $export_inithelper = "InitHelperDll" ascii wide nocase
    $export_starthelper = "StartHelper" ascii wide nocase
    $export_stophelper = "StopHelper" ascii wide nocase

    // Netsh helper context strings
    $context_interface = "interface" ascii wide nocase
    $context_firewall = "firewall" ascii wide nocase
    $context_wlan = "wlan" ascii wide nocase
    $context_routing = "routing" ascii wide nocase
    $context_bridge = "bridge" ascii wide nocase
    $context_ipsec = "ipsec" ascii wide nocase

    // Netsh command strings
    $cmd_add_helper = "add helper" ascii wide nocase
    $cmd_delete_helper = "delete helper" ascii wide nocase
    $cmd_show_helper = "show helper" ascii wide nocase

    // Network-related APIs
    $api_wsastartup = "WSAStartup" ascii wide nocase
    $api_wsacleanup = "WSACleanup" ascii wide nocase
    $api_gethostbyname = "gethostbyname" ascii wide nocase
    $api_socket = "socket" ascii wide nocase

    // Registry manipulation
    $api_regsetvalue = "RegSetValueEx" ascii wide nocase
    $api_regcreatekey = "RegCreateKey" ascii wide nocase
    $api_regqueryvalue = "RegQueryValueEx" ascii wide nocase

    // Netsh process reference
    $process_netsh = "netsh.exe" ascii wide nocase

  condition:
    pe.number_of_signatures >= 0 and
    (
      // Must be a DLL
      pe.characteristics & pe.DLL and

      // Must have required Netsh helper exports
      (pe.exports("InitHelperDll") or $export_inithelper) and

      // Must reference Netsh registry location
      $netsh_registry and

      // Must have network-related capabilities
      (pe.imports("ws2_32.dll", "WSAStartup") or
       pe.imports("ws2_32.dll", "socket") or
       pe.imports("wininet.dll", "InternetOpen") or
       1 of ($api_wsa*, $api_gethostby*, $api_socket)) and

      // May reference networking contexts or commands
      (2 of ($context_*) or 1 of ($cmd_*) or $process_netsh) and

      // Has registry manipulation capability
      (pe.imports("advapi32.dll", "RegSetValueExA") or
       pe.imports("advapi32.dll", "RegSetValueExW") or
       1 of ($api_reg*))
    )
}