import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-white/60
        bg-white/35
        px-6
        py-10
        backdrop-blur-2xl
        md:px-10
      "
    >
      {/* Soft ambient glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-20
          -top-24
          h-52
          w-52
          rounded-full
          bg-blue-300/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -bottom-24
          h-52
          w-52
          rounded-full
          bg-purple-300/10
          blur-3xl
        "
      />

      {/* Top glass highlight */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-white
          to-transparent
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          justify-between
          gap-6
          text-sm
          text-[#737780]
          md:flex-row
        "
      >
        {/* Brand */}
        <div className="flex items-center gap-3">
          <span
            className="
              rounded-full
              border
              border-black/5
              bg-white/50
              px-3
              py-1.5
              font-semibold
              tracking-tight
              text-[#17181b]
              shadow-sm
              backdrop-blur-xl
            "
          >
            MERN.
          </span>

          <span className="text-[#777b84]">© {currentYear} Abhay S. Pawar</span>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap items-center justify-center gap-2">
          <a
            href="#about"
            className="
              rounded-full
              px-4
              py-2
              transition-all
              duration-500
              hover:bg-white/60
              hover:text-[#17181b]
              hover:shadow-sm
            "
          >
            About
          </a>

          <a
            href="#contact"
            className="
              rounded-full
              px-4
              py-2
              transition-all
              duration-500
              hover:bg-white/60
              hover:text-[#17181b]
              hover:shadow-sm
            "
          >
            Contact
          </a>

          <a
            href="https://github.com/abhaypawar04"
            target="_blank"
            rel="noopener noreferrer"
            className="
              rounded-full
              px-4
              py-2
              transition-all
              duration-500
              hover:bg-white/60
              hover:text-[#17181b]
              hover:shadow-sm
            "
          >
            GitHub
          </a>

          <a
            href="#"
            className="
              rounded-full
              px-4
              py-2
              transition-all
              duration-500
              hover:bg-white/60
              hover:text-[#17181b]
              hover:shadow-sm
            "
          >
            LinkedIn
          </a>
        </nav>

        {/* Back to Top */}
        <a
          href="#"
          className="
            group
            flex
            items-center
            gap-2
            rounded-full
            border
            border-white/70
            bg-white/40
            px-4
            py-2.5
            text-[#5f636b]
            shadow-[0_5px_20px_rgba(0,0,0,0.04)]
            backdrop-blur-xl
            transition-all
            duration-500
            hover:-translate-y-1
            hover:bg-white/70
            hover:text-[#17181b]
            hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)]
            active:scale-95
          "
          aria-label="Back to top"
        >
          <svg
            className="
              h-4
              w-4
              transition-transform
              duration-500
              group-hover:-translate-y-0.5
            "
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
