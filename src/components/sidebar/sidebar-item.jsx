import React from "react";
import { motion } from "framer-motion";

function SideBarItem({ icon, title, onClick }) {
  return (
    <motion.li 
      className="list-none"
      initial={{ opacity: 0, x: -100 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          stiffness: 120,
          damping: 15,
        }
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.button
        onClick={onClick}
        className="w-full text-2xl font-sans flex items-center gap-4 p-4 text-white hover:bg-gray-800"
        initial={false}
        animate={{
          backgroundColor: "rgba(31, 41, 55, 0)",
        }}
        transition={{ duration: 0.2 }}
      >
        <motion.span
          animate={{
            scale: 1,
            color: "inherit"
          }}
          transition={{ duration: 0.2 }}
        >
          {icon}
        </motion.span>
        <motion.span
          animate={{
            fontWeight: "400",
            color: "rgba(209, 213, 219, 1)"
          }}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.span>
      </motion.button>
    </motion.li>
  );
}

export default SideBarItem;