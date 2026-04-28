rule UdevRules_Malicious_Persistence
{
    meta:
        author = "Infinit3i"
        date = "2026-04-27"
        description = "Detects malicious udev rules used for persistence via device triggers"
        mitre_technique = "T1037.001"
        severity = "high"

    strings:
        $udev_header1 = "# This file was automatically generated"
        $udev_header2 = "SUBSYSTEM=="
        $udev_header3 = "ACTION=="

        // Device triggers
        $trigger_usb = "SUBSYSTEM==\"usb\""
        $trigger_net = "SUBSYSTEM==\"net\""
        $trigger_block = "SUBSYSTEM==\"block\""
        $trigger_input = "SUBSYSTEM==\"input\""

        // Suspicious actions
        $action_add = "ACTION==\"add\""
        $action_change = "ACTION==\"change\""
        $action_remove = "ACTION==\"remove\""

        // Command execution
        $run_cmd1 = "RUN+=\"/bin/bash"
        $run_cmd2 = "RUN+=\"/bin/sh"
        $run_cmd3 = "RUN+=\"wget"
        $run_cmd4 = "RUN+=\"curl"
        $run_cmd5 = "RUN+=\"nc"
        $run_cmd6 = "RUN+=\"python"
        $run_cmd7 = "PROGRAM=\"/bin/"
        $run_cmd8 = "RUN+=\"/tmp/"

        // Network operations
        $network1 = "/dev/tcp/"
        $network2 = "reverse shell"
        $network3 = "bind shell"
        $network4 = "netcat"
        $network5 = "socat"

        // Base64 encoding
        $encoding1 = "base64 -d"
        $encoding2 = "echo -e"
        $encoding3 = "printf"

    condition:
        (any of ($udev_header*) or any of ($trigger_*)) and
        any of ($action_*) and
        (any of ($run_cmd*) or
         any of ($network*) or
         any of ($encoding*))
}