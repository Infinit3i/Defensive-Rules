/*
   YARA Rules: Beacon Object File (BOF) Detection
   Author: Defensive Rules Project
   Date: 2026-04-27
   Description: Detects Beacon Object Files (BOFs) used by Cobalt Strike and similar frameworks
*/

rule BOF_Binary_Characteristics {
    meta:
        author = "Defensive Rules Project"
        date = "2026-04-27"
        description = "Detects BOF binary characteristics and structure"
        mitre_attack = "T1620"
        severity = "high"
        reference = "https://www.cobaltstrike.com/help-beacon-object-files"

    strings:
        // BOF entry point functions
        $entry1 = "go" ascii wide
        $entry2 = "main" ascii wide
        $entry3 = "start" ascii wide

        // BOF API imports common in position-independent code
        $api1 = "BeaconDataParse" ascii wide
        $api2 = "BeaconDataInt" ascii wide
        $api3 = "BeaconDataShort" ascii wide
        $api4 = "BeaconDataLength" ascii wide
        $api5 = "BeaconPrintf" ascii wide
        $api6 = "BeaconOutput" ascii wide
        $api7 = "BeaconDataExtract" ascii wide

        // Position-independent code patterns
        $pic1 = { E8 00 00 00 00 5? } // call $+5; pop reg (get EIP)
        $pic2 = { 48 8B 05 ?? ?? ?? ?? } // mov rax, [rip+offset]
        $pic3 = { E9 ?? ?? ?? ?? } // jmp relative

        // Memory manipulation patterns common in BOFs
        $mem1 = "VirtualAlloc" ascii wide
        $mem2 = "VirtualProtect" ascii wide
        $mem3 = "WriteProcessMemory" ascii wide
        $mem4 = "ReadProcessMemory" ascii wide
        $mem5 = "CreateRemoteThread" ascii wide

        // Cobalt Strike specific patterns
        $cs1 = "teamserver" ascii wide nocase
        $cs2 = "malleable" ascii wide nocase
        $cs3 = "beacon.dll" ascii wide nocase

        // BOF compilation artifacts
        $compile1 = "x64-mingw32" ascii wide
        $compile2 = "i686-w64-mingw32" ascii wide
        $compile3 = ".rdata$zzz" ascii wide

    condition:
        (uint16(0) == 0x5A4D or uint32(0) == 0x464C457F) and // PE or ELF header
        (
            (3 of ($api*)) or
            (any of ($pic*) and any of ($mem*)) or
            (any of ($cs*) and any of ($entry*)) or
            (2 of ($compile*))
        )
}

rule BOF_Reflective_Loader {
    meta:
        author = "Defensive Rules Project"
        date = "2026-04-27"
        description = "Detects reflective loading patterns used in BOFs"
        mitre_attack = "T1055.001"
        severity = "high"

    strings:
        // Reflective DLL loading patterns
        $refl1 = "ReflectiveLoader" ascii wide
        $refl2 = "DllMain" ascii wide
        $refl3 = "_ReflectiveLoader@" ascii wide

        // Manual DLL loading functions
        $load1 = "LdrLoadDll" ascii wide
        $load2 = "LdrGetDllHandle" ascii wide
        $load3 = "LdrGetProcedureAddress" ascii wide

        // Manual PE parsing
        $pe1 = "IMAGE_DOS_HEADER" ascii wide
        $pe2 = "IMAGE_NT_HEADERS" ascii wide
        $pe3 = "IMAGE_EXPORT_DIRECTORY" ascii wide
        $pe4 = "IMAGE_IMPORT_DESCRIPTOR" ascii wide

        // Hash-based API resolution (common in BOFs)
        $hash1 = { 33 C0 AC 84 C0 74 ?? C1 CA 0D 03 D0 } // ROR13 hash algorithm
        $hash2 = { B8 ?? ?? ?? ?? F7 E1 C1 EA ?? } // hash calculation

        // Shellcode patterns
        $shell1 = { FC 48 83 E4 F0 E8 } // common shellcode prologue
        $shell2 = { 41 51 41 50 52 51 56 48 31 D2 } // shellcode register setup

    condition:
        (
            (any of ($refl*)) or
            (2 of ($load*) and any of ($pe*)) or
            (any of ($hash*)) or
            (any of ($shell*) and filesize < 100KB)
        )
}

