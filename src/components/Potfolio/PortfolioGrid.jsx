import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./PortfoliCard";

import ShoppyThumb from "/uploads/dashboard/dashboardThumbnail.png";
import ShoppyVideo from "/uploads/dashboard/dashboardWebDemo.mp4";
import FinanceThumb from "/uploads/finance/tumbnail.png";
import FinanceVideo from "/uploads/finance/Finance Web APP.mp4";
import ShowroomThumb from "/uploads/showroom/carThumbnail.png";
import ShowroomVideo from "/uploads/showroom/carDemo.mp4";
import EcommerceThumb from "/uploads/Ecommerce/github Full Stack.png";
import EcommerceVideo from "/uploads/Ecommerce/demo.mp4";

export const projectTypes = {
  all: "All",
  fullstack: "Full Stack",
  frontend: "Frontend",
};

const PortfolioGrid = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const buttonRefs = useRef({});
  const [buttonDimensions, setButtonDimensions] = useState({
    all: { width: 0, left: 0 },
    fullstack: { width: 0, left: 0 },
    frontend: { width: 0, left: 0 },
  });

  // Measure button positions and update on window resize
  useEffect(() => {
    const updateButtonDimensions = () => {
      const parentRect = buttonRefs.current.parent?.getBoundingClientRect();
      
      if (!parentRect) return;
      
      const newDimensions = {};
      
      Object.keys(projectTypes).forEach(key => {
        if (buttonRefs.current[key]) {
          const rect = buttonRefs.current[key].getBoundingClientRect();
          newDimensions[key] = {
            width: rect.width,
            left: rect.left - parentRect.left,
          };
        }
      });
      
      setButtonDimensions(newDimensions);
    };

    updateButtonDimensions();
    window.addEventListener('resize', updateButtonDimensions);
    
    return () => window.removeEventListener('resize', updateButtonDimensions);
  }, []);

  const projects = [
    {
      // id: 1,
      title: "Shoppy - React Admin Dashboard",
      type: "frontend",
      description:
        "A comprehensive admin dashboard built with React.js featuring data visualization, user management, and responsive design. The dashboard provides an intuitive interface for managing business operations with interactive charts and graphs.",
      thumbnail: ShoppyThumb,
      video: ShoppyVideo,
      technologies: ["React", "Material UI", "Chart.js", "Tailwind CSS"],
      demoLink: "#",
      features: [
        "Responsive design for all devices",
        "Interactive data visualization",
        "User management system",
        "Modern UI with dark/light mode",
      ],
    },
    {
      // id: 2,
      title: "HooBank - Modern Finance Website",
      type: "frontend",
      description:
        "A sleek finance website built with React.js and Tailwind CSS, featuring responsive design and modern UI components. Designed based on a Figma prototype to ensure high-quality, consistent user experience.",
      thumbnail: FinanceThumb,
      video: FinanceVideo,
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      demoLink: "#",
      features: [
        "Responsive design optimized for all devices",
        "Interactive financial data visualization",
        "User-friendly navigation and layout",
        "Modern interface following UI/UX best practices",
      ],
    },
    {
      // id: 3,
      title: "Car Showcase Website",
      type: "fullstack",
      description:
        "A Next.js application showcasing various car types with advanced filtering and pagination support. Leverages server-side rendering capabilities for enhanced performance and SEO optimization.",
      thumbnail: ShowroomThumb,
      video: ShowroomVideo,
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "RapidAPI"],
      demoLink: "#",
      features: [
        "Advanced search and filtering system",
        "Server-side rendering for better performance",
        "Pagination for large datasets",
        "SEO optimized metadata",
        "Responsive design across all devices",
      ],
    },
    {
      // id: 4,
      title: "Full Stack E-commerce Website",
      type: "fullstack",
      description:
        "Complete e-commerce solution with React frontend and Node.js backend, featuring product management, cart functionality, and payment integration. Includes both client and server components for a seamless shopping experience.",
      thumbnail: EcommerceThumb,
      video: EcommerceVideo,
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "Cloudinary",
      ],
      demoLink: "#",
      features: [
        "Product catalog with search and filtering",
        "User authentication and authorization",
        "Shopping cart functionality",
        "Payment gateway integration",
        "Image upload with Cloudinary",
      ],
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.type === activeTab);

  return (
    <motion.section
      ref={sectionRef}
      className="py-16 px-4 max-w-7xl mx-auto"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ y: -20, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Portfolio</h1>
        <p className="text-lg text-gray-600">Most Recent Work</p>
      </motion.div>

      {/* Filter Buttons - Updated to be responsive */}
      <motion.div
        className="flex justify-center gap-4 md:gap-8 relative mb-12"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        ref={el => buttonRefs.current.parent = el}
      >
        {/* Background Animation */}
        <div className="absolute -z-10 top-0 left-0 h-full transition-all duration-300">
          <motion.div 
            className="h-full bg-blue-100 rounded-md"
            initial={{ 
              x: buttonDimensions[activeTab]?.left || 0,
              width: buttonDimensions[activeTab]?.width || 0
            }}
            animate={{ 
              x: buttonDimensions[activeTab]?.left || 0,
              width: buttonDimensions[activeTab]?.width || 0
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          />
        </div>
        
        {/* Filter buttons */}
        {Object.entries(projectTypes).map(([key, value]) => (
          <motion.button
            key={key}
            ref={el => buttonRefs.current[key] = el}
            className={`px-3 py-2 md:px-4 md:py-2 font-medium transition-colors duration-300 z-10 whitespace-nowrap ${
              activeTab === key ? "text-blue-600" : "text-gray-600"
            }`}
            onClick={() => setActiveTab(key)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {value}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="px-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index + 1}
            project={project}
            index={index}
            isInView={isInView}
            hoveredProject={hoveredProject}
            setHoveredProject={setHoveredProject}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default PortfolioGrid;