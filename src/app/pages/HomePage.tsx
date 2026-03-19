import { Link } from 'react-router-dom'
import { site } from '../siteData'
import { motion } from 'framer-motion'
import { BrainCircuit, Database, Network, Shield, Cpu, Activity, ArrowRight, Zap, Orbit } from 'lucide-react'
import { SEOHead } from '../components/SEOHead'
import { CerebroSimulator } from '../components/CerebroSimulator'

function GlassCard({
  children,
  className = '',
  glowing = false,
}: {
  children: React.ReactNode
  className?: string
  glowing?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1 ${className}`}
    >
      {glowing && (
        <>
          <div className="absolute -inset-1 z-0 rounded-2xl bg-gradient-to-br from-brand-secondary/10 via-brand-blue/10 to-brand-accent/10 opacity-50 blur-2xl transition-opacity group-hover:opacity-100" />
          <div className="absolute inset-x-0 -top-px h-px w-full bg-gradient-to-r from-transparent via-brand-secondary/30 to-transparent" />
        </>
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}

function FloatingIcon({ icon: Icon, colorClass, delay = 0 }: any) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay }}
      className={`flex items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 shadow-lg ${colorClass}`}
    >
      <Icon className="size-8" />
    </motion.div>
  )
}

export function HomePage() {
  return (
    <>
      <SEOHead
        title="Accueil"
        description="Medicacom, pionnier de l'intelligence pharmaceutique en Tunisie. Solutions IA, Data Platform et transformation digitale pour le secteur de la santé."
        url="https://www.medicacom.tn"
        keywords="medicacom, IA santé, data platform pharma, intelligence artificielle tunisie, digitalisation pharmaceutique, healthtech, cerebro-rx"
      />
      <section className="relative flex min-h-[90vh] items-center overflow-hidden pt-20 bg-gradient-to-br from-[#082b44] via-brand-primary to-[#061d2d]">
        {/* Futuristic abstract background */}
        <div className="absolute inset-0 z-0 select-none">
          <img
            src="/assets/hero_bg.png"
            alt="Futuristic AI Pharma Data"
            className="w-full h-full object-cover mix-blend-overlay opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-primary/50 to-brand-primary/90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#082b44_100%)] opacity-80" />
          {/* Subtle noise/grid */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        </div>

        <div className="container relative z-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-secondary/40 bg-brand-secondary/20 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-brand-secondary backdrop-blur-md shadow-[0_0_15px_rgba(0,168,168,0.2)]">
                <Orbit className="size-4 animate-spin-slow" />
                Evolution Pharmaceutique & IT
              </div>
              <h1 className="mt-8 text-balance text-5xl font-bold tracking-tight text-white lg:text-7xl">
                L'Intelligence Artificielle <br />
                <span className="bg-gradient-to-r from-cyan-300 via-brand-secondary to-brand-accent bg-clip-text text-transparent drop-shadow-sm">
                  pour la Santé
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-white/80 leading-relaxed">
                Pionniers de la convergence entre Data, IA et innovation pharmaceutique. 
                Nous transformons les données de santé en actions stratégiques prédictives.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-8 py-3.5 text-sm font-bold text-brand-primary transition-all hover:bg-slate-100 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:-translate-y-0.5"
                  to={site.ctas.primary.to}
                >
                  <span className="relative z-10">Démarrer l'immersion</span>
                  <ArrowRight className="relative z-10 size-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:-translate-y-0.5"
                  to="/expertises"
                >
                  <Cpu className="size-4" />
                  Explorer la technologie
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative mx-auto aspect-square w-full max-w-md">
                <div className="absolute inset-0 animate-spin-slow rounded-full border border-white/15 bg-white/5 backdrop-blur-3xl shadow-[0_0_80px_rgba(0,168,168,0.15)]" />
                <div className="absolute inset-4 animate-[spin_15s_linear_infinite_reverse] rounded-full border border-brand-secondary/40" />
                <div className="absolute inset-12 animate-[spin_20s_linear_infinite] rounded-full border border-white/20 border-dashed" />
                
                {/* Floating Elements (White backgrounds so they pop off the dark blue) */}
                <div className="absolute left-0 top-1/4">
                  <FloatingIcon icon={BrainCircuit} colorClass="text-brand-secondary shadow-[0_0_30px_rgba(0,168,168,0.4)]" />
                </div>
                <div className="absolute right-0 top-1/3">
                  <FloatingIcon icon={Database} colorClass="text-brand-blue shadow-[0_0_30px_rgba(0,80,164,0.4)]" delay={1} />
                </div>
                <div className="absolute bottom-1/4 left-1/4">
                  <FloatingIcon icon={Shield} colorClass="text-brand-accent shadow-[0_0_30px_rgba(239,78,136,0.4)]" delay={2} />
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative size-48 rounded-full bg-white shadow-[0_0_80px_rgba(255,255,255,0.25)] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 to-brand-blue/10" />
                    <Activity className="relative z-10 size-20 text-brand-primary animate-pulse drop-shadow-md" />
                    <div className="absolute inset-0 rounded-full border-4 border-slate-100 border-t-brand-secondary animate-[spin_2s_linear_infinite]" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Futuristic Stats/Ticker Bar */}
      <div className="border-y border-slate-200 bg-white py-6">
        <div className="container flex flex-wrap items-center justify-between gap-8 text-sm font-mono text-slate-600">
          <div className="flex items-center gap-3">
            <div className="size-2 animate-ping rounded-full bg-brand-secondary" />
            <span className="font-semibold text-brand-primary">NEURAL_NETWORK: ONLINE</span>
          </div>
          <div className="flex items-center gap-3 hidden md:flex">
            <Zap className="size-4 text-brand-blue" />
            <span>DATA_THROUGHPUT: 98.5 TH/s</span>
          </div>
          <div className="flex items-center gap-3">
            <Network className="size-4 text-brand-accent" />
            <span>NODES_ACTIVE: 2,451</span>
          </div>
        </div>
      </div>

      <section className="py-24 relative bg-slate-50">
        <div className="absolute right-0 top-0 size-[500px] rounded-full bg-brand-secondary/5 blur-[120px] pointer-events-none" />
        <div className="container">
          <div className="max-w-3xl">
            <div className="text-sm font-bold tracking-widest text-brand-secondary uppercase mb-2">Algorithmes</div>
            <h2 className="text-3xl font-bold text-brand-primary md:text-5xl">Intelligence Décisionnelle</h2>
            <p className="mt-4 text-lg text-slate-600">
              Notre architecture propriétaire combine Machine Learning et Data Engineering pour sublimer l'écosystème de la santé.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 mt-12">
            {site.home.value.cards.map((c, i) => (
              <GlassCard key={c.title} glowing={i === 1} className="group">
                <div className="mb-4 inline-flex rounded-xl bg-slate-50 p-3 text-brand-secondary ring-1 ring-slate-200 transition-colors group-hover:bg-brand-secondary/10 group-hover:text-brand-secondary">
                  {i === 0 ? <Database className="size-6" /> : i === 1 ? <BrainCircuit className="size-6" /> : <Network className="size-6" />}
                </div>
                <h3 className="text-xl font-semibold text-brand-primary mt-4">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{c.description}</p>
                <div className="mt-6 flex items-center text-sm font-medium text-brand-blue opacity-0 transition-opacity group-hover:opacity-100">
                  Analyser le vecteur <ArrowRight className="ml-2 size-4" />
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden bg-white border-y border-slate-200">
        <div className="absolute left-0 top-0 size-[500px] rounded-full bg-brand-accent/5 blur-[120px] pointer-events-none" />
        <div className="container">
          {/* Feature 1: CEREBRO-RX (Image Right) */}
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-xs font-mono tracking-widest text-brand-secondary">IA GENERATIVE // CEREBRO-RX</div>
                <div className="rounded-full bg-brand-secondary/10 px-2 py-1 text-[10px] font-bold text-brand-secondary ring-1 ring-brand-secondary/30">V1.4 LIVE</div>
              </div>
              <h2 className="text-3xl font-bold text-brand-primary md:text-5xl">L'Agent IA Pharmaceutique</h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed mb-8">
                Un hub cognitif autonome qui interagit avec vos flux de données médicaux et commerciaux, fournissant des insights prescriptifs en temps réel pour optimiser vos pipelines cliniques.
              </p>
              <div className="space-y-4">
                {['Analyse prédictive des prescriptions', 'Ciblage dynamique des marchés', 'Reporting automatisé et intelligent'].map((item, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    key={i} 
                    className="flex items-center gap-3 text-sm text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200 hover:border-brand-secondary/30 transition-colors"
                  >
                    <Activity className="size-4 text-brand-secondary shrink-0" />
                    <span className="font-semibold">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="relative perspective-1000"
            >
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-brand-secondary/20 to-brand-blue/5 blur-2xl z-0" />
              <div className="relative z-10 w-full max-w-lg mx-auto transform translate-y-4">
                <CerebroSimulator />
              </div>
            </motion.div>
          </div>

          {/* Feature 2: Data Ecosystem (Image Left) */}
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="relative perspective-1000 order-last lg:order-first"
            >
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-brand-blue/20 to-brand-accent/5 blur-2xl z-0" />
              <img 
                src="/assets/saas_dashboard.png" 
                alt="Ecosysteme Data Dashboard" 
                className="relative z-10 w-full rounded-2xl shadow-2xl border border-slate-200/50 object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
            >
              <div className="text-sm font-bold tracking-widest text-brand-accent uppercase mb-4">Technologie Multi-Couches</div>
              <h2 className="text-3xl font-bold text-brand-primary md:text-5xl">Écosystème Data</h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed mb-8">
                De l'extraction à la visualisation, nous bâtissons des fondations data robustes. Synchronisez des millions de données patients, prescriptives et cliniques dans une vue unifiée.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Data Platform", desc: "Pipelines ETL, Data Lakes et modélisation dimensionnelle pour la santé.", icon: Database, delay: 0 },
                  { title: "Business Intelligence", desc: "Tableaux de bord interactifs et KPIs en temps réel pour une vision claire.", icon: Zap, delay: 0.1 }
                ].map((item) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: item.delay }}
                    viewport={{ once: true }}
                    className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_20px_rgba(0,168,168,0.1)] transition-all"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50 ring-1 ring-slate-200">
                      <item.icon className="size-5 text-brand-blue" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-brand-primary">{item.title}</h4>
                      <p className="mt-1 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 relative bg-slate-50">
        <div className="absolute right-0 bottom-0 size-[500px] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />
        <div className="container">
          <GlassCard className="!p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-primary opacity-5" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-brand-primary md:text-5xl">Prêt à intégrer l'intelligence ?</h2>
              <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg hover:text-slate-800 transition-colors">
                Accélérez votre transformation digitale avec nos solutions IA & Data conçues pour les leaders pharmaceutiques.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  className="rounded-full bg-brand-primary px-8 py-4 text-sm font-semibold text-white transition-transform hover:scale-105 hover:bg-brand-blue hover:shadow-lg"
                  to={site.ctas.primary.to}
                >
                  {site.ctas.primary.label}
                </Link>
                <Link
                  className="rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-semibold text-brand-primary transition-colors hover:bg-slate-50"
                  to="/contact"
                >
                  Contacter l'équipe
                </Link>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </>
  )
}
