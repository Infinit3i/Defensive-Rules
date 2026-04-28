import "pe"

rule Print_Processor_Persistence_Detection
{
  meta:
    author = "Infinit3i"
    purpose = "Detects potential Print Processor DLL persistence mechanisms"
    date = "2026-04-27"
    references = "T1547.012 - Boot or Logon Autostart: Print Processors"
    severity = "high"
    mitre_technique = "T1547.012"

  strings:
    // Print processor registry paths
    $print_proc_x64 = "SYSTEM\\CurrentControlSet\\Control\\Print\\Environments\\Windows x64\\Print Processors" ascii wide nocase
    $print_proc_x86 = "SYSTEM\\CurrentControlSet\\Control\\Print\\Environments\\Windows NT x86\\Print Processors" ascii wide nocase
    $print_monitors = "SYSTEM\\CurrentControlSet\\Control\\Print\\Monitors" ascii wide nocase

    // Required print processor exports
    $export_openprinter = "OpenPrintProcessor" ascii wide nocase
    $export_printprocessor = "PrintDocumentOnPrintProcessor" ascii wide nocase
    $export_closeprinter = "ClosePrintProcessor" ascii wide nocase
    $export_controlprinter = "ControlPrintProcessor" ascii wide nocase

    // Print spooler related APIs
    $api_openprinter = "OpenPrinter" ascii wide nocase
    $api_closeprinter = "ClosePrinter" ascii wide nocase
    $api_startdocprinter = "StartDocPrinter" ascii wide nocase
    $api_enddocprinter = "EndDocPrinter" ascii wide nocase
    $api_writeprinter = "WritePrinter" ascii wide nocase
    $api_readprinter = "ReadPrinter" ascii wide nocase

    // Print processor specific strings
    $processor_winprint = "winprint" ascii wide nocase
    $processor_localspl = "localspl" ascii wide nocase
    $datatype_raw = "RAW" ascii wide nocase
    $datatype_emf = "NT EMF" ascii wide nocase
    $datatype_text = "TEXT" ascii wide nocase

    // Spooler service references
    $service_spooler = "spoolsv.exe" ascii wide nocase
    $service_spoolss = "spoolss.dll" ascii wide nocase

    // Registry manipulation
    $api_regsetvalue = "RegSetValueEx" ascii wide nocase
    $api_regcreatekey = "RegCreateKey" ascii wide nocase

  condition:
    pe.number_of_signatures >= 0 and
    (
      // Must be a DLL
      pe.characteristics & pe.DLL and

      // Must reference print processor registry paths
      (1 of ($print_proc_*) or $print_monitors) and

      // Must have print processor exports
      (2 of ($export_*) or
       pe.exports("OpenPrintProcessor") or
       pe.exports("PrintDocumentOnPrintProcessor") or
       pe.exports("ClosePrintProcessor")) and

      // Must have print spooler API usage
      (pe.imports("winspool.drv", "OpenPrinterA") or
       pe.imports("winspool.drv", "OpenPrinterW") or
       pe.imports("winspool.drv", "WritePrinter") or
       pe.imports("spoolss.dll", "OpenPrinter") or
       2 of ($api_*)) and

      // May reference standard print processors or datatypes
      (1 of ($processor_*) or
       1 of ($datatype_*) or
       $service_spooler or
       $service_spoolss) and

      // Has registry manipulation capability
      (pe.imports("advapi32.dll", "RegSetValueExA") or
       pe.imports("advapi32.dll", "RegSetValueExW") or
       pe.imports("advapi32.dll", "RegCreateKeyA") or
       pe.imports("advapi32.dll", "RegCreateKeyW"))
    )
}