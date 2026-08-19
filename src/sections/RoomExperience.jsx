import React, { useState, useEffect } from 'react'
import { Thermometer, Wind, Music, Eye, Droplets } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { exploreExperiences } from '../data/exploreExperiences'

function RoomExperience() {
  const [currentRoomIndex, setCurrentRoomIndex] = useState(0)

  // Use destination data dynamically
  const previewRooms = exploreExperiences.map(exp => ({
    title: exp.title,
    description: exp.description,
    image: exp.visualAsset,
    telemetry: {
      climate: exp.environment.climate,
      scent: exp.environment.scent,
      audio: exp.environment.audio
    },
    envModes: exp.envModes || ['Standard']
  }))

  const activeRoom = previewRooms[currentRoomIndex]
  const [activeMode, setActiveMode] = useState(activeRoom.envModes[0])

  useEffect(() => {
    setActiveMode(activeRoom.envModes[0])
  }, [currentRoomIndex, activeRoom.envModes])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoomIndex((prev) => (prev + 1) % previewRooms.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [previewRooms.length])

  return (
    <section id="room-preview" className="w-full py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto border-b border-slate-200/60">

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#061022] mt-2">
            <span className="relative inline-block">
              Immersive
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-600 rounded-full"></span>
            </span>{' '}
            <span className='text-blue-600'>Chamber Preview</span>
          </h2>
          <p className="text-black text-lg font-sans mt-2 max-w-xl leading-relaxed font-bold">
            Step inside the simulation. This live preview visualizes the environment currently active inside the VISTA sensory chamber.
          </p>
        </div>
      </div>

      {/* The Physical Room Container */}
      <div className="w-full flex flex-col md:block md:h-[550px] rounded-3xl md:rounded-[2.5rem] overflow-hidden relative shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-slate-200/50 bg-[#020408]">

        {/* The Environment Projection (Curved Wall Effect) */}
        <div className="relative h-[260px] md:h-auto md:absolute md:inset-0 bg-[#020408]">
          <AnimatePresence>
            <motion.img
              key={currentRoomIndex}
              src={activeRoom.image}
              alt={`${activeRoom.title} view`}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          {/* Gradients to simulate physical room depth and corners */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-transparent to-[#020408]/40 mix-blend-multiply pointer-events-none z-0" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020408]/60 via-transparent to-[#020408]/60 pointer-events-none z-0" />

        {/* Top Left: Live Status Indicator */}
        <div className="absolute top-4 md:top-6 left-4 md:left-6 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping absolute" />
          <span className="w-2 h-2 rounded-full bg-emerald-500 relative" />
          <span className="font-technical text-[8px] md:text-[9px] uppercase tracking-[0.15em] text-white font-bold ml-1">
            Chamber Active
          </span>
        </div>

        {/* Bottom Right on mobile / Top Right on desktop: Experience Mode Controls */}
        <div className="absolute bottom-4 right-4 md:bottom-auto md:top-6 md:right-6 z-10 flex overflow-x-auto max-w-[90%] md:max-w-none scrollbar-hide items-center gap-1 md:gap-2 p-1 md:p-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 shadow-lg">
          {activeRoom.envModes.map((mode) => (
            <button
              key={mode}
              onClick={() => setActiveMode(mode)}
              className={`px-3 md:px-4 py-1.5 rounded-full text-[9px] md:text-[10px] font-technical uppercase font-bold tracking-wider transition-all duration-300 whitespace-nowrap ${
                activeMode === mode ? 'bg-vista-blue text-white' : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
        
        </div> {/* End of Image Container */}

        {/* Bottom Overlays Container */}
        <div className="relative p-5 md:p-0 md:absolute md:bottom-6 md:left-6 md:right-6 flex flex-col md:flex-row gap-4 items-stretch md:items-end justify-between z-10 bg-[#020408] md:bg-transparent">

          {/* Bottom Left: Destination Info */}
          <div className="w-full md:w-5/12 p-5 md:p-6 rounded-2xl md:rounded-3xl bg-white/5 md:bg-black/40 backdrop-blur-md border border-white/10 shadow-none md:shadow-2xl">
            <h3 className="font-display text-xl sm:text-3xl font-bold text-white mb-2">
              {activeRoom.title}
            </h3>
            <p className="text-xs md:text-sm font-sans text-slate-300 leading-relaxed">
              {activeRoom.description}
            </p>
          </div>

          {/* Bottom Right: Environment Telemetry */}
          <div className="w-full md:w-auto p-5 md:p-6 rounded-2xl md:rounded-3xl bg-white/5 md:bg-black/40 backdrop-blur-md border border-white/10 shadow-none md:shadow-2xl flex flex-col gap-4 min-w-[280px] md:min-w-[300px]">
            <span className="font-technical text-[9px] md:text-[10px] uppercase tracking-widest text-slate-400 font-semibold border-b border-white/10 pb-2">
              Environmental Systems
            </span>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white/10 text-teal-400">
                  <Thermometer className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[9px] font-technical uppercase tracking-wider text-slate-400">Climate Control</span>
                  <span className="block text-sm font-semibold text-white font-sans">{activeRoom.telemetry.climate}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white/10 text-pink-400">
                  <Droplets className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[9px] font-technical uppercase tracking-wider text-slate-400">Aroma Dispersion</span>
                  <span className="block text-sm font-semibold text-white font-sans">{activeRoom.telemetry.scent}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white/10 text-indigo-400">
                  <Music className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[9px] font-technical uppercase tracking-wider text-slate-400">Acoustic Field</span>
                  <span className="block text-sm font-semibold text-white font-sans">{activeRoom.telemetry.audio}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default RoomExperience
