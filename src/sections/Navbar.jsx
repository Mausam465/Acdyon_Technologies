import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Experiences', href: '#categories' },
  { label: 'Destinations', href: '#explorer' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Celebrate', href: '#celebrations' },
  { label: 'Book', href: '#booking' }
]

function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  // Prevent scroll when mobile menu is open to prevent double scrollbars / background scroll shifting
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-5 flex justify-center">
      <div className="w-full max-w-7xl relative">
        
        {/* Navbar Container */}
        <div className="w-full px-6 py-3 rounded-full border border-vista-border/60 bg-vista-black/50 backdrop-blur-xl flex items-center justify-between shadow-[0_12px_40px_rgba(0,0,0,0.8)]">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
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

          {/* Action Button & Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#booking"
              className="btn-premium hidden sm:inline-flex items-center gap-2 px-5 py-2 text-[10px] uppercase tracking-widest text-vista-primary border border-emerald-500/20 bg-emerald-500/10 rounded-full hover:bg-emerald-500/20 hover:border-emerald-500/50 hover:shadow-[0_0_25px_rgba(16,185,129,0.25)] transition-all duration-300"
            >
              <Calendar className="w-3.5 h-3.5 text-emerald-400" />
              <span>Reserve Experience</span>
            </a>

            {/* Mobile Menu Icon */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              className="md:hidden p-2 text-vista-secondary hover:text-vista-primary transition-colors focus:outline-none rounded-full hover:bg-white/5"
            >
              {isOpen ? (
                <X className="w-5 h-5 text-vista-primary animate-in fade-in zoom-in duration-200" />
              ) : (
                <Menu className="w-5 h-5 text-vista-secondary animate-in fade-in zoom-in duration-200" />
              )}
            </button>
          </div>

        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.95 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-full left-0 right-0 mt-3 p-6 rounded-premium border border-vista-border/80 bg-vista-black/90 backdrop-blur-2xl shadow-[0_24px_50px_rgba(0,0,0,0.9)] flex flex-col gap-4 z-40 md:hidden"
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item, idx) => (
                  <motion.a
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 text-sm text-vista-secondary font-sans font-medium tracking-wide rounded-lg hover:bg-white/5 hover:text-vista-primary transition-all duration-200"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="border-t border-vista-border/40 pt-4 px-4"
              >
                <a
                  href="#booking"
                  onClick={() => setIsOpen(false)}
                  className="btn-premium w-full flex items-center justify-center gap-2 px-5 py-3.5 text-[10px] uppercase tracking-widest text-vista-primary border border-emerald-500/20 bg-emerald-500/10 rounded-full hover:bg-emerald-500/20 hover:border-emerald-500/50 hover:shadow-[0_0_25px_rgba(16,185,129,0.25)] transition-all duration-300"
                >
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Reserve Experience</span>
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  )
}

export default Navbar
