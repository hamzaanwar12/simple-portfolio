import React, { useState } from "react";
import { motion } from "framer-motion";
import Logo from "./logo";

function Header({ isOpen, handleSidebar }) {
  // const [animation, setAnimation] = useState(false);

  const handleMenuClick = (e) => {
    e.preventDefault();
    // setAnimation(true);
    handleSidebar();
  };

  const UpperVariants = {
    open: {
      rotate: 45,
      y: 6,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
      closed: {
        rotate: 0,
        transition: {
          duration: 0.3,
          ease: "easeInOut",
        },
      },
    },
  };

  const MiddleVariants = {
    closed: {
      opacity: 1,
    },
    open: {
      opacity: 0,
      transition: {
        duration: 0.15,
        ease: "easeInOut",
      },
    },
  };

  const LowerVariants = {
    open: {
      rotate: -45,
      y: -6,
    },
    closed: {
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    // <div className="flex justify-between items-center p-4 bg-white shadow-md">
    <motion.div className="flex items-center justify-between box-border p-4 bg-gray-800 shadow-md">
      {/* {!isOpen && <Logo />} */}
      <motion.h1
        initial={{
          opacity: 0,
          x: -100,
        }}
        animate={{
          opacity: 1,
          x: 0,
          transition: {
            delay: 2,
            duration: 0.5,
          },
          
        }}
        className="text-white font-semibold cursor-pointer text-xl font-stretch-50%"
      >
        {/* Muhammad Hamza{" "} */}
        M Hamza{" "}
        <motion.span className="bg-cyan-400 w-[10px] h-[10px] rounded-full inline-block"></motion.span>
      </motion.h1>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleMenuClick}
        className="z-100 cursor-pointer  flex flex-col gap-1 justify-center items-center "
        // className="p-1 z-100 cursor-pointer fixed right-10 top-10 flex flex-col gap-1 justify-center items-center "
        initial={{
          opacity: 0,
          x: 100,
        }}
        animate={{
          opacity: 1,
          x: 0,
          transition: {
            delay: 2,
            duration: 0.5,
          },
          
        }}
      >
        <motion.div
          variants={UpperVariants}
          animate={isOpen ? "open" : "closed"}
          // className={`h-[2px] origin-center w-[25px] ${
          //   !isOpen ? "bg-title" : "bg-white"
          // }`}
          className={`h-[2px] origin-center w-[25px] bg-white`}
        ></motion.div>
        <motion.div
          variants={MiddleVariants}
          animate={isOpen ? "open" : "closed"}
          // className={`h-[2px] origin-center w-[25px] ${
          //   !isOpen ? "bg-title" : "bg-white"
          // }`}
          className={`h-[2px] origin-center w-[25px] bg-white`}
        ></motion.div>
        <motion.div
          variants={LowerVariants}
          animate={isOpen ? "open" : "closed"}
          // className={`h-[2px] origin-center w-[25px] ${
          //   !isOpen ? "bg-title" : "bg-white"
          // }`}
          className={`h-[2px] origin-center w-[25px] bg-white`}
        ></motion.div>
      </motion.button>
    </motion.div>
  );
}

export default Header;
