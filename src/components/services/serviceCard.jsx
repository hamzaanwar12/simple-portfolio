import React, { memo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const ServiceCard = memo(({ icon, title, content, index, openModal }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true });
  
  const handleOpenModal = () => {
    openModal(title, content);
  };

  // Icon hover animation variants - this will happen every time on hover
  const iconVariants = {
    initial: { 
      scale: 1, 
      y: 0, 
      x: 0, 
      rotate: 0 
    },
    hover: {
      scale: 1.2,
      y: -8,
      x: 3,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  // Button animation variants
  const buttonVariants = {
    hover: {
      x: 5,
      transition: {
        type: "spring",
        stiffness: 500,
      }
    }
  };

  // Entry animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        delay: index * 0.15 
      }
    }
  };

  return (
    <motion.div 
      ref={cardRef}
      className="my-[1rem] sm:my-0 p-6 rounded-lg hover:shadow-lg transition-shadow"
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{ 
        y: -5,
        transition: { 
          type: "spring", 
          stiffness: 200, 
          damping: 10 
        }
      }}
    >
      <motion.div
        className="text-gray-500 mb-4"
        variants={iconVariants}
        initial="initial"
        whileHover="hover"
      >
        {icon}
      </motion.div>
      
      <motion.h1 
        className="text-gray-800 font-medium text-xl mb-3"
        initial={{ opacity: 0 }}
        animate={isInView ? { 
          opacity: 1,
          transition: { delay: index * 0.15 + 0.2 } 
        } : { opacity: 0 }}
      >
        {title}
      </motion.h1>
      
      <motion.button
        onClick={handleOpenModal}
        className="flex items-center text-gray-500 font-medium text-[18px] group"
        whileHover="hover"
      >
        View More{" "}
        <motion.div 
          className="ml-1"
          variants={buttonVariants}
        >
          <MdOutlineArrowRightAlt className="text-xl" />
        </motion.div>
      </motion.button>
    </motion.div>
  );
});

export default ServiceCard;