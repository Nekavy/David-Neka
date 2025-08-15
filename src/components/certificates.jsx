import { useEffect, useRef, useState } from "react";

const categories = ["All", "Certificates", "Awards"];
export default function Certificates() {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const items = [
    {
      title: "Frontend Developer Certification",
      issuer: "freeCodeCamp",
      date: "June 2024",
      type: "Certificate",
      url: "#",
    },
    {
      title: "Responsive Web Design",
      issuer: "Coursera",
      date: "April 2024",
      type: "Certificate",
      url: "#",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "March 2024",
      type: "Certificate",
      url: "#",
    },
    {
      title: "Best Innovation Award",
      issuer: "Tech Expo 2024",
      date: "February 2024",
      type: "Award",
      url: "#",
    },
    {
      title: "Community Recognition",
      issuer: "Open Source Contributors",
      date: "January 2024",
      type: "Award",
      url: "#",
    },
  ];

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.type === selectedCategory.slice(0, -1));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      id="certificates"
      className="py-20 px-4 sm:px-6 lg:px-16 bg-[#0E1016] text-[#e4ded7]"
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="flex flex-col items-center text-center text-[72px] sm:text-[100px] md:text-[140px] lg:text-[180px] font-extrabold leading-[1em] mb-6">
          <span className={`opacity-0 ${hasAnimated ? "fade-up" : ""}`}>
            CERTIFICATES
          </span>
          <span className={`opacity-0 ${hasAnimated ? "fade-up-delay" : ""}`}>
            & AWARDS
          </span>
        </h1>

        <p className="text-base md:text-lg text-gray-400 mb-12 text-center max-w-3xl">
          A selection of my certificates and awards from different fields.
        </p>

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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {filteredItems.length === 0 ? (
            <p className="text-gray-400">No items found in this category.</p>
          ) : (
            filteredItems.map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-[#1f1f23] bg-[#1a1b22] p-6 shadow hover:shadow-lg transition"
              >
                <span className="text-xs uppercase tracking-wider text-blue-400">
                  {item.type}
                </span>
                <h3 className="text-lg font-bold text-white mt-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400">{item.issuer}</p>
                <p className="text-xs text-gray-500 mb-2">{item.date}</p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-400 hover:underline"
                >
                  View Details
                </a>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}