import React from 'react'
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'

const experiences = [
  {
    role: 'Full Stack Developer Intern',
    company: 'The Digital Hub UNRWA',
    location: 'Beirut, Hybrid',
    period: 'Jun 2026 – Sep 2026',
    points: [
      'Completed a full-stack and AI development internship focused on modern architecture and production-ready applications.',
      'Developed type-safe applications using React, Next.js, TypeScript, Zustand, and TanStack Query.',
      'Built scalable RESTful APIs using Node.js, Express.js, FastAPI, and Django REST Framework.',
      'Designed SQL and NoSQL databases with CRUD operations, validation, and efficient schemas.',
      'Implemented JWT authentication, RBAC, full-stack integration, and unit testing with Vitest.',
      'Applied SOLID, Clean Architecture, and Agile/Scrum practices using Git, GitHub, and Jira.',
      'Integrated AI-powered features into full-stack apps using LLMs and Cognitive APIs.',
      'Built, tested, documented, and deployed applications using Vercel and Render.'
    ],
    tags: ['React', 'Next.js', 'TypeScript', 'Node.js', 'FastAPI', 'Django', 'LLMs', 'Vitest']
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'IDS',
    location: 'Beirut, Online',
    period: 'May 2025 – Jul 2025',
    points: [
      'Implemented secure REST APIs with role-based access control (RBAC) for user management.',
      'Collaborated on system design architecture with senior engineers, gaining exposure to production-level practices.'
    ],
    tags: ['REST APIs', 'RBAC', 'System Design']
  }
]

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-indigo-600 mb-3 justify-center">
            <div className="w-6 h-0.5 bg-indigo-600 rounded-full"></div>
            Experience
            <div className="w-6 h-0.5 bg-indigo-600 rounded-full"></div>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Where I've Worked
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Hands-on full-stack and AI experience in production-style environments
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-indigo-100 ml-4 space-y-10">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8" data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center ring-4 ring-white">
                <FaBriefcase className="text-xs" />
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6 transition-all duration-200 hover:border-indigo-300 hover:shadow-md">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <h3 className="text-lg font-bold text-gray-900">{exp.role}</h3>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 text-indigo-600">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  <span className="font-semibold text-indigo-600">{exp.company}</span> · {exp.location}
                </p>

                <ul className="space-y-2 mb-5">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700 leading-relaxed">
                      <span className="text-indigo-500 mt-0.5">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Education */}
          <div className="relative pl-8" data-aos="fade-up" data-aos-delay="200">
            <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center ring-4 ring-white">
              <FaGraduationCap className="text-sm" />
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6 transition-all duration-200 hover:border-indigo-300 hover:shadow-md">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                <h3 className="text-lg font-bold text-gray-900">B.S. in Computer Science</h3>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-50 text-purple-600">
                  April 2025
                </span>
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-purple-600">Rafik Hariri University</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
