import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Bubbles from "./anim/Bubbles";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    const email = "teuemail@example.com"; // substitua pelo seu email
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section
      id="home"
      className="relative flex h-[85vh] w-full items-center justify-center bg-cover bg-center sm:h-[90vh] md:h-[100vh]"
    >
      {/* Fundo com gradientes */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            repeating-radial-gradient(circle at center, rgba(255,255,255,0.03), rgba(255,255,255,0.03) 1px, transparent 2px, transparent 4px),
            radial-gradient(circle at 20% 30%, #ebec59, transparent 40%),
            radial-gradient(circle at 80% 70%, #327d95, transparent 50%),
            linear-gradient(135deg, #010813, #0b364a)
          `,
          backgroundBlendMode: 'overlay',
        }}
      />

      {/* Bolhas animadas */}
      <Bubbles />

      {/* Conteúdo principal */}
      <div className="container relative mx-auto flex flex-col items-center justify-center">
        <div className="social-links absolute top-10 right-0 flex gap-10 text-lg sm:gap-12 md:gap-14"></div>

        <div className="flex flex-col items-center justify-center">
          <h1 className="porcimadecursor flex flex-col text-center text-[96px] font-extrabold leading-[0.8em] sm:text-[120px] sm:leading-[0.85em] md:text-[155px] lg:text-[215px] mb-6">
            <span className="opacity-0 fade-up">DAVID</span>
            <span className="opacity-0 fade-up-delay">BORGES</span>
          </h1>

          <div className="relative w-[150px] md:w-[200px] lg:w-[245px] h-[150px] md:h-[200px] lg:h-[245px] mb-12">
            <img
              src="/assets/profile.png"
              alt="Profile Real"
              className="z-10 absolute top-0 left-0 w-full h-full rounded-2xl object-cover transition-all duration-500 ease-in-out grayscale hover:grayscale-0 hover:scale-105 hover:opacity-100"
            />
          </div>
        </div>

        {/* Texto e links sociais */}
        <div className="flex w-full max-w-[1440px] items-center justify-between px-4">
          <p className="max-w-[350px] text-center text-base font-medium md:text-left md:text-xl lg:max-w-[400px]">
            Frontend Engineer and Web Designer, currently available for work.
          </p>

          <div className="hidden lg:flex items-center gap-4 text-[#e4ded7]">
            <a
              data-blobity-magnetic="false"
              data-blobity-radius="20"
              href="https://github.com/davidborges"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              <FaGithub className="w-10 h-10" />
            </a>

            <a
              data-blobity-magnetic="false"
              href="https://linkedin.com/in/seu-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              <FaLinkedin className="w-10 h-10" />
            </a>

            <div className="relative flex items-center">
              <button
                data-blobity-magnetic="false"
                onClick={handleCopyEmail}
                className="hover:text-gray-300 transition-colors"
              >
                <FaEnvelope className="w-10 h-10" />
              </button>

              {copied && (
                <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 bg-black text-white px-3 py-1 rounded shadow-lg z-50 pointer-events-none">
                  Copiado!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
