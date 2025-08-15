import { useEffect, useRef, useState, useCallback } from "react";
import strings from "./strings"; // sistema de strings

function AnimatedText({ text, className, delayBetween = 120, onComplete, startAnimation }) {
  const words = text.split(" ");
  const [visibleCount, setVisibleCount] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!startAnimation) return; // só inicia quando startAnimation for true
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
  }, [text, delayBetween, onComplete, words.length, startAnimation]);

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

export default function About() {
  const skills = [
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
    { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "Ubuntu", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "GitLab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
    { name: "Arduino", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original-wordmark.svg" },
    { name: "Raspberry Pi", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg" },
    { name: "Unity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" },
    { name: "Blender", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" }
  ];

  const containerRef = useRef(null);
  const translateXRef = useRef(0);
  const animationFrameId = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const speed = 0.7;

  const [startAnimation, setStartAnimation] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const sectionRef = useRef(null);

  // === NOVO: estado para About e listener de troca de linguagem ===
  const [aboutText, setAboutText] = useState(strings.get("aboutContent"));
  useEffect(() => {
    const handleLanguageChange = () => setAboutText(strings.get("aboutContent"));
    window.addEventListener("languageChange", handleLanguageChange);
    return () => window.removeEventListener("languageChange", handleLanguageChange);
  }, []);

  // === NOVO: memo do onComplete para não reiniciar animação a cada render ===
  const handleComplete = useCallback(() => {
    setCardsVisible(true);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const firstListWidth = container.scrollWidth / 2;

    function step() {
      if (!isPaused) {
        translateXRef.current -= speed;
        if (-translateXRef.current >= firstListWidth) {
          translateXRef.current = 0;
        }
        container.style.transform = `translateX(${translateXRef.current}px)`;
      }
      animationFrameId.current = requestAnimationFrame(step);
    }

    animationFrameId.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId.current);
  }, [isPaused]);

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
    <>
      <style>{`
        .card-hidden {
          opacity: 0;
          transform: translateY(18px);
        }
        @keyframes fadeSlideIn {
          0% { opacity: 0; transform: translateY(18px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .card-animate {
          opacity: 0;
          transform: translateY(18px);
          animation: fadeSlideIn 0.72s cubic-bezier(.2,.9,.3,1) forwards;
        }
      `}</style>

      <section
        ref={sectionRef}
        id="about"
        className="py-20 px-4 sm:px-6 lg:px-16 bg-[#12131A] text-[#e4ded7] min-h-screen"
      >
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-6 tracking-tight text-white">
            <AnimatedText
              text="About Me"
              delayBetween={350}
              startAnimation={startAnimation}
            />
          </h2>
          <AnimatedText
            text={aboutText}  // <-- passa o estado que muda com a linguagem
            className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto"
            delayBetween={100}
            startAnimation={startAnimation}
            onComplete={handleComplete} // <-- função memoizada
          />
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-20">
          {[
            { title: "💻 Full-Stack Development", desc: "React, Node.js, PHP, Flutter, MySQL, MongoDB" },
            { title: "🤖 AI & Machine Learning", desc: "Python, TensorFlow, PyTorch, OpenCV, Chatbots" },
            { title: "🌍 IoT & Electronics", desc: "Arduino, Raspberry Pi, Automation, MQTT" },
            { title: "☁️ Cloud & DevOps", desc: "Google Cloud, Docker, CI/CD, Linux (Ubuntu/Debian)" }
          ].map((card, idx) => (
            <div
              key={idx}
              className={`${cardsVisible ? "card-animate" : "card-hidden"} bg-[#1b1d27] p-6 rounded-xl shadow-lg hover:scale-105 transition-transform`}
              style={{ animationDelay: cardsVisible ? `${idx * 0.28}s` : "0s" }}
            >
              <h4 className="text-xl font-semibold text-white mb-3">{card.title}</h4>
              <p className="text-gray-400 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="overflow-hidden">
          <div
            ref={containerRef}
            className="flex space-x-12"
            style={{ willChange: "transform", cursor: "default" }}
          >
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="flex flex-col items-center bg-[#1b1d27] p-8 rounded-3xl shadow-lg w-48 flex-shrink-0 transition-transform duration-300 hover:scale-105"
              >
                <img src={skill.icon} alt={skill.name} className="w-24 h-24 mb-4" />
                <p className="text-gray-300 text-xl font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
