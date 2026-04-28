rule BootloaderPersistence_GRUB_Config
{
    meta:
        author = "Infinit3i"
        date = "2026-04-27"
        description = "Detects malicious GRUB bootloader configuration modifications for persistence"
        mitre_technique = "T1547.001"
        severity = "high"

    strings:
        $grub_header = "### BEGIN /etc/grub.d/"
        $grub_menuentry = "menuentry"

        // Suspicious kernel parameters
        $kernel_param1 = "init=/bin/bash"
        $kernel_param2 = "init=/bin/sh"
        $kernel_param3 = "init=/tmp/"
        $kernel_param4 = "rd.shell"
        $kernel_param5 = "systemd.unit=emergency.target"
        $kernel_param6 = "systemd.unit=rescue.target"

        // Suspicious module operations
        $mod_blacklist = "modprobe.blacklist="
        $mod_disable = "module_blacklist="

        // Command injection patterns
        $cmd_inject1 = "; wget "
        $cmd_inject2 = "; curl "
        $cmd_inject3 = "; nc "
        $cmd_inject4 = "$(wget"
        $cmd_inject5 = "`curl"
        $cmd_inject6 = "&& /tmp/"

        // Persistence mechanisms
        $persist1 = "/etc/rc.local"
        $persist2 = "/etc/init.d/"
        $persist3 = "systemd --user"

    condition:
        ($grub_header or $grub_menuentry) and
        (any of ($kernel_param*) or
         any of ($mod_*) or
         any of ($cmd_inject*) or
         any of ($persist*))
}