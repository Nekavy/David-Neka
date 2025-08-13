import { useEffect, useRef, useState } from "react";

// src/components/Contact.jsx
export default function Contact() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.3 } // dispara quando 30% da secção estiver visível
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-16 bg-[#0E1016] text-[#e4ded7]"
    >
      <div className="flex flex-col items-center justify-center">
        {/* LETS / TALK com animação apenas se visível */}
        <h1 className="porcimadecursor flex flex-row text-center text-[96px] font-extrabold leading-[0.8em] sm:text-[120px] sm:leading-[0.85em] md:text-[155px] lg:text-[215px] mb-6">
          <span className={`opacity-0 ${inView ? "fade-up" : ""}`}>LETS</span>
          <span className="mx-4" />
          <span className={`opacity-0 ${inView ? "fade-up-delay" : ""}`}>
            TALK
          </span>
        </h1>

        <p className="text-base md:text-lg text-gray-400 mb-12 text-center max-w-2xl">
          Interested in working together? Fill out the form below or reach me on
          social media.
        </p>
      </div>
    </section>
  );
}
