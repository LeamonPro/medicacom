import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BrainCircuit, ArrowLeft, CheckCircle2, ShieldCheck, Zap, BarChart3, Send, ArrowRight } from 'lucide-react'
import { SEOHead } from '../components/SEOHead'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.55, delay, ease: 'easeOut' as const },
})

const capabilities = [
  {
    Icon: BarChart3,
    title: 'Analyse automatique',
    desc: 'Analyse automatiquement de grandes quantités de données pharmaceutiques en quelques secondes.',
    color: 'text-brand-blue',
    bg: 'bg-brand-blue/8',
    border: 'border-brand-blue/20',
  },
  {
    Icon: Zap,
    title: 'Rapports intelligents',
    desc: 'Génère des rapports décisionnels intelligents adaptés aux enjeux de chaque laboratoire.',
    color: 'text-brand-accent',
    bg: 'bg-brand-accent/8',
    border: 'border-brand-accent/20',
  },
  {
    Icon: BrainCircuit,
    title: 'Analyses métier IA',
    desc: 'Produit des analyses métier contextualisées au secteur pharmaceutique tunisien et régional.',
    color: 'text-brand-secondary',
    bg: 'bg-brand-secondary/8',
    border: 'border-brand-secondary/20',
  },
  {
    Icon: Send,
    title: 'Automatisation des actions',
    desc: 'Automatise certaines actions : envoi de rapports, alertes intelligentes, planification.',
    color: 'text-brand-blue',
    bg: 'bg-brand-blue/8',
    border: 'border-brand-blue/20',
  },
]

const dataSources = [
  'Données commerciales',
  'Données marketing',
  'Données de distribution',
  'Données supply chain',
  'Données réglementaires',
]

