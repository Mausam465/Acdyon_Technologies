import React, { useState } from 'react'
import { Calendar as CalendarIcon, Clock, CheckCircle } from 'lucide-react'

const slots = ['09:00 AM', '11:00 AM', '01:00 PM', '03:00 PM', '05:00 PM', '07:00 PM']
const dates = [
  { day: 'Mon', num: 17, active: true },
  { day: 'Tue', num: 18, active: true },
  { day: 'Wed', num: 19, active: true },
  { day: 'Thu', num: 20, active: true },
  { day: 'Fri', num: 21, active: true },
  { day: 'Sat', num: 22, active: true },
  { day: 'Sun', num: 23, active: true }
]

function BookingSection() {
  const [suite, setSuite] = useState('Premium Immersive Suite')
  const [selectedDate, setSelectedDate] = useState(19)
  const [selectedSlot, setSelectedSlot] = useState('01:00 PM')
  const [booked, setBooked] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setBooked(true)
  }

  return (
    <section id="booking" className="w-full py-24 px-6 max-w-7xl mx-auto border-b border-slate-200/60">
      <div className="flex flex-col lg:flex-row gap-12 items-stretch">
        
        {/* Booking Info */}
        <div className="w-full lg:w-5/12 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="font-technical text-[10px] uppercase tracking-[0.2em] text-slate-400 font-semibold block">
              Reservation System
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#061022]">
              Reserve Your Custom Sensory Chamber
            </h2>
            <p className="text-slate-600 text-sm font-sans leading-relaxed">
              Book your immersive session directly online. All reservations include complete private access to your chosen sensory suite, loaded with your custom configuration.
            </p>
          </div>

          <div className="p-6 rounded-3xl border border-blue-100 bg-blue-50/50 flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-white text-vista-blue border border-blue-100">
              <CalendarIcon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-technical uppercase font-bold text-slate-800 tracking-wider">
                Support Helpline
              </h4>
              <p className="text-xs text-slate-600 font-sans mt-1 leading-relaxed">
                Looking for corporate packages or private party rentals? Contact our scheduling desk at <span className="font-semibold text-vista-blue">events@vista.center</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Booking Form Card */}
        <div className="w-full lg:w-7/12 p-8 md:p-10 rounded-[2.5rem] border border-slate-200/80 bg-white/80 backdrop-blur shadow-[0_15px_50px_rgba(0,0,0,0.03)] flex flex-col justify-center relative overflow-hidden">
          
          {!booked ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Select Suite */}
              <div className="space-y-2">
                <label className="text-xs font-technical uppercase font-bold text-slate-700 tracking-wider block">
                  Select Immersive Suite
                </label>
                <select
                  value={suite}
                  onChange={(e) => setSuite(e.target.value)}
                  className="w-full px-4 py-3 text-xs rounded-xl border border-slate-200 bg-white/70 focus:outline-none focus:border-vista-blue transition-all font-sans text-slate-700 cursor-pointer"
                >
                  <option value="Solo Escape Suite">Solo Escape Suite (Capacity: 1 Guest - $75/hr)</option>
                  <option value="Premium Immersive Suite">Premium Immersive Suite (Capacity: 4 Guests - $110/hr)</option>
                  <option value="VISTA Duo Sanctuary">VISTA Duo Sanctuary (Capacity: 2 Guests - $95/hr)</option>
                </select>
              </div>

              {/* Select Date */}
              <div className="space-y-2">
                <label className="text-xs font-technical uppercase font-bold text-slate-700 tracking-wider block">
                  Select Date (August 2026)
                </label>
                <div className="grid grid-cols-7 gap-2">
                  {dates.map((d) => (
                    <button
                      key={d.num}
                      type="button"
                      onClick={() => setSelectedDate(d.num)}
                      className={`py-2.5 rounded-xl border text-center flex flex-col items-center justify-center transition-all duration-300 ${
                        selectedDate === d.num
                          ? 'bg-[#061022] text-white border-transparent shadow-sm'
                          : 'border-slate-200 bg-white/50 text-slate-600 hover:bg-white hover:border-slate-300'
                      }`}
                    >
                      <span className="text-[8px] font-technical uppercase tracking-wider block">{d.day}</span>
                      <span className="text-xs font-semibold font-technical mt-0.5">{d.num}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Select Time Slot */}
              <div className="space-y-2">
                <label className="text-xs font-technical uppercase font-bold text-slate-700 tracking-wider block flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  Select Time Slot
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {slots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      className={`py-2 rounded-lg border text-center text-[10px] font-technical font-semibold transition-all duration-300 ${
                        selectedSlot === slot
                          ? 'border-vista-blue bg-blue-50 text-[#0052CC]'
                          : 'border-slate-200 bg-white/50 text-slate-500 hover:bg-white hover:border-slate-300'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Reservation */}
              <button
                type="submit"
                className="btn-premium w-full text-center py-4 rounded-xl text-xs uppercase tracking-widest font-semibold text-white bg-vista-blue hover:bg-vista-blueDark hover:shadow-[0_4px_20px_rgba(0,82,204,0.2)] transition-all duration-300 block"
              >
                Confirm Experience Booking
              </button>
            </form>
          ) : (
            <div className="text-center py-10 space-y-4 animate-in fade-in zoom-in duration-300">
              <div className="w-16 h-16 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-display font-bold text-xl text-[#061022]">
                Sensory Chamber Booked!
              </h3>
              <p className="text-xs text-slate-600 font-sans max-w-sm mx-auto leading-relaxed">
                Your reservation for the <span className="font-semibold">{suite}</span> on <span className="font-semibold">August {selectedDate}</span> at <span className="font-semibold">{selectedSlot}</span> has been confirmed. A digital wristband pass has been sent to your email.
              </p>
              <button
                onClick={() => setBooked(false)}
                className="btn-premium inline-flex items-center gap-1.5 px-6 py-2.5 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 rounded-xl text-[10px] uppercase tracking-widest font-semibold transition-all shadow-sm"
              >
                Book Another Slot
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  )
}

export default BookingSection
