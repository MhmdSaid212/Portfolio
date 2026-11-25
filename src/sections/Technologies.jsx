import React from 'react'
import TechBadge from '../assets/TechBadge'

const groups = [
  {
    label: 'Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Zustand', 'TanStack Query']
  },
  {
    label: 'Backend & APIs',
    items: ['Node.js', 'Express.js', 'Python', 'FastAPI', 'Django', 'Laravel', 'REST APIs', 'JWT & RBAC']
  },
  {
    label: 'Databases',
    items: ['SQL', 'MySQL', 'PostgreSQL', 'MongoDB', 'Firebase']
  },
  {
    label: 'AI',
    items: ['LLMs & APIs', 'Prompt Engineering']
  },
  {
    label: 'Testing, DevOps & Tools',
    items: ['Unit Testing', 'Jest', 'Git', 'GitHub', 'GitHub Actions', 'Vercel', 'VS Code', 'Figma']
  }
]

const Technologies = () => {
  return (
    <section id="technologies" className="py-24 px-6 bg-gray-50">
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
            The full-stack toolkit I use to design, build, test and ship modern applications
          </p>
        </div>

        <div className="space-y-10">
          {groups.map((group) => (
            <div key={group.label}>
              <h3 className="text-sm font-semibold text-gray-500 mb-4" data-aos="fade-up">
                {group.label}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                {group.items.map((tech, index) => (
                  <div key={tech} data-aos="dramatic-pop" data-aos-duration="800" data-aos-delay={index * 60}>
                    <TechBadge name={tech} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies
