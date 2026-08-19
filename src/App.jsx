import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import ExperienceCategories from './sections/ExperienceCategories'
import DestinationExplorer from './sections/DestinationExplorer'
import ExperienceConfigurator from './sections/ExperienceConfigurator'
import RoomExperience from './sections/RoomExperience'
import HowItWorks from './sections/HowItWorks'
import BookingSection from './sections/BookingSection'
import CelebrationSection from './sections/CelebrationSection'
import FinalCTA from './sections/FinalCTA'
import Footer from './sections/Footer'

function SectionReveal({ children }) {
  const shouldReduceMotion = useReducedMotion()
  
  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#F0F6FE] via-[#F8FAFC] to-[#E8F1FC] text-slate-900 flex flex-col selection:bg-blue-500/20 selection:text-blue-700">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <SectionReveal><About /></SectionReveal>
        <SectionReveal><HowItWorks /></SectionReveal>
        <SectionReveal><ExperienceCategories /></SectionReveal>
        <SectionReveal><DestinationExplorer /></SectionReveal>
        <SectionReveal><ExperienceConfigurator /></SectionReveal>
        <SectionReveal><RoomExperience /></SectionReveal>
        <SectionReveal><BookingSection /></SectionReveal>
        <SectionReveal><CelebrationSection /></SectionReveal>
        <SectionReveal><FinalCTA /></SectionReveal>
      </main>
      <Footer />
    </div>
  )
}

export default App
