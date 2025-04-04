import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaHeart, FaExternalLinkAlt } from 'react-icons/fa';

const Footer = () => {
  const [hoverIcon, setHoverIcon] = useState(null);
  const [emailCopied, setEmailCopied] = useState(false);
  
  const currentYear = new Date().getFullYear();
  
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hamzaanwar2003@gmail.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };
  
  const socialLinks = [
    { name: 'github', icon: <FaGithub size={20} />, url: 'https://github.com/hamzaanwar12/' },
    { name: 'linkedin', icon: <FaLinkedin size={20} />, url: 'https://www.linkedin.com/in/hamza-anwar-40b60a247/' },
    { name: 'instagram', icon: <FaInstagram size={20} />, url: 'https://www.instagram.com/recky_776/' },
    { name: 'email', icon: <FaEnvelope size={20} />, action: handleCopyEmail }
  ];

  return (
    <motion.footer 
      className="mt-16 py-8 px-4 border-t border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo/Name with animation */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
          >
            <h2 className="text-2xl font-medium text-gray-800 dark:text-gray-200">M . Hamza</h2>
          </motion.div>
          
          {/* Social icons with animations */}
          <div className="flex space-x-5">
            {socialLinks.map((social) => (
              <motion.div
                key={social.name}
                className="relative"
                whileHover={{ y: -5 }}
                onHoverStart={() => setHoverIcon(social.name)}
                onHoverEnd={() => setHoverIcon(null)}
              >
                {social.url ? (
                  <a 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 inline-flex items-center justify-center"
                    aria-label={`Visit ${social.name}`}
                  >
                    {social.icon}
                  </a>
                ) : (
                  <button 
                    onClick={social.action}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 inline-flex items-center justify-center"
                    aria-label={`Copy email address`}
                  >
                    {social.icon}
                  </button>
                )}
                
                {/* Tooltip */}
                {hoverIcon === social.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap"
                  >
                    {social.name === 'email' ? 'Copy Email' : `Visit ${social.name}`}
                  </motion.div>
                )}
                
                {/* Email copied notification */}
                {social.name === 'email' && emailCopied && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-green-600 text-white text-xs rounded whitespace-nowrap"
                  >
                    Copied!
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
          
          {/* Newsletter subscription */}
          {/* <motion.div 
            className="w-full max-w-md px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-sm text-center text-gray-600 dark:text-gray-400 mb-2">Stay updated with my latest work</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-grow p-2 text-sm border border-gray-300 dark:border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                type="submit"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div> */}
          
          {/* Copyright with heart animation */}
          <motion.div 
            className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span>© {currentYear} Muhammad Hamza. All rights reserved</span>
            <motion.div
              className="mx-1 text-red-500"
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <FaHeart size={14} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;