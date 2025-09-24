rule PDF_Suspicious_Features
{
    meta:
        description = "PDF with risky features (JS, Launch, EmbeddedFiles, OpenAction, etc.)"
        author = "Infinit3i"
        date = "2025-09-24"

    strings:
        // PDF magic to limit matches to PDFs
        $pdf_magic = "%PDF-" ascii

        // Suspicious PDF name objects (case-insensitive to be safe)
        $k0 = "/JS"            ascii nocase
        $k1 = "/JavaScript"    ascii nocase
        $k2 = "/AcroForm"      ascii nocase
        $k3 = "/XFA"           ascii nocase
        $k4 = "/Launch"        ascii nocase
        $k5 = "/EmbeddedFiles" ascii nocase
        $k6 = "/OpenAction"    ascii nocase
        $k7 = "/AA"            ascii nocase
        $k8 = "/URI"           ascii nocase
        $k9 = "/SubmitForm"    ascii nocase

    condition:
        // Must be a PDF AND contain at least one of the risky keywords
        $pdf_magic at 0 and any of ($k*)
}
