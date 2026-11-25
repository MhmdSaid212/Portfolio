import React from 'react'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16 px-6 bg-gradient-to-br from-gray-50 via-white to-indigo-50/30">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div data-aos="fade-right" data-aos-duration="1000">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Open to opportunities
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-4">
              Hi, I'm{' '}
              <span className="relative inline-block text-indigo-600">
                Mohammad Said
                <svg
                  className="absolute -bottom-3 left-0 w-full h-4"
                  viewBox="0 0 350 12"
                  fill="none"
                  preserveAspectRatio="none"
                  style={{ overflow: 'visible' }}
                >
                  <path
                    id="squigglePath"
                    d="M2 8 Q30 2 58 8 Q86 14 114 8 Q142 2 170 8 Q198 14 226 8 Q254 2 282 8 Q310 14 338 8"
                    stroke="#818CF8"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                    className="squiggle-path"
                    style={{
                      strokeDasharray: 450,
                      strokeDashoffset: 450,
                      animation: 'drawSquiggle 1s ease-out 0.4s forwards'
                    }}
                  />
                </svg>
              </span>
            </h1>

            <p className="text-2xl sm:text-3xl text-gray-700 mb-4 font-semibold">
              Full Stack Web Developer
            </p>

            <p className="text-gray-600 leading-relaxed mb-8 max-w-md">
              I build scalable web applications and AI-integrated platforms, from React
              frontends and Node.js APIs to LLM-powered features. Focused on shipping
              real-world solutions that work in production.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg"
              >
                View Projects →
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg border-2 border-indigo-600 hover:bg-indigo-50 transition-all"
              >
                Contact Me
              </button>
              <a
                href="/Mohammad_Said_CV.pdf"
                download="Mohammad_Said_CV.pdf"
                className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg border-2 border-gray-300 hover:bg-gray-200 hover:border-gray-400 transition-all inline-flex items-center gap-2"
              >
                <i className="fas fa-download"></i>
                Download CV
              </a>
            </div>
          </div>

          {/* Right Column - Avatar */}
          <div className="flex flex-col items-center gap-6" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-xl ring-4 ring-indigo-100">
              <span className="font-display font-extrabold text-4xl text-white">
                MS
              </span>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl px-8 py-4 text-center shadow-sm">
              <div className="font-semibold text-gray-900 mb-1">
                Full Stack Developer
              </div>
              <div className="text-sm text-gray-500">
                React · Node.js · TypeScript · AI
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes drawSquiggle {
          to {
            stroke-dashoffset: 0;
          }
        }
        .squiggle-path {
          stroke-dasharray: 450;
          stroke-dashoffset: 450;
          animation: drawSquiggle 1s ease-out 0.4s forwards;
        }
      `}</style>
    </section>
  )
}

export default Hero
