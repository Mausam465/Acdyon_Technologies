import React from 'react'

function Footer() {
  return (
    <footer className="w-full py-16 px-6 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
        
        {/* Logo and Copyright */}
        <div className="space-y-4 max-w-sm">
          <a href="#" className="flex items-center gap-2">
            <span className="font-display font-bold text-xl tracking-[0.25em] text-[#061022]">
              VISTA
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-vista-blue"></span>
          </a>
          <p className="text-xs text-slate-500 font-sans leading-relaxed">
            Pioneering environmental sensory chambers that combine projections, climate systems, and spatial aroma. Designed to heal, inspire, and elevate.
          </p>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          
          <div className="space-y-3">
            <h4 className="text-[10px] font-technical uppercase font-bold text-slate-700 tracking-wider">
              Experiences
            </h4>
            <ul className="space-y-2 text-xs font-sans text-slate-500">
              <li><a href="#categories" className="hover:text-vista-blue transition-colors">Categories</a></li>
              <li><a href="#explorer" className="hover:text-vista-blue transition-colors">Destinations</a></li>
              <li><a href="#configurator" className="hover:text-vista-blue transition-colors">Configurator</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-[10px] font-technical uppercase font-bold text-slate-700 tracking-wider">
              Facility
            </h4>
            <ul className="space-y-2 text-xs font-sans text-slate-500">
              <li><a href="#rooms" className="hover:text-vista-blue transition-colors">Immersive Suites</a></li>
              <li><a href="#how-it-works" className="hover:text-vista-blue transition-colors">How It Works</a></li>
              <li><a href="#booking" className="hover:text-vista-blue transition-colors">Online Booking</a></li>
            </ul>
          </div>

          <div className="space-y-3 col-span-2 sm:col-span-1">
            <h4 className="text-[10px] font-technical uppercase font-bold text-slate-700 tracking-wider">
              Legal
            </h4>
            <ul className="space-y-2 text-xs font-sans text-slate-500">
              <li><a href="#" className="hover:text-vista-blue transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-vista-blue transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-vista-blue transition-colors">Liability Waiver</a></li>
            </ul>
          </div>

        </div>

      </div>

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between border-t border-slate-200/50 mt-12 pt-8 text-center sm:text-left gap-4">
        <p className="text-[10px] text-slate-400 font-sans">
          © 2026 VISTA Immersive Center. All rights reserved. Premium Sensory Concept.
        </p>
        <div className="flex items-center gap-4 text-[10px] text-slate-400 font-sans">
          <a href="#" className="hover:text-slate-600">Twitter</a>
          <a href="#" className="hover:text-slate-600">Instagram</a>
          <a href="#" className="hover:text-slate-600">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
