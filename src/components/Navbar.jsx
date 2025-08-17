import { useState, useEffect } from "react";
import strings from "./strings";
import { FaFileDownload } from "react-icons/fa";

export default function Navbar() {
  const [lang, setLang] = useState(strings.lang);
  const [cvLang, setCvLang] = useState(null);

  useEffect(() => {
    const updateLang = () => setLang(strings.lang);
    window.addEventListener("languageChange", updateLang);
    return () => window.removeEventListener("languageChange", updateLang);
  }, []);

  const handleDownloadCV = (cvOption) => {
    const link = document.createElement("a");
    link.href = `/assets/${cvOption}`;
    link.download = cvOption;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setCvLang(null); // fecha o menu depois do download
  };

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

      {/* Botão PDF (download CV) com escolha de idioma */}
      <div className="relative">
        <button
          onClick={() => setCvLang(cvLang ? null : "choose")}
          data-blobity-magnetic="false"
          className="flex items-center justify-center px-3 py-2 text-xs sm:px-4 sm:py-3 sm:text-sm rounded transition-colors"
          aria-label="Download CV"
        >
          <FaFileDownload data-blobity-magnetic="false" className="text-base sm:text-lg z-2" />
        </button>

        {cvLang && (
          <div className="absolute bottom-full mb-2 flex flex-col bg-[#07070a]/90 rounded shadow-md py-1">
            <button
              className="px-4 py-2 text-sm hover:bg-gray-700"
              onClick={() => handleDownloadCV("CV_PT_vr3.pdf")}
            >
              PT
            </button>
            <button
              className="px-4 py-2 text-sm hover:bg-gray-700"
              onClick={() => handleDownloadCV("CV_EN_vr3.pdf")}
            >
              EN
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
