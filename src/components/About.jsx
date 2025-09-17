import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-white py-20 sm:py-28 px-4 sm:px-6 lg:px-16"
    >
      {/* Golden blurred background */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-64 h-64 sm:w-80 sm:h-80 lg:w-[28rem] lg:h-[28rem] bg-amber-200 rounded-full opacity-20 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-12 px-2">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 inline-block relative">
            About Me
            <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 rounded-full animate-pulse"></span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src="/pro7.png" // replace with your profile image
              alt="My Profile"
              className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-2xl object-cover shadow-2xl border-4 border-amber-300"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gray-700 leading-relaxed px-2 md:px-0"
          >
            <p className="text-base sm:text-lg mb-4">
              Hey 👋 I’m <span className="font-bold text-amber-600">Yaschilal</span>, 
              a passionate <span className="font-semibold">Software Engineering student</span> who loves building 
              modern web and mobile applications.
            </p>
            <p className="text-base sm:text-lg mb-4">
              My journey revolves around{" "}
              <span className="font-semibold">MERN Stack, React Native, and Backend Development</span>. 
              I enjoy turning ideas into functional, user-friendly products.
            </p>
            <p className="text-base sm:text-lg">
              Apart from coding, I enjoy learning new technologies, improving my design skills, 
              and working on projects that make life easier for people 🌍.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
