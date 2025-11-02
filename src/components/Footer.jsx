import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaCode } from "react-icons/fa";
import { HiCodeBracket } from "react-icons/hi2";

const Footer = () => {
  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/Yaschilal-Enyew/",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/yaschilal-enyew-23b152374",
      label: "LinkedIn",
    },
    {
      icon: <FaEnvelope />,
      href: "mailto:yilkalenyew092@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="relative py-16 px-6 border-t border-white/10 bg-ink-900/40 backdrop-blur-xl overflow-hidden">
      {/* Enhanced golden blurs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-gold-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gold-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <HiCodeBracket className="text-3xl text-gold-400" />
              <h3 className="text-2xl font-extrabold gradient-gold-animated">
                Yaschilal
              </h3>
            </div>
            <p className="text-ink-100/70 mb-4 max-w-xs mx-auto md:mx-0">
              Crafting modern web and mobile applications with passion and
              precision.
            </p>
            <p className="text-sm text-ink-100/60">
              Full Stack Developer & Tech Enthusiast
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h4 className="text-lg font-bold gradient-gold mb-6">Quick Links</h4>
            <div className="space-y-3">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ x: 5 }}
                  className="block text-ink-100/80 hover:text-gold-300 transition-colors duration-300"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h4 className="text-lg font-bold gradient-gold mb-6">Connect</h4>
            <div className="flex justify-center md:justify-start gap-4 text-3xl text-ink-100/70 mb-6">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target={social.href.startsWith("mailto:") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="hover:text-gold-300 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-ink-100/60 flex items-center justify-center md:justify-start gap-2">
              <FaEnvelope className="text-gold-400" />
              yilkalenyew092@gmail.com
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-ink-100/60 text-sm flex items-center justify-center gap-2 flex-wrap">
            <span>© {new Date().getFullYear()}</span>
            <span className="gradient-gold font-semibold flex items-center gap-1">
              <HiCodeBracket />
              Yaschilal
            </span>
            <span>All rights reserved.</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-gold-400">
              Made with <FaHeart className="text-red-400" /> using React
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
