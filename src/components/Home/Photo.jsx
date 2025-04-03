import { motion } from "framer-motion";
import checkSrc from "/assets/check.png";
import { useState, useEffect, useContext } from "react";
import { SideBarContext } from "../../context/sidebarContext";

const Photo = () => {
  const [size, setSize] = useState(300); // Default size
  // const { sidebar } = useContext(SideBarContext);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 400) setSize(225);
      else setSize(300);
    };
    
    handleResize(); // Call initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate SVG viewBox size to match the image size
  const viewBoxSize = 120; // Base viewBox size
  const circleCenter = viewBoxSize / 2;
  const circleRadius = circleCenter - 1; // Slight adjustment to keep circle inside bounds

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 4,
          ease: "easeInOut",
          type: "tween",
        },
        beforeChildren: true,
      }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 2,
        ease: "easeInOut",
      }}
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {/* Rotating Dotted Circle */}
      <motion.svg
        className="absolute inset-0"
        width={size}
        height={size}
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        preserveAspectRatio="xMidYMid meet"
      >
        <motion.circle
          cx={circleCenter}
          cy={circleCenter}
          r={circleRadius}
          fill="transparent"
          stroke="hsl(200, 50%, 20%)"
          strokeWidth="1"
          strokeDasharray="4 8" // Dotted effect
          strokeLinecap="round"
          animate={{ rotate: 360 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            type: "spring",
          }}
        />
      </motion.svg>

      {/* Image */}
      <img
        className="object-cover rounded-full"
        src={checkSrc}
        alt=""
        style={{ 
          width: size - 4, // Account for padding
          height: size - 4,
          padding: "2px"
        }}
      />
    </motion.div>
  );
};

export default Photo;