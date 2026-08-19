import React from 'react'
import { Sparkles, Flame, Gift, Award } from 'lucide-react'

const celebrations = [
  {
    title: 'Holographic Birthday',
    icon: Sparkles,
    desc: 'Neon light projections, heavy bass audio, spatial confetti visual drops, and custom cake scent diffusion.',
    color: 'text-purple-600 border-purple-100 bg-purple-50'
  },
  {
    title: 'Proposal & Date Night',
    icon: Flame,
    desc: 'Starlight sky ceiling, fireplace sounds, damp rose scenting, and private climate warmth control.',
    color: 'text-rose-600 border-rose-100 bg-rose-50'
  },
  {
    title: 'Anniversaries & Milestones',
    icon: Gift,
    desc: 'Custom photo slideshow integration, ambient symphonic score, sunset hues, and champagne aroma cues.',
    color: 'text-amber-600 border-amber-100 bg-amber-50'
  },
  {
    title: 'Corporate Team Retreats',
    icon: Award,
    desc: 'Group meditation sensory waves, ambient soundscape brainstorming environments, and pine aromatherapy.',
    color: 'text-indigo-600 border-indigo-100 bg-indigo-50'
  }
]

function CelebrationSection() {
  return (
    <section id="celebrations" className="w-full py-24 px-6 max-w-7xl mx-auto border-b border-slate-200/60">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <span className="font-technical text-[10px] uppercase tracking-[0.2em] text-slate-400 font-semibold">
            Occasion Styling
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#061022] mt-2">
            Celebrations & Custom Events
          </h2>
        </div>
        <p className="text-slate-600 text-sm max-w-md mt-4 md:mt-0 font-sans leading-relaxed">
          Host private gatherings inside a dedicated room. We customize our projection feeds and climate triggers to fit your theme.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {celebrations.map((event) => {
          const IconComp = event.icon
          return (
            <div
              key={event.title}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-[0_4px_25px_rgba(0,0,0,0.02)] hover:border-slate-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.04)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border mb-6 ${event.color}`}>
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="font-display font-semibold text-base text-[#061022] mb-2 leading-tight">
                  {event.title}
                </h3>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  {event.desc}
                </p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href="#booking"
                  className="text-[9px] font-technical uppercase font-bold tracking-wider text-vista-blue hover:text-vista-blueDark transition-colors"
                >
                  Book Package →
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default CelebrationSection
