rule PowerShell_Profile_Persistence_Strings
{
    meta:
        description = "Detects PowerShell profile persistence indicators"
        author = "Infinit3i"
        date = "2026-04-27"
        reference = "https://attack.mitre.org/techniques/T1546/013/"
        mitre_attack = "T1546.013"

    strings:
        // Profile paths and variables
        $profile1 = "$PROFILE" ascii wide
        $profile2 = "Microsoft.PowerShell_profile.ps1" ascii wide
        $profile3 = "profile.ps1" ascii wide
        $profile4 = "$env:USERPROFILE" ascii wide

        // Common persistence commands
        $cmd1 = "Import-Module" ascii wide
        $cmd2 = "Add-Type" ascii wide
        $cmd3 = "Invoke-Expression" ascii wide
        $cmd4 = "Start-Process" ascii wide
        $cmd5 = "New-Object" ascii wide

        // Profile manipulation
        $manip1 = "Out-File" ascii wide
        $manip2 = "Add-Content" ascii wide
        $manip3 = "Set-Content" ascii wide
        $manip4 = "Test-Path" ascii wide

    condition:
        (any of ($profile*) and any of ($cmd*)) or
        (any of ($profile*) and any of ($manip*))
}