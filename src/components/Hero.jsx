import { useEffect, useRef } from "react";

export default function Hero() {
  const bubbles = useRef([]);

  useEffect(() => {
    const NUM_BUBBLES = 30;
    const speeds = [];
    const positions = [];
    const sizes = [];

    for (let i = 0; i < NUM_BUBBLES; i++) {
      positions[i] = Math.random() * 100; // posição horizontal (%)
      speeds[i] = 0.1 + Math.random() * 0.3; // velocidade (bottom % por frame)
      sizes[i] = 15 + Math.random() * 20; // tamanho px
    }

    let animationFrameId;

    function animate() {
      bubbles.current.forEach((bubble, i) => {
        if (!bubble) return; // segurança

        let bottom = parseFloat(bubble.style.bottom) || Math.random() * 100;
        bottom += speeds[i];

        if (bottom > 110) {
          bottom = -10; // reinicia abaixo da tela
          positions[i] = Math.random() * 100; // muda posição horizontal
          bubble.style.left = positions[i] + "%";
          bubble.style.width = sizes[i] + "px";
          bubble.style.height = sizes[i] + "px";
        }

        bubble.style.bottom = bottom + "%";
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section
      id="home"
      className="relative flex h-[85vh] w-full items-center justify-center bg-cover bg-center sm:h-[90vh] md:h-[100vh]"
    >
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
      ></div>



      {/* Bolhas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <span
            key={i}
            ref={(el) => (bubbles.current[i] = el)}
            style={{
              position: "absolute",
              bottom: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${15 + Math.random() * 20}px`,
              height: `${15 + Math.random() * 20}px`,
              backgroundColor: "#f5d742",
              borderRadius: "50%",
              opacity: 0.7,
              pointerEvents: "none",
            }}
          />
        ))}
      </div>

      <div className="container relative mx-auto flex flex-col items-center justify-center">
        <div className="social-links absolute top-10 right-0 flex gap-10 text-lg sm:gap-12 md:gap-14"></div>

        <div className="flex flex-col items-center justify-center">
          <h1 className="porcimadecursor flex flex-col text-center text-[96px] font-extrabold leading-[0.8em] sm:text-[120px] sm:leading-[0.85em] md:text-[155px] lg:text-[215px] mb-6">
            <span>DAVID</span>
            <span>BORGES</span>
          </h1>

          <div className="relative w-[150px] md:w-[200px] lg:w-[245px] h-[150px] md:h-[200px] lg:h-[245px] mb-12">
            <img
              src="/assets/profile.png"
              alt="Profile Real"
              className="z-10 absolute top-0 left-0 w-full h-full rounded-2xl object-cover transition-all duration-500 ease-in-out grayscale hover:grayscale-0 hover:scale-105 hover:opacity-100"
            />
          </div>
        </div>

        <div className="flex w-full max-w-[1440px] items-center justify-between px-4">
          <p className="max-w-[350px] text-center text-base font-medium md:text-left md:text-xl lg:max-w-[400px]">
            Frontend Engineer and Web Designer, currently available for work.
          </p>
          <p className="hidden max-w-[420px] text-right text-base font-semibold lg:block md:text-xl">
            Focused on interfaces and experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
