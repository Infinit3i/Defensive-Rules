rule SSH_Key_Persistence
{
    meta:
        description = "Detects malicious SSH key persistence mechanisms"
        author = "Infinit3i"
        date = "2026-04-27"
        attack_technique = "T1098.004"
        severity = "high"

    strings:
        // SSH public key formats
        $ssh_rsa = "ssh-rsa AAAAB3NzaC1yc2" ascii
        $ssh_ed25519 = "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5" ascii
        $ssh_ecdsa = "ecdsa-sha2-nistp" ascii
        $ssh_dss = "ssh-dss AAAAB3NzaC1kc3M" ascii

        // Suspicious key comments
        $comment1 = "backdoor@" ascii nocase
        $comment2 = "root@kali" ascii nocase
        $comment3 = "pwned@" ascii nocase
        $comment4 = "hack@" ascii nocase
        $comment5 = "evil@" ascii nocase

        // Automated key addition scripts
        $script1 = "echo '" ascii
        $script2 = ">> ~/.ssh/authorized_keys" ascii
        $script3 = "cat >> /home/" ascii
        $script4 = "authorized_keys" ascii

        // Key generation patterns
        $keygen1 = "ssh-keygen -t rsa -b" ascii
        $keygen2 = "ssh-keygen -t ed25519" ascii
        $keygen3 = "-f /tmp/" ascii
        $keygen4 = "-N ''" ascii

        // Obfuscated key addition
        $obfus1 = "base64 -d" ascii
        $obfus2 = "echo -e" ascii
        $obfus3 = "printf" ascii

    condition:
        (any of ($ssh_*) and (any of ($comment*) or
        (any of ($script*) and $script4) or
        any of ($keygen*))) or
        (any of ($obfus*) and $script4)
}