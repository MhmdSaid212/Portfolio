import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Section Header */}
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-indigo-600 mb-3" data-aos="fade-up">
              <div className="w-6 h-0.5 bg-indigo-600 rounded-full"></div>
              About Me
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight" data-aos="fade-up" data-aos-delay="100">
              From polished interfaces to{' '}
              <span className="text-indigo-600">intelligent systems</span>
            </h2>
          </div>
          
          {/* Right Column - Content */}
          <div className="space-y-5">
            <p className="text-gray-700 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
              I'm a Full Stack Developer specializing in React, with hands-on experience
              building scalable web applications and AI-integrated platforms. I hold a
              B.S. in Computer Science from Rafik Hariri University and have worked across
              the whole stack, from e-commerce systems to intelligent dashboards and
              automation tools.
            </p>
            <p className="text-gray-700 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
              Most recently I completed a full-stack and AI internship at The Digital Hub
              (UNRWA), where I built type-safe applications with React, Next.js and
              TypeScript, designed REST APIs with Node.js, FastAPI and Django, and shipped
              LLM-powered features to production. Before that, I built secure REST APIs with
              role-based access control at IDS.
            </p>
            <p className="text-gray-700 leading-relaxed" data-aos="fade-up" data-aos-delay="300">
              I care about clean architecture, testing, and delivering real-world solutions.
              I apply SOLID principles, write unit tests, and work in Agile teams. I'm also
              deeply interested in prompt engineering and AI agents, and in making AI genuinely
              useful inside real products.
            </p>
            
            <div className="pt-4">
              <div className="flex gap-2">
                <div className="w-44 h-0.5 bg-indigo-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
