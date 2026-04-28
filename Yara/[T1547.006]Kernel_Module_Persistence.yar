rule Kernel_Module_Persistence
{
    meta:
        description = "Detects malicious kernel modules for persistence"
        author = "Infinit3i"
        date = "2026-04-27"
        attack_technique = "T1547.006"
        severity = "critical"

    strings:
        // Kernel module headers
        $mod1 = "MODULE_LICENSE(" ascii
        $mod2 = "MODULE_AUTHOR(" ascii
        $mod3 = "MODULE_DESCRIPTION(" ascii
        $mod4 = "module_init(" ascii
        $mod5 = "module_exit(" ascii

        // Kernel includes
        $inc1 = "#include <linux/module.h>" ascii
        $inc2 = "#include <linux/kernel.h>" ascii
        $inc3 = "#include <linux/init.h>" ascii
        $inc4 = "#include <linux/syscalls.h>" ascii

        // Suspicious functionality
        $sus1 = "sys_call_table" ascii
        $sus2 = "hijack" ascii nocase
        $sus3 = "rootkit" ascii nocase
        $sus4 = "hide" ascii nocase
        $sus5 = "stealth" ascii nocase

        // System call hooking
        $hook1 = "orig_sys_" ascii
        $hook2 = "real_sys_" ascii
        $hook3 = "sys_ni_syscall" ascii
        $hook4 = "kallsyms_lookup_name" ascii

        // Kernel symbol manipulation
        $sym1 = "symbol_get(" ascii
        $sym2 = "symbol_put(" ascii
        $sym3 = "find_symbol(" ascii
        $sym4 = "module_kallsyms_lookup_name" ascii

        // Network backdoors
        $net1 = "socket(" ascii
        $net2 = "bind(" ascii
        $net3 = "listen(" ascii
        $net4 = "accept(" ascii

        // File hiding
        $hide1 = "proc_create" ascii
        $hide2 = "proc_remove" ascii
        $hide3 = "filldir" ascii
        $hide4 = "getdents" ascii

    condition:
        (any of ($mod*) or any of ($inc*)) and
        (any of ($sus*) or any of ($hook*) or any of ($sym*) or
         any of ($net*) or any of ($hide*))
}