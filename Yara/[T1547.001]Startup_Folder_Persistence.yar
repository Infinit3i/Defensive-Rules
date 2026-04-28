/*
   YARA Rule for Startup Folder Persistence
   Author: Infinit3i
   Date: 2026/04/27
   Description: Detects malware establishing persistence through Windows startup folders
   Reference: https://attack.mitre.org/techniques/T1547/001/
*/

rule Startup_Folder_Persistence
{
    meta:
        description = "Detects malware placing files in Windows startup folders for persistence"
        author = "Infinit3i"
        date = "2026-04-27"
        reference = "https://attack.mitre.org/techniques/T1547/001/"
        mitre_technique = "T1547.001"
        severity = "medium"

    strings:
        // Startup folder paths
        $startup1 = "\\Microsoft\\Windows\\Start Menu\\Programs\\Startup" nocase
        $startup2 = "\\Microsoft\\Windows\\Start Menu\\Programs\\StartUp" nocase
        $startup3 = "\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Startup" nocase
        $startup4 = "\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\StartUp" nocase

        // File operations
        $copyfile = "CopyFile" nocase
        $movefile = "MoveFile" nocase
        $createfile = "CreateFile" nocase
        $writefile = "WriteFile" nocase

        // Shell operations
        $shfileop = "SHFileOperation" nocase
        $shellex = "ShellExecute" nocase

        // LNK file creation
        $lnk_create = "IShellLink" nocase
        $lnk_save = "IPersistFile" nocase
        $lnk_target = "SetPath" nocase
        $lnk_args = "SetArguments" nocase
        $lnk_working = "SetWorkingDirectory" nocase

        // Suspicious executables in startup
        $exec_ps = /powershell\.exe\s+/ nocase
        $exec_cmd = /cmd\.exe\s+/ nocase
        $exec_rundll = /rundll32\.exe\s+/ nocase
        $exec_regsvr = /regsvr32\.exe\s+/ nocase
        $exec_mshta = /mshta\.exe\s+/ nocase
        $exec_wscript = /wscript\.exe\s+/ nocase
        $exec_cscript = /cscript\.exe\s+/ nocase

        // Evasive techniques in LNK files
        $hidden_target = /Target.*\\AppData\\/ nocase
        $hidden_target2 = /Target.*\\Temp\\/ nocase
        $hidden_target3 = /Target.*\\Users\\Public\\/ nocase
        $encoded_args = /Arguments.*-e[nc]*\s+[A-Za-z0-9+/]{10,}/ nocase
        $hidden_window = /Arguments.*-w[indowstyle]*\s+hidden/ nocase

        // Batch and script files
        $batch_ext = /\.(bat|cmd|vbs|js|jse|ps1)["'\s]/ nocase
        $script_content = /@echo off|powershell|wscript|cscript/ nocase

    condition:
        any of ($startup*) and
        (
            any of ($copyfile, $movefile, $createfile, $writefile, $shfileop, $shellex) or
            (any of ($lnk_*) and (any of ($exec_*) or any of ($hidden_*, $encoded_*))) or
            (any of ($batch_*, $script_*))
        )
}