import React, { useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaFileAlt, FaDownload } from "react-icons/fa";
import checkSrc from "/assets/check.png";
import Stats from "./Stats";
import CommonPage from "../common";
import { useInView } from "react-intersection-observer";

function Intro() {
  const [isHovered, setIsHovered] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true  // This ensures the inView trigger only happens once
  });

  // Text animation variants (word by word)
  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        type: "spring",
        stiffness: 100
      }
    })
  };

  // Split text into words for animation
  const descriptionText = "With over 2+ years of experience, I specialize in crafting enterprise-level web applications with a focus on exceptional user experiences. Leveraging technologies like React.js, Next.js and Tailwind CSS, I excel in writing meticulously structured code and implementing CI/CD pipelines for seamless project delivery. My expertise in logical problem-solving allows me to streamline complex challenges into elegant solutions. From developing a E-Commerce app to a complete B2B platform app, I deliver scalable solutions that exceed expectations. Grounded in a strong focus on UI/UX design and clear communication, I'm committed to creating digital experiences that resonate with users. Let's collaborate to bring your vision to life.";

  const words = descriptionText.split(" ");

  return (
    <CommonPage Heading={"About Me"} SubHeading={"My Introduction"}>
      <motion.div 
        ref={ref}
        className="flex flex-col gap-y-[4rem] items-center"
      >
        {/* Profile Image - Spring animation from left */}
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ 
            x: 0,
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 60,
              damping: 10,
              delay: 0.3
            }
          }}
          whileHover={{ 
            scale: 1.05,
            rotate: 5,
            transition: { duration: 0.3 }
          }}
        >
          <motion.img
            // className="object-cover w-[225px] h-[225px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] rounded-2xl shadow-xl border-4 border-white dark:border-gray-800"
            className="object-contain w-[225px] h-[225px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] rounded-2xl shadow-xl border-4 border-white dark:border-gray-800"
            src={checkSrc}
            alt="M Hamza"
            whileHover={{ 
              boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.3)",
              transition: { duration: 0.3 }
            }}
          />
        </motion.div>

        {/* Stats - Already has good animations */}
        <Stats />

        {/* Description - Word by word animation */}
        <motion.div 
          className="font-light text-title dark:text-gray-300 px-4 sm:px-[5rem] text-center text-sm sm:text-base leading-relaxed"
          style={{ display: "inline-block", overflow: "hidden" }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={textVariants}
              style={{ display: "inline-block", marginRight: "5px" }}
            >
              {word.startsWith("<strong") ? (
                <strong className="text-gray-800 dark:text-white">
                  {word.replace(/<\/?strong>/g, "")}
                </strong>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </motion.div>

        {/* Resume Button - Enhanced interaction */}
        <motion.button 
          className="group relative w-[200px] sm:w-[175px] text-center justify-center bg-title dark:bg-gray-700 flex items-center text-lg text-white px-4 py-3 rounded-md mt-4 overflow-hidden"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1,
            y: 0,
            transition: { delay: 1.5 }
          }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <span className="relative z-10 flex items-center">
            Resume <FaFileAlt className="ml-2 transition-transform group-hover:translate-x-1" />
          </span>
          <motion.span 
            className="absolute inset-0 bg-gray-800 dark:bg-gray-600 z-0"
            initial={{ x: "-100%" }}
            animate={{ x: isHovered ? "0%" : "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <motion.span 
            className="absolute right-4 z-10"
            initial={{ x: 10, opacity: 0 }}
            animate={{ 
              x: isHovered ? 0 : 10,
              opacity: isHovered ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            <FaDownload className="text-lg" />
          </motion.span>
        </motion.button>
      </motion.div>
    </CommonPage>
  );
}

export default Intro;