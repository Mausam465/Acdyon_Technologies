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
    <section id="room-preview" className="w-full py-24 px-6 max-w-7xl mx-auto border-b border-slate-200/60">

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
      <div className="w-full h-[500px] sm:h-[550px] rounded-[2.5rem] overflow-hidden relative shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-slate-200/50 bg-[#020408]">

        {/* The Environment Projection (Curved Wall Effect) */}
        <div className="absolute inset-0 bg-[#020408]">
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
        </div>

        {/* Top Left: Live Status Indicator */}
        <div className="absolute top-6 left-6 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping absolute" />
          <span className="w-2 h-2 rounded-full bg-emerald-500 relative" />
          <span className="font-technical text-[9px] uppercase tracking-[0.15em] text-white font-bold ml-1">
            Chamber Active
          </span>
        </div>

        {/* Top Right: Experience Mode Controls */}
        <div className="absolute top-6 right-6 z-10 flex items-center gap-2 p-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 shadow-lg">
          {activeRoom.envModes.map((mode) => (
            <button
              key={mode}
              onClick={() => setActiveMode(mode)}
              className={`px-4 py-1.5 rounded-full text-[10px] font-technical uppercase font-bold tracking-wider transition-all duration-300 ${
                activeMode === mode ? 'bg-vista-blue text-white' : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>

        {/* Bottom Overlays Container */}
        <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row gap-4 items-end justify-between z-10">

          {/* Bottom Left: Destination Info */}
          <div className="w-full md:w-5/12 p-6 rounded-3xl bg-black/40 backdrop-blur-md border border-white/10 shadow-2xl">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
              {activeRoom.title}
            </h3>
            <p className="text-sm font-sans text-slate-300 leading-relaxed">
              {activeRoom.description}
            </p>
          </div>

          {/* Bottom Right: Environment Telemetry */}
          <div className="w-full md:w-auto p-6 rounded-3xl bg-black/40 backdrop-blur-md border border-white/10 shadow-2xl flex flex-col gap-4 min-w-[300px]">
            <span className="font-technical text-[10px] uppercase tracking-widest text-slate-400 font-semibold border-b border-white/10 pb-2">
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
