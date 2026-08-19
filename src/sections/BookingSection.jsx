import React, { useState } from 'react'
import { Calendar as CalendarIcon, Clock, CheckCircle, Info, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

// Generate next 7 days dynamically
const getNext7Days = () => {
  const dates = [];
  const today = new Date();
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  for (let i = 0; i < 7; i++) {
    const nextDate = new Date(today);
    nextDate.setDate(today.getDate() + i);
    dates.push({
      dateObj: nextDate,
      day: days[nextDate.getDay()],
      num: nextDate.getDate(),
      month: months[nextDate.getMonth()],
      year: nextDate.getFullYear(),
      fullStr: nextDate.toDateString()
    });
  }
  return dates;
};

const next7Days = getNext7Days();
const currentMonthYear = `${next7Days[0].month} ${next7Days[0].year}`;
const slots = ['09:00 AM', '11:00 AM', '01:00 PM', '03:00 PM', '05:00 PM', '07:00 PM'];

function BookingSection() {
  const [suite, setSuite] = useState('Premium Immersive Suite')
  const [selectedDateStr, setSelectedDateStr] = useState(next7Days[0].fullStr)
  const [selectedSlot, setSelectedSlot] = useState('01:00 PM')
  const [booked, setBooked] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setBooked(true)
  }

  const selectedDateObj = next7Days.find(d => d.fullStr === selectedDateStr);

  return (
    <section id="booking" className="w-full py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto border-b border-slate-200/60">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

        {/* Booking Info */}
        <div className="w-full lg:w-5/12 flex flex-col space-y-8 lg:space-y-12 lg:sticky lg:top-32">
          <div className="space-y-4">
            <span className="font-technical text-[10px] uppercase tracking-[0.2em] text-slate-600 font-semibold block">
              Reservation System
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#061022]">
              Reserve Your <span className="text-blue-600">Custom</span> Chamber
            </h2>
            <p className="text-slate-600 text-lg font-sans leading-relaxed font-bold">
              Book your immersive session directly online. All reservations include complete private access to your chosen sensory suite, loaded with your custom configuration.
            </p>
          </div>

          <div className="p-6 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50/80 to-white flex items-start gap-4 shadow-sm">
            <div className="p-3 rounded-2xl bg-white text-vista-blue border border-blue-100 shadow-sm">
              <CalendarIcon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-technical uppercase font-bold text-slate-800 tracking-wider">
                Support Helpline
              </h4>
              <p className="text-xs text-black font-sans mt-1.5 leading-relaxed font-semibold">
                Looking for corporate packages or private party rentals? Contact our scheduling desk at <span className="font-semibold text-vista-blue cursor-pointer hover:underline">events@vista.center</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Booking Form Card */}
        <div className="w-full lg:w-7/12 p-5 sm:p-8 md:p-10 rounded-3xl md:rounded-[2.5rem] border border-slate-200/80 bg-white/80 backdrop-blur shadow-[0_15px_50px_rgba(0,0,0,0.03)] flex flex-col justify-center relative overflow-hidden min-h-[640px]">

          {!booked ? (
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">

              {/* Select Suite */}
              <div className="space-y-3">
                <label className="text-[10px] font-technical uppercase tracking-widest font-bold text-slate-700 block">
                  Select Immersive Suite
                </label>
                <div className="relative">
                  <select
                    value={suite}
                    onChange={(e) => setSuite(e.target.value)}
                    className="w-full px-5 py-4 text-sm rounded-xl border border-slate-200 bg-white/90 focus:outline-none focus:border-vista-blue focus:ring-4 focus:ring-vista-blue/10 transition-all font-sans text-slate-800 cursor-pointer shadow-sm appearance-none"
                  >
                    <option value="Solo Escape Suite">Solo Escape Suite (Capacity: 1 Guest)</option>
                    <option value="Premium Immersive Suite">Premium Immersive Suite (Capacity: 4 Guests )</option>
                    <option value="VISTA Duo Sanctuary">VISTA Duo Sanctuary (Capacity: 2 Guests )</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              {/* Select Date */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-[10px] font-technical uppercase tracking-widest font-bold text-slate-700 block">
                    Select Date
                  </label>
                  <span className="text-[10px] font-technical uppercase text-vista-blue font-bold">{currentMonthYear}</span>
                </div>
                <div className="grid grid-cols-7 gap-1 sm:gap-2">
                  {next7Days.map((d) => (
                    <button
                      key={d.fullStr}
                      type="button"
                      onClick={() => setSelectedDateStr(d.fullStr)}
                      className={`py-2 sm:py-3 rounded-lg sm:rounded-xl border text-center flex flex-col items-center justify-center transition-all duration-300 ${selectedDateStr === d.fullStr
                        ? 'bg-[#061022] text-white border-[#061022] shadow-md transform -translate-y-0.5'
                        : 'border-slate-200 bg-white/60 text-slate-600 hover:bg-white hover:border-slate-300 hover:shadow-sm'
                        }`}
                    >
                      <span className={`text-[8px] sm:text-[9px] font-technical uppercase tracking-wider block ${selectedDateStr === d.fullStr ? 'text-slate-300' : 'text-slate-400'}`}>
                        {d.day}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold font-technical mt-0.5 sm:mt-1">{d.num}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Select Time Slot */}
              <div className="space-y-3">
                <label className="text-[10px] font-technical uppercase tracking-widest font-bold text-slate-700 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-400" />
                  Available Time Slots
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
                  {slots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      className={`py-2 sm:py-2.5 rounded-lg border text-center text-[10px] sm:text-[11px] font-technical font-semibold transition-all duration-300 ${selectedSlot === slot
                        ? 'border-vista-blue bg-blue-50 text-vista-blue shadow-sm ring-1 ring-vista-blue/50'
                        : 'border-slate-200 bg-white/60 text-slate-500 hover:bg-white hover:border-slate-300 hover:shadow-sm'
                        }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Reservation */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-premium w-full flex items-center justify-center gap-2 py-4 rounded-xl text-xs uppercase tracking-widest font-semibold text-white bg-vista-blue hover:bg-vista-blueDark shadow-[0_8px_25px_rgba(0,82,204,0.25)] hover:shadow-[0_12px_35px_rgba(0,82,204,0.35)] transition-all duration-300"
                >
                  Confirm Experience Booking
                </button>
              </div>
            </form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center py-10 space-y-6"
            >
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2, bounce: 0.5 }}
                className="w-20 h-20 bg-emerald-50 border-2 border-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-500 shadow-sm relative"
              >
                <CheckCircle className="w-10 h-10" />
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -top-2 -right-2 text-amber-400"
                >
                  <Sparkles className="w-6 h-6" />
                </motion.div>
              </motion.div>
              
              <div>
                <h3 className="font-display font-bold text-2xl text-[#061022] mb-3">
                  Demo Reservation Complete
                </h3>
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 inline-block mx-auto max-w-sm w-full shadow-inner">
                  <div className="space-y-2 text-left">
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="text-xs font-technical uppercase text-slate-400">Experience</span>
                      <span className="text-xs font-semibold text-slate-800">{suite}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2 pt-1">
                      <span className="text-xs font-technical uppercase text-slate-400">Date</span>
                      <span className="text-xs font-semibold text-slate-800">{selectedDateObj?.month} {selectedDateObj?.num}, {selectedDateObj?.year}</span>
                    </div>
                    <div className="flex justify-between pt-1">
                      <span className="text-xs font-technical uppercase text-slate-400">Time</span>
                      <span className="text-xs font-semibold text-vista-blue">{selectedSlot}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-50/50 rounded-2xl border border-blue-100/50 inline-block text-left max-w-sm">
                <p className="text-xs text-slate-600 font-sans flex items-start gap-2 leading-relaxed">
                  <Info className="w-4 h-4 text-vista-blue shrink-0 mt-0.5" />
                  <span>
                    <strong>Frontend Demo Note:</strong> This is a UI concept. No reservation was actually stored on a server. However, please arrive at the VISTA center 15 minutes prior to your reserved experience.
                  </span>
                </p>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setBooked(false)}
                  className="inline-flex items-center gap-1.5 px-6 py-3 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 rounded-xl text-[10px] uppercase tracking-widest font-bold transition-all shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md"
                >
                  Book Another Demo
                </button>
              </div>
            </motion.div>
          )}
        </div>

      </div>
    </section>
  )
}

export default BookingSection
