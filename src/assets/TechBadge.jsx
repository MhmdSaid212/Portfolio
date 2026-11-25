import React from 'react'
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGitAlt, FaGithub,
  FaCode, FaFigma, FaNodeJs, FaPython, FaDatabase, FaRobot, FaBrain, FaPlug
} from 'react-icons/fa'
import {
  SiTailwindcss, SiTypescript, SiNextdotjs, SiExpress, SiMongodb,
  SiPostgresql, SiMysql, SiFastapi, SiDjango, SiLaravel, SiJest,
  SiVitest, SiJsonwebtokens, SiGithubactions, SiVercel, SiFirebase
} from 'react-icons/si'

// Map icon names to actual components
const iconMap = {
  'HTML5': FaHtml5,
  'CSS3': FaCss3Alt,
  'JavaScript': FaJs,
  'TypeScript': SiTypescript,
  'React': FaReact,
  'Next.js': SiNextdotjs,
  'Tailwind CSS': SiTailwindcss,
  'Bootstrap': FaBootstrap,
  'Zustand': FaCode,
  'TanStack Query': FaCode,
  'Node.js': FaNodeJs,
  'Express.js': SiExpress,
  'Python': FaPython,
  'FastAPI': SiFastapi,
  'Django': SiDjango,
  'Laravel': SiLaravel,
  'SQL': FaDatabase,
  'MySQL': SiMysql,
  'PostgreSQL': SiPostgresql,
  'MongoDB': SiMongodb,
  'Firebase': SiFirebase,
  'JWT & RBAC': SiJsonwebtokens,
  'REST APIs': FaPlug,
  'Unit Testing': SiVitest,
  'Jest': SiJest,
  'LLMs & APIs': FaBrain,
  'Prompt Engineering': FaRobot,
  'Git': FaGitAlt,
  'GitHub': FaGithub,
  'GitHub Actions': SiGithubactions,
  'Vercel': SiVercel,
  'VS Code': FaCode,
  'Figma': FaFigma
}

const TechBadge = ({ name }) => {
  const IconComponent = iconMap[name] || FaCode

  return (
    <div className="bg-white border border-gray-200 rounded-xl flex flex-col items-center p-5 gap-3 transition-all duration-200 hover:border-indigo-300 hover:shadow-md hover:-translate-y-1 cursor-default">
      <IconComponent className="text-4xl text-indigo-600" />
      <span className="text-sm font-medium text-gray-700 text-center">{name}</span>
    </div>
  )
}

export default TechBadge
