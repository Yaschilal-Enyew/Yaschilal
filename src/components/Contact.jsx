import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="bg-white text-gray-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Side: Text and Socials */}
        <div className="text-center lg:text-left animate-fadeIn">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
            Let's build something <span className="text-amber-500">beautiful</span> together.
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
            I am always excited to connect and collaborate on innovative projects. Feel free to reach out to me through my socials or the form below.
          </p>
          
          <div className="flex flex-col items-center lg:items-start space-y-4">
            <div className="flex items-center space-x-3 text-gray-700">
              <FaMapMarkerAlt className="text-xl text-amber-500" />
              <span>BahirDar, Ethiopia</span>
            </div>
            <a href="mailto:amanul.enyew@gmail.com" className="flex items-center space-x-3 text-gray-700 hover:text-amber-500 transition-colors duration-300">
              <FaEnvelope className="text-xl text-amber-500" />
              <span>yilkalenyew092@gmail.com</span>
            </a>
          </div>

          <div className="mt-8 flex justify-center lg:justify-start space-x-6">
            <a href="https://github.com/Yaschilal-Enyew/" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-500 hover:text-amber-500 transition-colors duration-300 transform hover:scale-110">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/yaschilal-enyew-23b152374" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-500 hover:text-amber-500 transition-colors duration-300 transform hover:scale-110">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="w-full max-w-lg mx-auto bg-gray-100 rounded-3xl p-8 sm:p-12 shadow-2xl animate-fadeInRight">
          <h3 className="text-3xl font-bold mb-6 text-center">Send me a message</h3>
          <form name="contact" method="POST" data-netlify="true" className="space-y-6">
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" required className="mt-1 block w-full rounded-lg border-gray-300 bg-white text-gray-900 focus:border-amber-500 focus:ring-amber-500 transition-colors duration-300" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" required className="mt-1 block w-full rounded-lg border-gray-300 bg-white text-gray-900 focus:border-amber-500 focus:ring-amber-500 transition-colors duration-300" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows="4" required className="mt-1 block w-full rounded-lg border-gray-300 bg-white text-gray-900 focus:border-amber-500 focus:ring-amber-500 transition-colors duration-300"></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full py-3 px-6 bg-amber-500 text-white font-bold rounded-lg shadow-lg hover:bg-amber-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-amber-500 focus:ring-opacity-50"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;