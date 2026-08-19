import React from 'react'
import { Info } from 'lucide-react'

function Footer() {
  return (
    <footer className="w-full py-16 px-6 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Logo and Brand */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <a href="#" className="flex items-center gap-2">
            <span className="font-display font-bold text-2xl tracking-[0.25em] text-[#061022]">
              VISTA
            </span>
            <span className="w-2 h-2 rounded-full bg-vista-blue"></span>
          </a>
          <p className="text-sm text-black font-sans font-bold leading-relaxed text-center md:text-left max-w-xs">
            Pioneering environmental sensory chambers that combine immersive projections, responsive climate systems, and spatial audio.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4 text-xs font-technical uppercase font-bold tracking-widest text-slate-600">
          <a href="#explorer" className="hover:text-vista-blue transition-colors">Explore</a>
          <a href="#celebrations" className="hover:text-vista-blue transition-colors">Celebrate</a>
          <a href="#how-it-works" className="hover:text-vista-blue transition-colors">How It Works</a>
          <a href="#booking" className="hover:text-vista-blue transition-colors">Book</a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-slate-200/60 mt-12 pt-8 flex flex-col items-center justify-center text-center">
        <div className="flex items-start justify-center gap-2 max-w-2xl px-4 py-3 bg-slate-100/50 rounded-xl border border-slate-200/50">
          <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
          <p className="text-[10px] text-black font-sans leading-relaxed">
            <strong>Project Disclaimer:</strong> VISTA is a fictional immersive experience center concept created purely for a frontend UI/UX design challenge. It is not a real company, and no real booking or payment system is integrated.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
