import "pe"

rule WIN_AntiDebug_Common_APIs
{
  meta:
    author = "MJ"
    purpose = "Detects binaries using common Windows anti-debugging APIs"
    date = "2025-09-27"
    references = "IsDebuggerPresent, CheckRemoteDebuggerPresent, Nt/ZwQueryInformationProcess, OutputDebugString, GetTickCount"
    severity = "medium"

  strings:
    // ASCII + wide strings for when names are present but not imported (e.g., GetProcAddress)
    $s_isdbg      = "IsDebuggerPresent" ascii wide nocase
    $s_chkremote  = "CheckRemoteDebuggerPresent" ascii wide nocase
    $s_ntqip      = "NtQueryInformationProcess" ascii wide nocase
    $s_zwqip      = "ZwQueryInformationProcess" ascii wide nocase
    $s_odsA       = "OutputDebugStringA" ascii wide nocase
    $s_odsW       = "OutputDebugStringW" ascii wide nocase
    $s_gtc32      = "GetTickCount" ascii wide nocase
    $s_gtc64      = "GetTickCount64" ascii wide nocase
    $s_qpc        = "QueryPerformanceCounter" ascii wide nocase
    $s_qpf        = "QueryPerformanceFrequency" ascii wide nocase

  condition:
    pe.number_of_signatures >= 0 and
    (
      // Import-based hits (most reliable)
      pe.imports("KERNEL32.dll", "IsDebuggerPresent") or
      pe.imports("kernel32.dll", "IsDebuggerPresent") or
      pe.imports("KERNEL32.dll", "CheckRemoteDebuggerPresent") or
      pe.imports("kernel32.dll", "CheckRemoteDebuggerPresent") or
      pe.imports("KERNEL32.dll", "OutputDebugStringA") or
      pe.imports("kernel32.dll", "OutputDebugStringA") or
      pe.imports("KERNEL32.dll", "OutputDebugStringW") or
      pe.imports("kernel32.dll", "OutputDebugStringW") or
      pe.imports("KERNEL32.dll", "GetTickCount") or
      pe.imports("kernel32.dll", "GetTickCount") or
      pe.imports("KERNEL32.dll", "GetTickCount64") or
      pe.imports("kernel32.dll", "GetTickCount64") or
      pe.imports("KERNEL32.dll", "QueryPerformanceCounter") or
      pe.imports("kernel32.dll", "QueryPerformanceCounter") or
      pe.imports("KERNEL32.dll", "QueryPerformanceFrequency") or
      pe.imports("kernel32.dll", "QueryPerformanceFrequency") or
      pe.imports("NTDLL.DLL", "NtQueryInformationProcess") or
      pe.imports("ntdll.dll", "NtQueryInformationProcess") or
      pe.imports("NTDLL.DLL", "ZwQueryInformationProcess") or
      pe.imports("ntdll.dll", "ZwQueryInformationProcess") or

      // Fallback: string-based hits (covers GetProcAddress/dynamic resolution)
      2 of ($s_*)
    )
}
