import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#eaeaef] bg-white/40 py-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-dark">MERN.</span>
          <span>© {currentYear} Abhay S. Pawar</span>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap gap-6 justify-center">
          <a href="#about" className="hover:text-dark transition">
            About
          </a>
          <a href="#projects" className="hover:text-dark transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-dark transition">
            Contact
          </a>
          <a href="#" className="hover:text-dark transition">
            GitHub
          </a>
          <a href="#" className="hover:text-dark transition">
            LinkedIn
          </a>
        </nav>

        {/* Back to Top */}
        <a
          href="#"
          className="inline-flex items-center gap-1 hover:text-dark transition"
          aria-label="Back to top"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
          Back to top
        </a>
      </div>
    </footer>
  );
};

export default Footer;
