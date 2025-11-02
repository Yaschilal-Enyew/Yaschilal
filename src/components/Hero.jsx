import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaCode, FaRocket, FaStar } from "react-icons/fa";
import { IoMdCodeWorking } from "react-icons/io";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floatVariants = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="hero"
      className=" relative min-h-screen  flex items-center justify-center px-4 pt-16 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Enhanced decorative gradient glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-72 h-72 sm:w-96 sm:h-96 lg:w-[35rem] lg:h-[35rem] bg-gold-400/25 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div
        className="absolute bottom-20 right-1/4 w-56 h-56 sm:w-80 sm:h-80 lg:w-[24rem] lg:h-[24rem] bg-gold-500/20 rounded-full blur-3xl pointer-events-none animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-10 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Floating decorative icons */}
      <motion.div
        variants={floatVariants}
        animate="float"
        className="absolute top-40 left-10 hidden md:block"
      >
        <FaCode className="text-4xl text-gold-400/30" />
      </motion.div>
      <motion.div
        variants={floatVariants}
        animate="float"
        style={{ animationDelay: "2s" }}
        className="absolute bottom-40 right-20 hidden md:block"
      >
        <FaRocket className="text-4xl text-gold-400/30" />
      </motion.div>
      <motion.div
        variants={floatVariants}
        animate="float"
        style={{ animationDelay: "3s" }}
        className="absolute top-1/3 right-10 hidden lg:block"
      >
        <FaStar className="text-3xl text-gold-400/30" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Text Section */}
          <motion.div
            variants={itemVariants}
            className="text-center md:text-left px-2 space-y-6"
          >
            {/* Greeting Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-gold-400/20 mb-4 mt-10 sm:mt-0"
            >
              <IoMdCodeWorking className="text-gold-400 text-xl" />
              <span className="text-sm font-medium gradient-gold-animated">
                Full Stack Developer
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight">
              <span className="text-ink-100">Hi, I'm</span>
              <br />
              <span className="gradient-gold-animated inline-block">
                Yaschilal
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-ink-100/80 leading-relaxed max-w-lg">
              Crafting modern{" "}
              <span className="font-bold text-gold-300">MERN FullStack web</span>{" "}
              &{" "}
              <span className="font-bold text-gold-300">
                mobile applications
              </span>{" "}
              with clean design and powerful functionality.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#projects" className="btn-gold group">
                <span>View My Work</span>
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full font-semibold border-2 border-gold-400 text-gold-300 hover:bg-gold-400 hover:text-ink-900 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>

            {/* Quick Stats */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-6 justify-center md:justify-start pt-4"
            >
              {[
                { value: "50+", label: "Projects" },
                { value: "2+", label: "Years Exp" },
                { value: "100%", label: "Dedication" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="text-center px-4 py-2 rounded-xl glass border border-gold-400/10"
                >
                  <div className="text-2xl font-bold gradient-gold">
                    {stat.value}
                  </div>
                  <div className="text-xs text-ink-100/60">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center order-1 md:order-2 relative"
          >
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gold-400/30 rounded-3xl blur-2xl scale-110 animate-pulse" />

              <motion.img
                src="/pro9.png"
                alt="Yaschilal"
                className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-3xl object-cover shadow-2xl border-4 border-gold-400/20"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />

              {/* Floating badges around image */}
              <motion.div
                variants={floatVariants}
                animate="float"
                className="absolute -top-4 -left-4 glass rounded-full p-3 border border-gold-400/30"
              >
                <FaCode className="text-2xl text-gold-400" />
              </motion.div>
              <motion.div
                variants={floatVariants}
                animate="float"
                style={{ animationDelay: "1s" }}
                className="absolute -bottom-4 -right-4 glass rounded-full p-3 border border-gold-400/30"
              >
                <FaRocket className="text-2xl text-gold-400" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="flex flex-col items-center gap-2 text-ink-100/60">
          <span className="text-sm">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gold-400/30 rounded-full flex justify-center p-2"
          >
            <div className="w-1 h-3 bg-gold-400 rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
