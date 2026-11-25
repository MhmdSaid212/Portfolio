import React from 'react'
import {
  FaLayerGroup, FaRobot, FaCode, FaVial, FaHandshake,
  FaLock, FaSitemap, FaClock
} from 'react-icons/fa'

const HireMe = () => {
  const reasons = [
    {
      icon: FaLayerGroup,
      title: 'True Full Stack',
      description: 'I work across the stack: React, Next.js and TypeScript on the front, Node.js, FastAPI, Django and Laravel on the back, with SQL and NoSQL databases underneath.',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      icon: FaRobot,
      title: 'AI-Ready Developer',
      description: 'Experience integrating LLMs and AI APIs into real products, plus prompt engineering, RAG, and agent-style workflows that go beyond a demo.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: FaCode,
      title: 'Clean Architecture',
      description: 'I apply SOLID principles, Clean Architecture, and design patterns so codebases stay maintainable as they grow.',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: FaVial,
      title: 'Test-Driven Quality',
      description: 'Unit and integration testing with Vitest and Jest, plus CI/CD through GitHub Actions, to catch problems before users do.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: FaLock,
      title: 'Security Minded',
      description: 'JWT authentication, role-based access control, secure cookies, and validated inputs are part of how I build APIs from day one.',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: FaSitemap,
      title: 'System Design Exposure',
      description: 'I have collaborated with senior engineers on system design and production-level practices, from schema design to deployment.',
      color: 'text-teal-600',
      bgColor: 'bg-teal-50'
    },
    {
      icon: FaHandshake,
      title: 'Agile Team Player',
      description: 'Comfortable with Scrum, Git workflows, pull requests, and Jira. I communicate clearly and thrive in cross-functional teams.',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50'
    },
    {
      icon: FaClock,
      title: 'Ships & Learns Fast',
      description: 'I build, test, document, and deploy on Vercel and Render, and pick up new tools quickly when a project needs them.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    }
  ]

  return (
    <section id="hire-me" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-indigo-600 mb-3 justify-center">
            <div className="w-6 h-0.5 bg-indigo-600 rounded-full"></div>
            Value Proposition
            <div className="w-6 h-0.5 bg-indigo-600 rounded-full"></div>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Why Companies Should Hire Me
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            The value and dedication I bring to every development team
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <div 
              key={idx}
              data-aos="dramatic-pop"
              data-aos-duration="800"
              data-aos-delay={(idx % 4) * 100}
              className="group p-6 rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:border-indigo-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-lg ${reason.bgColor} flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110`}>
                <reason.icon className={`text-xl ${reason.color}`} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-base">
                {reason.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8" data-aos="fade-up">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Ready to discuss how I can contribute to your team?
          </h3>
          <p className="text-gray-600 mb-4">
            I'm actively looking for full stack and AI-focused developer roles where I can make an impact
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg" 
          >
            Get in Touch
            <FaHandshake className="text-sm" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default HireMe
