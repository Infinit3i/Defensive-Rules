rule Alias_Persistence_Shell_Configuration
{
    meta:
        author = "Infinit3i"
        date = "2026-04-27"
        description = "Detects malicious shell aliases used for command hijacking and persistence"
        mitre_technique = "T1546.004"
        severity = "medium"

    strings:
        // Shell configuration indicators
        $shell_config1 = "# ~/.bashrc"
        $shell_config2 = "# ~/.bash_profile"
        $shell_config3 = "# ~/.zshrc"
        $shell_config4 = "alias "

        // Common command aliases (suspicious)
        $alias_ls = "alias ls="
        $alias_ps = "alias ps="
        $alias_sudo = "alias sudo="
        $alias_su = "alias su="
        $alias_ssh = "alias ssh="
        $alias_wget = "alias wget="
        $alias_curl = "alias curl="
        $alias_cat = "alias cat="
        $alias_grep = "alias grep="
        $alias_top = "alias top="

        // Suspicious alias targets
        $target_tmp1 = "/tmp/"
        $target_tmp2 = "/var/tmp/"
        $target_tmp3 = "/dev/shm/"
        $target_hidden = "/."

        // Network operations in aliases
        $network1 = "/dev/tcp/"
        $network2 = "nc -e"
        $network3 = "netcat"
        $network4 = "socat"
        $network5 = "bash -i"
        $network6 = "sh -i"

        // Encoding/obfuscation
        $encode1 = "base64 -d"
        $encode2 = "echo -e"
        $encode3 = "printf"
        $encode4 = "python -c"
        $encode5 = "perl -e"

        // Function definitions (alternative to aliases)
        $function1 = "function ls"
        $function2 = "function ps"
        $function3 = "function sudo"

        // Command substitution
        $subst1 = "$("
        $subst2 = "`"
        $subst3 = "${}"

    condition:
        (any of ($shell_config*) or any of ($alias_*) or any of ($function*)) and
        (any of ($target_*) or
         any of ($network*) or
         any of ($encode*)) and
        (any of ($subst*) or
         filesize < 10KB)
}