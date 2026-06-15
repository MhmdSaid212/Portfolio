import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 800,      // Animation duration in ms
  once: true,         // Whether animation should happen only once
  offset: 100,        // Offset (in px) from the original trigger point
  easing: 'ease-out', // Default easing function
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)