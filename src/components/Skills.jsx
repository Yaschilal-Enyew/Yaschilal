import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaMobileAlt,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiTypescript,
  SiNextdotjs,
  SiMysql,
} from "react-icons/si";
import { BiCodeAlt, BiCodeCurly } from "react-icons/bi";

// Enhanced SkillItem with premium animations
const SkillItem = ({ icon, name, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.15, rotate: 5 }}
      className="flex flex-col items-center justify-center p-6 rounded-2xl glass border border-white/10 hover:border-gold-400/50 transition-all duration-500 group cursor-pointer relative overflow-hidden"
    >
      {/* Animated background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <span className="relative z-10 text-center font-semibold text-ink-100/90 text-sm md:text-base tracking-wide">
        {name}
      </span>
      
      {/* Shine effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </motion.div>
  );
};

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const skills = {
    "Frontend Development": [
      { name: "React", icon: <FaReact className="text-blue-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-ink-100" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-400" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" /> },
    ],
    "Backend Development": [
      { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
      { name: "Express.js", icon: <SiExpress className="text-ink-100" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
      { name: "REST APIs", icon: <FaDatabase className="text-purple-400" /> },
    ],
    "Mobile Development": [
      { name: "React Native", icon: <FaReact className="text-blue-300" /> },
      { name: "Expo", icon: <FaMobileAlt className="text-ink-100" /> },
      { name: "Mobile UI/UX", icon: <BiCodeCurly className="text-pink-400" /> },
    ],
    "Tools & Others": [
      { name: "Git", icon: <FaGitAlt className="text-red-400" /> },
      { name: "VS Code", icon: <BiCodeAlt className="text-blue-300" /> },
      { name: "Linux", icon: <FaGitAlt className="text-gold-400" /> },
      { name: "Postman", icon: <BiCodeAlt className="text-orange-400" /> },
    ],
  };

  return (
    <section
      id="skills"
      className="section relative overflow-hidden"
    >
      {/* Enhanced decorative gold gradient blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold-400/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-gold-500/15 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass border border-gold-400/20">
              <BiCodeAlt className="text-gold-400 text-2xl" />
              <span className="text-sm font-semibold gradient-gold">
                My Expertise
              </span>
            </div>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl font-extrabold mb-6 inline-block relative">
            <span className="gradient-gold-animated">Tech Stack</span>
            <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-300 rounded-full"></span>
          </h2>
          <p className="text-lg text-ink-100/80 max-w-3xl mx-auto font-light px-4">
            Here are the core technologies and tools I've been working with. I'm
            always learning and expanding my skill set to build better solutions.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {Object.entries(skills).map(([category, skillList], categoryIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIdx * 0.2 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8 sm:p-12 transition-all duration-700 hover:shadow-2xl relative overflow-hidden group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-10 pb-4 border-b border-white/10">
                <div className="text-3xl text-gold-400">{categoryIdx === 0 ? "💻" : categoryIdx === 1 ? "⚙️" : categoryIdx === 2 ? "📱" : "🛠️"}</div>
                <h3 className="text-2xl sm:text-3xl font-bold gradient-gold tracking-wide">
                  {category}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {skillList.map((skill, skillIdx) => (
                  <SkillItem
                    key={skill.name}
                    icon={skill.icon}
                    name={skill.name}
                    delay={skillIdx * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block glass rounded-2xl p-8 border border-gold-400/20 max-w-2xl">
            <p className="text-lg text-ink-100/90 mb-4">
              <span className="font-bold text-gold-300">Always Learning:</span> I'm
              constantly exploring new frameworks, tools, and best practices to stay
              at the cutting edge of web development.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {["Always Learning", "Adaptable", "Problem Solver"].map((tag, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full bg-gold-400/10 text-gold-300 text-sm font-medium border border-gold-400/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
