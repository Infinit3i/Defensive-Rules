import "pe"

rule LSA_Security_Package_Persistence_Detection
{
  meta:
    author = "Infinit3i"
    purpose = "Detects potential LSA Security Package DLL persistence mechanisms"
    date = "2026-04-27"
    references = "T1547.005 - Boot or Logon Autostart: Security Support Provider"
    severity = "critical"
    mitre_technique = "T1547.005"

  strings:
    // LSA registry paths
    $lsa_packages = "SYSTEM\\CurrentControlSet\\Control\\Lsa\\Security Packages" ascii wide nocase
    $lsa_auth_packages = "SYSTEM\\CurrentControlSet\\Control\\Lsa\\Authentication Packages" ascii wide nocase
    $lsa_notification = "SYSTEM\\CurrentControlSet\\Control\\Lsa\\Notification Packages" ascii wide nocase
    $lsa_osconfig = "SYSTEM\\CurrentControlSet\\Control\\Lsa\\OSConfig\\Security Packages" ascii wide nocase

    // LSA Security Package exports
    $export_lsalogonuser = "LsaLogonUser" ascii wide nocase
    $export_lsaregisterlogonprocess = "LsaRegisterLogonProcess" ascii wide nocase
    $export_lsacallauthpackage = "LsaCallAuthenticationPackage" ascii wide nocase
    $export_lsalookupnames = "LsaLookupNames" ascii wide nocase

    // Authentication Package exports
    $export_lsainitializepackage = "LsaApInitializePackage" ascii wide nocase
    $export_lsalogonuserex = "LsaApLogonUserEx2" ascii wide nocase
    $export_lsacallauthentication = "LsaApCallPackage" ascii wide nocase

    // Security Package exports
    $export_spinitiallsalogger = "SpInitialize" ascii wide nocase
    $export_spacceptcreds = "SpAcceptCredentials" ascii wide nocase
    $export_spacquirecredshandle = "SpAcquireCredentialsHandle" ascii wide nocase
    $export_splogonuser = "SpLogonUser" ascii wide nocase

    // NTLM/Kerberos related strings
    $ntlm_strings = "NTLM" ascii wide nocase
    $kerb_strings = "Kerberos" ascii wide nocase
    $negotiate_strings = "Negotiate" ascii wide nocase
    $schannel_strings = "Schannel" ascii wide nocase

    // LSA APIs
    $api_lsaaddaccountrights = "LsaAddAccountRights" ascii wide nocase
    $api_lsaopenpolicy = "LsaOpenPolicy" ascii wide nocase
    $api_lsaclose = "LsaClose" ascii wide nocase

  condition:
    pe.number_of_signatures >= 0 and
    (
      // Must be a DLL
      pe.characteristics & pe.DLL and

      // Must reference LSA registry paths
      (1 of ($lsa_*)) and

      // Must have LSA-related exports or API usage
      (2 of ($export_*) or
       pe.imports("advapi32.dll", "LsaAddAccountRights") or
       pe.imports("advapi32.dll", "LsaOpenPolicy") or
       pe.imports("secur32.dll", "LsaLogonUser") or
       pe.imports("secur32.dll", "LsaRegisterLogonProcess")) and

      // May reference authentication protocols
      (1 of ($ntlm_strings, $kerb_strings, $negotiate_strings, $schannel_strings) or
       // Or has characteristic LSA package size and structure
       filesize > 10KB and filesize < 2MB)
    )
}