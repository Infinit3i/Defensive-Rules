rule Javascript_Anti_Forensics 
{
    meta:
        author = "Infinit3i"
        date = "2025-09-25"
        description = "Arguements callee checks against a value to see if it has been modified"
    strings:
        $str0 = "arguments.callee"
    condition:
        $str0
}
