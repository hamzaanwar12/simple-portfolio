import React, { useState, useEffect, Children } from "react";
import { Outlet } from "react-router";
import { AnimatePresence } from "framer-motion";
import Header from "../header";
import Sidebar from "../sidebar";
import { StairAnimation } from "../animations";
import { useLocation } from "react-router";
import { motion } from "framer-motion";
import { useContext } from "react";
import { SideBarContext } from "../../context/sidebarContext";

export default function Layout({ children }) {
  const location = useLocation();
  const { sidebar, handleSidebar, hideSidebar } = useContext(SideBarContext);
  const [showStairAnimation, setShowStairAnimation] = useState(true);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Check if animation has already run
    const alreadyAnimated = sessionStorage.getItem("hasAnimated");

    if (alreadyAnimated) {
      setShowStairAnimation(false);
      setHasAnimated(true);
    } else {
      // Mark animation as done after it completes
      const timer = setTimeout(() => {
        setShowStairAnimation(false);
        setHasAnimated(true);
        sessionStorage.setItem("hasAnimated", "true");
      }, 7500); // Adjust this timeout to match your animation duration

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {/* Only show StairAnimation on first visit */}
      {showStairAnimation && <StairAnimation key="stair-animation" />}

      <AnimatePresence>
        <motion.div
          key="main-content"
          initial={{
            opacity: hasAnimated ? 1 : 0, // Skip fade-in if already animated
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: hasAnimated ? 0 : 6, // Skip long duration if already animated
              ease: "easeInOut",
              type: "tween",
            },
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

          {/* <Outlet className="mt-[4rem]" /> */}
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
