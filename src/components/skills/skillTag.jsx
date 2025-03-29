import React from "react";
import { motion } from "framer-motion";
import { MdOutlineVerified } from "react-icons/md";

function SkillTag({ skillLevel, skillName }) {
  return (
    <motion.div className="flex p-2">
      <MdOutlineVerified className="relative top-1 mr-1 " />
      <motion.div className="flex flex-col gap-0 ">
        <motion.h2 className="flex gap-0.5 items-center text-gray-800  font-normal text-xl">
          {skillName}
        </motion.h2>
        <motion.h3 className="font-light text-gray-500">
          {skillLevel}
        </motion.h3>
      </motion.div>
    </motion.div>
  );
}

export default SkillTag;
