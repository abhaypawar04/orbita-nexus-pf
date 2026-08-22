import React from "react";
import heroBg from "../../assets/images/one.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat pt-20 md:pt-24 "
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(0, 0, 0, 0.49),
            rgba(174, 18, 179, 0)
          ),
          url(${heroBg})
        `,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Soft Glass Glow */}
      <div
        className="pointer-events-none absolute left-1/3 top-1/3
        h-[500px] w-[500px]
        -translate-x-1/2 -translate-y-1/2
        rounded-full
        bg-white/10
        blur-[120px]"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-start px-6 text-left md:px-10 lg:px-20">
        {/* Heading */}
        <h1 className="reveal leading-[1.05]">
          <span className="block text-2xl font-medium tracking-tight text-white/80 md:text-3xl">
            Hi, I'm
          </span>

          <span className="mt-2 block text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Abhay Pawar
          </span>
        </h1>

        {/* Description */}
        <p className="reveal mt-7 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg md:text-xl">
          Crafting full-stack experiences with{" "}
          <span className="text-white font-medium">MongoDB</span>,{" "}
          <span className="text-white font-medium">Express</span>,{" "}
          <span className="text-white font-medium">React</span> &{" "}
          <span className="text-white font-medium">Node</span>. I turn complex
          problems into elegant, human-centered solutions.
        </p>

        {/* Buttons */}
        <div className="reveal mt-10 flex flex-wrap items-center gap-4">
          {/* GitHub */}
          <a
            href="https://github.com/abhaypawar04"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group inline-flex items-center gap-3
              rounded-full
              border border-white/20
              bg-white/10
              px-6 py-3.5
              text-sm font-medium text-white
              shadow-[0_8px_30px_rgba(0,0,0,0.12)]
              backdrop-blur-xl
              transition-all duration-500
              ease-out
              hover:-translate-y-1
              hover:border-white/40
              hover:bg-white/20
              hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)]
              active:scale-95
            "
          >
            <svg
              className="
                h-5 w-5
                transition-transform duration-500
                group-hover:rotate-[-8deg]
                group-hover:scale-110
              "
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>

            <span>GitHub</span>
          </a>

          {/* Contact */}
          <a
            href="#contact"
            className="
              group inline-flex items-center gap-2
              rounded-full
              border border-white/30
              bg-white
              px-7 py-3.5
              text-sm font-medium text-black
              shadow-[0_8px_30px_rgba(255,255,255,0.15)]
              transition-all duration-500
              ease-out
              hover:-translate-y-1
              hover:bg-white/90
              hover:shadow-[0_12px_40px_rgba(255,255,255,0.25)]
              active:scale-95
            "
          >
            <span>Contact Me</span>

            <span
              className="
                transition-transform duration-500
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </a>
        </div>

        {/* Small glass status */}
        <div className="reveal mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/60 backdrop-blur-xl">
          <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]" />
          Available for opportunities
        </div>
      </div>
    </section>
  );
};

export default Hero;
