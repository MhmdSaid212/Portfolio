import React from 'react'
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, 
  FaBootstrap, FaGitAlt, FaGithub, FaCode, FaFigma 
} from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'

// Map icon names to actual components
const iconMap = {
  'HTML5': FaHtml5,
  'CSS3': FaCss3Alt,
  'JavaScript': FaJs,
  'React': FaReact,
  'Tailwind CSS': SiTailwindcss,
  'Bootstrap': FaBootstrap,
  'Git': FaGitAlt,
  'GitHub': FaGithub,
  'VS Code': FaCode,
  'Figma': FaFigma
}

const TechBadge = ({ name }) => {
  const IconComponent = iconMap[name]
  
  return (
    <div className="bg-white border border-gray-200 rounded-xl flex flex-col items-center p-5 gap-3 transition-all duration-200 hover:border-indigo-300 hover:shadow-md hover:-translate-y-1 cursor-default">
      {IconComponent && <IconComponent className="text-4xl text-indigo-600" />}
      <span className="text-sm font-medium text-gray-700">{name}</span>
    </div>
  )
}

export default TechBadge