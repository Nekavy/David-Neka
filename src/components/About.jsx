// src/components/About.jsx
export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-16 bg-[#12131A] text-[#e4ded7]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-6">About Me</h2>
        <p className="text-base md:text-lg text-gray-400 mb-12">
          I'm a passionate Frontend Developer with a strong foundation in modern web technologies. I love crafting elegant and performant user interfaces using React, Tailwind CSS, and JavaScript.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl mx-auto">
        <div className="flex-1">
          <img
            src="/assets/about-profile.jpg"
            alt="About Profile"
            className="w-full max-w-sm rounded-2xl mx-auto grayscale hover:grayscale-0 transition duration-300"
          />
        </div>

        <div className="flex-1 text-left">
          <h3 className="text-2xl font-bold mb-4">What I do</h3>
          <ul className="space-y-4 text-gray-300">
            <li>
              <span className="font-semibold text-white">🔧 Frontend Development:</span> Creating
              responsive and interactive websites using React and modern CSS frameworks.
            </li>
            <li>
              <span className="font-semibold text-white">🎨 UI/UX Design:</span> Designing user-friendly layouts and consistent design systems.
            </li>
            <li>
              <span className="font-semibold text-white">🚀 Performance Optimization:</span> Improving load times and accessibility.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
