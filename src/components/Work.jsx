import { useState } from "react";

import aiProjects from "../projects/ai.json";
import webProjects from "../projects/web.json";
import mobileProjects from "../projects/mobile.json";
import designProjects from "../projects/design.json";
import backendProjects from "../projects/backend.json";
import infraProjects from "../projects/infra.json";
import iotProjects from "../projects/iot.json";

const categories = ["AI", "Web", "Mobile", "Design", "Backend", "Infrastructure", "IoT"];

const projects = [
  ...aiProjects.map((p) => ({ ...p, category: "AI" })),
  ...webProjects.map((p) => ({ ...p, category: "Web" })),
  ...mobileProjects.map((p) => ({ ...p, category: "Mobile" })),
  ...designProjects.map((p) => ({ ...p, category: "Design" })),
  ...backendProjects.map((p) => ({ ...p, category: "Backend" })),
  ...infraProjects.map((p) => ({ ...p, category: "Infrastructure" })),
  ...iotProjects.map((p) => ({ ...p, category: "IoT" })),
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("Web");

  const filteredProjects = projects.filter(
    (project) => project.category === selectedCategory
  );

  return (
    <section
      id="portfolio"
      className="py-20 px-4 sm:px-6 lg:px-16 bg-[#0e1016] text-[#e4ded7]"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-6">Portfolio</h2>
        <p className="text-base md:text-lg mb-12 text-gray-400">
          Explore projects by category.
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
            <p className="text-gray-400">No projects found in this category.</p>
          ) : (
            filteredProjects.map((project, index) => (
              <a
                href={project.link || project.github || "#"}
                key={index}
                className="group relative block overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-white/5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover transition-opacity duration-300 group-hover:opacity-80"
                />
                <div className="p-5 text-left">
                  <h3 className="flex items-center justify-between text-xl font-bold mb-2">
                    {project.title}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-3 text-sm text-[#ebec59] underline"
                        onClick={e => e.stopPropagation()}
                      >
                        GitHub
                      </a>
                    )}
                  </h3>
                  <p className="text-sm text-gray-300">{project.description}</p>
                </div>
              </a>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
