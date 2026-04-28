rule At_Job_Malicious_Commands
{
    meta:
        author = "Infinit3i"
        date = "2026-04-27"
        description = "Detects malicious commands scheduled via at/batch for persistence and execution"
        mitre_technique = "T1053.001"
        severity = "high"

    strings:
        // At job file headers
        $at_header1 = "#!/bin/sh"
        $at_header2 = "# atrun uid="
        $at_header3 = "umask"

        // Network download tools
        $download1 = "wget "
        $download2 = "curl "
        $download3 = "ftp "
        $download4 = "nc "
        $download5 = "netcat "

        // Execution patterns
        $exec1 = "chmod +x"
        $exec2 = "/bin/bash"
        $exec3 = "/bin/sh"
        $exec4 = "python -c"
        $exec5 = "perl -e"
        $exec6 = "ruby -e"

        // Reverse shell patterns
        $shell1 = "/dev/tcp/"
        $shell2 = "bash -i"
        $shell3 = "sh -i"
        $shell4 = "nc -e"
        $shell5 = "ncat -e"
        $shell6 = "socat"

        // Encoding/obfuscation
        $encode1 = "base64 -d"
        $encode2 = "echo -e"
        $encode3 = "printf"
        $encode4 = "xxd -r"

        // Suspicious directories
        $tmp_dir1 = "/tmp/"
        $tmp_dir2 = "/var/tmp/"
        $tmp_dir3 = "/dev/shm/"

        // Persistence mechanisms
        $persist1 = "crontab"
        $persist2 = ".bashrc"
        $persist3 = ".profile"
        $persist4 = "systemctl"

        // Process manipulation
        $proc1 = "nohup"
        $proc2 = "disown"
        $proc3 = "setsid"
        $proc4 = "&"

    condition:
        (any of ($at_header*)) and
        (any of ($download*) or
         any of ($exec*) or
         any of ($shell*) or
         any of ($encode*) or
         any of ($tmp_dir*) or
         any of ($persist*) or
         any of ($proc*))
}