export function CerebroRxPage() {
  return (
    <>
      <SEOHead
        title="CEREBRO-RX — IA Pharmaceutique"
        description="CEREBRO-RX est l'intelligence artificielle avancée de Medicacom pour transformer vos données pharmaceutiques en insights stratégiques."
        url="https://www.medicacom.tn/expertises/cerebro-rx"
        keywords="cerebro-rx IA, intelligence artificielle pharma, BI pharmaceutique IA, Medicacom AI"
      />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-brand-blue/5 pt-28 pb-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 size-[600px] rounded-full bg-brand-blue/8 blur-[120px]" />
          <div className="absolute bottom-0 left-0 size-[400px] rounded-full bg-brand-accent/6 blur-[100px]" />
        </div>

        <div className="container relative">
          {/* Back link */}
          <motion.div {...fadeUp()} className="mb-8">
            <Link
              to="/expertises"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-blue/80 transition-colors group"
            >
              <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
              Retour aux expertises
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp(0.1)}>
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center gap-2.5 rounded-full border border-brand-blue/30 bg-brand-blue/10 px-4 py-1.5">
                  <BrainCircuit className="size-3.5 text-brand-blue" />
                  <span className="text-xs font-bold tracking-widest text-brand-blue uppercase">IA Générative</span>
                </div>
                <span className="inline-flex items-center rounded-full bg-brand-secondary/10 px-2.5 py-1 text-[10px] font-bold text-brand-secondary ring-1 ring-brand-secondary/30">
                  V1.4 LIVE
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight">
                <span className="gradient-text">CEREBRO-RX</span>
              </h1>
              <p className="mt-2 text-lg font-semibold text-brand-blue">
                L'intelligence artificielle au service de la décision pharmaceutique
              </p>
              <p className="mt-5 text-slate-600 leading-relaxed text-base">
                CEREBRO-RX est la couche d'<strong className="text-brand-primary">intelligence artificielle avancée</strong>{' '}
                développée par Medicacom pour transformer les données pharmaceutiques en insights stratégiques et
                actions concrètes. Intégré nativement à la Medicacom Data Platform, il combine{' '}
                <strong className="text-brand-primary">analytique avancée</strong>, intelligence artificielle et{' '}
                <strong className="text-brand-primary">IA générative</strong>.
              </p>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact#demo"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-md hover:shadow-[0_0_24px_rgba(0,80,164,.4)] hover:-translate-y-0.5 transition-all"
                >
                  Découvrir la démo <ArrowRight className="size-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-brand-primary hover:border-brand-blue/40 hover:bg-brand-blue/5 transition-all"
                >
                  Nous contacter
                </Link>
              </div>
            </motion.div>

            {/* Data sources card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <div className="relative rounded-3xl border border-brand-blue/20 bg-white p-8 shadow-[0_4px_40px_rgba(0,80,164,.10)]">
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-brand-blue/10 to-transparent pointer-events-none" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-brand-blue/10">
                      <BrainCircuit className="size-5 text-brand-blue" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-brand-blue">Données traitées</div>
                      <div className="text-base font-semibold text-brand-primary">Sources maîtrisées par l'IA</div>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {dataSources.map((b, i) => (
                      <motion.li
                        key={b}
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 + i * 0.07 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle2 className="size-4 text-brand-blue shrink-0" />
                        <span className="text-sm text-slate-700 font-medium">{b}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <p className="mt-5 text-xs text-slate-400 leading-relaxed border-t border-slate-100 pt-5">
                    L'IA transforme ces données en indicateurs clés, analyses prédictives et rapports dynamiques.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Capabilities Grid ─────────────────────────────────────────── */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container">
          <motion.div {...fadeUp()} className="mb-12 max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-3">Capacités</div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">Une IA bien plus qu'un simple chatbot</h2>
            <p className="mt-3 text-slate-600">
              CEREBRO-RX agit comme un agent cognitif dédié à votre métier pharmaceutique.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                {...fadeUp(0.08 * i)}
                className={`group relative rounded-2xl border ${cap.border} bg-white p-6 shadow-[0_1px_3px_rgba(11,60,93,.05)] hover:shadow-[0_4px_20px_rgba(11,60,93,.10)] hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex size-12 shrink-0 items-center justify-center rounded-xl ${cap.bg}`}>
                    <cap.Icon className={`size-6 ${cap.color}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-primary mb-1.5">{cap.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Security section ─────────────────────────────────────────── */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp()}>
              <div className="text-xs font-bold uppercase tracking-widest text-brand-secondary mb-4">Sécurité & Conformité</div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
                Architecture sécurisée{' '}
                <span className="gradient-text">&amp; hybride</span>
              </h2>
              <p className="mt-5 text-slate-600 leading-relaxed">
                Grâce à son architecture hybride (local et cloud), CEREBRO-RX permet d'exploiter les capacités de l'IA
                tout en garantissant que les données sensibles restent protégées au sein de l'infrastructure de votre
                entreprise.
              </p>
              <div className="mt-6 rounded-2xl border border-brand-secondary/20 bg-brand-secondary/5 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="size-5 text-brand-secondary" />
                  <span className="font-bold text-brand-primary text-sm">Garantie de confidentialité</span>
                </div>
                <p className="text-sm text-slate-600">
                  <strong>Aucune donnée stratégique n'est partagée à l'extérieur</strong> de votre organisation.
                  CEREBRO-RX opère dans le respect total de vos contraintes réglementaires.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: 'Hybride', desc: 'Local + Cloud selon vos besoins', color: 'text-brand-secondary', border: 'border-brand-secondary/20', bg: 'bg-brand-secondary/5' },
                { label: 'Sécurisé', desc: 'Données protégées en permanence', color: 'text-brand-blue', border: 'border-brand-blue/20', bg: 'bg-brand-blue/5' },
                { label: 'Scalable', desc: "S'adapte à la croissance de vos données", color: 'text-brand-accent', border: 'border-brand-accent/20', bg: 'bg-brand-accent/5' },
                { label: 'Temps réel', desc: 'Insights disponibles à la demande', color: 'text-brand-primary', border: 'border-brand-primary/20', bg: 'bg-brand-primary/5' },
              ].map((item) => (
                <div key={item.label} className={`rounded-2xl border ${item.border} ${item.bg} p-6 hover:shadow-lg transition-shadow`}>
                  <div className={`text-2xl font-black ${item.color} mb-2`}>{item.label}</div>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA Band ────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-accent relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 size-[400px] rounded-full bg-white/5 blur-[80px]" />
        </div>
        <div className="container relative text-center">
          <motion.div {...fadeUp()}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Prêt à voir CEREBRO-RX en action ?
            </h2>
            <p className="text-blue-100/80 max-w-xl mx-auto mb-8">
              Voyez comment l'IA accélère l'analyse et l'action, sans complexité technique.
            </p>
            <Link
              to="/contact#demo"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-brand-blue shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Réserver une démo <ArrowRight className="size-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
