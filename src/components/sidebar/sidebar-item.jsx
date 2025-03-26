import React from "react";
import { useNavigate } from "react-router";
import {motion} from "framer-motion";

function SideBaritem({ icon, title, to ,handleSidebar }) {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
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
      className="flex items-center gap-4 text-white p-4"
    >
      {icon}
      <span>{title}</span>
    </motion.button>
  );
}

export default SideBaritem;
