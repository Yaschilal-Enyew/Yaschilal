import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaRocket, FaLightbulb, FaHeart, FaGraduationCap, FaGlobe } from "react-icons/fa";
import { HiCodeBracketSquare } from "react-icons/hi2";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const cards = [
    {
      icon: <FaCode className="text-3xl text-gold-400" />,
      title: "Clean Code",
      description: "Writing maintainable and scalable code that follows best practices.",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: <FaRocket className="text-3xl text-gold-400" />,
      title: "Performance",
      description: "Building fast and optimized applications for the best user experience.",
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: <FaLightbulb className="text-3xl text-gold-400" />,
      title: "Innovation",
      description: "Always exploring new technologies and creative solutions.",
      color: "from-yellow-500/20 to-orange-500/20",
    },
    {
      icon: <FaHeart className="text-3xl text-gold-400" />,
      title: "Passion",
      description: "Love what I do and always eager to take on new challenges.",
      color: "from-red-500/20 to-rose-500/20",
    },
  ];

  return (
    <section id="about" className="section relative overflow-hidden">
      {/* Enhanced Golden blurred background */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-80 h-80 sm:w-[32rem] sm:h-[32rem] bg-gold-400/25 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-gold-500/20 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 px-2"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="relative inline-flex items-center gap-3 px-6 py-3 rounded-full glass border border-gold-400/20">
              <HiCodeBracketSquare className="text-gold-400 text-2xl" />
              <span className="text-sm font-semibold gradient-gold">
                About Me
              </span>
            </div>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 inline-block relative">
            <span className="gradient-gold-animated">Who I Am</span>
            <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-300 rounded-full"></span>
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gold-400/20 rounded-3xl blur-2xl scale-110" />
              <img
                src="/pro7.png"
                alt="My Profile"
                className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-3xl object-cover shadow-2xl border-4 border-gold-400/20 z-10"
              />
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 glass rounded-xl p-4 border border-gold-400/20">
                <FaGraduationCap className="text-3xl text-gold-400" />
              </div>
              <div className="absolute -bottom-6 -right-6 glass rounded-xl p-4 border border-gold-400/20">
                <FaGlobe className="text-3xl text-gold-400" />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 text-ink-100/90 leading-relaxed"
          >
            <p className="text-lg sm:text-xl">
              Hey 👋 I'm <span className="font-bold text-gold-300 text-2xl">Yaschilal</span>,
              a passionate{" "}
              <span className="font-semibold">Software Engineering student</span> who loves
              building modern web and mobile applications.
            </p>
            <p className="text-lg sm:text-xl">
              My journey revolves around{" "}
              <span className="font-semibold gradient-gold">
                MERN Stack, React Native, and Backend Development
              </span>.
              I enjoy turning ideas into functional, user-friendly products.
            </p>
            <p className="text-lg sm:text-xl">
              Apart from coding, I enjoy learning new technologies, improving my
              design skills, and working on projects that make life easier for
              people 🌍.
            </p>

            {/* Skills Highlight */}
            <div className="flex flex-wrap gap-3 pt-4">
              {["React", "Node.js", "MongoDB", "React Native", "Express"].map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 rounded-full glass border border-gold-400/20"
                >
                  <span className="text-sm font-medium gradient-gold">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="card-hover glass rounded-2xl p-6 border border-gold-400/10 relative overflow-hidden group"
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              
              <div className="relative z-10">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-ink-100 mb-2">{card.title}</h3>
                <p className="text-ink-100/70 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
