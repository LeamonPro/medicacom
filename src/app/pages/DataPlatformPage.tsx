import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Database, ArrowLeft, BarChart3, Layers, Zap, Shield, ArrowRight } from 'lucide-react'
import { SEOHead } from '../components/SEOHead'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.55, delay, ease: 'easeOut' as const },
})

const steps = [
  {
    n: '01',
    Icon: Layers,
    title: 'Cartographie des données',
    desc: 'Identification des sources de données et analyse des types disponibles au sein de votre organisation.',
    color: 'text-brand-secondary',
    bg: 'bg-brand-secondary/8',
    border: 'border-brand-secondary/20',
    glow: 'from-brand-secondary/10',
  },
  {
    n: '02',
    Icon: Zap,
    title: 'Digitalisation des processus',
    desc: 'En collaboration avec vos équipes métier, développement de solutions pour numériser les processus opérationnels.',
    color: 'text-brand-blue',
    bg: 'bg-brand-blue/8',
    border: 'border-brand-blue/20',
    glow: 'from-brand-blue/10',
  },
  {
    n: '03',
    Icon: Database,
    title: 'Automatisation RPA',
    desc: 'Mise en place de Robotic Process Automation pour collecter automatiquement les données depuis sources multiples.',
    color: 'text-brand-accent',
    bg: 'bg-brand-accent/8',
    border: 'border-brand-accent/20',
    glow: 'from-brand-accent/10',
  },
  {
    n: '04',
    Icon: Layers,
    title: 'Mise en place des ETL',
    desc: "Développement de processus ETL pour l'intégration des données dans un environnement centralisé.",
    color: 'text-brand-secondary',
    bg: 'bg-brand-secondary/8',
    border: 'border-brand-secondary/20',
    glow: 'from-brand-secondary/10',
  },
  {
    n: '05',
    Icon: Database,
    title: 'Data Warehouse',
    desc: "Création d'un data warehouse structuré pour consolider les données et assurer leur disponibilité.",
    color: 'text-brand-blue',
    bg: 'bg-brand-blue/8',
    border: 'border-brand-blue/20',
    glow: 'from-brand-blue/10',
  },
  {
    n: '06',
    Icon: BarChart3,
    title: 'Tableaux de Bord Décisionnels',
    desc: 'Rapports analytiques et tableaux de bord pour faciliter la prise de décision stratégique.',
    color: 'text-brand-accent',
    bg: 'bg-brand-accent/8',
    border: 'border-brand-accent/20',
    glow: 'from-brand-accent/10',
  },
]

const benefits = [
  'Centraliser et fiabiliser les données multi-sources',
  "Accélérer l'accès aux KPIs décisionnels",
  'Améliorer la performance commerciale',
  "Sécuriser les informations critiques de l'entreprise",
]

