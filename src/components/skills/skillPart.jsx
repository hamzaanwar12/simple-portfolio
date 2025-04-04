// Enhanced SkillPart.jsx
import React from "react";
import { SkillBox } from "./index";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { frontendSkills, backendSkills } from "../constants";

function SkillPart() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  return (
    <motion.div 
      ref={ref}
      className="grid grid-cols-1 sm:grid-cols-2 gap-8"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {frontendSkills && (
        <SkillBox 
          skills={frontendSkills} 
          title={"Frontend Developer"} 
          delay={0.2}
        />
      )}
      {backendSkills && (
        <SkillBox 
          skills={backendSkills} 
          title={"Backend Developer"} 
          delay={0.4}
        />
      )}
    </motion.div>
  );
}

export default SkillPart;