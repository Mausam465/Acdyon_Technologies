import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Compass, Calendar } from 'lucide-react'

import heroImage from '../assets/vista_hero_room.png'
import celebrateDate from '../assets/celebrate_date.png'
import celebrateBday from '../assets/celebrate_bday.png'
import celebrateAnniversary from '../assets/celebrate_anniversary.png'
import celebrateGoodtime from '../assets/celebrate_goodtime.png'

function Hero() {
  const containerRef = useRef(null)

  // Track scroll progress of the Hero container track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })



  // Scroll helper text animations
  const helperOpacity = useTransform(scrollYProgress, [0, 0.1, 0.8, 0.95], [1, 0.8, 0.2, 0])

  // Multi-stage Parallax overlay curtain animations for each layer
  const overlayY2 = useTransform(scrollYProgress, [0.15, 0.32], ['100%', '0%'])
  const overlayY3 = useTransform(scrollYProgress, [0.34, 0.51], ['100%', '0%'])
  const overlayY4 = useTransform(scrollYProgress, [0.53, 0.70], ['100%', '0%'])
  const overlayY5 = useTransform(scrollYProgress, [0.72, 0.89], ['100%', '0%'])

  return (
    <div
      ref={containerRef}
      style={{ position: 'relative' }}
      className="relative h-[420vh] bg-transparent"
    >

      {/* Sticky Hero Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden pt-12 pb-2 px-6">

        {/* Ambient background glows */}
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-teal-500/5 blur-[100px] sm:blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] rounded-full bg-indigo-500/5 blur-[110px] sm:blur-[130px] pointer-events-none"></div>

        {/* Hero Header Content */}
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center space-y-4 relative z-10 pt-6 sm:pt-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-[1.15] tracking-tight text-[#061022] mt-4 sm:mt-5">
            Don't just visit a place. <br />
            <span className="text-vista-blue">Experience it.</span>
          </h1>

          {/* Tapered Gradient Divider Line */}
          <svg width="240" height="8" viewBox="0 0 240 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto my-2">
            <path d="M 0 4 Q 120 1 240 4 Q 120 7 0 4" fill="url(#taperedGrad)" />
            <defs>
              <linearGradient id="taperedGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(11, 82, 214, 0)" />
                <stop offset="15%" stopColor="#0B52D6" />
                <stop offset="85%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="rgba(6, 182, 212, 0)" />
              </linearGradient>
            </defs>
          </svg>

          {/* Description */}
          <p className="max-w-4xl text-lg sm:text-xl md:text-2xl text-black font-sans leading-relaxed mt-3 sm:mt-4 font-bold">
            VISTA transforms specially designed rooms into immersive worlds through visuals, sound, lighting, climate, and scent.
          </p>

        </div>

        {/* Parallax Image Overlay Stage */}
        <div className="relative w-full max-w-6xl mx-auto h-[450px] sm:h-[650px] mt-6 sm:mt-10 rounded-[2.5rem] overflow-hidden border border-slate-200/80 bg-white shadow-[0_25px_60px_rgba(0,0,0,0.05)] z-20">

          {/* Base Layer 1: Pine Forest */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={heroImage}
              alt="Serene Pine Forest Chamber"
              className="w-full h-full object-cover"
            />
            {/* dark overlay gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#061022]/70 via-[#061022]/10 to-transparent"></div>

            {/* Info details floating */}
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 text-left text-white max-w-lg space-y-2">
              <span className="px-2.5 py-1 rounded text-[8px] font-technical uppercase font-bold tracking-widest bg-teal-500 text-white">
                NATURE RETREAT
              </span>
              <h3 className="font-display font-bold text-xl sm:text-3xl">
                Serene Pine Forest Chamber
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
                Sunrise forest canopy visuals with crisp pine and damp moss scent triggers.
              </p>
            </div>
          </div>

          {/* Layer 2: Cosmic Date Night */}
          <motion.div
            style={{ y: overlayY2 }}
            className="absolute inset-0 w-full h-full z-10 overflow-hidden"
          >
            <img
              src={celebrateDate}
              alt="Cosmic Date Night"
              className="w-full h-full object-cover"
            />
            {/* dark overlay gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#061022]/70 via-[#061022]/10 to-transparent"></div>

            {/* Info details floating */}
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 text-left text-white max-w-lg space-y-2">
              <span className="px-2.5 py-1 rounded text-[8px] font-technical uppercase font-bold tracking-widest bg-indigo-500 text-white">
                ROMANCE SUITE
              </span>
              <h3 className="font-display font-bold text-xl sm:text-3xl">
                Cosmic Date Night
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
                Starry galaxy projections, low candle glow, and rose scent simulation.
              </p>
            </div>
          </motion.div>

          {/* Layer 3: Holographic Birthday */}
          <motion.div
            style={{ y: overlayY3 }}
            className="absolute inset-0 w-full h-full z-20 overflow-hidden"
          >
            <img
              src={celebrateBday}
              alt="Holographic Birthday Chamber"
              className="w-full h-full object-cover"
            />
            {/* dark overlay gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#061022]/75 via-[#061022]/15 to-transparent"></div>

            {/* Info details floating */}
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 text-left text-white max-w-lg space-y-2">
              <span className="px-2.5 py-1 rounded text-[8px] font-technical uppercase font-bold tracking-widest bg-purple-500 text-white">
                CELEBRATION SUITE
              </span>
              <h3 className="font-display font-bold text-xl sm:text-3xl">
                Holographic Birthday Chamber
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
                Neon lighting rays synchronized with custom neon projections and spatial audio.
              </p>
            </div>
          </motion.div>

          {/* Layer 4: Golden Anniversary */}
          <motion.div
            style={{ y: overlayY4 }}
            className="absolute inset-0 w-full h-full z-30 overflow-hidden"
          >
            <img
              src={celebrateAnniversary}
              alt="Golden Anniversary"
              className="w-full h-full object-cover"
            />
            {/* dark overlay gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#061022]/70 via-[#061022]/10 to-transparent"></div>

            {/* Info details floating */}
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 text-left text-white max-w-lg space-y-2">
              <span className="px-2.5 py-1 rounded text-[8px] font-technical uppercase font-bold tracking-widest bg-amber-500 text-white">
                MILESTONES
              </span>
              <h3 className="font-display font-bold text-xl sm:text-3xl">
                Golden Anniversary
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
                Shimmering ocean sunsets accompanied by spatial symphonic acoustics.
              </p>
            </div>
          </motion.div>

          {/* Layer 5: Lounge Gathering */}
          <motion.div
            style={{ y: overlayY5 }}
            className="absolute inset-0 w-full h-full z-40 overflow-hidden"
          >
            <img
              src={celebrateGoodtime}
              alt="Lounge Gathering"
              className="w-full h-full object-cover"
            />
            {/* dark overlay gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#061022]/70 via-[#061022]/10 to-transparent"></div>

            {/* Info details floating */}
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 text-left text-white max-w-lg space-y-2">
              <span className="px-2.5 py-1 rounded text-[8px] font-technical uppercase font-bold tracking-widest bg-emerald-500 text-white">
                REUNIONS
              </span>
              <h3 className="font-display font-bold text-xl sm:text-3xl">
                Lounge Gathering Chamber
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
                Cozy fireplace visuals, winter wind sounds, and cedar scents.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Scrolling Action Instructions */}
        <motion.div style={{ opacity: helperOpacity }} className="relative z-10 text-center">
          <p className="font-technical text-[9px] uppercase tracking-[0.25em] text-slate-400 animate-pulse">
            Scroll to transition through chambers
          </p>
        </motion.div>

      </div>
    </div>
  )
}

export default Hero
