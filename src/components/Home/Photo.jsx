import { motion } from "framer-motion";
import checkSrc from "/assets/check.png";

const Photo = () => {
  return (
    <div className="relative w-[250px] h-[250px] flex items-center justify-center">
      {/* Rotating Dotted Circle */}
      <motion.svg
        className="absolute"
        width="270" // Slightly larger than image
        height="270"
        viewBox="0 0 120 120"
      >
        <motion.circle
          cx="60"
          cy="60"
          r="50" // Adjusted for better alignment
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
      <img className="p-[2px] w-[225px] h-[225px] object-cover rounded-full" src={checkSrc} alt="" />
    </div>
  );
};

export default Photo;
