import { useEffect, useRef, useState } from "react";

export default function Bubbles() {
  const bubbles = useRef([]);
  
  // Gera dados das bolhas apenas uma vez, adicionando um delay inicial
  const [bubbleData] = useState(() =>
    Array.from({ length: 30 }, (_, i) => ({
      bottom: -10, // inicia fora da tela
      left: Math.random() * 100,
      size: 15 + Math.random() * 20,
      speed: 0.1 + Math.random() * 0.3,
      delay: i * 150, // delay incremental em ms para a primeira aparição
      started: false, // flag para saber se a bolha começou a subir
    }))
  );

  useEffect(() => {
    let animationFrameId;
    const startTimes = bubbleData.map(data => Date.now() + data.delay);

    function animate() {
      const now = Date.now();

      bubbles.current.forEach((bubble, i) => {
        if (!bubble) return;

        const data = bubbleData[i];

        // Só começa a animar depois do delay
        if (!data.started && now >= startTimes[i]) {
          data.started = true;
          data.bottom = -10; // inicia de fora da tela
        }

        if (!data.started) return;

        data.bottom += data.speed;

        if (data.bottom > 110) {
          data.bottom = -10;
          data.left = Math.random() * 100;
        }

        bubble.style.bottom = data.bottom + "%";
        bubble.style.left = data.left + "%";
        bubble.style.width = data.size + "px";
        bubble.style.height = data.size + "px";
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [bubbleData]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbleData.map((data, i) => (
        <span
          key={i}
          ref={(el) => (bubbles.current[i] = el)}
          style={{
            position: "absolute",
            bottom: data.bottom + "%",
            left: data.left + "%",
            width: data.size + "px",
            height: data.size + "px",
            backgroundColor: "#f5d742",
            borderRadius: "50%",
            opacity: 0.7,
            pointerEvents: "none",
          }}
        />
      ))}
    </div>
  );
}
