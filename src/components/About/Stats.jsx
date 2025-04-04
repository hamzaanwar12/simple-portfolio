// Enhanced Stats.jsx
import React from "react";
import { CiMedal } from "react-icons/ci";
import { RiCustomerService2Line } from "react-icons/ri";
import { GrCompliance } from "react-icons/gr";
import StatBox from "./StatBox";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Stats() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const stats = [
    {
      title: "Experience",
      icon: (
        <CiMedal className="text-4xl text-primary" />
      ),
      numbers: 2,
      numberstatement: "+ Years",
    },
    {
      title: "Completed",
      icon: (
        <GrCompliance className="text-4xl text-primary" />
      ),
      numbers: 20,
      numberstatement: "+ Projects",
    },
    {
      title: "Support",
      icon: (
        <RiCustomerService2Line className="text-4xl text-primary" />
      ),
      numbers: 24,
      numberstatement: "/7 Online",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4
      }
    }
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          variants={item}
          whileHover={{ 
            y: -5,
            transition: { duration: 0.2 }
          }}
        >
          <StatBox
            title={stat.title}
            icon={stat.icon}
            numbers={stat.numbers}
            numberstatement={stat.numberstatement}
            index={index}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Stats;