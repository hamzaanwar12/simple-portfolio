import React from "react";
import SideBarItem from "./sidebar-item";
import { FcServices } from "react-icons/fc";
import { GiSkills } from "react-icons/gi";
import { IoIosContacts } from "react-icons/io";
import { GiAchievement } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { motion } from "framer-motion";

function Sidebar({ hideSidebar }) {
  const routes = [
    {
      to: "/",
      title: "Home",
      icon: <FaHome />,
    },
    {
      to: "/about",
      title: "About",
      icon: <BsFillPersonFill />,
    },
    {
      to: "/skills",
      title: "Skills",
      icon: <GiSkills />,
    },
    {
      to: "/experience",
      title: "Experience",
      icon: <GiAchievement />,
    },
    {
      to: "/services",
      title: "Services",
      icon: <FcServices />,
    },
    {
      to: "/contact",
      title: "Contact",
      icon: <IoIosContacts />,
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.3,
          type: "spring",
          stiffness: 120,
          beforeChildren: true,
        },
      }}
      exitend={{ opacity: 0 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.2,
          type: "spring",
          stiffness: 120,
          AfterChildren: true,
        },
      }}
      className="fixed w-screen h-screen bg-[#a4a2a2fc] scrollbar-none overflow-none"
    >
      {/* <div className='z-100 relative bg-gray-800 w-64 gap-y-4 h-screen'> */}
      <motion.div
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
        exit={{
          x: -100,
          transition: {
            duration: 0.3,
            type: "spring",
            stiffness: 120,
          },
        }}
        className="bg-gray-800 w-64 gap-y-4 h-screen"
      >
        {routes.map((route, index) => (
          <SideBarItem
            key={index}
            to={route.to}
            title={route.title}
            icon={route.icon}
            handleSidebar={hideSidebar}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Sidebar;
