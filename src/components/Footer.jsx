// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-[#0E1016] text-[#e4ded7] border-t border-gray-800 py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} David Borges. All rights reserved.</p>

        <div className="flex space-x-6 text-xl">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:your@email.com" className="hover:text-white transition-colors">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
