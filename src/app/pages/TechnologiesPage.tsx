import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Cpu, ArrowLeft, ChevronRight, Code2, GitMerge, RefreshCcw, Monitor, ArrowRight } from 'lucide-react'
import { SEOHead } from '../components/SEOHead'
import { TechOrbitSimulator } from '../components/TechOrbitSimulator'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.55, delay, ease: 'easeOut' as const },
})

const services = [
  {
    Icon: Monitor,
    title: 'Digitalisation',
    desc: 'Numérisation des données et des processus métiers pour une organisation 100% digitale.',
    color: 'text-brand-accent',
    bg: 'bg-brand-accent/8',
    border: 'border-brand-accent/20',
    glow: 'from-brand-accent/10',
  },
  {
    Icon: GitMerge,
    title: 'Intégration',
    desc: "Connexion multi-sources, middleware et gouvernance data — les silos n'existent plus.",
    color: 'text-brand-secondary',
    bg: 'bg-brand-secondary/8',
    border: 'border-brand-secondary/20',
    glow: 'from-brand-secondary/10',
  },
  {
    Icon: RefreshCcw,
    title: 'Automatisation (RPA)',
    desc: 'Collecte automatisée et réduction des tâches répétitives grâce à la robotisation.',
    color: 'text-brand-blue',
    bg: 'bg-brand-blue/8',
    border: 'border-brand-blue/20',
    glow: 'from-brand-blue/10',
  },
  {
    Icon: Code2,
    title: 'BI & Reporting',
    desc: 'Tableaux de bord, KPIs, pilotage et performance — la donnée au service de la décision.',
    color: 'text-brand-accent',
    bg: 'bg-brand-accent/8',
    border: 'border-brand-accent/20',
    glow: 'from-brand-accent/10',
  },
  {
    Icon: Monitor,
    title: 'Développement sur mesure',
    desc: 'Applications métier taillées pour votre organisation, de la conception au déploiement.',
    color: 'text-brand-secondary',
    bg: 'bg-brand-secondary/8',
    border: 'border-brand-secondary/20',
    glow: 'from-brand-secondary/10',
  },
]

export function TechnologiesPage() {
  return (
    <>
      <SEOHead
        title="Medicacom Technologies"
        description="Solutions IT sur mesure pour l'industrie pharmaceutique — digitalisation, intégration, RPA et BI."
        url="https://www.medicacom.tn/expertises/technologies"
        keywords="solutions IT pharma, RPA pharmaceutique, BI sante, intégration systèmes, Medicacom Technologies"
      />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-brand-accent/5 pt-28 pb-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 size-[600px] rounded-full bg-brand-accent/7 blur-[120px]" />
          <div className="absolute bottom-0 right-0 size-[400px] rounded-full bg-brand-secondary/6 blur-[100px]" />
        </div>

        <div className="container relative">
          {/* Back link */}
          <motion.div {...fadeUp()} className="mb-8">
            <Link
              to="/expertises"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent hover:text-brand-accent/80 transition-colors group"
            >
              <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
              Retour aux expertises
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp(0.1)}>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-brand-accent/30 bg-brand-accent/10 px-4 py-1.5 mb-6">
                <Cpu className="size-3.5 text-brand-accent" />
                <span className="text-xs font-bold tracking-widest text-brand-accent uppercase">Solutions IT</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight">
                Medicacom{' '}
                <span className="gradient-text">Technologies</span>
              </h1>
              <p className="mt-2 text-lg font-semibold text-brand-accent">
                Technologies, intégration et solutions sur mesure
              </p>
              <p className="mt-5 text-slate-600 leading-relaxed text-base">
                Nous aidons les organisations de santé et les laboratoires à{' '}
                <strong className="text-brand-primary">moderniser leurs infrastructures numériques</strong>, sécuriser
                leurs flux de données et industrialiser la production d'indicateurs décisionnels.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed text-sm">
                Digitalisation des processus, automatisation via RPA, intégration de données et modernisation
                d'infrastructures — des solutions IT sur mesure pour l'industrie pharmaceutique et les institutions de santé.
              </p>

              {/* Bullet list */}
              <ul className="mt-6 space-y-2.5">
                {[
                  'Digitalisation des processus métier pharmaceutique',
                  'Automatisation intelligente (RPA)',
                  'Intégration de systèmes et middleware',
                  'Modernisation des infrastructures IT',
                  "Développement d'applications sur mesure",
                ].map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.07 }}
                    className="flex items-center gap-3 text-slate-700"
                  >
                    <ChevronRight className="size-4 text-brand-accent shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-white shadow-md hover:shadow-[0_0_24px_rgba(108,99,255,.4)] hover:-translate-y-0.5 transition-all"
                >
                  Discuter de votre projet <ArrowRight className="size-4" />
                </Link>
                <Link
                  to="/contact#demo"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-brand-primary hover:border-brand-accent/40 hover:bg-brand-accent/5 transition-all"
                >
                  Prendre RDV
                </Link>
              </div>
            </motion.div>

            {/* Interactive Tech Orbit */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="flex items-center justify-center lg:justify-end"
            >
              <TechOrbitSimulator />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container">
          <motion.div {...fadeUp()} className="mb-12 max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-3">Nos services IT</div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">Ce que nous réalisons pour vous</h2>
            <p className="mt-3 text-slate-600">
              Des solutions concrètes, livrées par des experts alliant savoir-faire IT et connaissance du secteur pharmaceutique.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                {...fadeUp(0.06 * i)}
                className={`group relative rounded-2xl border ${service.border} bg-white p-6 shadow-[0_1px_3px_rgba(11,60,93,.05)] hover:shadow-[0_4px_20px_rgba(11,60,93,.10)] hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="relative">
                  <div className={`flex size-12 items-center justify-center rounded-xl ${service.bg} mb-4`}>
                    <service.Icon className={`size-6 ${service.color}`} />
                  </div>
                  <h3 className="font-bold text-brand-primary mb-2">{service.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Band ────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-r from-brand-primary to-brand-accent relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 size-[400px] rounded-full bg-white/5 blur-[80px]" />
        </div>
        <div className="container relative text-center">
          <motion.div {...fadeUp()}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Prêt à passer au digital ?
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8">
              Discutons de votre contexte : architecture cible, contraintes de sécurité, données disponibles, priorités métiers.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-brand-primary shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Discuter de votre projet <ArrowRight className="size-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