export function DataPlatformPage() {
  return (
    <>
      <SEOHead
        title="Medicacom Data Platform"
        description="La plateforme data dédiée aux industries pharmaceutiques — ETL, Data Warehouse et Business Intelligence."
        url="https://www.medicacom.tn/expertises/data-platform"
        keywords="data platform pharma, ETL sante, data warehouse pharmaceutique, BI medicacom"
      />

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-brand-secondary/5 pt-28 pb-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 size-[700px] rounded-full bg-brand-secondary/8 blur-[120px]" />
          <div className="absolute bottom-0 right-0 size-[400px] rounded-full bg-brand-blue/6 blur-[100px]" />
        </div>

        <div className="container relative">
          {/* Back link */}
          <motion.div {...fadeUp()} className="mb-8">
            <Link
              to="/expertises"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-secondary hover:text-brand-secondary/80 transition-colors group"
            >
              <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
              Retour aux expertises
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp(0.1)}>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-brand-secondary/30 bg-brand-secondary/10 px-4 py-1.5 mb-6">
                <Database className="size-3.5 text-brand-secondary" />
                <span className="text-xs font-bold tracking-widest text-brand-secondary uppercase">Data Platform</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight">
                Medicacom{' '}
                <span className="gradient-text">Data Platform</span>
              </h1>
              <p className="mt-2 text-lg font-semibold text-brand-secondary">
                La plateforme data dédiée aux industries pharmaceutiques
              </p>
              <p className="mt-5 text-slate-600 leading-relaxed text-base">
                Une solution technologique conçue pour <strong className="text-brand-primary">collecter, transformer et valoriser</strong> les données
                des industries pharmaceutiques. Grâce à une architecture basée sur les technologies{' '}
                <strong className="text-brand-primary">ETL, Data Warehouse et Business Intelligence</strong>, la plateforme intègre
                les données provenant de multiples sources et les transforme en indicateurs stratégiques.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed text-sm">
                Notre approche combine expertise en consulting métier pharmaceutique et compétences IT, afin d'accompagner
                les laboratoires dans la structuration et la valorisation de leurs données.
              </p>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact#demo"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-secondary px-6 py-3 text-sm font-semibold text-white shadow-md hover:shadow-[0_0_24px_rgba(0,168,168,.4)] hover:-translate-y-0.5 transition-all"
                >
                  Réserver une démo <ArrowRight className="size-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-brand-primary hover:border-brand-secondary/40 hover:bg-brand-secondary/5 transition-all"
                >
                  Nous contacter
                </Link>
              </div>
            </motion.div>

            {/* Benefits card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <div className="relative rounded-3xl border border-brand-secondary/20 bg-white p-8 shadow-[0_4px_40px_rgba(0,168,168,.10)]">
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-brand-secondary/10 to-transparent pointer-events-none" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-brand-secondary/10">
                      <Shield className="size-5 text-brand-secondary" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-brand-secondary">Bénéfices clés</div>
                      <div className="text-base font-semibold text-brand-primary">Ce que vous gagnez</div>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {benefits.map((b, i) => (
                      <motion.li
                        key={b}
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 + i * 0.07 }}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-1.5 size-2 shrink-0 rounded-full bg-brand-secondary" />
                        <span className="text-sm text-slate-700 font-medium">{b}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-8 rounded-2xl border border-brand-secondary/20 bg-brand-secondary/5 p-5">
                    <div className="text-sm font-semibold text-brand-primary mb-1">Prêt à intégrer la plateforme ?</div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Discutons de vos sources de données, KPIs et priorités métiers lors d'une démo personnalisée.
                    </p>
                    <Link
                      to="/contact#demo"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-secondary hover:gap-2.5 transition-all"
                    >
                      Réserver une démo <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Methodology Steps ───────────────────────────────────────── */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container">
          <motion.div {...fadeUp()} className="mb-12 max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-widest text-brand-secondary mb-3">Méthodologie</div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">Notre approche en 6 étapes</h2>
            <p className="mt-3 text-slate-600">
              Une démarche structurée pour garantir une valeur maximale de vos données pharmaceutiques.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                {...fadeUp(0.05 * i)}
                className={`group relative rounded-2xl border ${step.border} bg-white p-6 shadow-[0_1px_3px_rgba(11,60,93,.05),0_4px_16px_rgba(11,60,93,.04)] hover:shadow-[0_4px_20px_rgba(11,60,93,.10)] hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${step.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`flex size-10 items-center justify-center rounded-xl ${step.bg}`}>
                      <step.Icon className={`size-5 ${step.color}`} />
                    </div>
                    <span className={`text-4xl font-black ${step.color} opacity-15`}>{step.n}</span>
                  </div>
                  <h3 className="font-bold text-brand-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Band ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-r from-brand-primary to-brand-blue relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 size-[400px] rounded-full bg-white/5 blur-[80px]" />
        </div>
        <div className="container relative text-center">
          <motion.div {...fadeUp()}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transformez vos données en avantage concurrentiel
            </h2>
            <p className="text-blue-100/80 max-w-xl mx-auto mb-8">
              Rejoignez les laboratoires qui pilotent leur performance avec la Medicacom Data Platform.
            </p>
            <Link
              to="/contact#demo"
              className="inline-flex items-center gap-2 rounded-full bg-brand-secondary px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:shadow-[0_0_32px_rgba(0,168,168,.5)] hover:-translate-y-0.5 transition-all"
            >
              Réserver une démo <ArrowRight className="size-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
