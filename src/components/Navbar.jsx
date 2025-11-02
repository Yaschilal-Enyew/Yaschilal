import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaGithub, FaMoon, FaSun, FaUserShield } from "react-icons/fa"; // added FaUserShield
import { HiCodeBracket } from "react-icons/hi2";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    setTheme(current);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
  };

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut", staggerChildren: 0.05 },
    },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-white/20 bg-ink-900/80 backdrop-blur-xl shadow-lg"
          : "border-white/10 bg-transparent"
      } py-4 overflow-x-hidden`}
    >
      {/* Enhanced decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl pointer-events-none opacity-50" />

      <div className="container mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Logo */}
        <motion.a
          href="#hero"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-2xl font-extrabold tracking-wide gradient-gold-animated flex items-center gap-2"
        >
          <HiCodeBracket className="text-3xl" />
          <span>Yaschilal</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -3 }}
              className="relative font-medium hover:text-gold-300 transition-colors duration-300 group"
              style={{ color: "var(--nav-fg)" }}
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gold-400 rounded-full transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}

          {/* 🟡 Admin Icon Link */}
          <motion.a
            href="/#"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full border border-gold-400/30 hover:bg-gold-400/20 transition-all duration-300 flex items-center justify-center"
            style={{ color: "var(--nav-fg)" }}
            title="Admin Panel"
          >
            <FaUserShield className="text-xl text-gold-400" />
          </motion.a>

          <motion.a
            href="https://github.com/Yaschilal-Enyew/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 rounded-full font-bold bg-gold-400 hover:bg-gold-300 transition-all duration-300 flex items-center space-x-2 shadow-lg group"
            style={{ color: theme === "dark" ? "#0B1220" : "#111827" }}
          >
            <FaGithub className="group-hover:rotate-12 transition-transform" />
            <span>GitHub</span>
          </motion.a>

          <motion.button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full border border-white/10 hover:border-gold-400 transition-all glass"
            style={{ color: "var(--nav-fg)" }}
          >
            {theme === "dark" ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
          </motion.button>
        </div>

        {/* Mobile Button */}
        <div className="lg:hidden flex items-center gap-3">
          <motion.button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full border border-white/10 glass"
            style={{ color: "var(--nav-fg)" }}
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </motion.button>

          <motion.button
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
            className="text-2xl focus:outline-none"
            style={{ color: "var(--nav-fg)" }}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="lg:hidden backdrop-blur-xl border-t border-white/10 overflow-hidden w-full"
            style={{
              backgroundColor: scrolled
                ? "var(--nav-bg)"
                : "rgba(11, 18, 32, 0.95)",
            }}
          >
            <div className="flex flex-col items-center space-y-6 w-full py-8">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setIsOpen(false)}
                  whileTap={{ scale: 0.95 }}
                  className="font-medium transition-colors duration-300 w-full text-center py-2 relative group"
                  style={{ color: "var(--nav-fg)" }}
                >
                  {link.name}
                  <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-0 h-0.5 bg-gold-400 rounded-full transition-all group-hover:w-20"></span>
                </motion.a>
              ))}

              {/* 🟡 Admin Icon Link for Mobile */}
              <motion.a
                href="/#"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 text-gold-400 py-2 border border-gold-400/30 rounded-full w-40 hover:bg-gold-400/20 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                <FaUserShield />
                <span>Admin</span>
              </motion.a>

              <motion.a
                href="https://github.com/Yaschilal-Enyew/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                whileTap={{ scale: 0.95 }}
                className="w-48 text-center py-3 rounded-full font-bold bg-gold-400 hover:bg-gold-300 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
                style={{ color: theme === "dark" ? "#0B1220" : "#111827" }}
              >
                <FaGithub />
                <span>GitHub</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
