import { createContext, useState, useRef } from "react";

export const SideBarContext = createContext();

export const SideBarProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const servicesRef = useRef(null);
  const qualificationRef = useRef(null);
  const portfolioRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  const handleSidebar = () => {
    setSidebar((val) => !val);
  };

  const hideSidebar = () => {
    // setTimeout(() => setSidebar(false), 600);
    setTimeout(() => setSidebar(false), 250);
  }

  // Function to scroll to a section
  const scrollToSection = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    hideSidebar();
  };

  return (
    <SideBarContext.Provider value={{ 
      sidebar, 
      handleSidebar, 
      hideSidebar,
      scrollToSection,
      refs: {
        homeRef,
        aboutRef,
        skillsRef,
        servicesRef,
        qualificationRef,
        portfolioRef,
        testimonialsRef,
        contactRef
      }
    }}>
      {children}
    </SideBarContext.Provider>
  );
};