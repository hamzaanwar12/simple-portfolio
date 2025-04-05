// Enhanced StatBox.jsx
import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useState } from "react";
function StatBox({ title, icon, numbers, numberstatement, index }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const controls = animate(count, numbers, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      delay: 1.25 + index * 0.3,
    });

    return () => controls.stop();
  }, [numbers, index]);

  return (
    <motion.div
      className="border border-background flex flex-col items-center gap-y-2 p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.3 },
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <motion.div
        className="text-5xl text-primary mb-2"
        animate={{
          scale: hovered ? 1.2 : 1,
          rotate: hovered ? 10 : 0,
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {icon}
      </motion.div>

      <motion.h1 className="text-xl font-semibold text-title dark:text-white">
        {title}
      </motion.h1>

      <motion.div
        className="text-xl font-semibold text-secondary dark:text-cyan-400 flex items-baseline gap-1"
        animate={{
          scale: hovered ? 1.1 : 1,
        }}
      >
        <motion.span>{rounded}</motion.span>
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { delay: 2 + index * 0.3 },
          }}
        >
          {numberstatement}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}

export default StatBox;
