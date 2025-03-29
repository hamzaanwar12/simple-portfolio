import React from "react";
import { SkillBox } from "./index";
import { motion } from "framer-motion";
import { frontendSkills, backendSkills } from "../constants";

function SkillPart() {
  return (
    <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {frontendSkills && (
        <SkillBox skills={frontendSkills} title={"Frontend Developer"} />
      )}
      {backendSkills && (
        <SkillBox skills={backendSkills} title={"Backend Developer"} />
      )}
    </motion.div>
  );
}

export default SkillPart;
