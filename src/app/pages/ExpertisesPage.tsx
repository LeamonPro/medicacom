import { Link } from 'react-router-dom'
import { SEOHead } from '../components/SEOHead'
import { site } from '../siteData'
import { motion } from 'framer-motion'
import { Database, BrainCircuit, Cpu, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

const icons = [Database, BrainCircuit, Cpu]
const colors = [
  { text: 'text-brand-secondary', bg: 'bg-brand-secondary/10', border: 'border-brand-secondary/30', glow: 'from-brand-secondary/10' },
  { text: 'text-brand-blue', bg: 'bg-brand-blue/10', border: 'border-brand-blue/30', glow: 'from-brand-blue/10' },
  { text: 'text-brand-accent', bg: 'bg-brand-accent/10', border: 'border-brand-accent/30', glow: 'from-brand-accent/10' },
]

const dataSteps = [
  { n: '01', title: 'Cartographie des données', desc: "Identification des différentes sources de données et analyse des types de données disponibles au sein de l'organisation." },
  { n: '02', title: 'Digitalisation des processus', desc: "En collaboration avec les équipes métier, développement de solutions pour numériser les processus opérationnels." },
  { n: '03', title: 'Automatisation RPA', desc: "Mise en place de Robotic Process Automation pour collecter automatiquement les données utiles à partir de multiples sources." },
  { n: '04', title: 'Mise en place des ETL', desc: "Développement de processus ETL (Extract, Transform, Load) pour l'intégration des données dans un environnement centralisé." },
  { n: '05', title: 'Data Warehouse', desc: "Création d'un data warehouse structuré permettant de consolider les données et d'assurer leur disponibilité pour l'analyse." },
  { n: '06', title: 'Tableaux de Bord Décisionnels', desc: "Mise en place de rapports analytiques et tableaux de bord destinés aux décideurs pour faciliter la prise de décision stratégique." },
]

export function ExpertisesPage() {
  return (
    <>
      <SEOHead
        title="Nos Expertises"
        description="Découvrez les expertises Medicacom : Data Platform pharmaceutique, CEREBRO-RX (agent IA), et solutions IT sur mesure pour la santé et l'industrie pharma."
        url="https://www.medicacom.tn/expertises"
        keywords="data platform pharma, cerebro-rx IA, medicacom expertises, BI pharmaceutique, ETL sante, solutions IT sante tunisie"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-50 pt-24 pb-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 size-[600px] rounded-full bg-brand-blue/5 blur-[100px]" />
          <div className="absolute bottom-0 left-0 size-[400px] rounded-full bg-brand-secondary/5 blur-[80px]" />
        </div>
        <div className="container relative">
          <motion.div {...fadeUp()} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-blue mb-6">
              Nos Expertises
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-brand-primary leading-tight">
              Plateformes, IA &amp; Technologies
            </h1>
            <p className="mt-6 text-xl text-slate-600 leading-relaxed max-w-2xl">
              Grâce à notre expertise alliant connaissance du secteur, technologies avancées et intelligence artificielle, nous accompagnons les laboratoires dans la transformation de leurs données en insights exploitables.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Expertise Cards Overview */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-3 items-stretch">
            {site.expertises.items.map((e, i) => {
              const Icon = icons[i]
              const c = colors[i]
              return (
                <motion.div key={e.to} {...fadeUp(0.1 * i)} className="h-full">
                  <Link
                    to={e.to}
                    className={`group h-full flex flex-col rounded-2xl border ${c.border} bg-white p-8 shadow-[0_1px_3px_rgba(11,60,93,.06),0_4px_24px_rgba(11,60,93,.04)] hover:shadow-[0_4px_12px_rgba(11,60,93,.10),0_12px_40px_rgba(11,60,93,.08)] transition-all duration-300 hover:-translate-y-1 relative overflow-hidden`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${c.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Icon + badge */}
                      <div className="flex items-start justify-between mb-5">
                        <div className={`icon-box ${c.bg}`}>
                          <Icon className={`size-6 ${c.text}`} />
                        </div>
                        <span className={`rounded-full border ${c.border} ${c.bg} px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest ${c.text}`}>
                          {i === 0 ? 'Data' : i === 1 ? 'AI' : 'IT'}
                        </span>
                      </div>
                      {/* Title + subtitle */}
                      <h2 className="text-xl font-extrabold text-brand-primary mb-1.5">{e.title}</h2>
                      <p className={`text-sm font-semibold ${c.text} mb-4`}>{e.subtitle}</p>
                      {/* Description */}
                      <p className="text-slate-600 text-sm leading-relaxed mb-6">{e.description}</p>
                      {/* Tags */}
                      {e.highlights?.length ? (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {e.highlights.map((h) => (
                            <span key={h} className={`rounded-full border ${c.border} ${c.bg} px-3 py-1 text-[11px] font-semibold ${c.text}`}>
                              {h}
                            </span>
                          ))}
                        </div>
                      ) : <div className="flex-1" />}
                      {/* CTA — always at bottom */}
                      <div className={`mt-auto flex items-center gap-1.5 text-sm font-bold ${c.text} pt-4 border-t ${c.border}`}>
                        Explorer <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>


      {/* ─── Medicacom Data Platform Detail ─── */}
      <section className="py-24 relative bg-slate-50" id="data-platform">
        <div className="absolute left-0 top-0 size-[500px] rounded-full bg-brand-secondary/5 blur-[100px] pointer-events-none" />
        <div className="container">
          <motion.div {...fadeUp()} className="flex items-center gap-3 mb-4">
            <div className="inline-flex rounded-xl bg-brand-secondary/10 p-2">
              <Database className="size-5 text-brand-secondary" />
            </div>
            <span className="text-xs font-bold tracking-widest text-brand-secondary uppercase">Data Platform</span>
          </motion.div>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start mb-16">
            <motion.div {...fadeUp(0.1)}>
              <h2 className="text-3xl md:text-5xl font-bold text-brand-primary">Medicacom Data Platform</h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Une solution technologique conçue pour collecter, transformer et valoriser les données des industries pharmaceutiques. Grâce à une architecture basée sur les technologies <strong>ETL, Data Warehouse et Business Intelligence</strong>, la plateforme permet d'intégrer les données provenant de multiples sources et de les transformer en indicateurs stratégiques et tableaux de bord décisionnels.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Notre approche combine expertise en consulting métier pharmaceutique et compétences IT, afin d'accompagner les laboratoires dans la structuration et la valorisation de leurs données.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-brand-secondary/20 to-brand-blue/5 blur-2xl z-0" />
              <img
                src="/assets/saas_dashboard.png"
                alt="Medicacom Data Platform Dashboard"
                className="relative z-10 w-full rounded-2xl shadow-2xl border border-slate-200/50"
              />
            </motion.div>
          </div>

          {/* Methodology Steps */}
          <motion.div {...fadeUp(0.1)} className="mb-6">
            <h3 className="text-2xl font-bold text-brand-primary">Notre Méthodologie</h3>
            <p className="mt-2 text-slate-600">Une approche structurée en 6 étapes pour garantir une valeur maximale de vos données.</p>
          </motion.div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {dataSteps.map((step, i) => (
              <motion.div
                key={step.n}
                {...fadeUp(0.05 * i)}
                className="relative rounded-2xl border border-slate-200 bg-white p-6 hover:border-brand-secondary/30 hover:shadow-lg transition-all"
              >
                <div className="text-4xl font-black text-brand-secondary/10 mb-3">{step.n}</div>
                <h4 className="font-bold text-brand-primary mb-2">{step.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CEREBRO-RX Detail ─── */}
      <section className="py-24 relative bg-white border-y border-slate-200" id="cerebro-rx">
        <div className="absolute right-0 top-0 size-[500px] rounded-full bg-brand-blue/5 blur-[100px] pointer-events-none" />
        <div className="container">
          <motion.div {...fadeUp()} className="flex items-center gap-3 mb-4">
            <div className="inline-flex rounded-xl bg-brand-blue/10 p-2">
              <BrainCircuit className="size-5 text-brand-blue" />
            </div>
            <span className="text-xs font-bold tracking-widest text-brand-blue uppercase">IA Générative</span>
            <span className="rounded-full bg-brand-secondary/10 px-2 py-0.5 text-[10px] font-bold text-brand-secondary ring-1 ring-brand-secondary/30">V1.4 LIVE</span>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative order-last lg:order-first"
            >
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-brand-blue/20 to-brand-accent/5 blur-2xl z-0" />
              <img
                src="/assets/cerebro_rx.png"
                alt="CEREBRO-RX AI Interface"
                className="relative z-10 w-full rounded-2xl shadow-2xl border border-slate-200/50"
              />
            </motion.div>

            <motion.div {...fadeUp(0.1)}>
              <h2 className="text-3xl md:text-5xl font-bold text-brand-primary">CEREBRO-RX</h2>
              <p className="mt-3 text-lg font-semibold text-brand-blue">L'intelligence artificielle au service de la décision pharmaceutique</p>
              <p className="mt-5 text-slate-600 leading-relaxed">
                CEREBRO-RX est la couche d'intelligence artificielle avancée développée par Medicacom pour transformer les données pharmaceutiques en insights stratégiques et actions concrètes. Intégré nativement à la Medicacom Data Platform, CEREBRO-RX combine analytique avancée, intelligence artificielle et IA générative.
              </p>

              <div className="mt-8 space-y-4">
                <h3 className="font-bold text-brand-primary">Une IA bien plus qu'un simple chatbot :</h3>
                {[
                  'Analyser automatiquement de grandes quantités de données',
                  'Générer des rapports décisionnels intelligents',
                  'Produire des analyses métier adaptées au secteur pharmaceutique',
                  'Automatiser certaines actions (envoi de rapports, alertes, planification)',
                ].map((feat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 border border-slate-200 hover:border-brand-blue/30 transition-colors"
                  >
                    <CheckCircle2 className="size-4 text-brand-blue shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700 font-medium">{feat}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-brand-blue/20 bg-brand-blue/5 p-6">
                <h4 className="font-bold text-brand-primary mb-3 flex items-center gap-2">
                  <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-bold text-green-700">🔒 SÉCURISÉ</span>
                  Architecture sécurisée et hybride
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Grâce à son architecture hybride (local et cloud), CEREBRO-RX permet d'exploiter les capacités de l'IA tout en garantissant que les données sensibles restent protégées au sein de l'infrastructure de l'entreprise. <strong>Aucune donnée stratégique n'est partagée à l'extérieur.</strong>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Medicacom Technologies ─── */}
      <section className="py-24 bg-slate-50" id="technologies">
        <div className="container">
          <motion.div {...fadeUp()} className="flex items-center gap-3 mb-4">
            <div className="inline-flex rounded-xl bg-brand-accent/10 p-2">
              <Cpu className="size-5 text-brand-accent" />
            </div>
            <span className="text-xs font-bold tracking-widest text-brand-accent uppercase">Solutions IT</span>
          </motion.div>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div {...fadeUp(0.1)}>
              <h2 className="text-3xl md:text-5xl font-bold text-brand-primary">Medicacom Technologies</h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Digitalisation des processus, automatisation via RPA, intégration de données et modernisation d'infrastructures numériques — des solutions IT sur mesure pour l'industrie pharmaceutique et les institutions de santé.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  { icon: ChevronRight, text: 'Digitalisation des processus métier pharmaceutique' },
                  { icon: ChevronRight, text: 'Automatisation intelligente (RPA)' },
                  { icon: ChevronRight, text: 'Intégration de systèmes et middleware' },
                  { icon: ChevronRight, text: 'Modernisation des infrastructures IT' },
                  { icon: ChevronRight, text: 'Développement d\'applications sur mesure' },
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3 text-slate-700"
                  >
                    <item.icon className="size-5 text-brand-accent shrink-0 mt-0.5" />
                    <span className="font-medium">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-10">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-blue hover:shadow-lg">
                  Discuter de votre projet <ArrowRight className="size-4" />
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex items-center justify-center lg:justify-end"
            >
              <TechOrbitSimulator />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
