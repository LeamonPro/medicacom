import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { ScrollToTopButton } from './ScrollToTopButton'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'

import { site } from '../siteData'

export function Layout() {
  const location = useLocation()

  // Scroll to top on route change for smooth transitions and update title
  useEffect(() => {
    window.scrollTo(0, 0)
    
    // Dynamically update document title based on current route
    const currentNav = site.nav.find(n => n.to === location.pathname)
    if (currentNav) {
      document.title = `${currentNav.label} | ${site.brand.name}`
    } else {
      // Fallback for subpages or unknown routes
      document.title = site.brand.name
    }
  }, [location.pathname])

  return (
    <div className="min-h-dvh bg-slate-50 overflow-x-hidden selection:bg-brand-secondary/30 selection:text-brand-primary">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="relative min-h-[70vh]"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <ScrollToTopButton />
      <Footer />
    </div>
  )
}
