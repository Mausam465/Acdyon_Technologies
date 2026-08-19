import React, { useState, useEffect } from 'react'
import { Thermometer, Wind, Music, Eye, Droplets } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

function RoomExperience() {
  const [currentRoomIndex, setCurrentRoomIndex] = useState(0)

  // Hardcoded preview rooms to cycle through
  const previewRooms = [
    {
      title: 'Deep Forest',
      description: 'Deep green pine forest canopy, woodland birds singing, earthy damp soil scent, and light moisture mist.',
      image: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=80',
      telemetry: { climate: '18°C, Cool & Misty', scent: 'Pine & Petrichor', audio: 'Ambient Surround' }
    },
    {
      title: 'Korea Spring',
      description: 'Soft pink cherry blossom petals falling gently around you with a mild spring breeze and sweet floral scent.',
      image: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=1200&q=80',
      telemetry: { climate: '22°C, Spring Breeze', scent: 'Cherry Blossom & Greenery', audio: 'Gentle Wind & Strings' }
    },
    {
      title: 'Manali Mountains',
      description: 'Crisp alpine winds, surrounding snowy peak projections, and panoramic soundscapes at the top of the Himalayas.',
      image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80',
      telemetry: { climate: '5°C, Cold & Fresh', scent: 'Pine & Crisp Ozone', audio: 'Howling Wind' }
    }
  ]

  const activeRoom = previewRooms[currentRoomIndex]

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
          <span className="font-technical text-[10px] uppercase tracking-[0.2em] text-slate-400 font-semibold">
            Live Telemetry
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#061022] mt-2">
            Immersive Chamber Preview
          </h2>
          <p className="text-slate-600 text-sm font-sans mt-2 max-w-xl leading-relaxed">
            Step inside the simulation. This live preview visualizes the environment currently active inside the VISTA sensory chamber.
          </p>
        </div>
      </div>

      {/* The Physical Room Container */}
      <div className="w-full h-[600px] sm:h-[700px] rounded-[2.5rem] overflow-hidden relative shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-slate-200/50 bg-[#020408]">
        
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
