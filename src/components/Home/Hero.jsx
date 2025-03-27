import React from "react";
import { motion } from "framer-motion";
import {TypeWriter,Social,TypingEffect} from "./index";
function Hero() {
  return (
    <motion.div className="text-title font-[19px]">
      <TypeWriter />
      {/* <TypingEffect></TypingEffect> */}
      <Social></Social>
    </motion.div>
  );
}

export default Hero;
