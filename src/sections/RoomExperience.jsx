import React from 'react'
import { Check, ShieldAlert } from 'lucide-react'

const suites = [
  {
    name: 'Solo Escape Suite',
    capacity: '1 Guest',
    price: '$75',
    period: 'hour',
    desc: 'Perfect for individual sensory retreats, somatic breathing sessions, or creative focus.',
    features: [
      '180° Curved HD Projections',
      'Dual Aroma Dispersion',
      'Standard Ambient Climate Valves',
      'Spatial Headphones Integration'
    ],
    accent: false
  },
  {
    name: 'Premium Immersive Suite',
    capacity: 'Up to 4 Guests',
    price: '$110',
    period: 'hour',
    desc: 'Our flagship suite featuring full wraps, scent streams, and synchronized motion triggers.',
    features: [
      '360° Wall & Floor Projections',
      'Quad Spatial Surround Acoustics',
      'Thermal draft air engine system',
      'Advanced Aroma Nebulizer',
      'Special Anniversary lighting triggers'
    ],
    accent: true
  },
  {
    name: 'VISTA Duo Sanctuary',
    capacity: '2 Guests',
    price: '$95',
    period: 'hour',
    desc: 'Specially engineered for cosmic date nights and private shared retreats.',
    features: [
      '270° Panoramic Wall Projections',
      'Double Lounger Seats',
      'Custom Scent Selection',
      'Subtle Low-candle simulator glow'
    ],
    accent: false
  }
]

function RoomExperience() {
  return (
    <section id="rooms" className="w-full py-24 px-6 max-w-7xl mx-auto border-b border-slate-200/60">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span className="font-technical text-[10px] uppercase tracking-[0.2em] text-slate-400 font-semibold block">
          Immersive Facilities
        </span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-[#061022]">
          Immersive Sensory Suites
        </h2>
        <p className="text-slate-600 text-sm font-sans leading-relaxed">
          Select the ideal chamber package for your retreat or event. Each suite is sound-isolated and fully customizable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {suites.map((suite) => (
          <div
            key={suite.name}
            className={`rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between transition-all duration-300 ${
              suite.accent
                ? 'bg-[#061022] text-white border-2 border-transparent shadow-[0_20px_50px_rgba(9,24,44,0.15)] md:scale-105 relative z-10'
                : 'bg-white text-slate-900 border border-slate-200/80 shadow-[0_4px_25px_rgba(0,0,0,0.02)] hover:border-slate-300'
            }`}
          >
            <div>
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className={`font-display font-semibold text-lg ${suite.accent ? 'text-white' : 'text-[#061022]'}`}>
                    {suite.name}
                  </h3>
                  <span className={`text-[10px] font-technical uppercase font-bold tracking-wider ${suite.accent ? 'text-blue-300' : 'text-slate-400'}`}>
                    CAPACITY: {suite.capacity}
                  </span>
                </div>
                {suite.accent && (
                  <span className="px-2.5 py-0.5 rounded text-[8px] font-technical uppercase font-bold tracking-widest bg-vista-blue text-white">
                    Popular
                  </span>
                )}
              </div>

              {/* Price */}
              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-4xl font-display font-bold">{suite.price}</span>
                <span className={`text-xs ${suite.accent ? 'text-slate-300' : 'text-slate-500'}`}>/ {suite.period}</span>
              </div>

              {/* Desc */}
              <p className={`text-xs font-sans leading-relaxed mb-8 ${suite.accent ? 'text-slate-300' : 'text-slate-600'}`}>
                {suite.desc}
              </p>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {suite.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-xs font-sans">
                    <Check className={`w-4 h-4 shrink-0 mt-0.5 ${suite.accent ? 'text-blue-400' : 'text-vista-blue'}`} />
                    <span className={suite.accent ? 'text-slate-200' : 'text-slate-700'}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#booking"
              className={`btn-premium w-full text-center py-3.5 rounded-xl text-xs uppercase tracking-widest font-semibold transition-all duration-300 block ${
                suite.accent
                  ? 'bg-vista-blue hover:bg-vista-blueDark text-white'
                  : 'border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 hover:border-slate-300'
              }`}
            >
              Reserve Suite
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RoomExperience
