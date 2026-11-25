import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const ProjectCard = ({ title, description, technologies, githubUrl, liveUrl, badge }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:border-indigo-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full">
      {/* Colored top bar */}
      <div className="h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
      
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-lg font-bold text-gray-900 tracking-tight">
            {title}
          </h3>
          {badge && (
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-100 text-purple-700 whitespace-nowrap">
              {badge}
            </span>
          )}
        </div>
        
        <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-5">
          {technologies.map((tech, idx) => (
            <span 
              key={idx}
              className="text-xs font-medium px-2.5 py-1 bg-indigo-50 text-indigo-600 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {(githubUrl || liveUrl) && (
          <div className="flex gap-4 pt-3 border-t border-gray-100">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <FaGithub className="text-base" />
                Code
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <FaExternalLinkAlt className="text-xs" />
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
