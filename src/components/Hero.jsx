import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Bubbles from "./anim/Bubbles";
import strings from "./strings"; // sistema de strings

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [lang, setLang] = useState(strings.lang);

  useEffect(() => {
    const updateLang = () => setLang(strings.lang);
    window.addEventListener("languageChange", updateLang);
    return () => window.removeEventListener("languageChange", updateLang);
  }, []);

  const handleCopyEmail = () => {
    const email = "teuemail@example.com"; // substitui pelo teu email real
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section
      id="home"
      className="relative flex h-[85vh] w-full items-center justify-center bg-cover bg-center sm:h-[90vh] md:h-[100vh] overflow-x-hidden"
    >
      {/* Fundo com gradientes */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            repeating-radial-gradient(circle at center, rgba(255,255,255,0.03), rgba(255,255,255,0.03) 1px, transparent 2px, transparent 4px),
            radial-gradient(circle at 20% 30%, #4c8eda, transparent 40%),
            radial-gradient(circle at 80% 70%, #2b4b63, transparent 50%),
            linear-gradient(135deg, #010813, #0b364a)
          `,
          backgroundBlendMode: "overlay",
        }}
      />

      {/* Bolhas animadas */}
      <Bubbles />

      {/* Conteúdo principal */}
      <div className="container relative mx-auto flex flex-col items-center justify-center px-4">
        <div className="flex flex-col items-center justify-center">
          <h1 className="flex flex-col text-center text-[96px] font-extrabold leading-[0.8em] sm:text-[120px] md:text-[155px] lg:text-[215px] mb-6">
            <span className="opacity-0 fade-up">DAVID</span>
            <span className="opacity-0 fade-up-delay">BORGES</span>
          </h1>

          <div className="relative w-[150px] md:w-[200px] lg:w-[245px] h-[150px] md:h-[200px] lg:h-[245px] mb-6">
            <img
              src="/assets/profile.png"
              alt="Profile Real"
              className="z-10 absolute top-0 left-0 w-full h-full rounded-2xl object-cover transition-all duration-500 ease-in-out grayscale hover:grayscale-0 hover:scale-105 hover:opacity-100"
            />
          </div>

          {/* Botões de idioma no mobile */}
          <div className="flex gap-2 mb-8 lg:hidden">
            <button
              onClick={() => strings.setLang("pt")}
              className={`w-8 h-6 transition-all ${
                lang === "pt" ? "filter-none" : "grayscale"
              }`}
              title="Português"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg"
                alt="PT"
                className="w-full h-full object-cover rounded-sm"
              />
            </button>
            <button
              onClick={() => strings.setLang("en")}
              className={`w-8 h-6 transition-all ${
                lang === "en" ? "filter-none" : "grayscale"
              }`}
              title="English"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                alt="EN"
                className="w-full h-full object-cover rounded-sm"
              />
            </button>
          </div>
        </div>

        {/* Texto e links sociais */}
        <div className="flex w-full max-w-[1440px] items-center justify-between">
          <p className="max-w-[350px] text-center text-base font-medium md:text-left md:text-xl lg:max-w-[400px]">
            {strings.get("heroDescription")}
          </p>

          <div className="hidden lg:flex items-center gap-4 text-[#e4ded7]">
            <a
              href="https://github.com/davidborges"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              <FaGithub className="w-10 h-10" />
            </a>
            <a
              href="https://linkedin.com/in/seu-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              <FaLinkedin className="w-10 h-10" />
            </a>
            <div className="relative flex items-center">
              <button
                onClick={handleCopyEmail}
                className="hover:text-gray-300 transition-colors"
              >
                <FaEnvelope className="w-10 h-10" />
              </button>
              {copied && (
                <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 bg-black text-white px-3 py-1 rounded shadow-lg z-50 pointer-events-none">
                  {strings.get("copied")}
                </div>
              )}
            </div>

            {/* Botões de idioma no desktop */}
            <div className="flex gap-2 ml-4">
              <button
                onClick={() => strings.setLang("pt")}
                className={`w-8 h-6 transition-all ${
                  lang === "pt" ? "filter-none" : "grayscale"
                }`}
                title="Português"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg"
                  alt="PT"
                  className="w-full h-full object-cover rounded-sm"
                />
              </button>
              <button
                onClick={() => strings.setLang("en")}
                className={`w-8 h-6 transition-all ${
                  lang === "en" ? "filter-none" : "grayscale"
                }`}
                title="English"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                  alt="EN"
                  className="w-full h-full object-cover rounded-sm"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
