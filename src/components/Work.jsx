// src/components/Work.jsx
export default function Work() {
  const projects = [
    {
      title: "Personal Portfolio",
      description: "A responsive portfolio built with React and Tailwind CSS.",
      image: "/assets/portfolio-thumb.jpg",
      link: "#"
    },
    {
      title: "E-commerce UI",
      description: "UI prototype for a modern e-commerce site.",
      image: "/assets/ecommerce-thumb.jpg",
      link: "#"
    },
    {
      title: "Landing Page",
      description: "High-converting landing page using HTML/CSS/JS.",
      image: "/assets/landing-thumb.jpg",
      link: "#"
    }
  ];

  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-16 bg-[#0e1016] text-[#e4ded7]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-6">My Work</h2>
        <p className="text-base md:text-lg mb-12 text-gray-400">
          Here are some projects I've worked on recently.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <a
              href={project.link}
              key={index}
              className="group relative block overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-white/5"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover transition-opacity duration-300 group-hover:opacity-80"
              />
              <div className="p-5 text-left">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-300">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
