import React from 'react'
import { 
  FaReact, FaGitAlt, FaUsers, FaPaintBrush, 
  FaMobileAlt, FaCode, FaBug, FaComments 
} from 'react-icons/fa'
import { SiTailwindcss, SiJavascript } from 'react-icons/si'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: FaReact,
      color: 'text-indigo-600',
      skills: [
        'Component-based architecture',
        'Responsive design',
        'State management (React Hooks)',
        'API integration'
      ]
    },
    {
      title: 'UI/UX & Design',
      icon: FaPaintBrush,
      color: 'text-purple-600',
      skills: [
        'Modern UI patterns',
        'Mobile-first design',
        'Accessibility basics',
        'Design systems'
      ]
    },
    {
      title: 'Development Practices',
      icon: FaCode,
      color: 'text-green-600',
      skills: [
        'Clean code principles',
        'Code reviews',
        'Version control (Git)',
        'Debugging & testing'
      ]
    },
    {
      title: 'Soft Skills',
      icon: FaUsers,
      color: 'text-orange-600',
      skills: [
        'Problem-solving',
        'Team collaboration',
        'Clear communication',
        'Continuous learning'
      ]
    }
  ]

  return (
    <section id="skills" className="py-24 px-6 bg-gray-50">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <div 
      key={idx}
      data-aos="dramatic-pop" data-aos-duration="800" data-aos-delay={category.skills.length * 80}
      className="bg-white rounded-xl border border-gray-200 p-6 transition-all duration-200 hover:border-indigo-300 hover:shadow-md"
    >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center">
                  <category.icon className={`text-xl ${category.color}`} />
                </div>
                <h3 className="font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>
              
              {/* Skills List */}
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
    {['TypeScript', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Jest', 'Webpack'].map((skill, idx) => (
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