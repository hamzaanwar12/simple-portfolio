import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Social = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const socialLinks = [
    {
      id: 'instagram',
      icon: <FaInstagram size={24} />,
      link: 'https://instagram.com/recky_776/'
    },
    {
      id: 'linkedin',
      icon: <FaLinkedin size={24} />,
      link: 'https://www.linkedin.com/in/hamza-anwar-40b60a247/'
    },
    {
      id: 'github',
      icon: <FaGithub size={24} />,
      link: 'https://github.com/hamzaanwar12'
    }
  ];

  return (
    <motion.div
    //   className="fixed left-6 top-1/2 -translate-y-1/2 z-50"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col gap-6">
        {socialLinks.map((item) => (
          <motion.a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-gray-600 hover:text-black"
            onHoverStart={() => setHoveredItem(item.id)}
            onHoverEnd={() => setHoveredItem(null)}
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {item.icon}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default Social;