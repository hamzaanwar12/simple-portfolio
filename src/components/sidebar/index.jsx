import React from "react";
import SideBarItem from "./sidebar-item";
import { motion } from "framer-motion";
// Importing a cohesive set of icons from Heroicons style
import { HiHome, HiUser, HiCode, HiBriefcase, HiServer, HiMail } from "react-icons/hi";

function Sidebar({ hideSidebar }) {
  // Updated route array with recommended icons
  const routes = [
    {
      to: "/",
      title: "Home",
      icon: <HiHome className="text-white text-2xl" />,
    },
    {
      to: "/about",
      title: "About",
      icon: <HiUser className="text-white text-2xl" />,
    },
    {
      to: "/skills",
      title: "Skills",
      icon: <HiCode className="text-white text-2xl" />,
    },
    {
      to: "/experience",
      title: "Experience",
      icon: <HiBriefcase className="text-white text-2xl" />,
    },
    {
      to: "/services",
      title: "Services",
      icon: <HiServer className="text-white text-2xl" />,
    },
    {
      to: "/contact",
      title: "Contact",
      icon: <HiMail className="text-white text-2xl" />,
    },
  ];

  // Animation variants for parent and children elements
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 120,
        beforeChildren: true,
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 120,
        afterChildren: true,
      }
    }
  };

  const sidebarVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 120,
      }
    },
    exit: {
      x: -100,
      opacity: 0,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 120,
      }
    }
  };
  
  // Handle backdrop click to close sidebar
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      hideSidebar();
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={backdropVariants}
      className="font-sans fixed top-0 left-0 w-screen h-screen bg-[#1e1e1e80] backdrop-blur-sm z-[15] scrollbar-none overflow-hidden"
      onClick={handleBackdropClick}
    >
      <motion.div
        variants={sidebarVariants}
        className="font-sans pt-16 bg-gradient-to-b from-gray-800 to-gray-900 w-42 md:w-48 lg:w-64 h-screen shadow-lg shadow-black/30"
      >
        <div className="flex flex-col space-y-2 gap-y-3">
          {routes.map((route, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                transition: { 
                  delay: index * 0.05,
                  duration: 0.3
                }
              }}
            >
              <SideBarItem
                to={route.to}
                title={route.title}
                icon={route.icon}
                handleSidebar={hideSidebar}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Sidebar;