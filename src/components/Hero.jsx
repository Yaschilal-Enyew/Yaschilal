import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative bg-white min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      {/* Golden blur gradient background */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-72 h-72 sm:w-96 sm:h-96 lg:w-[30rem] lg:h-[30rem] bg-amber-200 rounded-full opacity-30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-56 h-56 sm:w-80 sm:h-80 lg:w-[20rem] lg:h-[20rem] bg-yellow-400 rounded-full opacity-20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Section first on mobile */}
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center order-1 md:order-2 mt-8 md:mt-0"
        >
          <img
            src="/pro9.png" // replace with your image
            alt="Yaschilal"
            className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl object-cover shadow-2xl border-4 border-amber-300"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left px-2 order-2 md:order-1"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">
              Yaschilal
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 max-w-md md:max-w-lg mx-auto md:mx-0">
            A passionate <span className="font-bold">Software Engineer</span>{" "}
            crafting modern <span className="text-green-600 font-bold">MERN FullStack web</span> & mobile applications with clean design and
            powerful functionality.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center px-5 py-3 sm:px-6 sm:py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-white rounded-full font-semibold shadow-lg hover:scale-105 transform transition duration-300"
            >
              View My Work <FaArrowRight className="ml-2" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
