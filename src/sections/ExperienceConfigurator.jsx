import React, { useState } from 'react'
import { Sun, Wind, Music, Eye } from 'lucide-react'

function ExperienceConfigurator() {
  const [visualMode, setVisualMode] = useState('Deep Forest')
  const [breeze, setBreeze] = useState(30)
  const [scent, setScent] = useState(50)
  const [lighting, setLighting] = useState(65)
  const [sound, setSound] = useState(40)

  const presetThemes = [
    { name: 'Deep Forest', icon: '🌲', l: 50, b: 40, s: 75, sd: 50 },
    { name: 'Celestial Twilight', icon: '🌌', l: 30, b: 20, s: 40, sd: 70 },
    { name: 'Tropical Shore', icon: '🏝️', l: 80, b: 65, s: 60, sd: 60 },
    { name: 'Cozy Hearth', icon: '🔥', l: 45, b: 15, s: 80, sd: 35 }
  ]

  const loadPreset = (theme) => {
    setVisualMode(theme.name)
    setLighting(theme.l)
    setBreeze(theme.b)
    setScent(theme.s)
    setSound(theme.sd)
  }

  return (
    <section id="configurator" className="w-full py-24 px-6 max-w-7xl mx-auto border-b border-slate-200/60">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        
        {/* Left Intro Panel */}
        <div className="w-full lg:w-5/12 space-y-6">
          <div>
            <span className="font-technical text-[10px] uppercase tracking-[0.2em] text-slate-400 font-semibold">
              Sensory Architect
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#061022] mt-2">
              Experience Configurator
            </h2>
          </div>
          <p className="text-slate-600 text-sm font-sans leading-relaxed">
            Every VISTA suite features active climate valves, thermal draft engines, 360° fluid projections, spatial acoustic fields, and nebulizing scent systems. 
          </p>
          
          <div className="border-t border-slate-100 pt-6">
            <span className="text-xs font-technical uppercase font-bold text-slate-500 tracking-wider block mb-3">
              Quick Presets
            </span>
            <div className="flex flex-wrap gap-2">
              {presetThemes.map((theme) => (
                <button
                  key={theme.name}
                  onClick={() => loadPreset(theme)}
                  className={`px-3 py-2 rounded-xl border text-[11px] font-sans font-medium flex items-center gap-1.5 transition-all duration-300 ${
                    visualMode === theme.name 
                      ? 'border-vista-blue bg-blue-50 text-[#0052CC] shadow-sm' 
                      : 'border-slate-200 bg-white/50 text-slate-600 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <span>{theme.icon}</span>
                  <span>{theme.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sliders Config Panel */}
        <div className="w-full lg:w-7/12 p-8 md:p-10 rounded-[2.5rem] border border-slate-200/80 bg-white/80 backdrop-blur shadow-[0_15px_50px_rgba(0,0,0,0.03)] flex flex-col md:flex-row gap-8 relative overflow-hidden">
          
          {/* Sliders Input Column */}
          <div className="w-full md:w-3/5 flex flex-col gap-6 justify-between">
            {/* Active Preset Status Indicator */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-vista-blue" />
                <span className="text-xs font-technical uppercase font-bold text-slate-800 tracking-wider">
                  Live Simulator
                </span>
              </div>
              <span className="text-[10px] font-technical uppercase text-slate-400">
                Active: <span className="text-vista-blue font-bold">{visualMode}</span>
              </span>
            </div>

            {/* Slider 1: Lighting */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-700 font-sans flex items-center gap-2">
                  <Sun className="w-4 h-4 text-amber-500" />
                  Projection & Lighting
                </span>
                <span className="font-technical text-[10px] font-bold text-slate-500">{lighting}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={lighting}
                onChange={(e) => setLighting(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#0052CC]"
              />
            </div>

            {/* Slider 2: Scent Intensity */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-700 font-sans flex items-center gap-2">
                  <span className="text-base leading-none">👃</span>
                  Sensory Aroma
                </span>
                <span className="font-technical text-[10px] font-bold text-slate-500">{scent}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={scent}
                onChange={(e) => setScent(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#0052CC]"
              />
            </div>

            {/* Slider 3: Wind & Climate */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-700 font-sans flex items-center gap-2">
                  <Wind className="w-4 h-4 text-teal-500" />
                  Thermal Climate Draft
                </span>
                <span className="font-technical text-[10px] font-bold text-slate-500">{breeze}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={breeze}
                onChange={(e) => setBreeze(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#0052CC]"
              />
            </div>

            {/* Slider 4: Soundscapes */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-700 font-sans flex items-center gap-2">
                  <Music className="w-4 h-4 text-indigo-500" />
                  Spatial Soundscape
                </span>
                <span className="font-technical text-[10px] font-bold text-slate-500">{sound}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={sound}
                onChange={(e) => setSound(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#0052CC]"
              />
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
              <button className="btn-premium w-full text-center py-3 text-[10px] uppercase tracking-widest text-white bg-vista-blue hover:bg-vista-blueDark rounded-xl shadow-sm transition-all duration-300">
                Save Configuration
              </button>
            </div>
          </div>

          {/* Room Simulation Visual Display */}
          <div className="w-full md:w-2/5 rounded-[2rem] border border-slate-200/60 bg-[#040812] overflow-hidden flex flex-col justify-between relative shadow-inner p-4 min-h-[300px]">
            {/* Live Indicator */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="font-technical text-[8px] uppercase tracking-wider text-slate-200 font-bold">
                Simulation Active
              </span>
            </div>

            {/* Dynamic Room SVG Renderer */}
            <div className="w-full flex-grow flex items-center justify-center pt-8">
              <svg viewBox="0 0 200 220" className="w-full max-h-[220px]">
                {/* Dynamic environment lighting glow */}
                <circle
                  cx="100"
                  cy="90"
                  r={30 + lighting * 0.4}
                  fill={
                    visualMode === 'Deep Forest' ? '#0D9488' :
                    visualMode === 'Celestial Twilight' ? '#4F46E5' :
                    visualMode === 'Tropical Shore' ? '#06B6D4' : '#F97316'
                  }
                  filter="blur(15px)"
                  opacity={lighting / 180}
                  className="transition-all duration-500"
                />
                
                {/* Ray beams from top */}
                <polygon
                  points="100,0 20,220 180,220"
                  fill={
                    visualMode === 'Deep Forest' ? '#0D9488' :
                    visualMode === 'Celestial Twilight' ? '#4F46E5' :
                    visualMode === 'Tropical Shore' ? '#06B6D4' : '#F97316'
                  }
                  opacity={lighting / 600}
                  className="transition-all duration-500"
                />

                {/* Grid wireframe matching VISTA environment concept */}
                <rect x="25" y="25" width="150" height="135" rx="8" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                <line x1="25" y1="92" x2="175" y2="92" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                <line x1="100" y1="25" x2="100" y2="160" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />

                {/* Lounge Seat silhouette */}
                <path d="M 55 130 C 75 130, 85 118, 105 105 C 120 95, 135 90, 145 90" fill="none" stroke="white" strokeWidth="2.5" opacity="0.65" />
                <line x1="75" y1="130" x2="75" y2="150" stroke="white" strokeWidth="1.5" opacity="0.5" />
                <line x1="125" y1="100" x2="125" y2="150" stroke="white" strokeWidth="1.5" opacity="0.5" />

                {/* Dynamic Breeze Wind Wave Lines */}
                {breeze > 10 && (
                  <>
                    <path d="M 30 70 Q 60 62 95 70 T 160 70" fill="none" stroke="rgba(20, 184, 166, 0.35)" strokeWidth="1" strokeDasharray="4,4">
                      <animate attributeName="stroke-dashoffset" values="0;-40" dur={`${(110 - breeze) * 0.05}s`} repeatCount="indefinite" />
                    </path>
                    <path d="M 40 98 Q 70 90 105 98 T 170 98" fill="none" stroke="rgba(20, 184, 166, 0.35)" strokeWidth="1" strokeDasharray="4,4">
                      <animate attributeName="stroke-dashoffset" values="0;-40" dur={`${(110 - breeze) * 0.04}s`} repeatCount="indefinite" />
                    </path>
                  </>
                )}

                {/* Soundwaves pulsing outward */}
                {sound > 10 && (
                  <>
                    <circle cx="25" cy="92" r="5" fill="none" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="0.8">
                      <animate attributeName="r" values={`5;${5 + sound * 0.45}`} dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.7;0" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="175" cy="92" r="5" fill="none" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="0.8">
                      <animate attributeName="r" values={`5;${5 + sound * 0.45}`} dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.7;0" dur="2s" repeatCount="indefinite" />
                    </circle>
                  </>
                )}

                {/* Scent Aroma dots floating */}
                {scent > 10 && (
                  <>
                    <circle cx="75" cy="140" r="2" fill="#EC4899" opacity="0.5">
                      <animate attributeName="cy" values="140;40" dur="3.5s" repeatCount="indefinite" />
                      <animate attributeName="cx" values="75;85;75" dur="3.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.5;0" dur="3.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="125" cy="130" r="2.5" fill="#EC4899" opacity="0.5">
                      <animate attributeName="cy" values="130;30" dur="2.8s" repeatCount="indefinite" />
                      <animate attributeName="cx" values="125;115;125" dur="2.8s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.5;0" dur="2.8s" repeatCount="indefinite" />
                    </circle>
                  </>
                )}
              </svg>
            </div>

            {/* Technical readout status info */}
            <div className="border-t border-white/10 pt-3 mt-2 flex items-center justify-between text-[8px] font-technical uppercase tracking-wider text-slate-400">
              <span>Suite: 03-Canopy</span>
              <span>Aroma: active</span>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  )
}

export default ExperienceConfigurator
