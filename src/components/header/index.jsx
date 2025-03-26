import React, { useState } from "react";
import { motion } from "framer-motion";

function Header({ isOpen, handleSidebar }) {
  const [animation, setAnimation] = useState(false);

  const handleMenuClick = (e) => {
    e.preventDefault();
    setAnimation(true);
    handleSidebar();
  };

  const falseAnimation = () => {
    setAnimation(false);
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
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleMenuClick}
        className="p-1 z-100 cursor-pointer fixed right-10 top-10 flex flex-col gap-1 justify-center items-center "
      >
        <motion.div
          variants={UpperVariants}
          animate={isOpen ? "open" : "closed"}
          className={`h-[2px] origin-center w-[25px] ${
            !isOpen ? "bg-title" : "bg-white"
          }`}
        ></motion.div>
        <motion.div
          variants={MiddleVariants}
          animate={isOpen ? "open" : "closed"}
          className={`h-[2px] origin-center w-[25px] ${
            !isOpen ? "bg-title" : "bg-white"
          }`}
        ></motion.div>
        <motion.div
          variants={LowerVariants}
          animate={isOpen ? "open" : "closed"}
          className={`h-[2px] origin-center w-[25px] ${
            !isOpen ? "bg-title" : "bg-white"
          }`}
        ></motion.div>
      </motion.button>
    </>
  );
}

export default Header;
