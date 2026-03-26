import { SEOHead } from '../components/SEOHead'
import { site } from '../siteData'
import { motion } from 'framer-motion'
import { Target, Eye, CheckCircle2, Users, Globe, FlaskConical } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' as const },
})

// Client data with rich metadata for the logo cards
const clients = [
  { name: 'Opalia Recordati', initials: 'OR', category: 'Industrie Pharma', color: '#00A8A8', bg: 'from-teal-50 to-cyan-50', border: '#00A8A8', abbr: 'Opalia' },
  { name: 'Ministère de la Santé', initials: 'MS', category: 'Santé Publique', color: '#0050A4', bg: 'from-blue-50 to-indigo-50', border: '#0050A4', abbr: 'Min. Santé' },
  { name: 'Medis Pharma', initials: 'MP', category: 'Industrie Pharma', color: '#6C63FF', bg: 'from-violet-50 to-purple-50', border: '#6C63FF', abbr: 'Medis' },
  { name: 'Hikma', initials: 'HK', category: 'Industrie Pharma', color: '#D6163E', bg: 'from-rose-50 to-red-50', border: '#D6163E', abbr: 'Hikma' },
  { name: 'Thera Labo', initials: 'TL', category: 'Industrie Pharma', color: '#059669', bg: 'from-emerald-50 to-green-50', border: '#059669', abbr: 'Thera' },
  { name: 'CNOPT', initials: 'CN', category: 'Santé Publique', color: '#0B3C5D', bg: 'from-slate-50 to-blue-50', border: '#0B3C5D', abbr: 'CNOPT' },
  { name: 'Neapolis Pharma', initials: 'NP', category: 'Industrie Pharma', color: '#7C3AED', bg: 'from-purple-50 to-violet-50', border: '#7C3AED', abbr: 'Neapolis' },
  { name: 'SPOT', initials: 'SP', category: 'HealthTech', color: '#EA580C', bg: 'from-orange-50 to-amber-50', border: '#EA580C', abbr: 'SPOT' },
  { name: 'Agence Nationale du Médicament', initials: 'AN', category: 'Santé Publique', color: '#0050A4', bg: 'from-blue-50 to-sky-50', border: '#0050A4', abbr: 'Ag. Méd.' },
]

// Duplicate for seamless infinite scroll
const marqueeClients = [...clients, ...clients]

