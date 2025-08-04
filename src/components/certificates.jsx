// src/components/Certificates.jsx
export default function Certificates() {
  const certificates = [
    {
      title: 'Frontend Developer Certification',
      issuer: 'freeCodeCamp',
      date: 'June 2024',
      url: '#',
    },
    {
      title: 'Responsive Web Design',
      issuer: 'Coursera',
      date: 'April 2024',
      url: '#',
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: 'March 2024',
      url: '#',
    },
  ];

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-16 bg-[#0E1016] text-[#e4ded7]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-6">Certificates</h2>
        <p className="text-base md:text-lg text-gray-400 mb-12">
          Some of the certificates I've earned to strengthen my web development skills.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="rounded-xl border border-[#1f1f23] bg-[#1a1b22] p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-bold text-white">{cert.title}</h3>
              <p className="text-sm text-gray-400">{cert.issuer}</p>
              <p className="text-xs text-gray-500 mb-2">{cert.date}</p>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400 hover:underline"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
