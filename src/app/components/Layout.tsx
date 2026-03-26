import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { ScrollToTopButton } from './ScrollToTopButton'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { site } from '../siteData'
import { ThemeProvider } from './ThemeContext'

export function Layout() {
  const { t, i18n } = useTranslation()
  const location = useLocation()

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light'
    const stored = window.localStorage.getItem('theme') as 'light' | 'dark' | null
    if (stored) return stored
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'dark' : 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    window.localStorage.setItem('theme', theme)
  }, [theme])

  // Scroll to top on route change for smooth transitions and update title
  useEffect(() => {
    window.scrollTo(0, 0)

    const navLabelByPath: Record<string, string> = {
      '/': t('nav.home'),
      '/a-propos': t('nav.about'),
      '/expertises': t('nav.expertises'),
      '/projets': t('nav.projects'),
      '/carrieres': t('nav.careers'),
      '/contact': t('nav.contact'),
    }

    const titleLabel = navLabelByPath[location.pathname]
    document.title = titleLabel ? `${titleLabel} | ${site.brand.name}` : site.brand.name
  }, [location.pathname, i18n.language, t])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeProvider theme={theme} toggleTheme={toggleTheme}>
      <div className="min-h-dvh bg-white text-slate-900 overflow-x-hidden selection:bg-brand-secondary/30 selection:text-brand-primary dark:bg-slate-950 dark:text-slate-50 dark:selection:bg-cyan-500/40 dark:selection:text-slate-50">
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
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
    </ThemeProvider>
  )
}
