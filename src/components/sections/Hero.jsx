// import React from "react";

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center justify-center pt-20 md:pt-24 section-pad relative overflow-hidden"
//     >
//       {/* Background Decoration */}
//       <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl -z-10 pointer-events-none" />

//       <div className="w-full flex flex-col items-center text-center max-w-4xl mx-auto">
//         {/* Badge */}
//         <div className="reveal">
//           <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider uppercase bg-white/60 rounded-full border border-white/50 shadow-sm text-muted">
//             MERN Stack Developer
//           </span>
//         </div>

//         {/* Heading */}
//         <h1 className="reveal title-lg leading-[1.1] md:leading-[1.15]">
//           <span className="block">Hi, I'm</span>
//           <span className="text-gradient">Abhay Pawar</span>
//         </h1>

//         {/* Description */}
//         <p className="reveal subtitle mt-6 text-lg md:text-xl">
//           Crafting full‑stack experiences with MongoDB, Express, React & Node. I
//           turn complex problems into elegant, human‑centered solutions.
//         </p>

//         {/* CTAs */}
//         <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-4">
//           <a
//             href="#projects"
//             className="px-8 py-3.5 bg-dark text-white rounded-full font-medium hover:bg-dark/80 transition shadow-lg shadow-black/5 hover:shadow-xl"
//           >
//             View Projects
//           </a>
//           <a
//             href="#contact"
//             className="px-8 py-3.5 bg-white text-dark rounded-full font-medium border border-[#e2e2ea] hover:bg-[#f4f4f9] transition shadow-sm"
//           >
//             Contact Me
//           </a>
//         </div>

//         {/* Social Links */}
//         <div className="reveal mt-12 flex items-center gap-6 text-muted">
//           <a
//             href="#"
//             aria-label="GitHub"
//             className="hover:text-dark transition"
//           >
//             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
//             </svg>
//           </a>
//           <a
//             href="#"
//             aria-label="LinkedIn"
//             className="hover:text-dark transition"
//           >
//             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//             </svg>
//           </a>
//           <a
//             href="#"
//             aria-label="Twitter"
//             className="hover:text-dark transition"
//           >
//             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//             </svg>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from "react";
import heroBg from "../../assets/images/one.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 md:pt-24 section-pad relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(81, 28, 28, 0.1), rgba(86, 68, 85, 0.18)), url(${heroBg})`,
      }}
    >
      {/* Background Decoration */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="w-full flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Badge */}
        <div className="reveal">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider uppercase bg-white/60 rounded-full border border-white/50 shadow-sm text-muted">
            MERN Stack Developer
          </span>
        </div>

        {/* Heading */}
        <h1 className="reveal title-lg leading-[1.1] md:leading-[1.15]">
          <span className="block">Hi, I'm</span>
          <span className="text-gradient">Abhay Pawar</span>
        </h1>

        {/* Description */}
        <p className="reveal subtitle mt-6 text-lg md:text-xl">
          Crafting full-stack experiences with MongoDB, Express, React & Node. I
          turn complex problems into elegant, human-centered solutions.
        </p>

        {/* CTAs */}
        <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3.5 bg-dark text-white rounded-full font-medium hover:bg-dark/80 transition shadow-lg shadow-black/5 hover:shadow-xl"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-8 py-3.5 bg-white text-dark rounded-full font-medium border border-[#e2e2ea] hover:bg-[#f4f4f9] transition shadow-sm"
          >
            Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div className="reveal mt-12 flex items-center gap-6 text-muted">
          <a
            href="#"
            aria-label="GitHub"
            className="hover:text-dark transition"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:text-dark transition"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C23.2 23.227 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-dark transition"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
