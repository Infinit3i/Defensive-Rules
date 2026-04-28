/*
   YARA Rule for Scheduled Task Persistence
   Author: Infinit3i
   Date: 2026/04/27
   Description: Detects malware establishing persistence through Windows scheduled tasks
   Reference: https://attack.mitre.org/techniques/T1053/005/
*/

rule Scheduled_Task_Persistence
{
    meta:
        description = "Detects malware creating scheduled tasks for persistence"
        author = "Infinit3i"
        date = "2026-04-27"
        reference = "https://attack.mitre.org/techniques/T1053/005/"
        mitre_technique = "T1053.005"
        severity = "high"

    strings:
        // schtasks command patterns
        $schtasks_create = /schtasks\s+\/create/ nocase
        $schtasks_change = /schtasks\s+\/change/ nocase
        $schtasks_run = /schtasks\s+\/run/ nocase

        // PowerShell task creation
        $ps_newtask = "New-ScheduledTask" nocase
        $ps_regtask = "Register-ScheduledTask" nocase
        $ps_settask = "Set-ScheduledTask" nocase

        // Task Scheduler COM objects
        $taskschd_com = "Schedule.Service" nocase
        $taskschd_obj = "TaskScheduler" nocase
        $taskschd_folder = "GetFolder" nocase

        // Task parameters
        $task_tr = /\/tr\s+["']?[^"'\s]+/ nocase
        $task_ru = /\/ru\s+(system|"system"|SYSTEM|"NT AUTHORITY\\SYSTEM")/ nocase
        $task_rl = /\/rl\s+highest/ nocase
        $task_force = /\/f\b/ nocase

        // Suspicious task actions
        $susp_ps = /powershell\.exe\s+-/ nocase
        $susp_cmd = /cmd\.exe\s+\/c/ nocase
        $susp_rundll = /rundll32\.exe\s+/ nocase
        $susp_regsvr = /regsvr32\.exe\s+/ nocase
        $susp_mshta = /mshta\.exe\s+/ nocase

        // Evasive techniques
        $hidden_window = /-w[indowstyle]*\s+hidden/ nocase
        $encoded_cmd = /-e[nc]*\s+[A-Za-z0-9+/]{10,}/ nocase
        $bypass_policy = /-ExecutionPolicy\s+Bypass/ nocase

        // Task registry manipulation
        $task_cache = "SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Schedule\\TaskCache" nocase
        $task_tree = "SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Schedule\\TaskCache\\Tree" nocase

        // Suspicious paths in tasks
        $susp_path1 = /\\AppData\\[^\\]+\\/ nocase
        $susp_path2 = /\\Temp\\[^\\]+/ nocase
        $susp_path3 = /\\Users\\Public\\/ nocase
        $susp_path4 = /\\ProgramData\\[^\\]+/ nocase

    condition:
        (
            any of ($schtasks_*) or
            any of ($ps_*) or
            any of ($taskschd_*) or
            any of ($task_cache, $task_tree)
        ) and
        (
            any of ($task_tr, $task_ru, $task_rl, $task_force) or
            any of ($susp_*) or
            any of ($hidden_*, $encoded_*, $bypass_*)
        )
}