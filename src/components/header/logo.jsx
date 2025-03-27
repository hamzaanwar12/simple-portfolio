import React from "react";
import { motion } from "framer-motion";

function Logo() {
  return (
    // <motion.div className=" flex flex-col items-center justify-center bg-title rounded-full w-[50px] h-[50px] p-0 border-rounded">
    // <motion.div
    // // onHoverEnd={}
    //   whileHover={{
    //     scale: 1.1,
    //   }}
    //   whileTap={{ scale: 0.9 }}
    //   className="cursor-pointer mx-auto mt-6 flex flex-col items-center justify-center bg-title rounded-full w-[50px] h-[50px] p-0 border-rounded"
    // >
    //   <h1 className="text-[22px] font-semibold  text-white">MH</h1>
    // </motion.div>

    <motion.h1 className="text-title text-xl font-stretch-50%">Muhammad Hamza <span className="text-[17px] text-cyan-700">.</span></motion.h1>
  );
}

export default Logo;
