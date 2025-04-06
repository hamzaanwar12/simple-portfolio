import React, { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import { SideBarContext } from "../../context/sidebarContext";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { refs } = useContext(SideBarContext);

  useEffect(() => {
    // Function to check scroll position
    const checkScrollPosition = () => {
      // Get the About section's position
      if (refs.aboutRef.current) {
        const aboutSectionBottom = refs.aboutRef.current.getBoundingClientRect().bottom;
        // Show button when scrolled past the about section
        setIsVisible(aboutSectionBottom < 0);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', checkScrollPosition);
    
    // Initial check
    checkScrollPosition();
    
    // Clean up
    return () => window.removeEventListener('scroll', checkScrollPosition);
  }, [refs.aboutRef]);

  const scrollToTop = () => {
    if (refs.homeRef && refs.homeRef.current) {
      refs.homeRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });
    } else {
      // Fallback if ref isn't available
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed right-6 bottom-6 z-50 bg-gray-700 hover:bg-gray-800 text-white p-3 rounded shadow-lg cursor-pointer"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;