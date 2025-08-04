import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);        // bolha externa
  const dotRef = useRef(null);           // ponto preto interno
  const position = useRef({ x: 0, y: 0 });
  const requestRef = useRef(null);

  const [hoveredRect, setHoveredRect] = useState(null);
  const [hoveredRadius, setHoveredRadius] = useState('50%');

  // Função de animação suave
  const animate = () => {
    if (cursorRef.current && dotRef.current) {
      const { x, y } = position.current;

      if (hoveredRect) {
        // Bolha aumenta e fica no tamanho do botão/imagem (hover)
        const { top, left, width, height } = hoveredRect;
        cursorRef.current.style.top = `${top}px`;
        cursorRef.current.style.left = `${left}px`;
        cursorRef.current.style.width = `${width}px`;
        cursorRef.current.style.height = `${height}px`;
        cursorRef.current.style.borderRadius = hoveredRadius;
        cursorRef.current.style.background = 'rgba(1, 225, 255, 0.78)'; // bolha suave

        // Ponto preto desaparece no hover
        dotRef.current.style.opacity = '0';
      } else {
        // Cursor normal: bolha pequena ao redor do ponto preto
        cursorRef.current.style.top = `${y - 15}px`;  // posição do centro da bolha
        cursorRef.current.style.left = `${x - 15}px`;
        cursorRef.current.style.width = '30px';
        cursorRef.current.style.height = '30px';
        cursorRef.current.style.borderRadius = '50%';
        cursorRef.current.style.background =  'rgba(1, 225, 255, 0.78)'; 

        // Ponto preto aparece
        dotRef.current.style.opacity = '1';
        dotRef.current.style.top = `${y - 5}px`;  // centraliza o ponto preto
        dotRef.current.style.left = `${x - 5}px`;
      }
    }
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const onMouseMove = (e) => {
      position.current = { x: e.clientX, y: e.clientY };

      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (
        el &&
        ['BUTTON', 'A', 'IMG', 'INPUT', 'TEXTAREA', 'LABEL'].includes(el.tagName)
      ) {
        const rect = el.getBoundingClientRect();
        const style = window.getComputedStyle(el);
        setHoveredRect(rect);
        setHoveredRadius(style.borderRadius);
      } else {
        setHoveredRect(null);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, [hoveredRect, hoveredRadius]);

  return (
    <>
      {/* Bolha externa */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] transition-all duration-200 ease-out"
        style={{
          top: 0,
          left: 0,
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          background: 'rgba(0, 0, 0, 0.15)',
          position: 'fixed',
          pointerEvents: 'none',
          transform: 'translate3d(0,0,0)',
        }}
      />
      {/* Ponto preto interno */}
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[10000] bg-black rounded-full"
        style={{
          top: 0,
          left: 0,
          width: '10px',
          height: '10px',
          position: 'fixed',
          pointerEvents: 'none',
          transform: 'translate3d(0,0,0)',
          transition: 'opacity 0.2s ease',
        }}
      />
    </>
  );
}
