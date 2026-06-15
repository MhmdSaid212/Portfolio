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
              Turning ideas into{' '}
              <span className="text-indigo-600">working interfaces</span>
            </h2>
          </div>
          
          {/* Right Column - Content */}
          <div className="space-y-5">
            <p className="text-gray-700 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
              I'm a passionate Frontend Developer with a strong foundation in modern web technologies. 
              My journey began with a curiosity about how websites work, which quickly evolved into 
              a deep passion for creating engaging user experiences.
            </p>
            <p className="text-gray-700 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
              Over the past two years, I've dedicated myself to mastering React and its ecosystem, 
              building responsive applications that prioritize both aesthetics and functionality. 
              I believe great design and clean code go hand in hand.
            </p>
            <p className="text-gray-700 leading-relaxed" data-aos="fade-up" data-aos-delay="300">
              I'm focused on becoming a full-stack developer while continuing to deepen my frontend 
              expertise. I thrive in collaborative environments and am always eager to learn new 
              technologies and best practices. My goal is to build web applications that are 
              accessible, performant, and a joy to use.
            </p>
            
            {/* Optional: Small decorative element */}
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