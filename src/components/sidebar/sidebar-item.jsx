import React from "react";
import { motion } from "framer-motion";

function SideBarItem({ icon, title, onClick }) {
  return (
    <motion.li
      className="list-none"
      initial={{ opacity: 0, x: -20 }}
      animate={{ 
        opacity: 1, 
        x: 0,
        transition: { 
          type: "spring", 
          stiffness: 100, 
          damping: 12 
        } 
      }}
    >
      <motion.button
        onClick={onClick}
        className="w-full flex items-center gap-3 p-3 text-white rounded-lg cursor-pointer"
        whileHover={{ 
          backgroundColor: "rgba(31, 41, 55, 0.8)",
          scale: 1.01,
          transition: { duration: 0.2 }
        }}
        whileTap={{ 
          scale: 0.98,
          backgroundColor: "rgba(31, 41, 55, 0.8)"
        }}
      >
        <motion.div
          className="text-xl flex items-center justify-center"
          whileHover={{ 
            scale: 1.1, 
            transition: { duration: 0.2 } 
          }}
        >
          {icon}
        </motion.div>
        
        <motion.span
          className="font-sans text-gray-300"
          whileHover={{ 
            color: "rgba(255, 255, 255, 1)",
            transition: { duration: 0.2 }
          }}
        >
          {title}
        </motion.span>
      </motion.button>
    </motion.li>
  );
}

export default SideBarItem;