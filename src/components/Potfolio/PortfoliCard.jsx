// ProjectCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { projectTypes } from './PortfolioGrid';

const ProjectCard = ({ project, index, isInView, hoveredProject, setHoveredProject }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      initial={{ y: 50, opacity: 0 }}
      animate={isInView ? { 
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
      {/* Media Container */}
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
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
          <span className={`px-2 py-1 text-xs rounded-full ${
            project.type === 'frontend' 
              ? 'bg-gray-600 text-white' 
              : 'bg-green-100 text-green-800'
          }`}>
            {projectTypes[project.type]}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map(tech => (
            <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
              {tech}
            </span>
          ))}
        </div>

        {/* Features */}
        <ul className="mb-4">
          {project.features.slice(0, 3).map((feature, i) => (
            <li key={i} className="flex items-start mb-1">
              <svg className="w-4 h-4 mt-0.5 mr-2 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-sm text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="flex justify-between items-center">
          <a 
            href={project.demoLink} 
            className="text-gray-600 hover:text-gray-800 font-medium flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Demo
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;


