import { Link } from 'react-router-dom'
import { SEOHead } from '../components/SEOHead'
import { motion } from 'framer-motion'
import { ArrowRight, Cpu, Database, BrainCircuit, Code2, Cloud, BarChart3, Send } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

const roles = [
  {
    icon: Database,
    title: 'Data Engineer',
    domain: 'Data & Architecture',
    description: 'Conception et maintenance de pipelines ETL, Data Warehouses et architectures data lakehouse.',
    skills: ['Python', 'SQL', 'Apache Spark', 'dbt'],
    color: 'text-brand-secondary',
    bg: 'bg-brand-secondary/10',
    border: 'border-brand-secondary/20',
  },
  {
    icon: BarChart3,
    title: 'BI Consultant',
    domain: 'Business Intelligence',
    description: "Développement de tableaux de bord et rapports décisionnels pour l'industrie pharmaceutique.",
    skills: ['Power BI', 'DAX', 'SQL', 'Excel Advanced'],
    color: 'text-brand-blue',
    bg: 'bg-brand-blue/10',
    border: 'border-brand-blue/20',
  },
  {
    icon: BrainCircuit,
    title: 'ML Engineer',
    domain: 'Intelligence Artificielle',
    description: "Développement de modèles d'IA prédictive et IA générative pour les données de santé.",
    skills: ['Python', 'PyTorch', 'LLMs', 'MLflow'],
    color: 'text-brand-accent',
    bg: 'bg-brand-accent/10',
    border: 'border-brand-accent/20',
  },
  {
    icon: Code2,
    title: 'Full-Stack Developer',
    domain: 'Développement Web & Mobile',
    description: 'Création d\'applications web et mobiles innovantes pour l\'écosystème pharmaceutique et de santé.',
    skills: ['React', 'TypeScript', 'Node.js', 'React Native'],
    color: 'text-brand-primary',
    bg: 'bg-brand-primary/10',
    border: 'border-brand-primary/20',
  },
  {
    icon: Cpu,
    title: 'Product Manager',
    domain: 'Produit & Stratégie',
    description: "Pilotage du cycle de vie des produits digitaux en santé, de la roadmap à la mise en marché.",
    skills: ['Agile/Scrum', 'UX Research', 'OKRs', 'Jira'],
    color: 'text-brand-secondary',
    bg: 'bg-brand-secondary/10',
    border: 'border-brand-secondary/20',
  },
  {
    icon: Cloud,
    title: 'DevOps / Cloud',
    domain: 'Infrastructure & Cloud',
    description: "Déploiement et gestion des infrastructures cloud, CI/CD, et sécurisation des environnements de production.",
    skills: ['Docker', 'Kubernetes', 'Azure', 'GitHub Actions'],
    color: 'text-brand-blue',
    bg: 'bg-brand-blue/10',
    border: 'border-brand-blue/20',
  },
]

export function CareersPage() {
  return (
    <>
      <SEOHead
        title="Carrières"
        description="Rejoignez Medicacom ! Nous recrutons des Data Engineers, ML Engineers, BI Consultants passionnés par l'IA et la santé. Sfax, Tunisie."
        url="https://www.medicacom.tn/carrieres"
        keywords="emploi data sante tunisie, recruitement IA pharma, medicacom carrieres, data engineer tunisie, ml engineer sante"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-50 pt-24 pb-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 size-[600px] rounded-full bg-brand-accent/5 blur-[100px]" />
          <div className="absolute bottom-0 left-0 size-[400px] rounded-full bg-brand-secondary/5 blur-[80px]" />
        </div>
        <div className="container relative">
          <motion.div {...fadeUp()} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-accent/30 bg-brand-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-accent mb-6">
              Carrières
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-brand-primary leading-tight">
              Rejoignez l'équipe Medicacom
            </h1>
            <p className="mt-6 text-xl text-slate-600 leading-relaxed max-w-2xl">
              Nous construisons ensemble les solutions Data & IA qui transforment la santé en Tunisie. Rejoignez une équipe passionnée et innovante qui a un impact réel sur des millions de patients.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-blue hover:shadow-lg"
              >
                Postuler maintenant <ArrowRight className="size-4" />
              </Link>
              <a
                href="mailto:contact@medicacom.tn"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-3.5 text-sm font-semibold text-brand-primary transition-colors hover:bg-slate-50"
              >
                <Send className="size-4" /> contact@medicacom.tn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="container">
          <motion.div {...fadeUp()} className="text-center mb-10">
            <h2 className="text-2xl font-bold text-brand-primary">Pourquoi rejoindre Medicacom ?</h2>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { emoji: '🚀', title: 'Impact Réel', desc: "Vos solutions auront un effet direct sur la santé de millions de patients." },
              { emoji: '🧠', title: 'Technologie de Pointe', desc: "Travaillez avec les dernières technologies IA, Data et Cloud." },
              { emoji: '🌍', title: 'Projets Nationaux', desc: "Participez à des projets structurants pour le système de santé tunisien." },
              { emoji: '📈', title: 'Évolution Continue', desc: "Un environnement propice à votre développement professionnel et personnel." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp(0.1 * i)}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h3 className="font-bold text-brand-primary mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <motion.div {...fadeUp()} className="max-w-2xl mb-12">
            <div className="text-sm font-bold tracking-widest text-brand-secondary uppercase mb-3">Opportunités</div>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-primary">Postes ouverts</h2>
            <p className="mt-4 text-slate-600">
              Ces postes sont ouverts à candidature spontanée. Même si aucun ne correspond exactement à votre profil, n'hésitez pas à nous contacter.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {roles.map((role, i) => (
              <motion.div
                key={role.title}
                {...fadeUp(0.05 * i)}
                className={`group relative rounded-2xl border ${role.border} bg-white p-7 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${role.bg} to-transparent opacity-0 group-hover:opacity-50 transition-opacity`} />
                <div className="relative z-10">
                  <div className={`inline-flex rounded-xl ${role.bg} p-3 mb-5`}>
                    <role.icon className={`size-6 ${role.color}`} />
                  </div>
                  <div className={`text-xs font-bold uppercase tracking-widest ${role.color} mb-1`}>{role.domain}</div>
                  <h3 className="text-xl font-bold text-brand-primary mb-3">{role.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">{role.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {role.skills.map(s => (
                      <span key={s} className={`rounded-full border ${role.border} ${role.bg} px-3 py-1 text-xs font-semibold ${role.color}`}>{s}</span>
                    ))}
                  </div>
                  <div className={`text-xs font-bold uppercase tracking-widest text-slate-500`}>
                    Candidature spontanée ouverte
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="container max-w-3xl text-center">
          <motion.div {...fadeUp()}>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-5">
              Prêt à rejoindre l'aventure ?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Envoyez votre CV et un court message (poste visé, séniorité, localisation) à notre équipe RH. Nous vous répondrons dans les 48 heures.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-primary px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-brand-blue hover:shadow-lg"
              >
                Soumettre ma candidature <ArrowRight className="size-4" />
              </Link>
              <a
                href="mailto:contact@medicacom.tn?subject=Candidature Spontanée"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-semibold text-brand-primary transition-colors hover:bg-slate-50"
              >
                <Send className="size-4" /> Email direct
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
