import React from 'react'
import { FaGithub } from 'react-icons/fa'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  const projects = [
    {
      title: 'Smart Assistant',
      description:"An AI-powered desktop assistant that analyzes the user's screen in real time and answers contextual questions based on what is currently displayed.",
      technologies: ["React", "Gemini API", "Computer Vision", "Electron", "Tailwind CSS"],
      githubUrl: 'https://github.com/MhmdSaid212/smart-screen-assistant.git',
      liveUrl: 'https://taskflow-demo.netlify.app'
    },
    {
      title: 'Smart Meeting Room',
      description: 'A comprehensive room booking and meeting platform with automated Minutes of Meeting generation. Reduced scheduling conflicts by enabling teams to manage meeting logistics across the organization. Implemented role-based access for administrators to manage rooms, attendees, and booking activity.',
      technologies: ['React', 'Tailwind CSS', 'Laravel', 'MySQL', 'RESTful APIs'],
      githubUrl: 'https://github.com/MhmdSaid212/Smart-Meeting-Room.git',
      liveUrl: 'https://smartroom-demo.netlify.app'
    },
    {
      title: 'Chat App',
      description: 'A full-featured real-time communication platform supporting messaging, media sharing, stories, and peer-to-peer voice calls. Features include user authentication, real-time messaging with live updates, message reactions and replies, voice messages, ephemeral stories with 24-hour visibility, and peer-to-peer voice calling.',
      technologies: ['React', 'Firebase', 'WebRTC', 'Tailwind CSS'],
      githubUrl: 'https://github.com/MhmdSaid212/React-Chat-App.git',
      liveUrl: 'https://react-chat-app-demo.netlify.app'
    },
    {
      title: 'Services Website',
      description: 'A pixel-perfect front-end implementation of a Figma design using React and custom CSS. Built with reusable components, component-specific CSS files, and fully responsive design including desktop view, mobile view, and hamburger menu navigation.',
      technologies: ['React', 'CSS (No Frameworks)', 'Figma'],
      githubUrl: 'https://github.com/MhmdSaid212/figma-implementation',
      liveUrl: 'https://figma-implementation-demo.netlify.app'
    }
  ]

  return (
    <section id="projects" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-indigo-600 mb-3 justify-center">
            <div className="w-6 h-0.5 bg-indigo-600 rounded-full"></div>
            Portfolio
            <div className="w-6 h-0.5 bg-indigo-600 rounded-full"></div>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Featured Projects
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Real-world applications I've built to solve problems and showcase my skills
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              data-aos="dramatic-pop" 
              data-aos-duration="800" 
              data-aos-delay={index * 100}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* View More Link */}
        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay={projects.length * 100 + 200}>
          <a 
            href="https://github.com/MhmdSaid212?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
          >
            View all projects on GitHub
            <FaGithub className="text-lg" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects