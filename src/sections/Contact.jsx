import React, { useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane, FaCheck, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Frontend-only: wire this to an API (or a service like EmailJS / Formspree) to send real messages
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setIsSubmitted(false), 4000)
  }

  const contactLinks = [
    {
      icon: FaGithub,
      label: 'github.com/MhmdSaid212',
      url: 'https://github.com/MhmdSaid212',
      color: 'text-gray-700 hover:text-gray-900'
    },
    {
      icon: FaLinkedin,
      label: 'linkedin.com/in/mohammadfsaid',
      url: 'https://www.linkedin.com/in/mohammadfsaid',
      color: 'text-blue-600 hover:text-blue-700'
    },
    {
      icon: FaEnvelope,
      label: 'mohmmadfadisaid@gmail.com',
      url: 'mailto:mohmmadfadisaid@gmail.com',
      color: 'text-red-600 hover:text-red-700'
    },
    {
      icon: FaPhone,
      label: '+961 71 554 237',
      url: 'tel:+96171554237',
      color: 'text-green-600 hover:text-green-700'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Saida, Lebanon',
      url: null,
      color: 'text-gray-700'
    }
  ]

  const rowClass = (color) =>
    `flex items-center gap-3 p-3 rounded-lg transition-all ${color} hover:bg-gray-50`

  return (
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-indigo-600 mb-3 justify-center">
            <div className="w-6 h-0.5 bg-indigo-600 rounded-full"></div>
            Get In Touch
            <div className="w-6 h-0.5 bg-indigo-600 rounded-full"></div>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Let's Connect
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            I'm actively looking for full stack developer roles. Let's discuss how I can contribute to your team
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4" data-aos="fade-up">
                Contact Information
              </h3>
              <div className="space-y-2">
                {contactLinks.map((link, idx) => (
                  <div
                    key={idx}
                    data-aos="fade-right"
                    data-aos-duration="600"
                    data-aos-delay={idx * 100}
                  >
                    {link.url ? (
                      <a
                        href={link.url}
                        target={link.url.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className={rowClass(link.color)}
                      >
                        <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center">
                          <link.icon className="text-indigo-600 text-lg" />
                        </div>
                        <span className="text-gray-700">{link.label}</span>
                      </a>
                    ) : (
                      <div className={rowClass(link.color)}>
                        <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center">
                          <link.icon className="text-indigo-600 text-lg" />
                        </div>
                        <span className="text-gray-700">{link.label}</span>
                      </div>
                    )}
                  </div>
                ))}

                {/* CV Download Link */}
                <div
                  data-aos="fade-right"
                  data-aos-duration="600"
                  data-aos-delay={contactLinks.length * 100}
                >
                  <a
                    href="/Mohammad_Said_CV.pdf"
                    download="Mohammad_Said_CV.pdf"
                    className="flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-gray-50 text-gray-700"
                  >
                    <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center">
                      <i className="fas fa-file-alt text-indigo-600 text-lg"></i>
                    </div>
                    <span>Download CV (PDF)</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white" data-aos="fade-up">
              <h3 className="text-lg font-semibold mb-2">
                Open for Opportunities
              </h3>
              <p className="text-indigo-100 text-sm leading-relaxed">
                I'm currently available for full stack roles, AI-integrated product work,
                internships, and freelance projects. Let's build something great together!
              </p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <FaCheck className="text-green-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-600">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div data-aos="fade-left" data-aos-duration="600" data-aos-delay="100">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                    placeholder="Your name"
                  />
                </div>

                <div data-aos="fade-left" data-aos-duration="600" data-aos-delay="200">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>

                <div data-aos="fade-left" data-aos-duration="600" data-aos-delay="300">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition resize-none"
                    placeholder="Tell me about your opportunity..."
                  ></textarea>
                </div>

                <div data-aos="fade-left" data-aos-duration="600" data-aos-delay="400">
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-2"
                  >
                    <FaPaperPlane className="text-sm" />
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
