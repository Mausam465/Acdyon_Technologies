import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Calendar, Sliders, MapPin, Smile, Check, Compass, ChevronLeft, ChevronRight } from 'lucide-react'

const steps = [
  {
    step: '01',
    title: 'Select Destination',
    desc: 'Browse our visual catalog of natural wonders, interstellar environments, and ambient sound lounges. Select from pre-rendered sensory coordinates.',
    icon: MapPin,
    accent: 'from-blue-500 to-indigo-600',
    accentColor: '#0B52D6',
    features: ['Real-time 3D catalog previews', 'Ambient acoustics selection', 'Custom coordinates builder']
  },
  {
    step: '02',
    title: 'Configure Presets',
    desc: 'Tailor scent nebulizers, custom heating fans, spatial sound track levels, and projection angles. Save your preferences into a personal profile.',
    icon: Sliders,
    accent: 'from-teal-400 to-emerald-500',
    accentColor: '#0D9488',
    features: ['Scent concentration dials', 'Dynamic thermal fans', 'Acoustic track balancing']
  },
  {
    step: '03',
    title: 'Reserve Time Slot',
    desc: 'Book an hourly slot in our Solo, Duo, or Group suite. You will receive a QR access wristband pass emailed directly to your smartphone.',
    icon: Calendar,
    accent: 'from-indigo-500 to-purple-600',
    accentColor: '#4F46E5',
    features: ['Solo/Group suite selections', 'Contactless QR pass generator', 'Instant calendar sync']
  },
  {
    step: '04',
    title: 'Check-In & Immersion',
    desc: 'Arrive at our facility, scan your band at the suite check-in, step inside your dedicated chamber, lay back, and enjoy your session.',
    icon: Smile,
    accent: 'from-emerald-500 to-teal-600',
    accentColor: '#059669',
    features: ['Instant gate wristband check-in', 'Private suite lock activation', 'Synchronized scent/sound release']
  }
]

// Duplicate the array 3 times to enable seamless infinite scroll snapping
const infiniteSteps = [...steps, ...steps, ...steps]

