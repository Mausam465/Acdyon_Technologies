import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Compass, Mountain, Palmtree, Trees, Sparkles, Cake, Heart, Moon, Award, ChevronRight } from 'lucide-react'

const data = {
  Explore: [
    {
      title: 'Korea',
      desc: 'Immerse yourself in dynamic urban neon streets, traditional palace gardens, and ambient acoustic waves.',
      icon: Compass,
      color: 'text-blue-600 bg-blue-50 border-blue-100',
      bgClass: 'bg-blue-200/90'
    },
    {
      title: 'Mountains',
      desc: 'Crisp alpine winds, surrounding snowy peak projections, panoramic soundscapes, and fresh cold air.',
      icon: Mountain,
      color: 'text-sky-600 bg-sky-50 border-sky-100',
      bgClass: 'bg-sky-200/90'
    },
    {
      title: 'Tropical Escape',
      desc: 'Sunny beaches, gentle ocean surf acoustics, warm tropical drafts, and faint coconut scent nebulization.',
      icon: Palmtree,
      color: 'text-amber-600 bg-amber-50 border-amber-100',
      bgClass: 'bg-amber-200/90'
    },
    {
      title: 'Forest',
      desc: 'Deep green pine forest canopy, woodland birds singing, earthy damp soil scent, and light moisture mist.',
      icon: Trees,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
      bgClass: 'bg-emerald-200/90'
    },
    {
      title: 'Northern Lights',
      desc: 'Shimmering aurora visual waves, cosmic ambient tracks, and cool, spatial fresh air circulation.',
      icon: Sparkles,
      color: 'text-purple-600 bg-purple-50 border-purple-100',
      bgClass: 'bg-purple-200/90'
    }
  ],
  Celebrate: [
    {
      title: 'Birthday',
      desc: 'Festive dynamic overlays, upbeat birthday surround-sound, sweet vanilla mist, and customized light shows.',
      icon: Cake,
      color: 'text-pink-600 bg-pink-50 border-pink-100',
      bgClass: 'bg-pink-200/90'
    },
    {
      title: 'Anniversary',
      desc: 'Romantic sunset lighting, acoustic string tracks, warm air flows, and private rose/jasmine scent presets.',
      icon: Heart,
      color: 'text-rose-600 bg-rose-50 border-rose-100',
      bgClass: 'bg-rose-200/90'
    },
    {
      title: 'Date Night',
      desc: 'Cozy fireplace visual projections, ambient jazz, star-filled dome canopy, and soothing lavender mist.',
      icon: Moon,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-100',
      bgClass: 'bg-indigo-200/90'
    },
    {
      title: 'Special Occasion',
      desc: 'Custom memory slideshow overlays, celebratory acoustics, warm wind draft, and champagne mist releases.',
      icon: Award,
      color: 'text-violet-600 bg-violet-50 border-violet-100',
      bgClass: 'bg-violet-200/90'
    }
  ]
}

// Scattered card rotation tilts (matching the reference image layout)
const cardTilts = [-2.5, 1.8, -3.2, 2.2, -1.5]

function ExperienceCategories() {
  const [activeTab, setActiveTab] = useState('Explore')

  const activeItems = data[activeTab]

  return (
    <section id="categories" className="w-full pt-10 pb-24 px-6 max-w-7xl mx-auto border-b border-slate-200/60 overflow-hidden">

      {/* Header with Interactive Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="font-technical text-[10px] uppercase tracking-[0.2em] text-slate-400 font-semibold">
            Atmosphere Selection
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#061022] mt-2 pb-2">
            <span className="text-vista-blue">Experience</span> Categories
          </h2>
          <p className="text-black text-lg font-sans mt-2 max-w-lg leading-relaxed font-bold">
            Choose between exploring stunning global and cosmic coordinates, or celebrating life's milestones inside VISTA's sensory suites.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex items-center gap-1.5 p-1 rounded-full border border-slate-200/80 bg-white/45 backdrop-blur w-full sm:w-auto overflow-x-auto self-start md:self-end">
          {Object.keys(data).map((tab) => {
            const isActive = activeTab === tab
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-2 rounded-full text-[10px] font-technical uppercase font-bold tracking-wider transition-all duration-300 ${isActive ? 'text-white' : 'text-slate-500 hover:text-slate-900'
                  }`}
              >
                <span className="relative z-10">{tab}</span>
                {isActive && (
                  <motion.span
                    layoutId="activeTabPill"
                    className="absolute inset-0 bg-[#061022] rounded-full z-0"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Grid container with AnimatePresence cross-fade */}
      <div className="min-h-[290px] relative px-4 py-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className={`grid grid-cols-1 sm:grid-cols-2 ${activeTab === 'Explore'
              ? 'lg:grid-cols-5'
              : 'lg:grid-cols-4 max-w-5xl mx-auto'
              } gap-8 md:gap-10`}
          >
            {activeItems.map((item, idx) => {
              const IconComponent = item.icon
              const defaultTilt = cardTilts[idx % cardTilts.length]

              return (
                <motion.div
                  key={item.title}
                  style={{ rotate: defaultTilt }}
                  whileHover={{
                    scale: 1.04,
                    rotate: defaultTilt + (defaultTilt > 0 ? 5.5 : -5.5), // smooth dynamic rotation pivot
                    y: -10,
                    zIndex: 10
                  }}
                  transition={{ type: 'spring', stiffness: 280, damping: 15 }}
                  className="group relative cursor-pointer min-h-[240px]"
                >
                  {/* Bottom offset background card layer (matching the reference photo) */}
                  <div className={`absolute inset-0 rounded-2xl ${item.bgClass} translate-x-2.5 translate-y-2.5 transition-transform duration-300 group-hover:translate-x-3.5 group-hover:translate-y-3.5`} />

                  {/* Top card containing details */}
                  <div className="relative p-6 rounded-2xl bg-white border border-slate-200/80 shadow-[0_4px_25px_rgba(0,0,0,0.015)] flex flex-col justify-between h-full group-hover:border-slate-300 transition-colors duration-300">
                    <div>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-sm ${item.color}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="font-display font-bold text-lg text-[#061022] mb-2 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 font-sans leading-relaxed mb-6">
                        {item.desc}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 font-technical text-[9px] uppercase tracking-wider text-slate-400 font-bold group-hover:text-vista-blue transition-colors duration-300">
                      <span>Explore Preset</span>
                      <ChevronRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>

    </section>
  )
}

export default ExperienceCategories
