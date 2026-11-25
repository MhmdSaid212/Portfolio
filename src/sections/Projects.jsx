import React from 'react'
import { FaGithub } from 'react-icons/fa'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  // NOTE: add a `liveUrl` to any project once it has a real deployed demo.
  const projects = [
    {
      title: 'SAWT: AI Speech Therapy Companion',
      badge: 'AI',
      description:
        'A website where children practice pronunciation in Arabic and English between professional therapy sessions. Uses phoneme-level pronunciation analysis with Whisper and wav2vec 2.0 to detect pronunciation errors and give feedback.',
      technologies: ['React', 'Whisper', 'wav2vec 2.0', 'Python', 'LLMs'],
      githubUrl: 'https://github.com/MhmdSaid212' // TODO: replace with the SAWT repo link
    },
    {
      title: 'Smart Screen Assistant',
      badge: 'AI',
      description:
        "An AI-powered desktop assistant that analyzes the user's screen in real time and answers contextual questions about what is currently displayed.",
      technologies: ['React', 'Gemini API', 'Computer Vision', 'Electron', 'Tailwind CSS'],
      githubUrl: 'https://github.com/MhmdSaid212/smart-screen-assistant.git'
    },
    {
      title: 'Real-Time Communication Platform',
      description:
        'A full-featured chat platform supporting messaging, media sharing, stories, and peer-to-peer voice calls. Includes authentication, live updates, message reactions and replies, voice messages, 24-hour stories, and user presence.',
      technologies: ['React', 'Firebase', 'WebRTC', 'Tailwind CSS'],
      githubUrl: 'https://github.com/MhmdSaid212/React-Chat-App.git'
    },
    {
      title: 'Smart Meeting Room',
      description:
        'A room booking and meeting platform with automated Minutes of Meeting generation. Reduced scheduling conflicts by letting teams manage meeting logistics, with role-based access for admins to manage rooms, attendees, and bookings.',
      technologies: ['React', 'Tailwind CSS', 'Laravel', 'MySQL', 'RESTful APIs', 'RBAC'],
      githubUrl: 'https://github.com/MhmdSaid212/Smart-Meeting-Room.git'
    },
    {
      title: 'Services Website',
      description:
        'A pixel-perfect front-end implementation of a Figma design using React and custom CSS. Built with reusable components, component-specific CSS, and a fully responsive layout including a hamburger menu for mobile.',
      technologies: ['React', 'CSS (No Frameworks)', 'Figma'],
      githubUrl: 'https://github.com/MhmdSaid212/figma-implementation'
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
            Full-stack and AI-powered applications I've built to solve real problems
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const isLonelyLast = index === projects.length - 1 && projects.length % 2 === 1
            return (
              <div
                key={index}
                data-aos="dramatic-pop"
                data-aos-duration="800"
                data-aos-delay={(index % 2) * 100}
                className={isLonelyLast ? 'md:col-span-2 md:max-w-xl md:mx-auto w-full' : ''}
              >
                <ProjectCard {...project} />
              </div>
            )
          })}
        </div>

        {/* View More Link */}
        <div className="text-center mt-12" data-aos="fade-up">
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