function HowItWorks() {
  const containerRef = useRef(null)
  const cardRefs = useRef([])
  const [scrollX, setScrollX] = useState(0)
  const shouldReduceMotion = useReducedMotion()

  const onScroll = () => {
    if (!containerRef.current || cardRefs.current.length === 0) return

    const container = containerRef.current
    const scrollLeft = container.scrollLeft

    // Find step width dynamically using the first card
    const firstCard = cardRefs.current[0]
    if (!firstCard) {
      setScrollX(scrollLeft)
      return
    }

    const cardWidth = firstCard.clientWidth
    const gap = 40 // matches gap-10 (40px)
    const stepWidth = cardWidth + gap
    const singleSetWidth = 4 * stepWidth

    // If scrolling too far left (into Set 1), wrap around to Set 2 (middle)
    if (scrollLeft < stepWidth * 3.5) {
      container.scrollLeft = scrollLeft + singleSetWidth
      setScrollX(scrollLeft + singleSetWidth)
    }
    // If scrolling too far right (into Set 3), wrap around to Set 2 (middle)
    else if (scrollLeft > stepWidth * 7.5) {
      container.scrollLeft = scrollLeft - singleSetWidth
      setScrollX(scrollLeft - singleSetWidth)
    }
    else {
      setScrollX(scrollLeft)
    }
  }

  // Mount setup: center the second set (index 4 to 7)
  useEffect(() => {
    const mountTimer = setTimeout(() => {
      if (containerRef.current && cardRefs.current[4]) {
        const container = containerRef.current
        const cardEl = cardRefs.current[4]
        const containerWidth = container.clientWidth
        const cardWidth = cardEl.clientWidth
        const cardLeft = cardEl.offsetLeft

        container.scrollTo({
          left: cardLeft - (containerWidth / 2) + (cardWidth / 2),
          behavior: 'auto' // instant setup
        })
        onScroll()
      }
    }, 150)

    window.addEventListener('resize', onScroll)
    return () => {
      clearTimeout(mountTimer)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  // Dynamic Scroll Jump Scroll function
  const scrollToCard = (index) => {
    if (containerRef.current) {
      const container = containerRef.current
      const cardEl = cardRefs.current[index]
      if (cardEl) {
        const containerWidth = container.clientWidth
        const cardWidth = cardEl.clientWidth
        const cardLeft = cardEl.offsetLeft

        container.scrollTo({
          left: cardLeft - (containerWidth / 2) + (cardWidth / 2),
          behavior: 'smooth'
        })
      }
    }
  }

  // Infinite Next Navigation
  const scrollNext = () => {
    if (containerRef.current && cardRefs.current.length > 0) {
      const currentIdx = getActiveIndex()

      // If we are at the last card of Set 2 (index 7), jump to index 3 instantly and smooth-scroll to 4
      if (currentIdx === 7) {
        const container = containerRef.current
        const cardEl3 = cardRefs.current[3]
        if (cardEl3) {
          container.scrollTo({
            left: cardEl3.offsetLeft - (container.clientWidth / 2) + (cardEl3.clientWidth / 2),
            behavior: 'auto'
          })
        }
        setTimeout(() => {
          scrollToCard(4)
        }, 30)
      } else {
        scrollToCard(currentIdx + 1)
      }
    }
  }

  // Infinite Prev Navigation
  const scrollPrev = () => {
    if (containerRef.current && cardRefs.current.length > 0) {
      const currentIdx = getActiveIndex()

      // If we are at the first card of Set 2 (index 4), jump to index 8 instantly and smooth-scroll to 7
      if (currentIdx === 4) {
        const container = containerRef.current
        const cardEl8 = cardRefs.current[8]
        if (cardEl8) {
          container.scrollTo({
            left: cardEl8.offsetLeft - (container.clientWidth / 2) + (cardEl8.clientWidth / 2),
            behavior: 'auto'
          })
        }
        setTimeout(() => {
          scrollToCard(7)
        }, 30)
      } else {
        scrollToCard(currentIdx - 1)
      }
    }
  }

  // Calculate active index based on scroll alignment
  const getActiveIndex = () => {
    if (!containerRef.current || cardRefs.current.length === 0) return 4

    const containerEl = containerRef.current
    const containerCenter = containerEl.scrollLeft + containerEl.clientWidth / 2

    let closestIndex = 4
    let minDistance = Infinity

    cardRefs.current.forEach((cardEl, idx) => {
      if (cardEl) {
        const cardCenter = cardEl.offsetLeft + cardEl.clientWidth / 2
        const distance = Math.abs(cardCenter - containerCenter)
        if (distance < minDistance) {
          minDistance = distance
          closestIndex = idx
        }
      }
    })

    return closestIndex
  }

  const activeIdx = getActiveIndex() % 4

  // Compute 3D circular transforms dynamically
  const getCardStyles = (index) => {
    const cardEl = cardRefs.current[index]
    const containerEl = containerRef.current
    if (!cardEl || !containerEl) return { opacity: 0.95, scale: 1, y: 0, rotate: 0 }

    const containerRect = containerEl.getBoundingClientRect()
    const containerCenter = containerRect.left + containerRect.width / 2

    const cardRect = cardEl.getBoundingClientRect()
    const cardCenter = cardRect.left + cardRect.width / 2

    const distance = cardCenter - containerCenter

    // Normalize distance by half container width (radius offset)
    const normalizedDistance = distance / (containerRect.width / 2)

    if (shouldReduceMotion) {
      return {
        opacity: Math.max(0.4, 1 - Math.abs(normalizedDistance) * 0.7),
        scale: 1,
        y: 0,
        rotate: 0
      }
    }

    // Circular movement path calculations
    const rotate = normalizedDistance * -15 // max 15 degrees pivot tilt
    const y = Math.pow(Math.abs(normalizedDistance), 2) * 45 // curves down by max 45px at sides
    const scale = Math.max(0.88, 1 - Math.abs(normalizedDistance) * 0.08)
    const opacity = Math.max(0.4, 1 - Math.abs(normalizedDistance) * 0.6)

    return { rotate, y, scale, opacity }
  }

  // Render the visual card corresponding to the active index
  const renderVisualCard = (index) => {
    switch (index) {
      case 0:
        return (
          <div className="w-full h-full p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
              <span className="font-technical text-[9px] uppercase tracking-widest text-slate-400 font-bold">
                EXPLORE CATALOG
              </span>
              <span className="px-2 py-0.5 text-[8px] font-technical uppercase bg-blue-50 text-vista-blue rounded-full font-bold">
                24 Active suites
              </span>
            </div>

            <div className="space-y-2.5 py-2 flex-grow flex flex-col justify-center text-left">
              <div className="p-3 rounded-xl border-2 border-vista-blue bg-blue-50/20 flex items-center justify-between shadow-[0_4px_12px_rgba(11,82,214,0.04)]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-vista-blue flex items-center justify-center flex-shrink-0">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xs text-[#061022]">Serene Pine Forest</h4>
                    <span className="text-[9px] text-slate-400 font-sans block">Nature Retreat</span>
                  </div>
                </div>
                <div className="w-4.5 h-4.5 rounded-full bg-vista-blue flex items-center justify-center text-white">
                  <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                </div>
              </div>

              <div className="p-3 rounded-xl border border-slate-100 bg-white flex items-center justify-between opacity-80">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xs text-[#061022]">Cosmic Nebula</h4>
                    <span className="text-[9px] text-slate-400 font-sans block">Romance Suite</span>
                  </div>
                </div>
                <span className="text-[8px] font-technical uppercase font-bold text-slate-400">Preview</span>
              </div>

              <div className="p-3 rounded-xl border border-slate-100 bg-white flex items-center justify-between opacity-80">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xs text-[#061022]">Golden Ocean Sunset</h4>
                    <span className="text-[9px] text-slate-400 font-sans block">Milestone Lounge</span>
                  </div>
                </div>
                <span className="text-[8px] font-technical uppercase font-bold text-slate-400">Preview</span>
              </div>
            </div>
            <div className="text-[8px] text-slate-400 font-sans text-center">
              Coordinates updated. Hover or tap destination to read details.
            </div>
          </div>
        )
      case 1:
        return (
          <div className="w-full h-full p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
              <span className="font-technical text-[9px] uppercase tracking-widest text-slate-400 font-bold">
                PRESET CONFIGURATOR
              </span>
              <span className="px-2 py-0.5 text-[8px] font-technical uppercase bg-teal-50 text-teal-600 rounded-full font-bold">
                Suite 4 Selected
              </span>
            </div>

            <div className="space-y-3.5 py-2 flex-grow flex flex-col justify-center text-left">
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-display font-semibold text-[#061022]">Scent Concentration</span>
                  <span className="font-technical text-teal-600 font-bold">Pine Needle / 75%</span>
                </div>
                <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden relative">
                  <div className="absolute left-0 top-0 bottom-0 w-[75%] bg-teal-500 rounded-full"></div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-display font-semibold text-[#061022]">Suite Temperature</span>
                  <span className="font-technical text-teal-600 font-bold">Warm Breeze / 72°F</span>
                </div>
                <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden relative">
                  <div className="absolute left-0 top-0 bottom-0 w-[55%] bg-teal-500 rounded-full"></div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-display font-semibold text-[#061022]">Wind Fan Intensity</span>
                  <span className="font-technical text-teal-600 font-bold">Medium / 50%</span>
                </div>
                <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden relative">
                  <div className="absolute left-0 top-0 bottom-0 w-[50%] bg-teal-500 rounded-full"></div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-display font-semibold text-[#061022]">Spatial Sound Track</span>
                  <span className="font-technical text-teal-600 font-bold">Forest Canopy / 90%</span>
                </div>
                <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden relative">
                  <div className="absolute left-0 top-0 bottom-0 w-[90%] bg-teal-500 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="text-[8px] text-slate-400 font-sans text-center">
              Profile presets will auto-apply instantly upon room activation.
            </div>
          </div>
        )
      case 2:
        return (
          <div className="w-full h-full p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
              <span className="font-technical text-[9px] uppercase tracking-widest text-slate-400 font-bold">
                RESERVATION PASS
              </span>
              <span className="px-2 py-0.5 text-[8px] font-technical uppercase bg-indigo-50 text-indigo-600 rounded-full font-bold">
                Confirmed slot
              </span>
            </div>

            <div className="py-2 flex-grow flex flex-col justify-center items-center gap-3">
              <div className="w-full max-w-[270px] rounded-xl border border-indigo-100 bg-gradient-to-br from-indigo-50/20 to-purple-50/10 p-3 flex gap-3 items-center shadow-sm">

                {/* QR Code */}
                <div className="w-12 h-12 bg-white border border-indigo-100 rounded-md p-1 flex flex-wrap gap-0.5 justify-center items-center shadow-inner relative flex-shrink-0">
                  <div className="w-2.5 h-2.5 bg-[#061022] absolute top-1 left-1 rounded-sm"></div>
                  <div className="w-2.5 h-2.5 bg-[#061022] absolute top-1 right-1 rounded-sm"></div>
                  <div className="w-2.5 h-2.5 bg-[#061022] absolute bottom-1 left-1 rounded-sm"></div>
                  <div className="w-1.5 h-1.5 bg-[#061022] absolute bottom-2 right-2 rounded-sm"></div>
                  <div className="w-1 h-1 bg-[#061022] absolute bottom-1 right-1"></div>
                </div>

                <div className="space-y-0.5 text-left flex-grow">
                  <div className="flex justify-between items-center">
                    <span className="font-technical text-[7px] text-slate-400 uppercase tracking-widest font-bold">Pass: V-993-XP</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                  </div>
                  <h4 className="font-display font-bold text-[10px] text-[#061022] leading-tight">Nature Canopy Ret.</h4>
                  <div className="grid grid-cols-2 text-[8px] text-slate-500 font-sans">
                    <span>Date: Today</span>
                    <span>Time: 15:30</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-indigo-50 bg-indigo-50/30 text-indigo-700">
                <span className="block w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                <span className="text-[8px] font-technical uppercase font-bold tracking-widest">NFC Wristband Active</span>
              </div>
            </div>

            <div className="text-[8px] text-slate-400 font-sans text-center">
              Scan pass at self-service reception gate to retrieve band.
            </div>
          </div>
        )
      case 3:
        return (
          <div className="w-full h-full p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
              <span className="font-technical text-[9px] uppercase tracking-widest text-slate-400 font-bold">
                GATE CHECK-IN
              </span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span className="text-[8px] font-technical uppercase text-emerald-600 font-bold">Active scan</span>
              </span>
            </div>

            <div className="py-2 flex-grow flex flex-col justify-center items-center gap-3">
              <div className="w-16 h-16 rounded-full border-2 border-emerald-500/20 bg-emerald-500/5 flex items-center justify-center relative shadow-[0_0_15px_rgba(5,150,105,0.03)]">
                {!shouldReduceMotion && (
                  <motion.div
                    animate={{ y: [-24, 24, -24] }}
                    transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                    className="absolute left-2.5 right-2.5 h-0.5 bg-emerald-500 shadow-[0_0_4px_#10B981] z-10"
                  />
                )}
                <Smile className="w-6 h-6 text-emerald-600" />
              </div>

              <div className="w-full max-w-[240px] rounded-lg border border-emerald-100 bg-emerald-50/10 p-2.5 text-center">
                <div className="text-[8px] font-technical uppercase font-bold text-slate-400">
                  Suite 4 Access Gate
                </div>
                <h4 className="font-display font-bold text-[10px] text-[#061022] tracking-wide mt-0.5">
                  PASSPORT ACCREDITED
                </h4>
                <p className="text-[8px] text-slate-500 font-sans mt-0.5 leading-normal">
                  Chamber setup launching. Optics and climate units active.
                </p>
              </div>
            </div>

            <div className="text-[8px] text-slate-400 font-sans text-center">
              Please enter the suite, recline, and close the doorway.
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <section id="how-it-works" className="w-full py-20 px-6 max-w-7xl mx-auto border-b border-slate-200/60 scroll-mt-20 overflow-hidden">

      {/* Centered Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span className="inline-block px-3 py-1 text-[9px] font-technical uppercase font-bold tracking-widest bg-blue-500/10 text-vista-blue rounded-full">
          Onboarding Process
        </span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-[#061022]">
          How VISTA{' '}
          <span className="relative inline-block text-vista-blue pb-1">
            Works.
            {/* Animated Hand-drawn underline */}
            <span className="absolute left-0 bottom-[-4px] w-full h-[6px] pointer-events-none">
              <svg className="w-full h-full overflow-visible" fill="none" viewBox="0 0 100 6" preserveAspectRatio="none">
                <motion.path
                  d="M0,3 C30,1 70,5 100,2"
                  stroke="#0B52D6"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, ease: 'easeInOut' }}
                />
              </svg>
              
              {/* Animating pen trailing the drawing line */}
              <motion.div
                initial={{ left: '0%', opacity: 0, rotate: -15 }}
                whileInView={{
                  left: ['0%', '100%'],
                  opacity: [0, 1, 1, 0],
                  y: [-12, -10, -12, -10]
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.8,
                  ease: 'easeInOut'
                }}
                className="absolute w-5 h-5 -translate-x-3 text-slate-800"
                style={{ originX: 0, originY: 1 }}
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full transform scale-x-[-1] rotate-[105deg]">
                  <path d="M21 3a3 3 0 0 0-4.24 0L3 16.76V21h4.24L21 7.24A3 3 0 0 0 21 3z" fill="currentColor" />
                  <path d="M16 8l3 3" stroke="#fff" strokeWidth="1.5" />
                </svg>
              </motion.div>
            </span>
          </span>
        </h2>
        <p className="text-black text-lg font-sans leading-relaxed font-bold">
          Embarking on a customized sensory retreat is seamless. Scroll horizontally below to follow the physical stages of your visit.
        </p>
      </div>

      {/* Dynamic 3D Circular Horizontal Scroll Carousel Container */}
      <div className="relative w-full max-w-6xl mx-auto">

        {/* Horizontal scroll track snaps */}
        <div
          ref={containerRef}
          onScroll={onScroll}
          style={{ perspective: 1200, transformStyle: 'preserve-3d' }}
          className="w-full flex flex-row gap-10 overflow-x-auto snap-x snap-mandatory py-14 scrollbar-none scroll-smooth px-[12vw] sm:px-[20vw] lg:px-[25vw]"
        >
          {infiniteSteps.map((item, idx) => {
            const IconComp = item.icon
            const cardStyles = getCardStyles(idx)

            return (
              <div
                key={`${item.step}-${idx}`}
                ref={(el) => (cardRefs.current[idx] = el)}
                style={{
                  transform: `translateY(${cardStyles.y}px) rotate(${cardStyles.rotate}deg) scale(${cardStyles.scale})`,
                  opacity: cardStyles.opacity,
                  transformStyle: 'preserve-3d',
                  willChange: 'transform, opacity',
                  backfaceVisibility: 'hidden',
                  transition: 'transform 0.15s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.15s ease-out'
                }}
                className="snap-center flex-shrink-0 w-[85vw] sm:w-[65vw] lg:w-[50vw] max-w-[620px] border border-slate-200/80 bg-white/75 backdrop-blur-md rounded-3xl shadow-[0_15px_45px_rgba(0,0,0,0.02)] p-7 md:p-10 relative"
              >
                {/* Card split grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center" style={{ transformStyle: 'preserve-3d' }}>

                  {/* Left Column: text features */}
                  <div className="md:col-span-7 space-y-6 text-left" style={{ transformStyle: 'preserve-3d' }}>
                    <div className="flex items-center gap-3">
                      <span className={`w-8 h-8 rounded-lg bg-gradient-to-tr ${item.accent} text-white flex items-center justify-center flex-shrink-0 shadow-sm`}>
                        <IconComp className="w-4 h-4" />
                      </span>
                      <span className="font-technical text-[10px] font-bold text-slate-400 tracking-wider">
                        STAGE {item.step} OF 04
                      </span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-[#061022] leading-tight">
                      {item.title}
                    </h3>

                    <p className="text-slate-900 text-base sm:text-lg font-sans leading-relaxed font-semibold">
                      {item.desc}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-2 pt-1">
                      {item.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-sm text-slate-800 font-sans font-bold">
                          <span className="w-4 h-4 rounded-full flex items-center justify-center bg-emerald-50 text-emerald-600 flex-shrink-0">
                            <Check className="w-2.5 h-2.5" strokeWidth={3} />
                          </span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Visual HUD screen */}
                  <div className="md:col-span-5 flex justify-center" style={{ transformStyle: 'preserve-3d' }}>
                    <div className="w-full max-w-[280px] h-[240px] rounded-2xl border border-slate-200/80 bg-white/90 shadow-[0_10px_30px_rgba(0,0,0,0.02)] overflow-hidden relative">
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#f8fafc_0%,transparent_75%)] opacity-80 pointer-events-none"></div>
                      {renderVisualCard(idx % 4)}
                    </div>
                  </div>

                </div>
              </div>
            )
          })}
        </div>

        {/* Snap scroll Arrow controls & Dots */}
        <div className="flex items-center justify-between max-w-md mx-auto mt-6 px-4">

          {/* Snap scroll Prev */}
          <button
            onClick={scrollPrev}
            aria-label="Scroll left"
            className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:text-vista-blue text-slate-600 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 active:scale-95 z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Nav direct jump dots */}
          <div className="flex items-center gap-3">
            {steps.map((step, idx) => {
              const isActive = activeIdx === idx
              return (
                <button
                  key={step.step}
                  onClick={() => scrollToCard(idx + 4)}
                  aria-label={`Go to stage ${step.step}`}
                  className="group relative flex flex-col items-center py-1 focus:outline-none"
                >
                  <span className={`font-technical text-[10px] font-bold tracking-wider transition-colors duration-300 ${isActive ? 'text-vista-blue' : 'text-slate-400 group-hover:text-slate-700'
                    }`}>
                    {step.step}
                  </span>

                  {isActive && (
                    <motion.span
                      layoutId="scrollActiveUnderline"
                      className="absolute bottom-[-4px] left-0 right-0 h-0.5 bg-vista-blue rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    />
                  )}
                </button>
              )
            })}
          </div>

          {/* Snap scroll Next */}
          <button
            onClick={scrollNext}
            aria-label="Scroll right"
            className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:text-vista-blue text-slate-600 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 active:scale-95 z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>

      </div>

    </section>
  )
}

export default HowItWorks
