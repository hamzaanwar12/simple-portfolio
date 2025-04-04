import React, { useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { TypeWriter, Photo } from "./index";
import { LuSend, LuArrowDown } from "react-icons/lu";
import { useContext } from "react";
import { SideBarContext } from "../../context/sidebarContext";
import { useInView } from "react-intersection-observer";

function Hero() {
  const { sidebar } = useContext(SideBarContext);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false
  });
  const scrollRef = useRef(null);

  const scrollToAbout = () => {
    document.getElementById("about-section").scrollIntoView({
      behavior: "smooth"
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const photoVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        delay: 0.5
      }
    }
  };

  return (
    <motion.section
      ref={ref}
      className="w-full min-h-screen px-4 lg:w-[80%] mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-0 text-title-dark relative"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {/* Text Content */}
      <motion.div 
        className="flex text-center md:text-left flex-col md:w-[50%]"
        variants={containerVariants}
      >
        <motion.div 
          className="flex flex-col md:block gap-2 items-center md:items-start"
          variants={itemVariants}
        >
          <motion.h1 
            className="font-semibold text-4xl md:text-5xl lg:text-6xl mb-2"
            whileHover={{ scale: 1.02 }}
          >
            M Hamza<span className="wave">👋</span>
          </motion.h1>
          <motion.div 
            className="flex items-center gap-2 mb-6"
            variants={itemVariants}
          >
            <motion.div 
              className="bg-title w-12 h-[3px]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            />
            <TypeWriter />
          </motion.div>
        </motion.div>

        <motion.p 
          className="text-title text-lg md:text-xl mt-4 font-light leading-relaxed"
          variants={itemVariants}
        >
          With a strong foundation in web development and a thirst for
          knowledge, I am ready to take on any coding challenge. Whether working
          solo or as part of a team, I bring a passion for creativity and a
          drive to excel. Let's connect and make something amazing happen!
        </motion.p>

        <motion.div variants={itemVariants}>
          <motion.button 
            className="w-[200px] sm:w-[175px] text-center justify-center bg-title flex items-center text-lg text-white px-4 py-3 rounded-md mt-8 group relative overflow-hidden"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center">
              Say Hello <LuSend className="ml-2 transition-transform group-hover:translate-x-1" />
            </span>
            <motion.span 
              className="absolute inset-0 bg-title-dark z-0"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Photo - Only visible when sidebar is closed */}
      {!sidebar && (
        <motion.div 
          className="md:w-[50%] flex justify-center"
          variants={photoVariants}
        >
          <Photo />
        </motion.div>
      )}

      {/* Scroll Down Indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-title hover:text-title-dark cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: [0, 1, 1, 0],
          y: [20, 0, 0, 20]
        }}
        transition={{ 
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <span className="text-sm mb-1">Explore</span>
        <LuArrowDown className="text-xl animate-bounce" />
      </motion.button>
    </motion.section>
  );
}

export default Hero;