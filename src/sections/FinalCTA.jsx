import React, { useState } from 'react'
import { Mail, ArrowRight, CheckCircle } from 'lucide-react'

function FinalCTA() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
    }
  }

  return (
    <section id="cta" className="w-full py-20 md:py-28 px-4 md:px-6 max-w-7xl mx-auto flex justify-center">
      <div className="w-full max-w-5xl rounded-[3rem] border border-blue-100 bg-gradient-to-tr from-[#EAF3FC] via-white to-[#E4F0FD] p-10 md:p-16 text-center flex flex-col items-center justify-center space-y-6 shadow-[0_20px_50px_rgba(0,82,204,0.04)] relative overflow-hidden">

        {/* Glow elements */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-teal-500/10 rounded-full blur-2xl"></div>

        <span className="font-technical text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold block relative z-10 animate-pulse">
          Reserve Your Slot
        </span>

        <h2 className="text-3xl md:text-5xl font-display font-bold text-[#061022] leading-tight max-w-2xl relative z-10">
          Ready to Step Into a <span className="theme-double-underline">New World?</span>
        </h2>

        <p className="text-black text-sm md:text-sm max-w-lg mx-auto font-sans leading-relaxed relative z-10">
          Experience sensory chambers engineered to calm the mind or ignite the imagination. Book your visit or sign up for exclusive preview slots.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md relative z-10">
          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-2 w-full">
              <div className="relative w-full">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  placeholder="Enter email to get newsletter updates"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3.5 text-xs rounded-full border border-slate-200 bg-white focus:outline-none focus:border-vista-blue transition-all font-sans text-slate-700"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn-premium w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs uppercase tracking-widest text-white bg-vista-blue hover:bg-vista-blueDark rounded-full hover:shadow-[0_4px_15px_rgba(0,82,204,0.2)] transition-all duration-300"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="flex items-center gap-2 p-3 rounded-full border border-emerald-100 bg-emerald-50 text-emerald-700 text-xs font-semibold px-6 animate-in fade-in duration-300">
              <CheckCircle className="w-4 h-4" />
              <span>Thank you for subscribing to VISTA alerts!</span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
