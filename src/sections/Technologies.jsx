import React from 'react'
import TechBadge from '../assets/TechBadge'

const Technologies = () => {
  const technologies = [
    'HTML5', 'CSS3', 'JavaScript', 'React',
    'Tailwind CSS', 'Bootstrap', 'Git', 'GitHub',
    'VS Code', 'Figma'
  ]

  return (
    <section id="technologies" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-indigo-600 mb-3 justify-center">
            <div className="w-6 h-0.5 bg-indigo-600 rounded-full"></div>
            Tech Stack
            <div className="w-6 h-0.5 bg-indigo-600 rounded-full"></div>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Technologies & Tools
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            The tools and frameworks I use daily to build modern web applications
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {technologies.map((tech, index) => (
            <div key={tech} data-aos="dramatic-pop" data-aos-duration="800" data-aos-delay={index * 80}>
              <TechBadge name={tech} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies