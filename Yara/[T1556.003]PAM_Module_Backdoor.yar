rule PAM_Module_Backdoor_Detection
{
    meta:
        author = "Infinit3i"
        date = "2026-04-27"
        description = "Detects malicious PAM modules and configuration modifications for authentication bypass"
        mitre_technique = "T1556.003"
        severity = "critical"

    strings:
        // PAM configuration keywords
        $pam_auth = "auth"
        $pam_account = "account"
        $pam_password = "password"
        $pam_session = "session"

        // Control flags (suspicious combinations)
        $control_sufficient = "sufficient"
        $control_optional = "optional"
        $control_include = "include"

        // Suspicious PAM modules
        $module_permit = "pam_permit.so"
        $module_deny = "pam_deny.so"
        $module_rootok = "pam_rootok.so"
        $module_wheel = "pam_wheel.so"

        // Backdoor module names
        $backdoor1 = "pam_backdoor"
        $backdoor2 = "pam_evil"
        $backdoor3 = "pam_bypass"
        $backdoor4 = "pam_rootkit"
        $backdoor5 = "pam_stealth"

        // Suspicious options
        $option_nullok = "nullok"
        $option_try_first = "try_first_pass"
        $option_use_first = "use_first_pass"
        $option_nodelay = "nodelay"

        // File paths
        $path_security = "/lib/security/"
        $path_pamd = "/etc/pam.d/"

        // Hidden or backup files
        $hidden_so1 = ".so.bak"
        $hidden_so2 = ".so.orig"
        $hidden_so3 = ".so.old"

        // Binary signatures for PAM modules
        $elf_header = { 7F 45 4C 46 }
        $pam_symbol1 = "pam_sm_authenticate"
        $pam_symbol2 = "pam_sm_setcred"
        $pam_symbol3 = "pam_sm_acct_mgmt"

    condition:
        (any of ($pam_*) and
         ($control_sufficient or $control_optional) and
         (any of ($module_*) or any of ($backdoor*))) or
        (any of ($option_*) and any of ($path_*)) or
        (any of ($hidden_so*)) or
        ($elf_header and any of ($pam_symbol*) and any of ($backdoor*))
}