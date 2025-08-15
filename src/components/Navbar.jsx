import { useState, useEffect } from "react";
import strings from "./strings";

export default function Navbar() {
  const [lang, setLang] = useState(strings.lang);

  useEffect(() => {
    const updateLang = () => setLang(strings.lang);
    window.addEventListener("languageChange", updateLang);
    return () => window.removeEventListener("languageChange", updateLang);
  }, []);

  return (
    <nav className="fixed bottom-10 left-0 right-0 z-5 mx-auto flex w-[306px] items-center justify-center gap-1 rounded-lg bg-[#07070a]/90 px-1 py-1 backdrop-blur-md sm:w-[383px] md:w-[391px] md:p-2">
      <a href="#home" className="flex px-2 py-2 text-sm sm:px-4 md:py-1">
        {strings.get("navHome")}
      </a>
      <a href="#portfolio" className="flex px-2 py-2 text-sm sm:px-4 md:py-1">Portfolio</a>
      <a href="#about" className="flex px-2 py-2 text-sm sm:px-4 md:py-1">{strings.get("navAbout")}</a>
      <a href="#contact" className="flex px-2 py-2 text-sm sm:px-4 md:py-1">{strings.get("navContact")}</a>
      <a href="#" className="flex px-2 py-2">
        <i className="fas fa-file-pdf text-lg"></i>
      </a>
    </nav>
  );
}
