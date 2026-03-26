import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useState, useEffect } from 'react'

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)
  
  // Track scroll progress
  const { scrollYProgress, scrollY } = useScroll()
  
  // Smooth the raw scroll progress for a buttery visual effect on the ring
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Map progress (0 to 1) to an SVG dash offset (circumference to 0)
  // Circle circumference calculation: 2 * Math.PI * r (where r = 22) => ~138.2
  const circumference = 138.2
  const strokeDashoffset = useTransform(smoothProgress, [0, 1], [circumference, 0])

  // Show/hide based on scroll pixels
  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsVisible(latest > 300)
    })
  }, [scrollY])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 30 }}
          transition={{ duration: 0.4, type: 'spring' }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 group outline-none"
          aria-label="Scroll to top"
        >
          {/* Main Container */}
          <div className="relative flex size-14 items-center justify-center rounded-full bg-slate-900/60 backdrop-blur-md shadow-[0_4px_30px_rgba(0,168,168,0.2)] hover:shadow-[0_4px_40px_rgba(0,168,168,0.4)] transition-shadow border border-white/10 overflow-visible">
            
            {/* SVG Ring Container */}
            <svg 
              className="absolute inset-0 size-full -rotate-90 pointer-events-none"
              width="56" 
              height="56" 
              viewBox="0 0 56 56"
            >
              {/* Background track */}
              <circle
                cx="28"
                cy="28"
                r="22"
                fill="none"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="2.5"
              />
              {/* Animated Progress Ring */}
              <motion.circle
                cx="28"
                cy="28"
                r="22"
                fill="none"
                stroke="url(#progressGradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray={circumference}
                style={{ strokeDashoffset }}
              />
              <defs>
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00A8A8" /> {/* brand-secondary */}
                  <stop offset="100%" stopColor="#0050A4" /> {/* brand-blue */}
                </linearGradient>
              </defs>
            </svg>

            {/* Inner Arrow Icon */}
            <ArrowUp 
              className="relative z-10 size-5 text-brand-secondary group-hover:-translate-y-1 transition-transform group-hover:text-cyan-300 drop-shadow-[0_0_8px_rgba(0,168,168,0.8)]" 
            />

            {/* Hover Glow Behind Arrow */}
            <div className="absolute inset-0 size-full rounded-full bg-brand-secondary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
