import { useState, useEffect } from "react";
import strings from "./strings";
import { FaFileDownload } from "react-icons/fa";

export default function Navbar() {
  const [lang, setLang] = useState(strings.lang);

  useEffect(() => {
    const updateLang = () => setLang(strings.lang);
    window.addEventListener("languageChange", updateLang);
    return () => window.removeEventListener("languageChange", updateLang);
  }, []);

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-2 flex items-center justify-center gap-1 rounded-lg bg-[#07070a]/90 px-2 py-1 backdrop-blur-md w-fit">
      <a href="#home" className="flex px-2 py-1 text-xs sm:px-3 sm:py-2 sm:text-sm">
        {strings.get("navHome")}
      </a>
      <a href="#portfolio" className="flex px-2 py-1 text-xs sm:px-3 sm:py-2 sm:text-sm">
        Portfolio
      </a>
      <a href="#about" className="flex px-2 py-1 text-xs sm:px-3 sm:py-2 sm:text-sm">
        {strings.get("navAbout")}
      </a>
      <a href="#certificates" className="flex px-2 py-1 text-xs sm:px-3 sm:py-2 sm:text-sm">
        {strings.get("navCertificates")}
      </a>
      <a href="#contact" className="flex px-2 py-1 text-xs sm:px-3 sm:py-2 sm:text-sm">
        {strings.get("navContact")}
      </a>

      {/* Botão PDF (download CV) */}
      <a
        href="/assets/CV.pdf"   // coloca o teu ficheiro em public/assets/CV.pdf
        download="CV.pdf"
        data-blobity-magnetic="false"
        className="flex items-center justify-center px-3 py-2 text-xs sm:px-4 sm:py-3 sm:text-sm rounded transition-colors"
        aria-label="Download CV"
      >
        <FaFileDownload data-blobity-magnetic="false" className="text-base sm:text-lg z-2"  />
      </a>
    </nav>
  );
}