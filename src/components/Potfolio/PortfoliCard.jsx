import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { projectTypes } from './PortfolioGrid';

const ProjectCard = ({ project, index, hoveredProject, setHoveredProject, onViewDetails }) => {
  // Add individual ref and inView state for each card
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: true, amount: 0.2 });

  // Create a shortened description (consistent length across all cards)
  const shortDescription = project.description.length > 110 
    ? project.description.substring(0, 110) + '...' 
    : project.description;

  return (
    <motion.div
      ref={cardRef}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
      initial={{ y: 50, opacity: 0 }}
      animate={isCardInView ? { 
        y: 0, 
        opacity: 1,
        transition: { 
          delay: 0.2 + (index * 0.1),
          duration: 0.5
        }
      } : {}}
      onMouseEnter={() => setHoveredProject(index)}
      onMouseLeave={() => setHoveredProject(null)}
    >
      {/* Media Container - Fixed height */}
      <div className="relative h-64 overflow-hidden">
        {/* Thumbnail */}
        <motion.img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover"
          initial={{ opacity: 1 }}
          animate={{ 
            opacity: hoveredProject === index ? 0 : 1,
            scale: hoveredProject === index ? 1.1 : 1
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Video - Shows on hover */}
        {hoveredProject === index && (
          <motion.video
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <source src={project.video} type="video/mp4" />
          </motion.video>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-800 pr-2">{project.title}</h3>
          <span className={`px-2 py-1 text-xs rounded-full whitespace-nowrap ${
            project.type === 'frontend' 
              ? 'bg-gray-600 text-white' 
              : 'bg-green-100 text-green-800'
          }`}>
            {projectTypes[project.type]}
          </span>
        </div>
        
        {/* Shortened description - Fixed height */}
        <p className="text-gray-600 mb-4 line-clamp-3">{shortDescription}</p>
        
        {/* Technologies - Horizontal scrollable container */}
        <div className="mb-4 overflow-x-auto scrollbar-hide">
          <div className="flex gap-2 min-w-max">
            {project.technologies.map(tech => (
              <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded whitespace-nowrap">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons - Always at bottom due to flex-grow above */}
        <div className="flex justify-between items-center mt-auto pt-3 border-t border-gray-100">
          <a 
            href={project.demoLink} 
            className="text-gray-600 hover:text-gray-800 font-medium flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="whitespace-nowrap">View Demo</span>
            <svg className="w-4 h-4 ml-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
          
          <button 
            onClick={onViewDetails}
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
          >
            <span className="whitespace-nowrap">View Details</span>
            <svg className="w-4 h-4 ml-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;