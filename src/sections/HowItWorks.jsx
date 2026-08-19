import React from 'react'
import { Calendar, Sliders, MapPin, Smile } from 'lucide-react'

const steps = [
  {
    step: '01',
    title: 'Select Destination',
    desc: 'Browse our visual catalog of natural wonders, interstellar environments, and ambient sound lounges.',
    icon: MapPin,
    color: 'border-blue-100 bg-blue-50 text-vista-blue'
  },
  {
    step: '02',
    title: 'Configure Presets',
    desc: 'Tailor scent nebulizers, custom heating fans, spatial sound track levels, and projection angles.',
    icon: Sliders,
    color: 'border-teal-100 bg-teal-50 text-teal-600'
  },
  {
    step: '03',
    title: 'Reserve Time Slot',
    desc: 'Book a hourly slot in our Solo, Duo, or Group suite. You will receive a QR access wristband pass.',
    icon: Calendar,
    color: 'border-indigo-100 bg-indigo-50 text-indigo-600'
  },
  {
    step: '04',
    title: 'Check-In & Immersion',
    desc: 'Arrive at our facility, scan your band to activate your suite setup, lay back, and enjoy.',
    icon: Smile,
    color: 'border-emerald-100 bg-emerald-50 text-emerald-600'
  }
]

function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-24 px-6 max-w-7xl mx-auto border-b border-slate-200/60">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span className="font-technical text-[10px] uppercase tracking-[0.2em] text-slate-400 font-semibold block">
          Simple Onboarding
        </span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-[#061022]">
          How VISTA Works
        </h2>
        <p className="text-slate-600 text-sm font-sans leading-relaxed">
          Embarking on a customized sensory retreat is seamless. Follow these four simple stages to begin your session.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {/* Horizontal connecting line (desktop only) */}
        <div className="hidden lg:block absolute top-[52px] left-12 right-12 h-0.5 bg-slate-100 -z-10"></div>
        
        {steps.map((item, idx) => {
          const IconComp = item.icon
          return (
            <div
              key={item.step}
              className="flex flex-col items-center text-center space-y-4 group relative z-10"
            >
              {/* Step circle */}
              <div className={`w-14 h-14 rounded-full border-2 flex items-center justify-center font-technical font-bold text-sm shadow-sm transition-transform duration-300 group-hover:scale-105 ${item.color}`}>
                <IconComp className="w-5 h-5" />
              </div>

              <div>
                <span className="font-technical text-[10px] uppercase font-bold text-slate-400">
                  Step {item.step}
                </span>
                <h3 className="font-display font-semibold text-lg text-[#061022] mt-1 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 font-sans leading-relaxed max-w-xs">
                  {item.desc}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default HowItWorks
