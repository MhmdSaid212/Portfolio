import React from 'react'
import { 
  FaRocket, FaBrain, FaCode, FaSearch, FaHandshake, 
  FaChartLine, FaUsers, FaClock 
} from 'react-icons/fa'

const HireMe = () => {
  const reasons = [
    {
      icon: FaRocket,
      title: 'Modern Frontend Foundation',
      description: 'Strong command of React, modern JavaScript, and responsive design principles to build scalable, performant applications.',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      icon: FaBrain,
      title: 'Rapid Learner & Adaptable',
      description: 'Quick to master new technologies and frameworks. I see unfamiliar tools as opportunities, not obstacles, and stay current with industry trends.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: FaCode,
      title: 'Clean Code Advocate',
      description: 'Commitment to writing maintainable, well-documented, and testable code. I write components that the next developer will thank you for.',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: FaSearch,
      title: 'Problem-Solving Mindset',
      description: 'Methodical approach to debugging and performance optimization. I look for root causes, not just quick fixes, ensuring smooth user experiences.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: FaHandshake,
      title: 'Collaborative Team Player',
      description: 'Excellent communication skills and experience working in agile environments. I thrive in cross-functional teams and value diverse perspectives.',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: FaChartLine,
      title: 'Results-Driven',
      description: 'Focused on delivering business value through technical solutions. I prioritize features that matter most to users and stakeholders.',
      color: 'text-teal-600',
      bgColor: 'bg-teal-50'
    },
    {
      icon: FaUsers,
      title: 'Mentorship & Knowledge Sharing',
      description: 'Passionate about helping others grow. I believe strong teams are built on open communication and continuous learning.',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50'
    },
    {
      icon: FaClock,
      title: 'Reliable & Deadline-Driven',
      description: 'Consistent track record of meeting deadlines and delivering quality work. I take ownership of my tasks and communicate proactively.',
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
              data-aos-delay={idx * 100}
              className="group p-6 rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:border-indigo-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-lg ${reason.bgColor} flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110`}>
                <reason.icon className={`text-xl ${reason.color}`} />
              </div>
              
              {/* Title */}
              <h3 className="font-semibold text-gray-900 mb-2 text-base">
                {reason.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8" data-aos="fade-up" data-aos-delay={reasons.length * 100 + 200}>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Ready to discuss how I can contribute to your team?
          </h3>
          <p className="text-gray-600 mb-4">
            I'm actively looking for frontend and Fullstack developer roles where I can make an impact
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg" 
            data-aos="fade-up"
            data-aos-delay={reasons.length * 100 + 200}
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