import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaUser, FaComments } from "react-icons/fa";
import { MdSend } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  const socialLinks = [
    {
      icon: <FaGithub className="text-2xl" />,
      href: "https://github.com/Yaschilal-Enyew/",
      label: "GitHub",
      color: "hover:text-purple-400",
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      href: "https://www.linkedin.com/in/yaschilal-enyew-23b152374",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      href: "mailto:yilkalenyew092@gmail.com",
      label: "Email",
      color: "hover:text-gold-300",
    },
  ];

  return (
    <section id="contact" className="section text-ink-100 relative overflow-hidden">
      {/* Enhanced decorative blurs */}
      <div className="absolute top-20 left-1/4 w-80 h-80 bg-gold-400/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

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
              <FaComments className="text-gold-400 text-2xl" />
              <span className="text-sm font-semibold gradient-gold">
                Get In Touch
              </span>
            </div>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl font-extrabold mb-6 inline-block relative">
            <span className="gradient-gold-animated">Let's Work Together</span>
            <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-300 rounded-full"></span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side: Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main Text */}
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold gradient-gold mb-4">
                Let's build something beautiful together.
              </h3>
              <p className="text-lg text-ink-100/80 leading-relaxed">
                I'm always excited to connect and collaborate on innovative projects.
                Feel free to reach out to me through my socials or the form below.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                className="glass rounded-2xl p-6 border border-gold-400/20 group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-gold-400/10 group-hover:bg-gold-400/20 transition-colors">
                    <FaMapMarkerAlt className="text-2xl text-gold-400" />
                  </div>
                  <div>
                    <p className="text-sm text-ink-100/60">Location</p>
                    <p className="text-base font-semibold">BahirDar, Ethiopia</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                className="glass rounded-2xl p-6 border border-gold-400/20 group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-gold-400/10 group-hover:bg-gold-400/20 transition-colors">
                    <FaEnvelope className="text-2xl text-gold-400" />
                  </div>
                  <div>
                    <p className="text-sm text-ink-100/60">Email</p>
                    <a
                      href="mailto:yilkalenyew092@gmail.com"
                      className="text-base font-semibold hover:text-gold-300 transition-colors"
                    >
                      yilkalenyew092@gmail.com
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-lg font-semibold mb-4 gradient-gold">Follow Me</p>
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target={social.href.startsWith("mailto:") ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`glass rounded-full p-4 border border-gold-400/20 text-ink-100/70 transition-all duration-300 ${social.color}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-3xl p-8 sm:p-12 border border-gold-400/20 relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold-400/10 rounded-full blur-3xl" />

              <h3 className="text-3xl font-bold text-ink-100 mb-8 relative z-10 flex items-center gap-3">
                <FaPaperPlane className="text-gold-400" />
                Send me a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="flex text-sm font-semibold text-ink-100/90 mb-2 items-center gap-2">
                    <FaUser className="text-gold-400" />
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-ink-900/50 text-ink-100 placeholder-ink-100/40 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 focus:outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="flex text-sm font-semibold text-ink-100/90 mb-2 items-center gap-2">
                    <FaEnvelope className="text-gold-400" />
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-ink-900/50 text-ink-100 placeholder-ink-100/40 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 focus:outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="flex text-sm font-semibold text-ink-100/90 mb-2 items-center gap-2">
                    <FaPaperPlane className="text-gold-400" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-ink-900/50 text-ink-100 placeholder-ink-100/40 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 focus:outline-none transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-gold flex items-center justify-center gap-3 text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <MdSend className="text-2xl" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
