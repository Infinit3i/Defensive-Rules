/*
   YARA Rule: Process Hollowing Detection
   Author: Defensive Rules Project
   Date: 2026-04-27
   Description: Detects process hollowing techniques and suspicious process injection patterns
*/

rule ProcessHollowing_CreateProcess_Suspended {
    meta:
        author = "Defensive Rules Project"
        date = "2026-04-27"
        description = "Detects CreateProcess with CREATE_SUSPENDED flag often used in process hollowing"
        mitre_attack = "T1055.012"
        severity = "high"

    strings:
        $api1 = "CreateProcessA" ascii wide
        $api2 = "CreateProcessW" ascii wide
        $api3 = "NtCreateProcess" ascii wide
        $flag1 = { 04 00 00 00 } // CREATE_SUSPENDED = 0x00000004
        $flag2 = "CREATE_SUSPENDED" ascii wide
        $memory1 = "VirtualAllocEx" ascii wide
        $memory2 = "WriteProcessMemory" ascii wide
        $memory3 = "SetThreadContext" ascii wide
        $memory4 = "ResumeThread" ascii wide

    condition:
        any of ($api*) and any of ($flag*) and 2 of ($memory*)
}

rule ProcessHollowing_NtUnmapViewOfSection {
    meta:
        author = "Defensive Rules Project"
        date = "2026-04-27"
        description = "Detects NtUnmapViewOfSection API commonly used in process hollowing"
        mitre_attack = "T1055.012"
        severity = "high"

    strings:
        $api1 = "NtUnmapViewOfSection" ascii wide
        $api2 = "ZwUnmapViewOfSection" ascii wide
        $memory1 = "VirtualAllocEx" ascii wide
        $memory2 = "WriteProcessMemory" ascii wide
        $process1 = "CreateProcessA" ascii wide
        $process2 = "CreateProcessW" ascii wide

    condition:
        any of ($api*) and any of ($memory*) and any of ($process*)
}

rule DLL_Injection_Pattern {
    meta:
        author = "Defensive Rules Project"
        date = "2026-04-27"
        description = "Detects classic DLL injection pattern"
        mitre_attack = "T1055.001"
        severity = "medium"

    strings:
        $api1 = "OpenProcess" ascii wide
        $api2 = "VirtualAllocEx" ascii wide
        $api3 = "WriteProcessMemory" ascii wide
        $api4 = "CreateRemoteThread" ascii wide
        $api5 = "LoadLibraryA" ascii wide
        $api6 = "LoadLibraryW" ascii wide
        $api7 = "GetProcAddress" ascii wide

    condition:
        4 of them
}

rule ReflectiveDLL_Loading {
    meta:
        author = "Defensive Rules Project"
        date = "2026-04-27"
        description = "Detects reflective DLL loading patterns"
        mitre_attack = "T1055.001"
        severity = "high"

    strings:
        $string1 = "ReflectiveLoader" ascii wide
        $string2 = "DllMain" ascii wide
        $api1 = "VirtualAlloc" ascii wide
        $api2 = "VirtualProtect" ascii wide
        $api3 = "GetProcAddress" ascii wide
        $api4 = "LoadLibraryA" ascii wide
        $magic1 = { 4D 5A } // PE header
        $magic2 = { 50 45 00 00 } // PE signature

    condition:
        (any of ($string*) or 3 of ($api*)) and all of ($magic*)
}

rule Process_Masquerading_Paths {
    meta:
        author = "Defensive Rules Project"
        date = "2026-04-27"
        description = "Detects system processes in suspicious locations"
        mitre_attack = "T1036.005"
        severity = "medium"

    strings:
        // Legitimate system process names
        $proc1 = "svchost.exe" ascii wide nocase
        $proc2 = "lsass.exe" ascii wide nocase
        $proc3 = "csrss.exe" ascii wide nocase
        $proc4 = "winlogon.exe" ascii wide nocase
        $proc5 = "explorer.exe" ascii wide nocase

        // Suspicious paths (not system32)
        $path1 = "\\temp\\" ascii wide nocase
        $path2 = "\\users\\" ascii wide nocase
        $path3 = "\\downloads\\" ascii wide nocase
        $path4 = "\\desktop\\" ascii wide nocase
        $path5 = "\\appdata\\" ascii wide nocase

    condition:
        any of ($proc*) and any of ($path*)
}