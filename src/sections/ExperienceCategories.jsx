import React from 'react'
import { Trees, Heart, Sparkles, Milestone, Wind } from 'lucide-react'

const categories = [
  {
    title: 'Serene Nature',
    icon: Trees,
    desc: 'Breathe in forest pine or ocean air while visuals transport you to natural wonders.',
    color: 'text-teal-600 bg-teal-50 border-teal-100',
    hoverEffect: 'hover:border-teal-300 hover:shadow-teal-500/5'
  },
  {
    title: 'Cosmic & Abstract',
    icon: Sparkles,
    desc: 'Surreal space-scapes, nebulae visuals, and synth-wave acoustics for deep reflection.',
    color: 'text-indigo-600 bg-indigo-50 border-indigo-100',
    hoverEffect: 'hover:border-indigo-300 hover:shadow-indigo-500/5'
  },
  {
    title: 'Romance & Date Night',
    icon: Heart,
    desc: 'Starry sky overlays, intimate candle projections, warm wind, and rose scents.',
    color: 'text-rose-600 bg-rose-50 border-rose-100',
    hoverEffect: 'hover:border-rose-300 hover:shadow-rose-500/5'
  },
  {
    title: 'Milestone Celebrations',
    icon: Milestone,
    desc: 'Immersive dynamic backdrops customized with memory collages and special acoustics.',
    color: 'text-amber-600 bg-amber-50 border-amber-100',
    hoverEffect: 'hover:border-amber-300 hover:shadow-amber-500/5'
  },
  {
    title: 'Somatic Wellness',
    icon: Wind,
    desc: 'Synchronized slow breath-pacing light cues, thermal airflow, and calming lavender aroma.',
    color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    hoverEffect: 'hover:border-emerald-300 hover:shadow-emerald-500/5'
  }
]

function ExperienceCategories() {
  return (
    <section id="categories" className="w-full py-24 px-6 max-w-7xl mx-auto border-b border-slate-200/60">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <span className="font-technical text-[10px] uppercase tracking-[0.2em] text-slate-400 font-semibold">
            Tailored Atmospheres
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#061022] mt-2">
            Experience Categories
          </h2>
        </div>
        <p className="text-slate-600 text-sm max-w-md mt-4 md:mt-0 font-sans leading-relaxed">
          Choose from our pre-configured environmental presets or mix and match to design a custom sensory retreat.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {categories.map((cat, idx) => {
          const IconComponent = cat.icon
          return (
            <div
              key={cat.title}
              className={`p-6 rounded-2xl bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 ${cat.hoverEffect}`}
            >
              <div>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border mb-6 ${cat.color}`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="font-display font-semibold text-lg text-[#061022] mb-2 leading-tight">
                  {cat.title}
                </h3>
                <p className="text-xs text-slate-600 font-sans leading-relaxed mb-4">
                  {cat.desc}
                </p>
              </div>
              <span className="font-technical text-[9px] uppercase tracking-wider text-slate-400 font-bold group-hover:text-vista-blue cursor-pointer">
                Explore Preset →
              </span>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ExperienceCategories
