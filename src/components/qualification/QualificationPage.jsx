import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

function QualificationPage() {
  const [activeTab, setActiveTab] = useState("experience"); // Default selected tab
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const types = {
    education: "education",
    experience: "experience"
  };

  const Qualifications = [
    {
        type : types.education,
        placeName : "COMSATS Univeristy Islamabd, Lahore Campus",
        position : `Bachelor's of Computer Science`,
        timeline : "2021 - 2025"  
    },
    {
        type : types.education,
        placeName : "Coursera",
        position : `Full Stack Javascript Developer`,
        timeline : "2023 - 2024"  
    },
    {
        type : types.education,
        placeName : "Punjab Group of Colleges",
        position : `Secondary Education`,
        timeline : "2019 - 2021"  
    },
    {
        type : types.education,
        placeName : "Universal High School",
        position : `Primary to Matric`,
        timeline : "2008 - 2019"  
    },
    {
        type : types.experience,
        placeName : "10Pearls",
        position : `Java Full Stack Developer`,
        timeline : "2024-2025"  
    },

    {
        type : types.experience,
        placeName : "Internee.Pk",
        position : `Frontend Developer`,
        timeline : "2023"  
    },
    {
        type : types.experience,
        placeName : "Open Source Contributions, Gig Work",
        position : `Web App javascript Related Mostly`,
        timeline : "2024-present"  
    },
    {
        type : types.experience,
        placeName : "Full Stack Devloper",
        position : `Self Employee working on personal Projects`,
        timeline : "2023-present"  
    },
  ]

  // Filter qualifications based on active tab
  const filteredQualifications = Qualifications.filter(
    (qualification) => qualification.type === activeTab
  );

  return (
    <motion.div 
      ref={sectionRef}
      className="my-16 flex flex-col gap-y-16 items-center px-4 max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <motion.div className="text-center">
        <motion.h1 
          className="text-gray-800 font-medium text-3xl mb-2"
          initial={{ y: -20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          Qualification
        </motion.h1>
        <motion.h3 
          className="text-gray-600 text-md"
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          My Journey
        </motion.h3>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div 
        className="flex gap-8 relative"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {/* Background Animation */}
        <div className="absolute -z-10 top-0 left-0 h-full transition-all duration-300">
          <motion.div 
            className="h-full w-32 bg-blue-100 rounded-md"
            initial={{ x: activeTab === "education" ? 0 : 128 }}
            animate={{ x: activeTab === "education" ? 0 : 128 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          />
        </div>
        
        {/* Education button */}
        <motion.button
          className={`px-4 py-2 font-medium transition-colors duration-300 z-10 ${
            activeTab === "education" ? "text-blue-600" : "text-gray-600"
          }`}
          onClick={() => setActiveTab("education")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Education
        </motion.button>
        
        {/* Experience button */}
        <motion.button
          className={`px-4 py-2 font-medium transition-colors duration-300 z-10 ${
            activeTab === "experience" ? "text-blue-600" : "text-gray-600"
          }`}
          onClick={() => setActiveTab("experience")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Experience
        </motion.button>
      </motion.div>

      {/* Timeline */}
      <div className="relative w-full">
        {/* Center line */}
        <motion.div 
          className="absolute left-1/2 top-0 w-px bg-gray-300 h-full -translate-x-1/2"
          initial={{ height: 0 }}
          animate={isInView ? { height: "100%" } : { height: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        />
        
        {/* Qualification items */}
        <div className="flex flex-col gap-12">
          <AnimatePresence mode="wait">
            {filteredQualifications.map((qualification, index) => (
              <QualificationBox 
                key={qualification.placeName} 
                qualification={qualification} 
                index={index} 
                isInView={isInView}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

// Separate QualificationBox component
const QualificationBox = ({ qualification, index, isInView }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      className={`relative flex ${isEven ? 'justify-start' : 'justify-end'} w-full`}
      initial={{ 
        opacity: 0, 
        x: isEven ? -50 : 50 
      }}
      animate={isInView ? { 
        opacity: 1, 
        x: 0,
        transition: { 
          delay: 0.8 + (index * 0.2),
          duration: 0.6, 
          type: "spring",
          stiffness: 100
        }
      } : {}}
    >
      {/* Content */}
      <motion.div 
        className={`w-[45%] p-4 border-l-2 border-blue-400 bg-white rounded-md shadow-md`}
        initial={{ opacity: 0, height: 0 }}
        animate={isInView ? { 
          opacity: 1, 
          height: "auto",
          transition: { delay: 0.9 + (index * 0.2), duration: 0.5 }
        } : {}}
      >
        <motion.h3 
          className="text-lg font-medium text-gray-800"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1, transition: { delay: 1 + (index * 0.2) } } : {}}
        >
          {qualification.position}
        </motion.h3>
        <motion.p 
          className="text-sm text-gray-600 mt-1"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1, transition: { delay: 1.1 + (index * 0.2) } } : {}}
        >
          {qualification.placeName}
        </motion.p>
        <motion.p 
          className="text-sm text-blue-500 mt-2"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1, transition: { delay: 1.2 + (index * 0.2) } } : {}}
        >
          {qualification.timeline}
        </motion.p>
      </motion.div>
      
      {/* Bullet point */}
      <motion.div 
        className="absolute left-1/2 top-5 w-4 h-4 bg-blue-500 rounded-full -translate-x-1/2 z-10"
        initial={{ scale: 0 }}
        animate={isInView ? { 
          scale: 1,
          transition: { delay: 0.7 + (index * 0.2), type: "spring", stiffness: 300 }
        } : {}}
      />
    </motion.div>
  );
};

export default QualificationPage;