import React from 'react'
import { FaHeart, FaArrowUp } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4" >
          {/* Copyright */}
          <div className="text-sm text-center md:text-left">
            © {currentYear} Mohammad Said. All rights reserved.
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-indigo-400 transition-colors"
          >
            <FaArrowUp className="text-sm" />
            Back to Top
          </button>

          {/* Built with love */}
          <div className="text-xs flex items-center gap-1">
            Built with React & Tailwind CSS
            <FaHeart className="text-red-500 text-xs ml-1 animate-pulse" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer