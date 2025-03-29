import React from "react";
import { CiMedal } from "react-icons/ci";
import { RiCustomerService2Line } from "react-icons/ri";
import { GrCompliance } from "react-icons/gr";
import StatBox from "./StatBox";
import { motion } from "framer-motion";

function Stats() {
  const stats = [
    {
      title: "Experience",
      icon: (
        <CiMedal
          className="fill-current text-bg-800"
          style={{ opacity: 1, stroke: "currentColor", strokeWidth: 1.5 }}
        />
      ),
      numbers: 2,
      numberstatement: "+ Years",
    },
    {
      title: "Completed",
      // GrCompliance needs special handling as it often uses SVG strokes instead of fills
      icon: (
        <GrCompliance
          className="text-bg-800"
          style={{ opacity: 1, stroke: "currentColor", strokeWidth: 1.5 }}
        />
      ),
      numbers: 20,
      numberstatement: "+ Projects",
    },
    {
      title: "Support",
      icon: (
        <RiCustomerService2Line
          className="fill-current text-bg-800"
          style={{ opacity: 1 }}
        />
      ),
      numbers: 24,
      numberstatement: "/7 Online",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.3,
      }}
      className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: index * 0.3 }}
        >
          <StatBox
            title={stat.title}
            icon={stat.icon}
            numbers={stat.numbers}
            numberstatement={stat.numberstatement}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Stats;