export function AboutPage() {
  return (
    <>
      <SEOHead
        title="À propos"
        description="Découvrez Medicacom, leader de la transformation digitale pharmaceutique en Tunisie. Vision, mission, domaines d'intervention en IA et Data Santé."
        url="https://www.medicacom.tn/a-propos"
        keywords="medicacom equipe, vision medicacom, mission IA pharma, transformation digitale sante tunisie"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-50 pt-24 pb-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 size-[600px] rounded-full bg-brand-secondary/5 blur-[100px]" />
          <div className="absolute bottom-0 left-0 size-[400px] rounded-full bg-brand-blue/5 blur-[80px]" />
        </div>
        <div className="container relative">
          <motion.div {...fadeUp()} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-secondary/30 bg-brand-secondary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-secondary mb-6">
              À Propos de Medicacom
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-brand-primary leading-tight">
              Qui sommes-nous ?
            </h1>
            <p className="mt-6 text-xl text-slate-600 leading-relaxed max-w-2xl">
              Medicacom est un leader de la transformation digitale du secteur de la santé. Nous accompagnons les industries pharmaceutiques, les institutions publiques et les acteurs du système de santé dans la modernisation de leurs infrastructures numériques.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Paragraphs */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div {...fadeUp(0.1)} className="space-y-5 text-slate-600 leading-relaxed text-lg">
              <p>
                Medicacom accompagne les industries pharmaceutiques, les institutions publiques et les acteurs du système de santé dans la modernisation de leurs infrastructures numériques et l'exploitation stratégique des données.
              </p>
              <p>
                Notre expertise combine connaissance du secteur, technologies avancées et intelligence artificielle, pour créer des solutions qui facilitent la prise de décision et améliorent la performance des acteurs de santé.
              </p>
            </motion.div>
            <motion.div
              {...fadeUp(0.2)}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Globe, label: 'Impact National', value: '10+ ans', color: 'text-brand-secondary' },
                { icon: Users, label: 'Clients Partenaires', value: '9+', color: 'text-brand-blue' },
                { icon: FlaskConical, label: 'Projets R&D', value: '3', color: 'text-brand-accent' },
                { icon: Target, label: 'Publications Scientifiques', value: '2+', color: 'text-brand-primary' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  {...fadeUp(0.1 * i)}
                  className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-6 hover:shadow-md transition-shadow"
                >
                  <stat.icon className={`size-6 ${stat.color}`} />
                  <div className="text-3xl font-bold text-brand-primary">{stat.value}</div>
                  <div className="text-sm font-medium text-slate-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Domains */}
      <section className="py-20 bg-slate-50 relative">
        <div className="absolute right-0 top-0 size-[400px] rounded-full bg-brand-accent/5 blur-[80px] pointer-events-none" />
        <div className="container">
          <motion.div {...fadeUp()} className="max-w-2xl mb-12">
            <div className="text-sm font-bold tracking-widest text-brand-secondary uppercase mb-3">Périmètre</div>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-primary">Nos domaines d'intervention</h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: FlaskConical,
                title: 'Industrie Pharmaceutique',
                description: "Valorisation et exploitation des données pour piloter les performances commerciales et décisionnelles, optimiser les processus et accélérer la transformation digitale.",
                color: 'text-brand-secondary',
                bg: 'bg-brand-secondary/10',
                border: 'border-brand-secondary/20',
              },
              {
                icon: Globe,
                title: 'Projets Nationaux de Santé Publique',
                description: "Développement de plateformes digitales structurantes, observatoires et systèmes de suivi pour améliorer la gouvernance, la traçabilité et la sécurité des médicaments à l'échelle nationale.",
                color: 'text-brand-blue',
                bg: 'bg-brand-blue/10',
                border: 'border-brand-blue/20',
              },
              {
                icon: Target,
                title: 'Innovation, R&D et Startups HealthTech',
                description: "Accompagnement, co-création et soutien aux projets innovants, en combinant expertise technique, conseil stratégique et production scientifique.",
                color: 'text-brand-accent',
                bg: 'bg-brand-accent/10',
                border: 'border-brand-accent/20',
              },
            ].map((domain, i) => (
              <motion.div
                key={domain.title}
                {...fadeUp(0.1 * i)}
                className={`rounded-2xl border ${domain.border} bg-white p-8 shadow-sm hover:shadow-lg transition-shadow`}
              >
                <div className={`inline-flex rounded-xl ${domain.bg} p-3 mb-5`}>
                  <domain.icon className={`size-6 ${domain.color}`} />
                </div>
                <h3 className="text-xl font-bold text-brand-primary mb-3">{domain.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{domain.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision + Mission + Why */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Vision */}
            <motion.div {...fadeUp(0)} className="rounded-2xl border border-brand-secondary/20 bg-gradient-to-br from-brand-secondary/5 to-transparent p-8">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="size-6 text-brand-secondary" />
                <span className="text-sm font-bold tracking-widest text-brand-secondary uppercase">Notre Vision</span>
              </div>
              <p className="text-brand-primary font-semibold text-lg leading-relaxed">
                {site.about.vision}
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div {...fadeUp(0.1)} className="rounded-2xl border border-brand-blue/20 bg-gradient-to-br from-brand-blue/5 to-transparent p-8">
              <div className="flex items-center gap-3 mb-4">
                <Target className="size-6 text-brand-blue" />
                <span className="text-sm font-bold tracking-widest text-brand-blue uppercase">Notre Mission</span>
              </div>
              <ul className="space-y-3">
                {site.about.mission.map((m) => (
                  <li key={m} className="flex items-start gap-2 text-slate-700 text-sm leading-relaxed">
                    <CheckCircle2 className="size-4 text-brand-blue shrink-0 mt-0.5" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Why */}
            <motion.div {...fadeUp(0.2)} className="rounded-2xl border border-brand-accent/20 bg-gradient-to-br from-brand-accent/5 to-transparent p-8">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="size-6 text-brand-accent" />
                <span className="text-sm font-bold tracking-widest text-brand-accent uppercase">Pourquoi Medicacom ?</span>
              </div>
              <ul className="space-y-3">
                {site.about.why.map((w) => (
                  <li key={w} className="flex items-start gap-2 text-slate-700 text-sm leading-relaxed">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-accent" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clients — Creative infinite marquee */}
      <section className="py-24 bg-white border-y border-slate-100 overflow-hidden relative">
        {/* Decorative background orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-32 top-1/2 -translate-y-1/2 size-[500px] rounded-full bg-brand-secondary/6 blur-[100px]" />
          <div className="absolute -right-32 top-1/2 -translate-y-1/2 size-[500px] rounded-full bg-brand-blue/6 blur-[100px]" />
        </div>

        <div className="container relative mb-14">
          <motion.div {...fadeUp()} className="text-center">
            {/* Category legend */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {[
                { label: 'Industrie Pharma', cls: 'bg-brand-secondary/10 text-brand-secondary border-brand-secondary/20' },
                { label: 'Santé Publique', cls: 'bg-brand-blue/10 text-brand-blue border-brand-blue/20' },
                { label: 'HealthTech', cls: 'bg-brand-accent/10 text-brand-accent border-brand-accent/20' },
              ].map((cat) => (
                <span key={cat.label} className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-bold tracking-wide ${cat.cls}`}>
                  <span className="size-1.5 rounded-full bg-current" />
                  {cat.label}
                </span>
              ))}
            </div>

            <div className="text-xs font-bold tracking-widest text-brand-secondary uppercase mb-3">Références</div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
              Ils nous font <span className="gradient-text">confiance</span>
            </h2>
            <p className="mt-3 text-slate-500 max-w-md mx-auto text-sm leading-relaxed">
              {site.clients.subtitle}
            </p>
          </motion.div>
        </div>

        {/* CSS marquee — pauses on hover */}
        <style>{`
          @keyframes marquee-scroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            display: flex;
            width: max-content;
            animation: marquee-scroll 30s linear infinite;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
        `}</style>

        {/* Fade masks */}
        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-28 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-28 bg-gradient-to-l from-white to-transparent" />

          <div className="overflow-hidden">
            <div className="marquee-track py-4">
              {marqueeClients.map((client, i) => (
                <div key={`${client.name}-${i}`} className="mx-3 flex-shrink-0 group">
                  <div
                    className={`relative flex items-center gap-4 rounded-2xl border bg-gradient-to-br ${client.bg} px-5 py-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default w-[230px]`}
                    style={{ borderColor: `${client.color}30` }}
                  >
                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-md -z-10"
                      style={{ background: `${client.color}18` }}
                    />
                    {/* Initials avatar */}
                    <div
                      className="flex size-11 shrink-0 items-center justify-center rounded-xl text-sm font-black text-white shadow-md"
                      style={{ background: `linear-gradient(135deg, ${client.color}, ${client.color}bb)` }}
                    >
                      {client.initials}
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-bold text-brand-primary leading-tight truncate">{client.abbr}</div>
                      <div className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide" style={{ color: client.color }}>
                        {client.category}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <motion.div
          {...fadeUp(0.2)}
          className="container relative mt-16 grid grid-cols-3 divide-x divide-slate-100"
        >
          {[
            { value: '9+', label: 'Clients & Partenaires', color: 'text-brand-secondary' },
            { value: '3', label: 'Secteurs couverts', color: 'text-brand-blue' },
            { value: '10+', label: "Années d'expertise", color: 'text-brand-accent' },
          ].map((stat) => (
            <div key={stat.label} className="px-6 text-center first:pl-0 last:pr-0">
              <div className={`text-4xl font-black ${stat.color}`}>{stat.value}</div>
              <div className="mt-1 text-xs font-semibold text-slate-500 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>
    </>
  )
}
