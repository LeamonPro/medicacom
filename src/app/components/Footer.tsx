import { Link } from "react-router-dom";
import { site } from "../siteData";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear();

  const navLabelByPath: Record<string, string> = {
    '/': t('nav.home'),
    '/a-propos': t('nav.about'),
    '/expertises': t('nav.expertises'),
    '/projets': t('nav.projects'),
    '/carrieres': t('nav.careers'),
    '/contact': t('nav.contact'),
  }

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-white dark:border-slate-800/80 dark:bg-slate-900">
      {/* Subtle background gradient */}
      <div className="pointer-events-none absolute inset-0 hidden dark:block">
        <div className="absolute bottom-0 left-0 size-[400px] rounded-full bg-brand-secondary/4 blur-[80px] dark:bg-brand-secondary/10" />
        <div className="absolute bottom-0 right-0 size-[300px] rounded-full bg-brand-blue/4 blur-[60px] dark:bg-brand-blue/10" />
      </div>

      <div className="container relative py-14">
        {/* Top row */}
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
          {/* Brand column */}
          <div className="max-w-sm">
            <Link to="/" className="inline-block mb-5">
              <img
                src={`${import.meta.env.BASE_URL}assets/logo.webp`}
                alt="Medicacom Logo"
                className="h-8 w-auto object-contain mix-blend-multiply dark:mix-blend-normal"
              />
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {site.contact.description}
            </p>
            {/* Contact info */}
            <div className="space-y-2.5 text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2.5">
                <MapPin className="size-3.5 text-brand-secondary shrink-0" />
                <span>{site.contact.location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="size-3.5 text-brand-secondary shrink-0" />
                <a href={`tel:${site.contact.phone}`} className="transition-colors hover:text-brand-primary dark:hover:text-brand-secondary">
                  {site.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="size-3.5 text-brand-secondary shrink-0" />
                <a href={`mailto:${site.contact.email}`} className="font-medium transition-colors hover:text-brand-primary dark:hover:text-brand-secondary">
                  {site.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Links columns */}
          <div className="grid gap-10 sm:grid-cols-3">
            <div>
              <div className="mb-5 text-xs font-bold tracking-[0.15em] uppercase text-brand-primary dark:text-brand-secondary">
                {t('footer.navigation')}
              </div>
              <nav className="flex flex-col gap-2.5">
                {site.nav.map((n) => (
                  <Link
                    key={n.to}
                    className="text-sm font-medium text-slate-700 transition-colors hover:text-brand-primary dark:text-slate-300 dark:hover:text-brand-secondary"
                    to={n.to}
                  >
                    {navLabelByPath[n.to] ?? n.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <div className="mb-5 text-xs font-bold tracking-[0.15em] uppercase text-brand-primary dark:text-brand-secondary">
                {t('footer.expertises')}
              </div>
              <nav className="flex flex-col gap-2.5">
                {site.expertises.items.map((e) => (
                  <Link
                    key={e.to}
                    className="text-sm font-medium text-slate-700 transition-colors hover:text-brand-primary dark:text-slate-300 dark:hover:text-brand-secondary"
                    to={e.to}
                  >
                    {e.title}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <div className="mb-5 text-xs font-bold tracking-[0.15em] uppercase text-brand-primary dark:text-brand-secondary">
                {t('footer.resources')}
              </div>
              <nav className="flex flex-col gap-2.5">
                <Link className="text-sm font-medium text-slate-700 transition-colors hover:text-brand-primary dark:text-slate-300 dark:hover:text-brand-secondary" to="/contact">
                  {t('footer.bookDemo')}
                </Link>
                <Link className="text-sm font-medium text-slate-700 transition-colors hover:text-brand-primary dark:text-slate-300 dark:hover:text-brand-secondary" to="/carrieres">
                  {t('footer.joinTeam')}
                </Link>
                <a
                  href="https://calendly.com/cerebro-medicacom/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary transition-colors hover:text-brand-blue hover:underline dark:text-brand-secondary dark:hover:text-brand-accent"
                >
                  {t('footer.bookMeeting')} <ArrowUpRight className="size-3" />
                </a>
              </nav>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-700" />

        {/* Bottom row */}
        <div className="flex flex-col gap-3 text-xs text-slate-500 dark:text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {year} <span className="font-semibold text-brand-primary dark:text-brand-secondary">{site.brand.name}</span>. {t('footer.rightsReserved')}
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-brand-secondary animate-pulse" />
              {t('footer.systemOperational')}
            </span>
            <span className="text-slate-400 dark:text-slate-600">|</span>
            <span>{t('footer.location')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
