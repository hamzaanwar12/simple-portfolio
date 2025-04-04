// Enhanced SkillBox.jsx
import React from "react";
import SkillTag from "./skillTag";
import { motion } from "framer-motion";

function SkillBox({ skills, title, delay = 0 }) {
  const boxVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <motion.div 
      className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 flex flex-col gap-6 hover:shadow-lg transition-shadow duration-300"
      variants={boxVariants}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <motion.h2 className="text-center text-gray-800 dark:text-white font-medium text-2xl">
        {title}
      </motion.h2>
      <motion.div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
        {Array.from(skills).map((skill, index) => (
          <SkillTag
            skillName={skill.skillName}
            skillLevel={skill.skillLevel}
            key={index}
            index={index}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

export default SkillBox;