import { Link } from "react-router-dom";
import { site } from "../siteData";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-200 bg-white overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 size-[400px] rounded-full bg-brand-secondary/4 blur-[80px]" />
        <div className="absolute bottom-0 right-0 size-[300px] rounded-full bg-brand-blue/4 blur-[60px]" />
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
                className="h-8 w-auto object-contain mix-blend-multiply"
              />
            </Link>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {site.contact.description}
            </p>
            {/* Contact info */}
            <div className="space-y-2.5 text-sm text-slate-600">
              <div className="flex items-center gap-2.5">
                <MapPin className="size-3.5 text-brand-secondary shrink-0" />
                <span>{site.contact.location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="size-3.5 text-brand-secondary shrink-0" />
                <a href={`tel:${site.contact.phone}`} className="hover:text-brand-primary transition-colors">
                  {site.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="size-3.5 text-brand-secondary shrink-0" />
                <a href={`mailto:${site.contact.email}`} className="hover:text-brand-primary transition-colors font-medium">
                  {site.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Links columns */}
          <div className="grid gap-10 sm:grid-cols-3">
            <div>
              <div className="text-xs font-bold tracking-[0.15em] uppercase text-brand-secondary mb-5">
                Navigation
              </div>
              <nav className="flex flex-col gap-2.5">
                {site.nav.map((n) => (
                  <Link
                    key={n.to}
                    className="text-sm text-slate-600 hover:text-brand-primary transition-colors font-medium"
                    to={n.to}
                  >
                    {n.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <div className="text-xs font-bold tracking-[0.15em] uppercase text-brand-secondary mb-5">
                Expertises
              </div>
              <nav className="flex flex-col gap-2.5">
                {site.expertises.items.map((e) => (
                  <Link
                    key={e.to}
                    className="text-sm text-slate-600 hover:text-brand-primary transition-colors font-medium"
                    to={e.to}
                  >
                    {e.title}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <div className="text-xs font-bold tracking-[0.15em] uppercase text-brand-secondary mb-5">
                Ressources
              </div>
              <nav className="flex flex-col gap-2.5">
                <Link className="text-sm text-slate-600 hover:text-brand-primary transition-colors font-medium" to="/contact">
                  Réserver une démo
                </Link>
                <Link className="text-sm text-slate-600 hover:text-brand-primary transition-colors font-medium" to="/carrieres">
                  Rejoindre l'équipe
                </Link>
                <a
                  href="https://calendly.com/cerebro-medicacom/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-brand-secondary font-semibold hover:underline"
                >
                  Prendre RDV <ArrowUpRight className="size-3" />
                </a>
              </nav>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        {/* Bottom row */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs text-slate-400">
          <div>
            © {year} <span className="font-semibold text-brand-primary">{site.brand.name}</span>. Tous droits réservés.
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-brand-secondary animate-pulse" />
              Système opérationnel
            </span>
            <span className="text-slate-300">|</span>
            <span>Sfax, Tunisie</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
