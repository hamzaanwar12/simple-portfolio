import React from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { useLocation } from "react-router";
function SideBaritem({ icon, title, to, handleSidebar }) {
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = (e) => {
    e.preventDefault();
    if (to === location.pathname) {
      handleSidebar();
      return;
    }
    navigate(to);
    handleSidebar();
  };
  return (
    <motion.button
      initial={{
        x: -100,
      }}
      animate={{
        x: 0,
        transition: {
          duration: 0.3,
          type: "spring",
          stiffness: 120,
        },
      }}
      onClick={handleClick}
      className="font-sans  flex items-center gap-4 text-white p-4"
    >
      {icon}
      <span>{title}</span>
    </motion.button>
  );
}

export default SideBaritem;
