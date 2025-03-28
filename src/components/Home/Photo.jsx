import { motion } from "framer-motion";
import checkSrc from "/assets/check.png";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { SideBarContext } from "../../context/sidebarContext";
const Photo = () => {
  const [size, setSize] = useState(300); // Default size
  const { sidebar } = useContext(SideBarContext);
  useEffect(() => {
    const handleResize = () => {
      //   if (window.innerWidth < 300) setSize(150);
      //   else
      if (window.innerWidth < 400) setSize(225);
      //   else if (window.innerWidth < 640) setSize(200);
      //   else if (window.innerWidth < 768) setSize(250);
      else setSize(300);
      //   console.log(window.innerWidth, size);
    };

    handleResize(); // Call initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    console.log(window.innerWidth, size);
  }, [size]);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 4,
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
        ease: "easeInOut",
      }}
      className="relative "
    >
      {/* Rotating Dotted Circle */}
      <motion.svg
        className="absolute"
        width={`${size}`} // Slightly larger than image
        height={`${size}`}
        viewBox="0 0 120 120"
      >
        <motion.circle
          //   cx={`${size == 300 ? 60 : size==225 ? 59 : 55}`}
          cx={`${size == 300 ? 60 : 59}`}
          cy={`${size == 300 ? 60 : 59}`}
          r={`${size == 300 ? 60 : 59}`} // Adjusted for better alignment
          fill="transparent"
          stroke="hsl(200, 50%, 20%)"
          strokeWidth="1"
          strokeDasharray="4 8" // Dotted effect
          strokeLinecap="round"
          animate={{ rotate: 360 }}
          transition={{
            duration: 10, // Faster rotation
            repeat: Infinity,
            ease: "easeInOut",
            type: "spring",
          }}
        />
      </motion.svg>

      {/* Image */}
      <img
        // className={`p-[2px] w-[${size!=150?size:75}px]  h-[${size!=150?size:75}px] object-cover rounded-full`}
        className={`p-[2px] w-[${size}px]  h-[${size}px] object-cover rounded-full`}
        src={checkSrc}
        alt=""
      />
    </motion.div>
  );
};

export default Photo;
