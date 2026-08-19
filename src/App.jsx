import React from 'react'
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

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#F0F6FE] via-[#F8FAFC] to-[#E8F1FC] text-slate-900 flex flex-col selection:bg-blue-500/20 selection:text-blue-700">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <ExperienceCategories />
        <DestinationExplorer />
        <ExperienceConfigurator />
        <RoomExperience />
        <HowItWorks />
        <BookingSection />
        <CelebrationSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
