import React from "react";
import { Outlet } from "react-router";
import { AnimatePresence } from "framer-motion";
import Header from "../header";
import Sidebar from "../sidebar";
import StairAnimation from "../animations/StairAniamtion";
import { useLocation } from "react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { useContext } from "react";
import { SideBarContext } from "../../context/sidebarContext";

export default function Layout() {
  const location = useLocation();
  const { sidebar, handleSidebar,hideSidebar } = useContext(SideBarContext);
  // const [sidebar, setSidebar] = useState(false);
  // const handleSidebar = () => {
  //   setSidebar(!sidebar);
  // };

  // const hideSidebar = () => {
  //   setTimeout(() => setSidebar(false), 600);
  // };

  return (
    // <AnimatePresence location={location} mode="wait">
    <AnimatePresence location={location} >
      <StairAnimation key={location.pathname} />
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 6,
            ease: "easeInOut",
            type: "tween",
          },
          beforeChildren: true,
        }}
        exit={{
          opacity: 0,
        }}
        transition={{
          duration: 2,
          type: "tween",
          ease: "easeOutIn",
        }}
      >
        <Header isOpen={sidebar} handleSidebar={handleSidebar} />
        {sidebar && <Sidebar hideSidebar={hideSidebar} />}
        
        <Outlet className="mt-[4rem]"> </Outlet>
      </motion.div>
    </AnimatePresence>
  );
}
