import React from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { useLocation } from "react-router";

function SideBaritem({ icon, title, to, handleSidebar }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === to;

  const handleClick = (e) => {
    e.preventDefault();
    if (isActive) {
      handleSidebar();
      return;
    }
    navigate(to);
    handleSidebar();
  };

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
        onClick={handleClick}
        className={`w-full text-2xl font-sans flex items-center gap-4 p-4 text-white
          ${isActive ? 'bg-gray-700' : 'hover:bg-gray-800'}`}
        aria-current={isActive ? "page" : undefined}
        initial={false}
        animate={{
          backgroundColor: isActive ? "rgba(55, 65, 81, 1)" : "rgba(31, 41, 55, 0)",
        }}
        transition={{ duration: 0.2 }}
      >
        <motion.span
          animate={{
            scale: isActive ? 1.1 : 1,
            color: isActive ? "#22d3ee" : "inherit" // cyan-400 for active
          }}
          transition={{ duration: 0.2 }}
        >
          {icon}
        </motion.span>
        <motion.span
          animate={{
            fontWeight: isActive ? "600" : "400",
            color: isActive ? "#ffffff" : "rgba(209, 213, 219, 1)" // gray-300 for inactive
          }}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.span>
        
        {isActive && (
          <motion.div
            className="absolute right-0 h-full w-1 bg-cyan-400"
            layoutId="sidebarActiveIndicator"
            initial={false}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </motion.button>
    </motion.li>
  );
}

export default SideBaritem;