import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTelegramPlane,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

const Footer = () => {
  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-white py-12 px-6 border-t border-gray-200">
      {/* Subtle golden blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-amber-200 rounded-full opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-yellow-400 rounded-full opacity-15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 text-center space-y-6">
        {/* Navigation Links */}
        <div className="flex justify-center space-x-8 flex-wrap">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-amber-500 font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 text-2xl text-gray-600">
          <a
            href="https://github.com/Yaschilal-Enyew/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-500 transition-transform transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/yaschilal-enyew-23b152374"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-500 transition-transform transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:yilkalenyew092@gmail.com"
            className="hover:text-amber-500 transition-transform transform hover:scale-110"
          >
            <FaEnvelope />
          </a>
         
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-4"></div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm mt-4">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-amber-500">Yaschilal</span>. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
