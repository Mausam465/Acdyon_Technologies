import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'

const navItems = [
  { label: 'Experiences', href: '#categories' },
  { label: 'Destinations', href: '#explorer' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Celebrate', href: '#celebrations' },
  { label: 'Book', href: '#booking' }
]

function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-5 flex justify-center">
      <div className="w-full max-w-7xl px-6 py-3 rounded-full border border-vista-border/60 bg-vista-black/50 backdrop-blur-xl flex items-center justify-between shadow-[0_12px_40px_rgba(0,0,0,0.8)]">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-display font-bold text-xl md:text-2xl tracking-[0.25em] text-vista-primary transition-colors duration-300 group-hover:text-emerald-400">
            VISTA
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] group-hover:animate-ping"></span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              className="relative px-4 py-2 text-xs md:text-sm text-vista-secondary font-sans font-medium tracking-wide transition-colors duration-300 hover:text-vista-primary"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === idx && (
                <motion.span
                  layoutId="navHover"
                  className="absolute inset-0 bg-white/5 rounded-full -z-10 border border-white/5"
                  transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                />
              )}
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button & Responsive Mobile Placeholder */}
        <div className="flex items-center gap-3">
          <a
            href="#booking"
            className="btn-premium hidden sm:inline-flex items-center gap-2 px-5 py-2 text-[10px] uppercase tracking-widest text-vista-primary border border-emerald-500/20 bg-emerald-500/10 rounded-full hover:bg-emerald-500/20 hover:border-emerald-500/50 hover:shadow-[0_0_25px_rgba(16,185,129,0.25)] transition-all duration-300"
          >
            <Calendar className="w-3.5 h-3.5 text-emerald-400" />
            <span>Reserve Experience</span>
          </a>

          {/* Mobile Menu Icon (Placeholder - Not implemented yet) */}
          <button 
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 text-vista-secondary hover:text-vista-primary transition-colors focus:outline-none"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

      </div>
    </header>
  )
}

export default Navbar
