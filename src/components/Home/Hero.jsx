import React from "react";
import { motion } from "framer-motion";
import { TypeWriter, Photo } from "./index";
function Hero() {
  return (
    // i want the photo and description along with it
    <motion.div className="flex items-center justify-between text-title ">
      <motion.div className="flex flex-col">
        <motion.h1 className="text-bold font-[30px]">M Hamza👋</motion.h1>
        <TypeWriter />
      </motion.div>
      <Photo></Photo>
      {/* <TypingEffect></TypingEffect> */}
    </motion.div>
    // <Social></Social>
  );
}

export default Hero;
