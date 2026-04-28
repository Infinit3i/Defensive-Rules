rule BITS_Job_Persistence_Strings
{
    meta:
        description = "Detects BITS job persistence indicators in files"
        author = "Infinit3i"
        date = "2026-04-27"
        reference = "https://attack.mitre.org/techniques/T1197/"
        mitre_attack = "T1197"

    strings:
        // BITS command line tools
        $bits1 = "bitsadmin.exe" ascii wide
        $bits2 = "Start-BitsTransfer" ascii wide
        $bits3 = "Add-BitsFile" ascii wide
        $bits4 = "Complete-BitsTransfer" ascii wide

        // BITS job operations
        $op1 = "/create" ascii wide
        $op2 = "/addfile" ascii wide
        $op3 = "/setnotifycmdline" ascii wide
        $op4 = "/resume" ascii wide
        $op5 = "/complete" ascii wide

        // BITS COM interface
        $com1 = "Microsoft.BackgroundIntelligentTransfer.Manager" ascii wide
        $com2 = "BITS.BackgroundCopyManager" ascii wide
        $com3 = "IBackgroundCopyManager" ascii wide

        // Notification commands
        $notify1 = "cmd.exe" ascii wide
        $notify2 = "powershell.exe" ascii wide
        $notify3 = "rundll32.exe" ascii wide

    condition:
        (any of ($bits*) and any of ($op*)) or
        (any of ($com*)) or
        (any of ($bits*) and any of ($notify*))
}