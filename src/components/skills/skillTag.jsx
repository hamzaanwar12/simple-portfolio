// Enhanced SkillTag.jsx
import React from "react";
import { motion } from "framer-motion";
import { MdOutlineVerified } from "react-icons/md";

function SkillTag({ skillLevel, skillName, index }) {
  const tagVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 + index * 0.05,
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }
  };

  return (
    <motion.div 
      className="flex p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
      variants={tagVariants}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
      }}
    >
      <MdOutlineVerified className="relative top-1 mr-2 text-gray-500 " />
      <motion.div className="flex flex-col gap-0">
        <motion.h2 className="flex gap-0.5 items-center text-gray-800  font-medium text-lg">
          {skillName}
        </motion.h2>
        <motion.h3 className="font-light text-gray-500 dark:text-gray-400">
          {skillLevel}
        </motion.h3>
      </motion.div>
    </motion.div>
  );
}

export default SkillTag;