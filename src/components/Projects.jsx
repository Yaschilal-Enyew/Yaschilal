import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaRocket, FaCodeBranch } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";
import { FaMagic } from "react-icons/fa";

// Enhanced ProjectCard with premium animations
const ProjectCard = ({ title, description, image, liveLink, githubLink, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group glass rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-white/10 flex flex-col h-full relative"
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={`Screenshot of ${title} project`}
          className="w-full h-56 sm:h-64 md:h-60 object-cover transform group-hover:scale-110 transition-transform duration-700"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Tech Stack Badge */}
        <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className="px-3 py-1 rounded-full glass border border-gold-400/30 text-xs font-medium gradient-gold">
            MERN Stack
          </span>
        </div>

        {/* Overlay: Hover buttons on desktop */}
        <div className="absolute inset-0 bg-black/60 hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="flex space-x-4">
            {liveLink && liveLink !== "#" && (
              <motion.a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-3 bg-gold-400 text-ink-900 rounded-full font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                <FaRocket />
                Live
              </motion.a>
            )}
            {githubLink && githubLink !== "#" && (
              <motion.a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-3 bg-ink-900 text-gold-300 border-2 border-gold-400 rounded-full font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                <FaCodeBranch />
                Code
              </motion.a>
            )}
          </div>
        </div>
      </div>

      {/* Links always visible below image on mobile */}
      <div className="flex md:hidden justify-center gap-4 p-4">
        {liveLink && liveLink !== "#" && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gold-400 text-ink-900 rounded-full font-semibold shadow-lg text-sm flex items-center gap-2"
          >
            <FaRocket />
            Live
          </a>
        )}
        {githubLink && githubLink !== "#" && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-ink-900 text-gold-300 border border-gold-400/60 rounded-full font-semibold shadow-lg text-sm flex items-center gap-2"
          >
            <FaCodeBranch />
            Code
          </a>
        )}
      </div>

      {/* Project Content */}
      <div className="flex-grow p-6 flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-2xl font-bold text-ink-100 tracking-wide group-hover:text-gold-300 transition-colors">
            {title}
          </h3>
          <BsStarFill className="text-yellow-400 text-xl group-hover:scale-110 transition-transform" />
        </div>
        
        <p className="text-ink-100/80 font-medium text-base flex-grow leading-relaxed p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
          {description}
        </p>
      </div>

      {/* Decorative shimmer */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
    </motion.div>
  );
};

// Main Projects Section
const Projects = () => {
 const projects = [
    {
      id: 1,
      title: "Infinity Electronics",
      description:
        "Electronics ecommerce – A comprehensive web-based full e-commerce platform with admin panel. ",
      image: "/infinity.png",
      liveLink: "https://infinity-electronics-ecommerce.vercel.app/",
      githubLink: "https://github.com/Yaschilal-Enyew/Infinity-Electronics-ecommerce",
    },
    {
      id: 2,
      title: "Aura stay ",
      description:
        "it's Hotel booking web app",
      image: "/aurastay.png",
      liveLink: "https://aurastay.vercel.app/",
      githubLink: "https://github.com/Yaschilal-Enyew/Hotel-app",
    },
    {
      id: 3,
      title: "ChatSphere App",
      description:
        "A modern private messaging application with user registration and secure storage. Real-time capabilities and future plans for WebSockets integration.",
      image: "/chat1.png",
      liveLink: "https://aura-chat-fro.vercel.app/",
      githubLink: "https://github.com/Yaschilal-Enyew/chat-app-frontend",
    },
    
    
    {
      id: 4,
      title: "Smart Authentication",
      description:
        "A highly secure  authentication, implementing JWT tokens, bcrypt password hashing, and email verification. Designed for easy integration with modern web apps.",
      image: "/auth.png",
      liveLink: "https://smart-auth-frontend-nine.vercel.app/",
      githubLink: "https://github.com/Yaschilal-Enyew/Smart-Auth-Frontend",
    },
    {
      id: 5,
      title: "NewsLetter Form",
      description:
        "Newsletter App with Mailchimp Integration that allows users to subscribe to newsletters and  to manage subscribers and send email campaigns efficiently. Built with EJS for a smooth subscription experience.",
      image: "/newsletter.png",
      liveLink: "https://smartsignup.onrender.com/",
      githubLink: "https://github.com/Yaschilal-Enyew/StudentSignUp",
    },
  ];

  return (
    <section id="projects" className="section relative overflow-hidden">
      {/* Enhanced golden blur backgrounds */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[35rem] h-[35rem] bg-gold-400/25 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-20 right-1/4 w-[24rem] h-[24rem] bg-gold-500/20 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

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
              <FaMagic className="text-gold-400 text-2xl" />
              <span className="text-sm font-semibold gradient-gold">
                Featured Work
              </span>
            </div>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl font-extrabold mb-6 inline-block relative">
            <span className="gradient-gold-animated">My Projects</span>
            <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-300 rounded-full"></span>
          </h2>
          
          <p className="text-lg text-ink-100/80 max-w-3xl mx-auto font-light">
            Here's a showcase of my favorite work. Each project highlights my
            skills in full-stack development, design, and problem-solving.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
              index={index}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block glass rounded-2xl p-8 border border-gold-400/20">
            <p className="text-xl text-ink-100/90 mb-6">
              Want to see more of my work?
            </p>
            <a
              href="https://github.com/Yaschilal-Enyew/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-3 text-lg px-8 py-4"
            >
              <FaGithub className="text-2xl" />
              Visit My GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
