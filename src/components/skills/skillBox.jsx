import React from "react";
import SkillTag from "./skillTag";
import { motion } from "framer-motion";
function SkillBox({ skills, title }) {
  return (
    <motion.div className="border-none p-2 flex flex-col gap-4">
      <motion.h2 className="text-center text-gray-800  font-medium text-2xl">
        {title}
      </motion.h2>
      <motion.div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
        {Array.from(skills).map((skill, index) => (
          <SkillTag
            skillName={skill.skillName}
            skillLevel={skill.skillLevel}
            key={index}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

export default SkillBox;
