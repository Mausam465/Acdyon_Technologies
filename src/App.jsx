import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
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
    <div className="min-h-screen bg-vista-dark text-white flex flex-col selection:bg-emerald-500/30 selection:text-emerald-300">
      <Navbar />
      <main className="flex-grow">
        <Hero />
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
