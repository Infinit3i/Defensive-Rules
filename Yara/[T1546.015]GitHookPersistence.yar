rule Git_Hook_Persistence_Strings
{
    meta:
        description = "Detects Git hook persistence indicators in files"
        author = "Infinit3i"
        date = "2026-04-27"
        reference = "https://attack.mitre.org/techniques/T1546/015/"
        mitre_attack = "T1546.015"

    strings:
        // Git hook paths
        $hook1 = ".git/hooks/" ascii
        $hook2 = "pre-commit" ascii
        $hook3 = "post-commit" ascii
        $hook4 = "pre-push" ascii
        $hook5 = "post-receive" ascii
        $hook6 = "pre-receive" ascii
        $hook7 = "update" ascii

        // Script headers
        $header1 = "#!/bin/bash" ascii
        $header2 = "#!/bin/sh" ascii
        $header3 = "#!/usr/bin/env" ascii
        $header4 = "#!/usr/bin/python" ascii

        // Suspicious commands in hooks
        $cmd1 = "nc -" ascii
        $cmd2 = "wget " ascii
        $cmd3 = "curl " ascii
        $cmd4 = "bash -i" ascii
        $cmd5 = "/dev/tcp/" ascii
        $cmd6 = "python -c" ascii
        $cmd7 = "perl -e" ascii

        // Git environment variables
        $env1 = "GIT_DIR" ascii
        $env2 = "GIT_WORK_TREE" ascii
        $env3 = "GIT_AUTHOR" ascii

    condition:
        (any of ($hook*) and any of ($header*)) and
        (any of ($cmd*) or any of ($env*))
}