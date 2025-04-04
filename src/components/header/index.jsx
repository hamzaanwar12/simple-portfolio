import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Header({ isOpen, handleSidebar }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    // Set a small threshold to prevent flickering at the very top
    const scrollThreshold = 5;
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleMenuClick = (e) => {
    e.preventDefault();
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
    <motion.div
      className={`h-[3rem] font-sans flex items-center justify-between box-border p-4 bg-gray-800 shadow-md fixed w-full top-[0px] left-0 z-50`}
      initial={{ y: 0 }}
      animate={{
        y: isVisible ? 0 : -100,
      }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 300,
      }}
    >
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
        M Hamza{" "}
        <motion.span className="bg-cyan-400 w-[10px] h-[10px] rounded-full inline-block"></motion.span>
      </motion.h1>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleMenuClick}
        className="z-100 cursor-pointer flex flex-col gap-1 justify-center items-center"
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
          className={`h-[2px] origin-center w-[25px] bg-white`}
        ></motion.div>
        <motion.div
          variants={MiddleVariants}
          animate={isOpen ? "open" : "closed"}
          className={`h-[2px] origin-center w-[25px] bg-white`}
        ></motion.div>
        <motion.div
          variants={LowerVariants}
          animate={isOpen ? "open" : "closed"}
          className={`h-[2px] origin-center w-[25px] bg-white`}
        ></motion.div>
      </motion.button>
    </motion.div>
  );
}

export default Header;
