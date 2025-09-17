import React from 'react';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaMobileAlt,
  FaDatabase,
  FaGitAlt,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
} from 'react-icons/si';

// Reusable SkillItem with animation
const SkillItem = ({ icon, name }) => (
  <div className="flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-500 transform hover:scale-110 hover:shadow-[0_0_15px_rgba(251,191,36,0.5)]">
    <div className="text-5xl mb-3 animate-pulse">{icon}</div>
    <span className="text-center font-semibold text-gray-700 text-sm md:text-base tracking-wide">
      {name}
    </span>
  </div>
);

const Skills = () => {
  const skills = {
    'Frontend Development': [
      { name: 'React', icon: <FaReact className="text-blue-500" /> },
      { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500" /> },
    ],
    'Backend Development': [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
      { name: 'Express.js', icon: <SiExpress className="text-gray-800" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
      { name: 'JWT', icon: <FaDatabase className="text-purple-600" /> },
    ],
    'Mobile Development': [
      { name: 'React Native', icon: <FaReact className="text-blue-400" /> },
      { name: 'Expo', icon: <FaMobileAlt className="text-gray-600" /> },
    ],
    'Tools & Others': [
      { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
      { name: 'VS Code', icon: <FaGitAlt className="text-blue-400" /> }, // Placeholder
      { name: 'Linux', icon: <FaGitAlt className="text-black" /> }, // Placeholder
    ],
  };

  return (
    <section
      id="skills"
      className="bg-gray-50 py-20 px-6 relative overflow-hidden"
    >
      {/* Decorative gold gradient blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-200 rounded-full opacity-20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center mb-16 relative">
        <h2 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-6 inline-block relative">
          My Skills
          <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 rounded-full animate-pulse"></span>
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto font-light">
          Here are the core technologies and tools I’ve been working with. I’m
          always learning and expanding my skill set to build better solutions.
        </p>
      </div>

      <div className="max-w-7xl mx-auto space-y-12">
        {Object.entries(skills).map(([category, skillList], i) => (
          <div
            key={category}
            className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 transition-all duration-700 hover:shadow-2xl"
            style={{
              animation: `fadeInUp 0.6s ease ${i * 0.2}s both`,
            }}
          >
            <h3 className="text-2xl font-bold text-amber-600 mb-8 text-center tracking-wide">
              {category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {skillList.map((skill, j) => (
                <div
                  key={skill.name}
                  style={{
                    animation: `fadeInUp 0.6s ease ${j * 0.1 + 0.2}s both`,
                  }}
                >
                  <SkillItem icon={skill.icon} name={skill.name} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* FadeInUp Keyframes */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
