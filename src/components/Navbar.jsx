import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/70 backdrop-blur-md shadow-lg py-4">
      {/* Golden blur behind navbar */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-amber-200 rounded-full opacity-20 blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Logo */}
        <a
          href="#hero"
          className="text-2xl font-bold text-gray-900 tracking-wide"
        >
          <span className="text-amber-500">Y</span>aschilal
          <span className="text-amber-500">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-gray-700 font-medium hover:text-amber-500 transition-colors duration-300"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-400 rounded-full transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="https://github.com/Yaschilal-Enyew/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border-2 border-amber-500 text-amber-500 font-bold rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
          >
            <FaGithub /> <span>GitHub</span>
          </a>
        </div>

        {/* Mobile Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl text-gray-800 focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white/90 backdrop-blur-md transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-96 opacity-100 py-4"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-800 font-medium hover:text-amber-500 transition-colors duration-300 w-full text-center py-2 relative group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-400 rounded-full transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="w-48 text-center py-2 border-2 border-amber-500 text-amber-500 font-bold rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <FaGithub /> <span>GitHub</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
