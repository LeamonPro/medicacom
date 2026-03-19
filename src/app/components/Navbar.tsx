import { Link, NavLink, useLocation } from "react-router-dom";
import { site } from "../siteData";
import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function NavItem({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          "relative px-3.5 py-2 text-sm font-medium transition-colors duration-200 rounded-lg",
          isActive
            ? "text-brand-primary bg-brand-secondary/10"
            : "text-slate-600 hover:text-brand-primary hover:bg-slate-100",
        ].join(" ")
      }
    >
      {({ isActive }) => (
        <>
          {label}
          {isActive && (
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full bg-brand-secondary" />
          )}
        </>
      )}
    </NavLink>
  );
}

export function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [visible,     setVisible]     = useState(true);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const location = useLocation();

  const stopTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      // Every time we scroll, clear the old stop timer
      if (stopTimer.current) clearTimeout(stopTimer.current);

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const current = window.scrollY;

          if (current <= 80) {
            // Near the top: always show, reset everything
            setVisible(true);
            setScrolled(current > 12);
            lastScrollY = current;
          } else {
            // Below fold
            setScrolled(true);
            const delta = current - lastScrollY;
            
            // Only toggle visibility if we scroll enough (prevents micro-jitter)
            if (delta > 8) {
              setVisible(false); // scrolling down
            } else if (delta < -8) {
              setVisible(true); // scrolling up
            }
            lastScrollY = current;
          }
          ticking = false;
        });
        ticking = true;
      }

      // If no scroll event fires for 800ms, the user has stopped scrolling.
      // E.g. they scrolled down, navbar disappeared, now they stopped reading. 
      // Re-show it magically!
      stopTimer.current = setTimeout(() => {
        setVisible(true);
      }, 800);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Trigger once on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (stopTimer.current) clearTimeout(stopTimer.current);
    };
  }, []);

  // Close mobile menu on route change
  const [lastPath, setLastPath] = useState(location.pathname);
  if (lastPath !== location.pathname) {
    setLastPath(location.pathname);
    setMobileOpen(false);
  }

  return (
    <motion.header
      animate={{ y: visible ? 0 : "-100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`sticky top-0 z-50 transition-[background,border-color,box-shadow] duration-300 ${
        scrolled
          ? "border-b border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-[0_1px_20px_rgba(11,60,93,0.06)]"
          : "border-b border-transparent bg-white/70 backdrop-blur-md"
      }`}
    >
      {/* Futuristic top accent line */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-brand-secondary via-brand-blue to-brand-accent" />

      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-[68px]">
          {/* Logo */}
          <Link to="/" className="group inline-flex items-center gap-3 shrink-0">
            <img
              src={`${import.meta.env.BASE_URL}assets/logo.webp`}
              alt="Medicacom Logo"
              className="h-7 md:h-8 w-auto object-contain mix-blend-multiply"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0.5 lg:flex">
            {site.nav.map((n) => (
              <NavItem key={n.to} to={n.to} label={n.label} />
            ))}
          </nav>

          {/* CTAs */}
          <div className="flex items-center gap-2.5">
            <Link
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full border border-slate-200 text-sm font-semibold text-brand-primary bg-white hover:bg-slate-50 hover:border-slate-300 transition-all"
              to={site.ctas.secondary.to}
            >
              {site.ctas.secondary.label}
            </Link>
            <Link
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-primary text-sm font-semibold text-white hover:bg-brand-blue transition-all hover:shadow-[0_0_16px_rgba(0,80,164,0.3)]"
              to={site.ctas.primary.to}
            >
              {site.ctas.primary.label}
            </Link>

            {/* Mobile hamburger */}
            <button
              className="ml-1 lg:hidden flex items-center justify-center size-9 rounded-xl border border-slate-200 bg-white text-brand-primary hover:bg-slate-50 transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden border-t border-slate-100 bg-white/95 backdrop-blur-xl"
          >
            <div className="px-4 pb-6 pt-3 shadow-xl">
              <nav className="flex flex-col gap-1">
                {site.nav.map((n) => (
                  <NavLink
                    key={n.to}
                    to={n.to}
                    className={({ isActive }) =>
                      `flex items-center px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                        isActive
                          ? "bg-brand-secondary/10 text-brand-primary"
                          : "text-slate-600 hover:bg-slate-100 hover:text-brand-primary"
                      }`
                    }
                  >
                    {n.label}
                  </NavLink>
                ))}
              </nav>
              <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
                <Link
                  to={site.ctas.primary.to}
                  className="flex items-center justify-center px-5 py-3 rounded-full bg-brand-primary text-sm font-bold text-white hover:bg-brand-blue transition-all"
                >
                  {site.ctas.primary.label}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
