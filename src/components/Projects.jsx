import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// Reusable ProjectCard
const ProjectCard = ({ title, description, image, liveLink, githubLink }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] border border-gray-200 hover:border-amber-400 flex flex-col h-full"
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={`Screenshot of ${title} project`}
          className="w-full h-56 sm:h-64 md:h-56 object-cover"
        />

        {/* Overlay: only on md+ screens */}
        <div className="absolute inset-0 bg-black bg-opacity-40 hidden md:flex items-center justify-center 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="flex space-x-4">
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-amber-500 text-white rounded-full font-semibold shadow-lg text-sm hover:scale-110 transition"
              >
                <FaExternalLinkAlt className="inline mr-1" />
                Live
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-900 text-amber-400 border border-amber-400 rounded-full font-semibold shadow-lg text-sm hover:scale-110 transition"
              >
                <FaGithub className="inline mr-1" />
                Code
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Links always visible below image on mobile */}
      <div className="flex md:hidden justify-center gap-4 mt-3">
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-amber-500 text-white rounded-full font-semibold shadow-lg text-sm"
          >
            <FaExternalLinkAlt className="inline mr-1" />
            Live
          </a>
        )}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-900 text-amber-400 border border-amber-400 rounded-full font-semibold shadow-lg text-sm"
          >
            <FaGithub className="inline mr-1" />
            Code
          </a>
        )}
      </div>

      {/* Project Content */}
      <div className="flex-grow p-6 flex flex-col">
        <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-wide">
          {title}
        </h3>
        <p className="text-gray-900 font-medium text-base flex-grow leading-relaxed p-4 rounded-2xl border border-amber-400 bg-white/30 backdrop-blur-sm shadow-inner transition-all duration-500 hover:shadow-lg">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

// Main Projects Section
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "NewsLetter Form",
      description:
        "Newsletter App (Mailchimp Integration) – A web application that allows users to subscribe to newsletters. Integrated with Mailchimp to manage subscribers and send email campaigns efficiently. Built to provide a smooth and simple subscription experience using EJS.",
      image: "/newsletter.png",
      liveLink: "https://smartsignup.onrender.com/",
      githubLink: "https://github.com/Yaschilal-Enyew/StudentSignUp",
    },
    {
      id: 2,
      title: "ChatSphere App (Private Messaging)",
      description:
        "A modern private messaging application with user registration and secure storage. Future plans include real-time messaging using WebSockets for instant communication.",
      image: "/chat1.png",
      liveLink: "https://aura-chat-fro.vercel.app/",
      githubLink: "https://github.com/Yaschilal-Enyew/chat-app-frontend",
    },
    {
      id: 3,
      title: "Smart Authentication Project",
      description:
        "A highly secure and modular backend for user authentication, implementing JWT, password hashing with bcrypt, and email verification. Designed for easy integration.",
      image: "/auth.png",
      liveLink: "https://smart-auth-frontend-nine.vercel.app/",
      githubLink: "https://github.com/Yaschilal-Enyew/Smart-Auth-Frontend",
    },
    {
      id: 4,
      title: "UNIMART Ecommerce Project",
      description:
        "Unimart – A web-based e-commerce platform for buying and selling products. Features include product listing, search, and management, providing users with a smooth shopping experience. Coming Soon.",
      image:
        "/come.jpg",
      liveLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <section id="projects" className="relative bg-white py-20 px-6">
      {/* Golden blur backgrounds */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] bg-amber-200 rounded-full opacity-30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-[20rem] h-[20rem] bg-yellow-400 rounded-full opacity-20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-6 inline-block relative"
        >
          My Projects
          <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 rounded-full animate-pulse"></span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-700 max-w-3xl mx-auto font-light"
        >
          Here’s a showcase of my favorite work. Each project highlights my
          skills in full-stack development, design, and problem-solving.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            liveLink={project.liveLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
