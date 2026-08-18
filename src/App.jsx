import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-vista-dark text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-xl text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium tracking-wider uppercase">
          VISTA Experience Center
        </div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight font-display bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
          VISTA
        </h1>
        <p className="text-lg text-vista-muted max-w-md mx-auto">
          Project boilerplate successfully configured. Ready for development.
        </p>
        <div className="pt-4 flex items-center justify-center gap-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">
          <span>React</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          <span>Vite</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          <span>Tailwind CSS</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          <span>Framer Motion</span>
        </div>
      </div>
    </div>
  )
}

export default App
