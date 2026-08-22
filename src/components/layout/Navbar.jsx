// import React, { useState, useEffect } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { name: "About", href: "#about" },
//     { name: "Skills", href: "#skills" },
//     { name: "Projects", href: "#projects" },
//     { name: "Experience", href: "#experience" },
//     { name: "Contact", href: "#contact" },
//   ];

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled ? "nav-glass shadow-sm" : "bg-transparent"
//       } px-6 md:px-10 lg:px-16`}
//     >
//       <div className="max-w-7xl mx-auto flex items-center justify-between h-16 md:h-20">
//         {/* Logo */}
//         <a
//           href="#"
//           className="text-xl font-bold tracking-tight hover:opacity-80 transition"
//         >
//           <span className=" text-white"> ABHAY S. PAWAR</span>
//           <span className="text-light"></span>
//         </a>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               className="relative hover:text-dark transition-colors after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
//             >
//               {link.name}
//             </a>
//           ))}
//           <a
//             href="/resume.pdf"
//             className="ml-2 px-6 py-2.5 bg-dark text-white rounded-full text-sm font-medium hover:bg-dark/80 transition shadow-sm hover:shadow-md"
//           >
//             Resume
//           </a>
//         </nav>

//         {/* Mobile Toggle */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden p-2 -mr-2 text-dark focus:outline-none"
//           aria-label="Toggle menu"
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             {isOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={1.5}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={1.5}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden glass rounded-2xl mt-2 p-6 space-y-4 text-base font-medium border border-white/20 shadow-xl mb-4 animate-fade-up">
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               onClick={() => setIsOpen(false)}
//               className="block hover:text-primary transition"
//             >
//               {link.name}
//             </a>
//           ))}
//           <a
//             href="/resume.pdf"
//             className="inline-block mt-2 px-6 py-2.5 bg-dark text-white rounded-full text-sm font-medium hover:bg-dark/80 transition"
//           >
//             Resume
//           </a>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    // { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "nav-glass shadow-sm" : "bg-transparent"
      } px-6 md:px-10 lg:px-16`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#"
          className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          ABHAY S. PAWAR
        </a>

        {/* Desktop Navigation */}
        <nav
          className={`hidden md:flex items-center gap-8 text-sm font-medium transition-colors duration-300 ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative transition-colors duration-300 hover:opacity-70"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 -mr-2 transition-colors duration-300 ${
            isScrolled ? "text-black" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass rounded-2xl mt-2 p-6 space-y-4 text-base font-medium border border-white/20 shadow-xl mb-4 animate-fade-up">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block transition-colors ${
                isScrolled ? "text-black" : "text-white"
              } hover:opacity-70`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
