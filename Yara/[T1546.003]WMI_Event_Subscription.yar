rule WMI_Event_Subscription_Persistence
{
    meta:
        author = "Infinit3i"
        date = "2026-04-27"
        description = "Detects WMI event subscription creation for persistence"
        mitre_attack = "T1546.003"
        severity = "high"

    strings:
        // WMI event subscription classes
        $wmi_filter = "Win32_VolumeChangeEvent" ascii wide
        $wmi_process = "Win32_ProcessStartTrace" ascii wide
        $wmi_config = "Win32_SystemConfigurationChangeEvent" ascii wide
        $wmi_power = "Win32_PowerManagementEvent" ascii wide

        // WMI consumer types
        $consumer_cmd = "CommandLineEventConsumer" ascii wide
        $consumer_script = "ActiveScriptEventConsumer" ascii wide
        $consumer_log = "NTEventLogEventConsumer" ascii wide

        // PowerShell WMI cmdlets
        $ps_register = "Register-WmiEvent" ascii wide
        $ps_filter = "New-WmiEventFilter" ascii wide
        $ps_consumer = "New-WmiEventConsumer" ascii wide
        $ps_binding = "New-WmiEventBinding" ascii wide

        // WMI namespace paths
        $wmi_namespace = "ROOT\\subscription" ascii wide
        $wmi_cimv2 = "ROOT\\cimv2" ascii wide

        // Suspicious event queries
        $query_select = "SELECT * FROM" ascii wide
        $query_within = "WITHIN" ascii wide

    condition:
        (any of ($wmi_*) and any of ($consumer_*)) or
        (any of ($ps_*) and ($query_select or $wmi_namespace)) or
        (2 of ($consumer_*))
}