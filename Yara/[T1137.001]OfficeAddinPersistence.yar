rule Office_Addin_Persistence_Strings
{
    meta:
        description = "Detects Office add-in persistence indicators in files"
        author = "Infinit3i"
        date = "2026-04-27"
        reference = "https://attack.mitre.org/techniques/T1137/001/"
        mitre_attack = "T1137.001"

    strings:
        // Registry paths for Office add-ins
        $reg1 = "SOFTWARE\\Microsoft\\Office\\" ascii wide
        $reg2 = "\\Word\\Addins\\" ascii wide
        $reg3 = "\\Excel\\Addins\\" ascii wide
        $reg4 = "\\PowerPoint\\Addins\\" ascii wide
        $reg5 = "\\Outlook\\Addins\\" ascii wide

        // Add-in file extensions
        $ext1 = ".xll" ascii wide
        $ext2 = ".wll" ascii wide
        $ext3 = ".ppa" ascii wide
        $ext4 = ".ppam" ascii wide

        // VBA/COM registration strings
        $vba1 = "CreateObject(" ascii wide
        $vba2 = "GetObject(" ascii wide
        $vba3 = "Application.COMAddins" ascii wide
        $vba4 = "LoadBehavior" ascii wide

    condition:
        (any of ($reg*) and any of ($ext*)) or
        (2 of ($vba*) and any of ($ext*))
}