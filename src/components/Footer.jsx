// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-[#0E1016] text-[#e4ded7] border-t border-gray-800 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Copyright */}
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} David Borges. All rights reserved.
        </p>

        {/* Developed by */}
        <p className="text-sm text-gray-400 flex items-center gap-1">
          Developed and designed by 
          <a
            href="https://www.linkedin.com/in/davidneka/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e4ded7] hover:text-white transition-colors font-medium"
          >
            David Borges
          </a>
        </p>
      </div>
    </footer>
  );
}
