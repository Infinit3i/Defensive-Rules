rule LD_Preload_Persistence
{
    meta:
        description = "Detects LD_PRELOAD library hijacking for persistence"
        author = "Infinit3i"
        date = "2026-04-27"
        attack_technique = "T1574.006"
        severity = "high"

    strings:
        // LD_PRELOAD environment manipulation
        $env1 = "LD_PRELOAD=" ascii
        $env2 = "export LD_PRELOAD" ascii
        $env3 = "setenv LD_PRELOAD" ascii
        $env4 = "/etc/ld.so.preload" ascii

        // Shared library compilation
        $compile1 = "gcc -shared -fPIC" ascii
        $compile2 = "-o " ascii
        $compile3 = ".so" ascii
        $compile4 = "-ldl" ascii

        // Library function interception
        $hook1 = "__attribute__((constructor))" ascii
        $hook2 = "dlsym(RTLD_NEXT" ascii
        $hook3 = "LD_PRELOAD" ascii
        $hook4 = "void _init()" ascii

        // Suspicious library names
        $lib1 = "evil.so" ascii nocase
        $lib2 = "rootkit.so" ascii nocase
        $lib3 = "backdoor.so" ascii nocase
        $lib4 = "hook.so" ascii nocase
        $lib5 = "inject.so" ascii nocase

        // Common hooked functions
        $func1 = "int open(" ascii
        $func2 = "int stat(" ascii
        $func3 = "DIR *opendir(" ascii
        $func4 = "struct dirent *readdir(" ascii
        $func5 = "int access(" ascii

        // Persistence paths
        $path1 = "/tmp/" ascii
        $path2 = "/var/tmp/" ascii
        $path3 = "/dev/shm/" ascii
        $path4 = "/usr/local/lib/" ascii

    condition:
        (any of ($env*) and (any of ($lib*) or any of ($path*))) or
        (any of ($compile*) and any of ($hook*) and any of ($func*))
}