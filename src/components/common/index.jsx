import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function CommonPage({ Heading, SubHeading, children }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  // Container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  // Header variants
  const headerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      ref={sectionRef}
      className="my-16 flex flex-col gap-y-[4rem] items-center px-4 max-w-4xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div className="text-center">
        <motion.h1
          className="text-gray-800 font-medium text-3xl mb-2"
          initial={{ y: -20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {Heading}
        </motion.h1>
        <motion.h3
          className="relative bottom-[8px] text-gray-600 text-md"
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {SubHeading}
        </motion.h3>
      </motion.div>

      <motion.div className="w-full" variants={headerVariants}>
        {children}
      </motion.div>
    </motion.div>
  );
}

export default CommonPage;
