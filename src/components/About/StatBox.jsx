import React, { useEffect } from "react"; 
import { motion, useMotionValue, useTransform, animate } from "framer-motion"; 
 
function StatBox({ title, icon, numbers, numberstatement }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
 
  useEffect(() => {
    // Start the animation with a short delay after component mounts
    const controls = animate(count, numbers, { 
      duration: 2, 
      ease: "easeOut",
      delay: 3  // Small delay for better visual effect
    });
  
    return () => controls.stop(); // Cleanup function to stop animation
  }, [numbers]); // Only depends on numbers changing
 
  return ( 
    <motion.div 
      className="border border-background flex flex-col items-center gap-y-2 p-4 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    > 
      <motion.div 
        className="text-4xl text-primary"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        {icon}
      </motion.div> 
      
      <motion.h1 
        className="text-xl font-semibold text-title"
      >
        {title}
      </motion.h1> 
      
      <motion.div 
        className="text-lg font-bold text-secondary flex"
      >
        <motion.span>{rounded}</motion.span>
        <span>{numberstatement}</span>
      </motion.div>
    </motion.div> 
  ); 
} 
 
export default StatBox;