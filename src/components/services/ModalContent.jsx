import React from "react";
import { motion } from "framer-motion";
import { RiVerifiedBadgeFill } from "react-icons/ri";

function ModalContent({ title, description, points }) {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="box-border p-6 flex flex-col gap-y-6 items-start justify-center max-w-xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.h1 
        className="text-gray-800 font-semibold text-2xl w-full text-center"
        variants={itemVariants}
      >
        {title}
      </motion.h1>
      
      <motion.p 
        className="text-gray-700 font-normal text-lg leading-relaxed"
        variants={itemVariants}
      >
        {description}
      </motion.p>

      <motion.div 
        className="w-full flex flex-col gap-y-4 mt-2"
        variants={itemVariants}
      >
        {Array.isArray(points) && points.map((point, index) => (
          <motion.div 
            key={index}
            className="flex items-start gap-x-3 group"
            variants={itemVariants}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <RiVerifiedBadgeFill className="text-blue-500 text-2xl mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
            <h3 className="text-gray-700 font-normal text-lg">{point}</h3>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default ModalContent;