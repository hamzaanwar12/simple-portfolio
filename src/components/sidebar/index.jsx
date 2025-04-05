import React, { useContext } from "react";
import SideBarItem from "./sidebar-item";
import { motion } from "framer-motion";
import { HiHome, HiUser, HiCode, HiBriefcase, HiServer, HiMail } from "react-icons/hi";
import { SideBarContext } from "../../context/sidebarContext";

function Sidebar({ hideSidebar }) {
  const { scrollToSection, refs } = useContext(SideBarContext);

  // Updated items array for section scrolling
  const items = [
    {
      title: "Home",
      icon: <HiHome className="text-white text-2xl" />,
      section: "home",
    },
    {
      title: "About",
      icon: <HiUser className="text-white text-2xl" />,
      section: "about",
    },
    {
      title: "Skills",
      icon: <HiCode className="text-white text-2xl" />,
      section: "skills",
    },
    {
      title: "Experience",
      icon: <HiBriefcase className="text-white text-2xl" />,
      section: "qualification", // Changed to match your component
    },
    {
      title: "Services",
      icon: <HiServer className="text-white text-2xl" />,
      section: "services",
    },
    {
      title: "Contact",
      icon: <HiMail className="text-white text-2xl" />,
      section: "contact",
    },
  ];

  // Animation variants (unchanged)
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
          {items.map((item, index) => (
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
                title={item.title}
                icon={item.icon}
                onClick={() => {
                  scrollToSection(refs[`${item.section}Ref`]);
                  hideSidebar();
                }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Sidebar;