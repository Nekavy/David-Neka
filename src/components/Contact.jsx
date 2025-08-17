import { useEffect, useRef, useState, useCallback } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import strings from "./strings";

function AnimatedText({ text, className, delayBetween = 120, startAnimation, onComplete }) {
  const words = text.split(" ");
  const [visibleCount, setVisibleCount] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!startAnimation) return;

    setVisibleCount(0);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    function showNextWord(count) {
      if (count < words.length) {
        timeoutRef.current = setTimeout(() => {
          setVisibleCount(count + 1);
          showNextWord(count + 1);
        }, delayBetween);
      } else if (onComplete) {
        onComplete();
      }
    }

    showNextWord(0);

    return () => clearTimeout(timeoutRef.current);
  }, [text, delayBetween, onComplete, startAnimation, words.length]);

  return (
    <p className={className} style={{ overflowWrap: "break-word", display: "inline" }}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            opacity: i < visibleCount ? 1 : 0,
            transform: i < visibleCount ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
            marginRight: "0.25em",
            display: "inline-block",
            whiteSpace: "nowrap",
          }}
        >
          {word}
        </span>
      ))}
    </p>
  );
}

export default function Contact() {
  const sectionRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);
  const [textFinished, setTextFinished] = useState(false);
  const [copied, setCopied] = useState(false);

  // NOVO: estado local para o texto do Contact
  const [contactText, setContactText] = useState(strings.get("contactText"));

  useEffect(() => {
    const handleLanguageChange = () => setContactText(strings.get("contactText"));
    window.addEventListener("languageChange", handleLanguageChange);
    return () => window.removeEventListener("languageChange", handleLanguageChange);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("teuemail@email.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTextComplete = useCallback(() => {
    setTextFinished(true);
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-12 px-4 sm:px-6 lg:px-16 bg-[#0E1016] text-[#e4ded7] min-h-[50vh]"
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="flex flex-col sm:flex-row text-center text-[96px] font-extrabold leading-[0.8em] sm:text-[120px] sm:leading-[0.85em] md:text-[155px] lg:text-[215px] mb-4">
          <span className={`opacity-0 ${startAnimation ? "fadeSlideIn" : ""}`}>{strings.get("contacttitle1")}</span>
          <span className="mx-4" />
          <span className={`opacity-0 ${startAnimation ? "fadeSlideIn" : ""}`} style={{ animationDelay: "0.15s" }}>
            {strings.get("contacttitle2")}
          </span>
        </h1>

        <AnimatedText
          key={strings.language} // força recriar o componente se a linguagem mudar
          text={contactText} // usa o estado local
          className="text-base md:text-lg text-gray-400 mb-6 text-center max-w-2xl"
          delayBetween={100}
          startAnimation={startAnimation}
          onComplete={handleTextComplete}
        />

        {textFinished && (
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-6 mt-4">
              <a href="https://github.com/davidborges" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                <FaGithub className="w-10 h-10" />
              </a>
              <a href="https://linkedin.com/in/seu-linkedin" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                <FaLinkedin className="w-10 h-10" />
              </a>
              <div className="relative flex items-center">
                <button onClick={handleCopyEmail} className="hover:text-gray-300 transition-colors">
                  <FaEnvelope className="w-10 h-10" />
                </button>
                {copied && (
                  <div className="absolute top-[-32px] left-1/2 -translate-x-1/2 bg-black text-white px-3 py-1 rounded shadow-lg z-50 pointer-events-none">
                    {strings.get("copied")}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          0% { opacity: 0; transform: translateY(18px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .fadeSlideIn {
          opacity: 0;
          transform: translateY(18px);
          animation: fadeSlideIn 0.7s cubic-bezier(.2,.9,.3,1) forwards;
        }
      `}</style>
    </section>
  );
}
