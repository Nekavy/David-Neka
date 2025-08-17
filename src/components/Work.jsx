import { useState, useEffect } from "react";
import aiProjects from "../projects/ai.json";
import webProjects from "../projects/web.json";
import mobileProjects from "../projects/mobile.json";
import designProjects from "../projects/design.json";
import backendProjects from "../projects/backend.json";
import iotProjects from "../projects/iot.json";
import { Typewriter } from "react-simple-typewriter";
import strings from "./strings";

const categories = ["AI", "Web", "Mobile", "Design", "Backend", "IoT"];

const projects = [
  ...aiProjects.map((p) => ({ ...p, category: "AI" })),
  ...webProjects.map((p) => ({ ...p, category: "Web" })),
  ...mobileProjects.map((p) => ({ ...p, category: "Mobile" })),
  ...designProjects.map((p) => ({ ...p, category: "Design" })),
  ...backendProjects.map((p) => ({ ...p, category: "Backend" })),
  ...iotProjects.map((p) => ({ ...p, category: "IoT" })),
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("Web");
  
  // Estado para os textos dinâmicos
  const [portfolioTexts, setPortfolioTexts] = useState({
    title: strings.get("portfolioTitle"),
    subtitle: strings.get("portfolioSubtitle"),
    noProjects: strings.get("noProjectsFound")
  });

  // Listener para mudanças de linguagem
  useEffect(() => {
    const handleLanguageChange = () => {
      setPortfolioTexts({
        title: strings.get("portfolioTitle"),
        subtitle: strings.get("portfolioSubtitle"),
        noProjects: strings.get("noProjectsFound")
      });
    };
    
    window.addEventListener("languageChange", handleLanguageChange);
    return () => window.removeEventListener("languageChange", handleLanguageChange);
  }, []);

  const filteredProjects = projects.filter(
    (project) => project.category === selectedCategory
  );

  return (
    <section
      id="portfolio"
      className="py-20 px-4 sm:px-6 lg:px-16 bg-[#0e1016] text-[#e4ded7]"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-6">
          <Typewriter
            words={[
              strings.get("worktitle"),
              strings.get("worktitleWEB"),
              strings.get("worktitleAI"),
              strings.get("worktitleMobile"),
              strings.get("worktitleDesign"),
              strings.get("worktitleBackend"),
              strings.get("worktitleIoT"),
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={60}
            delaySpeed={1500}
          />
        </h2>

        <p className="text-base md:text-lg mb-12 text-gray-400">
          {portfolioTexts.subtitle}
        </p>

        {/* Menu categorias */}
        <nav className="mb-12 flex justify-center gap-6 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-lg font-semibold transition duration-300 ${
                selectedCategory === cat
                  ? "bg-white/80 text-gray-900"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* Projetos filtrados */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.length === 0 ? (
            <p className="text-gray-400">{portfolioTexts.noProjects}</p>
          ) : (
            filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-white/5"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover transition-opacity duration-300 group-hover:opacity-80"
                />

                {/* Botões GitHub e URL */}
                <div className="absolute top-3 right-3 flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-black bg-white text-black hover:bg-gray-200 transition"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.94c.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.54-3.87-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.77 2.73 1.26 3.4.96.11-.76.41-1.26.74-1.55-2.56-.29-5.26-1.28-5.26-5.68 0-1.26.45-2.3 1.19-3.11-.12-.29-.52-1.47.11-3.06 0 0 .98-.31 3.2 1.18a11.04 11.04 0 0 1 5.82 0c2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.85 1.19 3.11 0 4.41-2.7 5.39-5.27 5.67.42.36.79 1.08.79 2.18v3.24c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
                      </svg>
                    </a>
                  )}
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-black bg-white text-black hover:bg-gray-200 transition"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.59 13.41a1 1 0 0 1 1.41 0l2.59 2.59a3 3 0 1 0 4.24-4.24l-1.17-1.17a1 1 0 0 1 1.41-1.41l1.17 1.17a5 5 0 0 1-7.07 7.07l-2.59-2.59a1 1 0 0 1 0-1.42Zm2.82-2.82a1 1 0 0 1-1.41 0L9.41 8a3 3 0 1 0-4.24 4.24l1.17 1.17a1 1 0 0 1-1.41 1.41l-1.17-1.17a5 5 0 0 1 7.07-7.07l2.59 2.59a1 1 0 0 1 0 1.42Z"
                        />
                      </svg>
                    </a>
                  )}
                </div>

                <div className="p-5 text-left">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-300">{strings.get(project.description)}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}