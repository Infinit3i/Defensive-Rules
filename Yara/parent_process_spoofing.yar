/*
   YARA Rule: Parent Process Spoofing Detection
   Author: Defensive Rules Project
   Date: 2026-04-27
   Description: Detects parent process spoofing and advanced injection techniques
*/

rule Parent_Process_Spoofing {
    meta:
        author = "Defensive Rules Project"
        date = "2026-04-27"
        description = "Detects CreateProcess with parent spoofing techniques"
        mitre_attack = "T1134.004"
        severity = "high"

    strings:
        $api1 = "CreateProcessA" ascii wide
        $api2 = "CreateProcessW" ascii wide
        $api3 = "UpdateProcThreadAttribute" ascii wide
        $api4 = "InitializeProcThreadAttributeList" ascii wide
        $flag1 = "PROC_THREAD_ATTRIBUTE_PARENT_PROCESS" ascii wide
        $flag2 = { 00 00 02 00 } // PROC_THREAD_ATTRIBUTE_PARENT_PROCESS value
        $extended = "EXTENDED_STARTUPINFO" ascii wide

    condition:
        any of ($api1, $api2) and ($api3 or $api4) and (any of ($flag*) or $extended)
}

rule Token_Manipulation_Injection {
    meta:
        author = "Defensive Rules Project"
        date = "2026-04-27"
        description = "Detects token manipulation for process injection"
        mitre_attack = "T1134"
        severity = "high"

    strings:
        $api1 = "OpenProcessToken" ascii wide
        $api2 = "DuplicateToken" ascii wide
        $api3 = "DuplicateTokenEx" ascii wide
        $api4 = "SetThreadToken" ascii wide
        $api5 = "ImpersonateLoggedOnUser" ascii wide
        $api6 = "CreateProcessWithTokenW" ascii wide
        $api7 = "CreateProcessAsUserA" ascii wide
        $api8 = "CreateProcessAsUserW" ascii wide

    condition:
        3 of them
}

rule Advanced_Process_Injection {
    meta:
        author = "Defensive Rules Project"
        date = "2026-04-27"
        description = "Detects advanced process injection techniques"
        mitre_attack = "T1055"
        severity = "high"

    strings:
        // Process Doppelganging
        $api1 = "NtCreateTransaction" ascii wide
        $api2 = "NtCreateSection" ascii wide
        $api3 = "NtRollbackTransaction" ascii wide

        // AtomBombing
        $api4 = "GlobalAddAtomA" ascii wide
        $api5 = "GlobalAddAtomW" ascii wide
        $api6 = "GlobalGetAtomNameA" ascii wide
        $api7 = "GlobalGetAtomNameW" ascii wide
        $api8 = "QueueUserAPC" ascii wide

        // Thread Execution Hijacking
        $api9 = "SuspendThread" ascii wide
        $api10 = "GetThreadContext" ascii wide
        $api11 = "SetThreadContext" ascii wide
        $api12 = "ResumeThread" ascii wide

    condition:
        (3 of ($api1, $api2, $api3)) or
        (4 of ($api4, $api5, $api6, $api7, $api8)) or
        (all of ($api9, $api10, $api11, $api12))
}

rule Hollow_Process_Indicators {
    meta:
        author = "Defensive Rules Project"
        date = "2026-04-27"
        description = "Detects indicators of process hollowing in memory"
        mitre_attack = "T1055.012"
        severity = "medium"

    strings:
        // Unusual PE sections or headers in hollowed processes
        $pe_magic = { 4D 5A }
        $pe_signature = { 50 45 00 00 }

        // Memory allocation patterns
        $alloc1 = "VirtualAllocEx" ascii wide
        $alloc2 = "NtAllocateVirtualMemory" ascii wide
        $write1 = "WriteProcessMemory" ascii wide
        $write2 = "NtWriteVirtualMemory" ascii wide

        // Section unmapping
        $unmap1 = "NtUnmapViewOfSection" ascii wide
        $unmap2 = "ZwUnmapViewOfSection" ascii wide

    condition:
        ($pe_magic at 0 or $pe_signature) and
        (any of ($alloc*) and any of ($write*)) and
        any of ($unmap*)
}