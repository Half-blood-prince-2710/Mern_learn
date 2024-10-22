// src/components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/profileicon.png'; // Replace with your actual image path
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import icons

const Hero = () => {
  const links = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/yourprofile',
      icon: <FaLinkedin className="text-3xl" />,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: <FaGithub className="text-3xl" />,
    },
  ];

  return (
    <div className="hero-section  flex flex-col-reverse gap-6 md:flex-row items-center justify-center text-center md:text-left p-6 h-screen w-full 2xl:w-4/5 relative">
      
      {/* Main Content Area */}
      <div className="md:w-3/4 w-full p-6 rounded-lg shadow-md md-ml-16 justify-center items-center">
        <h1 className="text-nametext font-bold mb-2">Manish Gupta</h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }} // Start slightly below and invisible
          animate={{ opacity: 1, y: 0 }} // Animate to visible and original position
          transition={{ duration: 1.5 }} // Duration of the animation
          className="text-2xl text-blue-600 font-semibold mb-4"
        >
          MERN Developer
        </motion.p>

        <p className="text-md text-gray-500 mb-6">

          I am a passionate MERN stack developer passionate for building innovative web applications. I'm excited to apply my skills and knowledge in a real-world setting and continue learning from experienced professionals.
        </p>

          <a 
            href="/resume.pdf" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow"
          >
            View Resume
          </a>
          
      </div>

      {/* Fixed Vertical Menu Bar */}
      <div className="fixed top-0 mt-2 md:left-0 md:top-1/2 md:transform md:-translate-y-1/2  text-white flex md:flex-col gap-2 items-center justify-center p-2 rounded-tr rounded-br shadow-lg z-20">
        {links.map((link) => (
          <a 
            key={link.name} 
            href={link.url} 
            className="flex items-center space-x-2 mb-4 hover:text-yellow-300"
            target="_blank" 
            rel="noopener noreferrer"
          >
            {link.icon}
          </a>
        ))}
      </div>

      {/* Profile Picture */}
      <div className="sm:w-1/2 w-full flex justify-center mb-6 md:mb-0">
        <img 
          src={profilePic} 
          alt="Profile" 
          className="rounded-full w-80 h-80 border-4 border-blue-500 shadow-lg"
        />
      </div>
  
    </div>
    
  );
};

export default Hero;