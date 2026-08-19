import React, { useState } from 'react'
import { Sun, Wind, Music, Eye, Check, Loader2 } from 'lucide-react'

function ExperienceConfigurator() {
  const [visualMode, setVisualMode] = useState('Deep Forest')
  const [breeze, setBreeze] = useState(30)
  const [scent, setScent] = useState(50)
  const [lighting, setLighting] = useState(65)
  const [sound, setSound] = useState(40)
  
  const [isSaving, setIsSaving] = useState(false)
  const [isSaved, setIsSaved] = useState(false)

  const handleSave = () => {
    setIsSaving(true)
    setTimeout(() => {
      setIsSaving(false)
      setIsSaved(true)
      setTimeout(() => setIsSaved(false), 3000)
    }, 1200)
  }

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
    <section id="configurator" className="w-full py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto border-b border-slate-200/60">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        
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
        <div className="w-full lg:w-7/12 p-5 sm:p-8 md:p-10 rounded-3xl md:rounded-[2.5rem] border border-slate-200/80 bg-white/80 backdrop-blur shadow-[0_15px_50px_rgba(0,0,0,0.03)] flex flex-col md:flex-row gap-6 md:gap-8 relative overflow-hidden">
          
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
              <button 
                onClick={handleSave}
                disabled={isSaving || isSaved}
                className={`btn-premium w-full flex items-center justify-center gap-2 py-3 text-[10px] uppercase tracking-widest text-white rounded-xl shadow-sm transition-all duration-300 ${
                  isSaved 
                    ? 'bg-emerald-500 hover:bg-emerald-600' 
                    : 'bg-vista-blue hover:bg-vista-blueDark'
                }`}
              >
                {isSaving ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Saving...
                  </>
                ) : isSaved ? (
                  <>
                    <Check className="w-4 h-4" />
                    Configuration Saved
                  </>
                ) : (
                  'Save Configuration'
                )}
              </button>
            </div>
          </div>

          {/* Room Simulation Visual Display */}
          <div className="w-full md:w-2/5 rounded-2xl md:rounded-[2.5rem] border border-slate-800 bg-[#0A0F1C] overflow-hidden flex flex-col justify-between relative shadow-2xl p-4 md:p-5 min-h-[300px] md:min-h-[350px]">
            {/* Ambient Background Grid */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMWgyMHYyMEgxVjF6IiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-50 z-0 pointer-events-none"></div>

            {/* Live Indicator */}
            <div className="absolute top-5 left-5 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 shadow-lg">
              <div className="relative flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping absolute"></span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 relative"></span>
              </div>
              <span className="font-technical text-[9px] uppercase tracking-widest text-slate-200 font-bold ml-1">
                Simulation Active
              </span>
            </div>

            {/* Dynamic Room SVG Renderer */}
            <div className="w-full flex-grow flex items-center justify-center pt-8 relative z-10">
              <svg viewBox="0 0 200 220" className="w-full max-h-[240px]">
                <defs>
                  <linearGradient id="beamGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="currentColor" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                  </linearGradient>
                  <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Dynamic environment lighting glow */}
                <circle
                  cx="100"
                  cy="90"
                  r={30 + lighting * 0.5}
                  fill="url(#glowGrad)"
                  color={
                    visualMode === 'Deep Forest' ? '#10B981' :
                    visualMode === 'Celestial Twilight' ? '#6366F1' :
                    visualMode === 'Tropical Shore' ? '#0EA5E9' : '#F59E0B'
                  }
                  opacity={lighting / 120}
                  className="transition-all duration-700"
                />
                
                {/* Ray beams from top */}
                <polygon
                  points="100,-20 10,220 190,220"
                  fill="url(#beamGrad)"
                  color={
                    visualMode === 'Deep Forest' ? '#10B981' :
                    visualMode === 'Celestial Twilight' ? '#6366F1' :
                    visualMode === 'Tropical Shore' ? '#0EA5E9' : '#F59E0B'
                  }
                  opacity={lighting / 80}
                  className="transition-all duration-700 mix-blend-screen"
                />

                {/* Grid wireframe matching VISTA environment concept */}
                <rect x="25" y="25" width="150" height="150" rx="12" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                <rect x="15" y="15" width="170" height="170" rx="16" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                <line x1="25" y1="100" x2="175" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <line x1="100" y1="25" x2="100" y2="175" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />

                {/* Lounge Seat silhouette */}
                <path d="M 50 140 C 75 140, 85 125, 105 110 C 120 100, 140 95, 150 95" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="3" strokeLinecap="round" />
                <line x1="75" y1="140" x2="75" y2="165" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round" />
                <line x1="125" y1="105" x2="125" y2="165" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round" />

                {/* Dynamic Breeze Wind Wave Lines */}
                {breeze > 5 && (
                  <>
                    <path d="M 20 75 Q 60 65 100 75 T 180 75" fill="none" stroke="#2DD4BF" strokeWidth="1.5" strokeDasharray="6,6" opacity="0.6">
                      <animate attributeName="stroke-dashoffset" values="0;-60" dur={`${120 / breeze}s`} repeatCount="indefinite" />
                    </path>
                    <path d="M 30 110 Q 70 100 110 110 T 190 110" fill="none" stroke="#2DD4BF" strokeWidth="1" strokeDasharray="4,8" opacity="0.4">
                      <animate attributeName="stroke-dashoffset" values="0;-60" dur={`${150 / breeze}s`} repeatCount="indefinite" />
                    </path>
                  </>
                )}

                {/* Soundwaves pulsing outward */}
                {sound > 5 && (
                  <>
                    <circle cx="25" cy="100" r="8" fill="none" stroke="#818CF8" strokeWidth="1.5">
                      <animate attributeName="r" values={`8;${8 + sound * 0.6}`} dur="1.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.8;0" dur="1.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="175" cy="100" r="8" fill="none" stroke="#818CF8" strokeWidth="1.5">
                      <animate attributeName="r" values={`8;${8 + sound * 0.6}`} dur="1.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.8;0" dur="1.5s" repeatCount="indefinite" />
                    </circle>
                  </>
                )}

                {/* Scent Aroma dots floating */}
                {scent > 5 && (
                  <>
                    <circle cx="85" cy="150" r="3" fill="#F472B6" opacity="0.7" filter="blur(1px)">
                      <animate attributeName="cy" values="150;40" dur="4s" repeatCount="indefinite" />
                      <animate attributeName="cx" values="85;100;85" dur="4s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.7;0" dur="4s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="135" cy="140" r="2.5" fill="#F472B6" opacity="0.7" filter="blur(1px)">
                      <animate attributeName="cy" values="140;30" dur="3s" repeatCount="indefinite" />
                      <animate attributeName="cx" values="135;120;135" dur="3s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.7;0" dur="3s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="110" cy="160" r="2" fill="#F472B6" opacity="0.5" filter="blur(0.5px)">
                      <animate attributeName="cy" values="160;50" dur="3.5s" repeatCount="indefinite" />
                      <animate attributeName="cx" values="110;95;110" dur="3.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.5;0" dur="3.5s" repeatCount="indefinite" />
                    </circle>
                  </>
                )}
              </svg>
            </div>

            {/* Technical readout status info */}
            <div className="relative z-10 bg-black/40 backdrop-blur-md rounded-xl p-3 border border-white/10 flex items-center justify-between text-[9px] font-technical uppercase tracking-widest text-slate-300 shadow-inner mt-2">
              <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div> Suite: 03-Canopy</span>
              <span className="flex items-center gap-1.5 text-vista-blue">Sys: Active <div className="w-1.5 h-1.5 rounded-full bg-vista-blue animate-pulse"></div></span>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  )
}

export default ExperienceConfigurator