rule BOF_Command_Execution {
    meta:
        author = "Defensive Rules Project"
        date = "2026-04-27"
        description = "Detects BOFs designed for command execution"
        mitre_attack = "T1059"
        severity = "medium"

    strings:
        // Command execution APIs
        $exec1 = "CreateProcessA" ascii wide
        $exec2 = "CreateProcessW" ascii wide
        $exec3 = "WinExec" ascii wide
        $exec4 = "ShellExecuteA" ascii wide
        $exec5 = "ShellExecuteW" ascii wide
        $exec6 = "system" ascii wide

        // Process manipulation
        $proc1 = "OpenProcess" ascii wide
        $proc2 = "TerminateProcess" ascii wide
        $proc3 = "GetCurrentProcess" ascii wide
        $proc4 = "EnumProcesses" ascii wide

        // File operations
        $file1 = "CreateFileA" ascii wide
        $file2 = "CreateFileW" ascii wide
        $file3 = "DeleteFileA" ascii wide
        $file4 = "DeleteFileW" ascii wide
        $file5 = "MoveFileA" ascii wide
        $file6 = "MoveFileW" ascii wide

        // Registry operations
        $reg1 = "RegOpenKeyA" ascii wide
        $reg2 = "RegOpenKeyW" ascii wide
        $reg3 = "RegCreateKeyA" ascii wide
        $reg4 = "RegCreateKeyW" ascii wide
        $reg5 = "RegSetValueA" ascii wide
        $reg6 = "RegSetValueW" ascii wide

        // Network operations
        $net1 = "WSAStartup" ascii wide
        $net2 = "socket" ascii wide
        $net3 = "connect" ascii wide
        $net4 = "InternetOpenA" ascii wide
        $net5 = "InternetOpenW" ascii wide
        $net6 = "HttpOpenRequestA" ascii wide
        $net7 = "HttpOpenRequestW" ascii wide

    condition:
        (uint16(0) == 0x5A4D) and filesize < 500KB and
        (
            (3 of ($exec*)) or
            (2 of ($proc*) and 2 of ($file*)) or
            (2 of ($reg*) and any of ($exec*)) or
            (3 of ($net*))
        )
}

rule BOF_Credential_Access {
    meta:
        author = "Defensive Rules Project"
        date = "2026-04-27"
        description = "Detects BOFs designed for credential harvesting"
        mitre_attack = "T1003"
        severity = "high"

    strings:
        // LSASS interaction
        $lsass1 = "lsass.exe" ascii wide nocase
        $lsass2 = "LsaEnumerateLogonSessions" ascii wide
        $lsass3 = "LsaGetLogonSessionData" ascii wide
        $lsass4 = "LsaFreeReturnBuffer" ascii wide

        // Credential dumping
        $cred1 = "SamConnect" ascii wide
        $cred2 = "SamOpenDomain" ascii wide
        $cred3 = "SamOpenUser" ascii wide
        $cred4 = "SamQueryInformationUser" ascii wide
        $cred5 = "NetUserEnum" ascii wide
        $cred6 = "NetUserGetInfo" ascii wide

        // Security package interaction
        $sec1 = "AcquireCredentialsHandleA" ascii wide
        $sec2 = "AcquireCredentialsHandleW" ascii wide
        $sec3 = "InitializeSecurityContextA" ascii wide
        $sec4 = "InitializeSecurityContextW" ascii wide
        $sec5 = "QuerySecurityPackageInfoA" ascii wide
        $sec6 = "QuerySecurityPackageInfoW" ascii wide

        // Token manipulation
        $tok1 = "OpenProcessToken" ascii wide
        $tok2 = "DuplicateToken" ascii wide
        $tok3 = "DuplicateTokenEx" ascii wide
        $tok4 = "ImpersonateLoggedOnUser" ascii wide
        $tok5 = "SetThreadToken" ascii wide

        // Password/hash strings
        $pass1 = "password" ascii wide nocase
        $pass2 = "credential" ascii wide nocase
        $pass3 = "ntlm" ascii wide nocase
        $pass4 = "kerberos" ascii wide nocase
        $pass5 = "mimikatz" ascii wide nocase

    condition:
        (uint16(0) == 0x5A4D) and
        (
            (2 of ($lsass*)) or
            (3 of ($cred*)) or
            (2 of ($sec*) and any of ($tok*)) or
            (3 of ($tok*)) or
            (any of ($pass*) and (any of ($lsass*) or any of ($cred*) or any of ($tok*)))
        )
}

rule BOF_Persistence_Mechanisms {
    meta:
        author = "Defensive Rules Project"
        date = "2026-04-27"
        description = "Detects BOFs designed for persistence establishment"
        mitre_attack = "T1547"
        severity = "medium"

    strings:
        // Service creation/modification
        $svc1 = "OpenSCManagerA" ascii wide
        $svc2 = "OpenSCManagerW" ascii wide
        $svc3 = "CreateServiceA" ascii wide
        $svc4 = "CreateServiceW" ascii wide
        $svc5 = "ChangeServiceConfigA" ascii wide
        $svc6 = "ChangeServiceConfigW" ascii wide

        // Registry persistence
        $reg_persist1 = "SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run" ascii wide
        $reg_persist2 = "SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\RunOnce" ascii wide
        $reg_persist3 = "SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Winlogon" ascii wide
        $reg_persist4 = "SYSTEM\\CurrentControlSet\\Services" ascii wide

        // Scheduled task creation
        $task1 = "schtasks" ascii wide
        $task2 = "TaskScheduler" ascii wide
        $task3 = "ITaskService" ascii wide
        $task4 = "ITaskFolder" ascii wide

        // WMI persistence
        $wmi1 = "WbemServices" ascii wide
        $wmi2 = "WbemContext" ascii wide
        $wmi3 = "__EventFilter" ascii wide
        $wmi4 = "__EventConsumer" ascii wide

        // Startup folder
        $startup1 = "\\Start Menu\\Programs\\Startup" ascii wide
        $startup2 = "\\Microsoft\\Windows\\Start Menu\\Programs\\Startup" ascii wide

    condition:
        (uint16(0) == 0x5A4D) and
        (
            (2 of ($svc*)) or
            (any of ($reg_persist*)) or
            (2 of ($task*)) or
            (2 of ($wmi*)) or
            (any of ($startup*))
        )
}