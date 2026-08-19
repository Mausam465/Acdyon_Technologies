import React, { useState } from 'react'
import { Star, MapPin, Search } from 'lucide-react'

const destinations = [
  {
    title: 'Serene Pine Forest',
    location: 'Suite A - Prime Canopy',
    rating: 4.9,
    reviews: 142,
    category: 'Nature',
    image: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=600&q=80',
    price: '$85/hr'
  },
  {
    title: 'Icelandic Aurora',
    location: 'Suite B - Panoramic Dome',
    rating: 5.0,
    reviews: 98,
    category: 'Cosmic',
    image: 'https://images.unsplash.com/photo-1483168527879-c66136b56105?auto=format&fit=crop&w=600&q=80',
    price: '$95/hr'
  },
  {
    title: 'Tokyo Neon Lounge',
    location: 'Suite C - Retro Wave',
    rating: 4.8,
    reviews: 215,
    category: 'Reunion',
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80',
    price: '$90/hr'
  },
  {
    title: 'Cosmic Date Night',
    location: 'Suite B - Cosmic Suite',
    rating: 4.9,
    reviews: 184,
    category: 'Romance',
    image: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=600&q=80',
    price: '$110/hr'
  }
]

const categories = ['All', 'Nature', 'Cosmic', 'Romance', 'Reunion']

function DestinationExplorer() {
  const [selectedCat, setSelectedCat] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredDestinations = destinations.filter(dest => {
    const matchesCategory = selectedCat === 'All' || dest.category === selectedCat
    const matchesSearch = dest.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.location.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section id="explorer" className="w-full py-24 px-6 max-w-7xl mx-auto border-b border-slate-200/60">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
        <div>
          <span className="font-technical text-[10px] uppercase tracking-[0.2em] text-slate-400 font-semibold">
            Visual Directory
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#061022] mt-2">
            Immersive Destinations
          </h2>
        </div>

        {/* Search & Tabs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
          {/* Search bar */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search environments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-full border border-slate-200 bg-white/70 backdrop-blur focus:outline-none focus:border-vista-blue focus:ring-1 focus:ring-vista-blue/20 transition-all font-sans text-slate-700"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-full border border-slate-200 bg-white/45 backdrop-blur w-full sm:w-auto overflow-x-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-4 py-1.5 rounded-full text-[10px] font-technical uppercase font-bold tracking-wider transition-all duration-300 ${selectedCat === cat
                    ? 'bg-[#061022] text-white'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100/50'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredDestinations.map((dest) => (
          <div
            key={dest.title}
            className="group rounded-3xl border border-slate-200/80 bg-white overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.05)] hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Visual Cover */}
            <div className="h-48 overflow-hidden relative">
              <img
                src={dest.image}
                alt={dest.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-md border border-slate-100 flex items-center gap-1 shadow-sm">
                <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                <span className="font-technical text-[9px] font-bold text-slate-800">{dest.rating}</span>
              </div>
              <span className="absolute bottom-4 left-4 px-2 py-0.5 rounded text-[8px] font-technical uppercase font-bold tracking-widest bg-white/90 text-vista-blue border border-slate-100">
                {dest.category}
              </span>
            </div>

            {/* Details */}
            <div className="p-5 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="font-display font-semibold text-base text-[#061022] leading-snug group-hover:text-vista-blue transition-colors">
                  {dest.title}
                </h3>
                <div className="flex items-center gap-1 text-slate-500 text-xs mt-1.5 font-sans">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span>{dest.location}</span>
                </div>
              </div>

              <div className="flex items-center justify-end border-t border-slate-100 pt-4 mt-5">
                <a
                  href="#booking"
                  className="btn-premium px-4 py-2 text-[9px] uppercase tracking-widest text-[#0052CC] border border-blue-200 bg-blue-50 rounded-full hover:bg-vista-blue hover:text-white hover:border-transparent transition-all duration-300"
                >
                  Reserve Suite
                </a>
              </div>
            </div>
          </div>
        ))}
        {filteredDestinations.length === 0 && (
          <div className="col-span-full py-20 text-center">
            <p className="text-slate-400 text-sm font-sans">No atmospheres matching your search query.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default DestinationExplorer
