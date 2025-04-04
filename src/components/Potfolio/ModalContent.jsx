import React from 'react';
import { motion } from 'framer-motion';
import { projectTypes } from './PortfolioGrid';

const ModalContent = ({ project }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Media Section */}
      <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          controls
          className="w-full h-full object-cover rounded-lg"
        >
          <source src={project.video} type="video/mp4" />
        </video>
      </div>

      {/* Content Section */}
      <div className="space-y-4">
        {/* Header with badge */}
        <div className="flex justify-between items-start">
          <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
          <span className={`px-3 py-1 text-sm rounded-full ${
            project.type === 'frontend' 
              ? 'bg-gray-600 text-white' 
              : 'bg-green-100 text-green-800'
          }`}>
            {projectTypes[project.type]}
          </span>
        </div>
        
        {/* Full description */}
        <p className="text-gray-600">{project.description}</p>
        
        {/* Technologies */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(tech => (
              <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Features */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Key Features</h4>
          <ul className="space-y-2">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <svg className="w-5 h-5 mt-0.5 mr-2 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Project link */}
        <div className="pt-4">
          <a 
            href={project.demoLink} 
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Live Demo
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ModalContent;