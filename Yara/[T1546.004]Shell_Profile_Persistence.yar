rule Shell_Profile_Persistence
{
    meta:
        description = "Detects malicious shell profile scripts for persistence"
        author = "Infinit3i"
        date = "2026-04-27"
        attack_technique = "T1546.004"
        severity = "high"

    strings:
        // Shell profile indicators
        $profile1 = "# ~/.bashrc" ascii
        $profile2 = "# ~/.bash_profile" ascii
        $profile3 = "# ~/.zshrc" ascii
        $profile4 = "export PATH=" ascii
        $profile5 = "alias " ascii

        // Malicious commands
        $mal1 = "curl http" ascii nocase
        $mal2 = "wget http" ascii nocase
        $mal3 = "nc -l" ascii
        $mal4 = "bash -i >&" ascii
        $mal5 = "sh -i >&" ascii

        // Reverse shells
        $rev1 = "/dev/tcp/" ascii
        $rev2 = "bash -i >& /dev/tcp/" ascii
        $rev3 = "python -c \"import socket" ascii
        $rev4 = "perl -e 'use Socket'" ascii

        // Persistence mechanisms
        $pers1 = "nohup " ascii
        $pers2 = "screen -dmS" ascii
        $pers3 = "tmux new-session -d" ascii
        $pers4 = "& disown" ascii

        // Obfuscation
        $obfus1 = "base64 -d" ascii
        $obfus2 = "echo -e '\\x" ascii
        $obfus3 = "printf '\\x" ascii

    condition:
        any of ($profile*) and
        (any of ($mal*) or any of ($rev*) or any of ($obfus*)) and
        any of ($pers*)
}