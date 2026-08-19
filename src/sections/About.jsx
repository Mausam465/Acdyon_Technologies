import React, { useState } from 'react'
import { Clock, Building2, DoorOpen, Sparkles, Fan, Volume2, CloudRain } from 'lucide-react'
import lobbyImage from '../assets/vista_center_lobby.jpg'

const steps = [
  {
    num: '01',
    title: 'Reserve Online',
    desc: 'Select a customized sensory preset (like Pine Forest or Cosmic Date) and book your time slot.',
    icon: Clock,
    color: 'text-blue-600 bg-blue-50 border-blue-100'
  },
  {
    num: '02',
    title: 'Arrive at the Center',
    desc: 'Check in at our premium facility lobby and receive your contactless access wristband.',
    icon: Building2,
    color: 'text-indigo-600 bg-indigo-50 border-indigo-100'
  },
  {
    num: '03',
    title: 'Enter Your Chamber',
    desc: 'Step into your private, architecturally tailored room equipped with environmental control arrays.',
    icon: DoorOpen,
    color: 'text-teal-600 bg-teal-50 border-teal-100'
  },
  {
    num: '04',
    title: 'Immerse Your Senses',
    desc: 'Lay back as the suite coordinates visuals, spatial acoustics, scents, and climate to transport you.',
    icon: Sparkles,
    color: 'text-amber-600 bg-amber-50 border-amber-100'
  }
]

function About() {
  const [hoveredStep, setHoveredStep] = useState(null)

  return (
    <section id="about" className="w-full py-16 md:py-20 px-4 md:px-6 max-w-7xl mx-auto border-b border-slate-200/60 scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* Left Column: Descriptive Content & Step List */}
        <div className="lg:col-span-7 space-y-8">

          {/* Header */}
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 text-[9px] font-technical uppercase font-bold tracking-widest bg-blue-500/10 text-vista-blue rounded-full">
              Physical Experience Space
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#061022] leading-tight">
              A physical sanctuary. <br />
              <span className="text-vista-blue">Endless sensory realities.</span>
            </h2>
            <p className="text-black text-base sm:text-lg font-sans leading-relaxed max-w-2xl">
              VISTA is not virtual reality. It is a state-of-the-art physical experience center designed to transport you without headsets. We recreate worlds inside specialized chambers through synchronized sight, sound, scent, climate, and breeze.
            </p>
          </div>

          {/* Staggered Step Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            {steps.map((step) => {
              const IconComp = step.icon
              const isHovered = hoveredStep === step.num
              const isAnyHovered = hoveredStep !== null
              const isDimmed = isAnyHovered && !isHovered

              return (
                <div
                  key={step.num}
                  onMouseEnter={() => setHoveredStep(step.num)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className={`flex gap-4 p-5 rounded-2xl border transition-all duration-300 ${isHovered
                    ? '-translate-y-1.5 bg-white border-slate-200 shadow-[0_15px_30px_rgba(11,82,214,0.06)] opacity-100 scale-[1.015]'
                    : isDimmed
                      ? 'bg-white/30 border-slate-100/50 opacity-40 scale-[0.98] blur-[0.3px]'
                      : 'bg-white/50 border-slate-100 opacity-90 scale-100'
                    }`}
                >
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl border flex items-center justify-center ${step.color} transition-all duration-300 ${isHovered ? 'scale-110 shadow-sm border-transparent' : 'scale-100'
                    }`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 transition-all duration-300">
                    <div className="flex items-center gap-2">
                      <span className={`font-technical text-[10px] font-bold transition-colors duration-300 ${isHovered ? 'text-vista-blue' : 'text-slate-400'
                        }`}>
                        {step.num}
                      </span>
                      <h3 className={`font-display font-semibold text-base transition-colors duration-300 ${isHovered ? 'text-vista-blue font-bold' : 'text-[#061022]'
                        }`}>
                        {step.title}
                      </h3>
                    </div>
                    <p className={`text-xs font-sans leading-relaxed transition-colors duration-300 ${isHovered ? 'text-black font-bold' : 'text-black'
                      }`}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Right Column: Premium Visual & Technology HUD Card */}
        <div className="lg:col-span-5 relative">

          {/* Card Outer glow decoration */}
          <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-tr from-blue-500/10 to-teal-500/10 blur-xl pointer-events-none -z-10"></div>

          <div className="relative rounded-[2rem] overflow-hidden border border-slate-200/80 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.04)]">

            {/* Main Center Image */}
            <div className="h-[350px] sm:h-[450px] w-full relative overflow-hidden">
              <img
                src={lobbyImage}
                alt="VISTA Immersive Experience Center Lobby"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Soft overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
            </div>

            {/* Chamber HUD Status Panel Overlay (Floating glass card) */}
            <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl border border-white/20 bg-slate-900/85 backdrop-blur-md shadow-lg text-white space-y-3 z-10">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="font-technical text-[9px] uppercase tracking-wider text-slate-300 font-bold">
                  Active Chamber Telemetry
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                  <span className="font-technical text-[8px] uppercase tracking-widest text-emerald-400 font-bold">
                    Online
                  </span>
                </span>
              </div>

              {/* Status parameters */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-lg bg-white/5 border border-white/5 space-y-0.5">
                  <div className="flex justify-center text-teal-400">
                    <Fan className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '3s' }} />
                  </div>
                  <span className="block text-[8px] text-slate-400 font-sans">
                    CLIMATE
                  </span>
                  <span className="block text-[10px] font-technical font-semibold">
                    72°F / 45%
                  </span>
                </div>

                <div className="p-2 rounded-lg bg-white/5 border border-white/5 space-y-0.5">
                  <div className="flex justify-center text-blue-400">
                    <Volume2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="block text-[8px] text-slate-400 font-sans">
                    ACOUSTICS
                  </span>
                  <span className="block text-[10px] font-technical font-semibold">
                    Spatial 7.1
                  </span>
                </div>

                <div className="p-2 rounded-lg bg-white/5 border border-white/5 space-y-0.5">
                  <div className="flex justify-center text-amber-400">
                    <CloudRain className="w-3.5 h-3.5" />
                  </div>
                  <span className="block text-[8px] text-slate-400 font-sans">
                    SCENT/MIST
                  </span>
                  <span className="block text-[10px] font-technical font-semibold">
                    Pine Bark
                  </span>
                </div>
              </div>
            </div>

            {/* Float details pill */}
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full border border-white/10 bg-slate-950/50 backdrop-blur-md text-white font-technical text-[8px] uppercase tracking-widest">
              Lobby & Chamber Suites
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default About
