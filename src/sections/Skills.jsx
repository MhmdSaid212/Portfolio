import React from 'react'
import {
  FaReact, FaServer, FaDatabase, FaRobot, FaVial, FaCodeBranch
} from 'react-icons/fa'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: FaReact,
      color: 'text-indigo-600',
      skills: [
        'React, Next.js & TypeScript',
        'Zustand & TanStack Query',
        'Responsive, mobile-first design',
        'SSR, CSR, SSG & Core Web Vitals'
      ]
    },
    {
      title: 'Backend & APIs',
      icon: FaServer,
      color: 'text-green-600',
      skills: [
        'Node.js & Express.js',
        'FastAPI, Django REST & Laravel',
        'RESTful API design',
        'JWT auth, RBAC & secure cookies'
      ]
    },
    {
      title: 'Databases',
      icon: FaDatabase,
      color: 'text-orange-600',
      skills: [
        'SQL: MySQL & PostgreSQL',
        'NoSQL: MongoDB & Mongoose',
        'Schema design & validation',
        'CRUD & efficient queries'
      ]
    },
    {
      title: 'AI & Prompt Engineering',
      icon: FaRobot,
      color: 'text-purple-600',
      skills: [
        'LLM & AI API integration',
        'Prompt engineering',
        'RAG pipelines & AI agents',
        'Speech & vision models'
      ]
    },
    {
      title: 'Testing & Quality',
      icon: FaVial,
      color: 'text-red-600',
      skills: [
        'Unit & integration testing',
        'Vitest & Jest',
        'Debugging & code reviews',
        'Clean code principles'
      ]
    },
    {
      title: 'Architecture & DevOps',
      icon: FaCodeBranch,
      color: 'text-teal-600',
      skills: [
        'Clean Architecture & SOLID',
        'Design patterns & scalable design',
        'Git, GitHub Actions & CI/CD',
        'Deployment on Vercel & Render'
      ]
    }
  ]

  return (
    <section id="skills" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-indigo-600 mb-3 justify-center">
            <div className="w-6 h-0.5 bg-indigo-600 rounded-full"></div>
            Expertise
            <div className="w-6 h-0.5 bg-indigo-600 rounded-full"></div>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Skills & Strengths
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Technical and professional strengths I bring to every project
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx}
              data-aos="dramatic-pop"
              data-aos-duration="800"
              data-aos-delay={(idx % 3) * 100}
              className="bg-white rounded-xl border border-gray-200 p-6 transition-all duration-200 hover:border-indigo-300 hover:shadow-md"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center">
                  <category.icon className={`text-xl ${category.color}`} />
                </div>
                <h3 className="font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-indigo-500 mt-1">✓</span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Badges */}
        <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="400">
          <p className="text-sm text-gray-600 mb-4">Also experienced with:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Firebase', 'WebRTC', 'Mongoose', 'Agile/Scrum', 'Jira', 'Pull Requests', 'Cognitive APIs', 'Whisper', 'wav2vec 2.0'].map((skill, idx) => (
              <span
                key={skill}
                data-aos="zoom-in"
                data-aos-duration="400"
                data-aos-delay={400 + (idx * 50)}
                className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
