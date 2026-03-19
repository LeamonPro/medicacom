import { SEOHead } from '../components/SEOHead'
import { motion } from 'framer-motion'
import { Pill, Eye, Smartphone, FlaskConical, CheckCircle2, ArrowRight, BarChart3, Shield, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

const projects = [
  {
    id: 'psychotropes',
    icon: Pill,
    badge: 'Traçabilité Nationale',
    badgeColor: 'text-brand-secondary bg-brand-secondary/10',
    title: 'Plateforme Nationale de Gestion des Psychotropes et Stupéfiants',
    subtitle: 'Traçabilité & contrôle des médicaments sous réglementation spéciale',
    description:
      "Une plateforme nationale permettant d'assurer la traçabilité et le contrôle des médicaments sous réglementation spéciale, depuis la fabrication jusqu'à la dispensation au patient.",
    longDesc:
      "Medicacom a développé une infrastructure middleware nationale de collecte et centralisation des données de dispensation, interconnectant les principaux acteurs de la chaîne pharmaceutique.",
    actors: [
      'Industries pharmaceutiques',
      'Pharmacie Centrale de Tunisie (PCT)',
      'Grossistes répartiteurs',
      'Cliniques et hôpitaux',
      'Pharmacies d\'officine',
    ],
    highlights: [
      'Tableaux de bord décisionnels destinés aux autorités sanitaires',
      'Détection de fraudes par intelligence artificielle',
      'Prédiction de la consommation prévisionnelle',
    ],
    stat: { value: '-8%', label: "Réduction de la consommation de psychotropes (IQVIA)", color: 'text-brand-secondary' },
    image: null,
    border: 'border-brand-secondary/20',
    glow: 'from-brand-secondary/5',
  },
  {
    id: 'observatoire',
    icon: Eye,
    badge: 'Sécurité Approvisionnement',
    badgeColor: 'text-brand-blue bg-brand-blue/10',
    title: 'Observatoire National du Médicament',
    subtitle: "Une infrastructure digitale pour la sécurité de l'approvisionnement en médicaments",
    description:
      "Une infrastructure digitale de surveillance du marché pharmaceutique permettant de suivre en temps réel les stocks, les ventes et les tendances de consommation des médicaments.",
    longDesc:
      "Développé par Medicacom en collaboration avec les autorités sanitaires et le CNOPT, cet observatoire constitue un middleware national d'intégration de données, connectant les principaux acteurs de la chaîne pharmaceutique.",
    actors: [
      'Ministère de la Santé',
      'Pharmacie Centrale de Tunisie (PCT)',
      'Industries pharmaceutiques',
      'Grossistes répartiteurs',
      'CNOPT',
    ],
    highlights: [
      'IA prédictive pour anticiper les risques de pénurie',
      'IA générative pour rapports stratégiques automatiques',
      'Indicateurs stratégiques de disponibilité et couverture',
    ],
    stat: null,
    image: null,
    border: 'border-brand-blue/20',
    glow: 'from-brand-blue/5',
  },
  {
    id: 'apothicare',
    icon: Smartphone,
    badge: 'Application Nationale',
    badgeColor: 'text-brand-accent bg-brand-accent/10',
    title: 'ApothiCare',
    subtitle: "L'application mobile nationale de la pharmacie en Tunisie",
    description:
      "La première application mobile officielle dédiée à l'écosystème pharmaceutique en Tunisie, conçue pour connecter les patients, les pharmaciens et les autorités sanitaires au sein d'une même plateforme digitale.",
    longDesc:
      "Ce projet national, développé par l'Ordre des Pharmaciens de Tunisie en collaboration avec le Ministère de la Santé et réalisé par Medicacom, vise à moderniser l'accès aux soins et renforcer la sécurité des traitements.",
    actors: [],
    highlights: [
      'Dossier pharmaceutique numérique (historique des médicaments)',
      'Aide à la dispensation (interactions médicamenteuses)',
      'Outils d\'observance et d\'éducation thérapeutique',
      'Vérification des produits via scan et signalement',
    ],
    stat: null,
    image: '/assets/apothicare.png',
    border: 'border-brand-accent/20',
    glow: 'from-brand-accent/5',
  },
]

export function ProjectsPage() {
  return (
    <>
      <SEOHead
        title="Projets R&D"
        description="Explorez les projets nationaux de Medicacom : plateforme psychotropes, Observatoire du Médicament, ApothiCare. Solutions IA pour la santé publique tunisienne."
        url="https://www.medicacom.tn/projets"
        keywords="projets RD sante tunisie, psychotropes plateforme, observatoire medicament, apothicare application pharmacie, medicacom innovation"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-50 pt-24 pb-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 size-[600px] rounded-full bg-brand-accent/5 blur-[100px]" />
          <div className="absolute bottom-0 left-0 size-[400px] rounded-full bg-brand-blue/5 blur-[80px]" />
        </div>
        <div className="container relative">
          <motion.div {...fadeUp()} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-accent/30 bg-brand-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-accent mb-6">
              Projets R&D &amp; Innovation
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-brand-primary leading-tight">
              Projets R&D
            </h1>
            <p className="mt-6 text-xl text-slate-600 leading-relaxed max-w-2xl">
              Medicacom participe activement à la construction de l'infrastructure digitale du système de santé en Tunisie, à travers plusieurs plateformes stratégiques développées en collaboration avec les autorités sanitaires.
            </p>
          </motion.div>

          {/* Quick nav */}
          <motion.div {...fadeUp(0.2)} className="mt-10 flex flex-wrap gap-3">
            {projects.map(p => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-brand-primary/30 hover:text-brand-primary transition-all shadow-sm"
              >
                <p.icon className="size-4" /> {p.badge}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-8 bg-white">
        <div className="container space-y-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              id={proj.id}
              {...fadeUp(0.1)}
              className={`rounded-3xl border ${proj.border} bg-gradient-to-br ${proj.glow} to-transparent overflow-hidden shadow-sm`}
            >
              <div className="p-8 md:p-12">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                  <div className="flex items-center gap-4">
                    <div className={`inline-flex rounded-2xl p-3 ${proj.badgeColor.split(' ')[1]}`}>
                      <proj.icon className={`size-7 ${proj.badgeColor.split(' ')[0]}`} />
                    </div>
                    <div>
                      <span className={`text-xs font-bold uppercase tracking-widest ${proj.badgeColor.split(' ')[0]}`}>{proj.badge}</span>
                      <h2 className="text-2xl md:text-3xl font-bold text-brand-primary mt-1">{proj.title}</h2>
                    </div>
                  </div>
                  {proj.stat && (
                    <div className="rounded-2xl border border-slate-200 bg-white px-6 py-4 text-center shadow-sm">
                      <div className={`text-3xl font-black ${proj.stat.color}`}>{proj.stat.value}</div>
                      <div className="text-xs text-slate-500 mt-1 max-w-[140px] leading-tight">{proj.stat.label}</div>
                    </div>
                  )}
                </div>

                <p className="text-slate-500 font-semibold italic mb-4">{proj.subtitle}</p>
                <p className="text-slate-700 leading-relaxed mb-6">{proj.description}</p>
                <p className="text-slate-600 leading-relaxed mb-8">{proj.longDesc}</p>

                <div className={`grid gap-8 ${proj.image ? 'lg:grid-cols-2' : proj.actors.length ? 'lg:grid-cols-2' : ''}`}>
                  {/* Actors */}
                  {proj.actors.length > 0 && (
                    <div>
                      <h4 className="text-sm font-bold tracking-widest text-brand-primary uppercase mb-4 flex items-center gap-2">
                        <Users className="size-4" /> Acteurs interconnectés
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {proj.actors.map(a => (
                          <span key={a} className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 shadow-sm">{a}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Highlights */}
                  <div>
                    <h4 className="text-sm font-bold tracking-widest text-brand-primary uppercase mb-4 flex items-center gap-2">
                      <BarChart3 className="size-4" /> Fonctionnalités clés
                    </h4>
                    <ul className="space-y-3">
                      {proj.highlights.map(h => (
                        <li key={h} className="flex items-start gap-3">
                          <CheckCircle2 className={`size-4 shrink-0 mt-0.5 ${proj.badgeColor.split(' ')[0]}`} />
                          <span className="text-sm text-slate-700 leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Image */}
                  {proj.image && (
                    <div className="relative">
                      <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-brand-accent/20 to-transparent blur-xl z-0" />
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="relative z-10 w-full rounded-2xl shadow-xl border border-slate-200/50"
                      />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Innovation & Research */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container">
          <motion.div {...fadeUp()} className="max-w-2xl mb-12">
            <div className="text-sm font-bold tracking-widest text-brand-secondary uppercase mb-3">Open Innovation</div>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-primary">Innovation & Recherche</h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Forte d'une expertise confirmée dans le domaine de la santé numérique et de la data médicale, Medicacom s'engage activement dans le développement de l'écosystème d'innovation en santé en Tunisie. À travers une approche basée sur l'<strong>open innovation et la co-création</strong>, Medicacom développe des collaborations stratégiques avec les principaux acteurs du secteur.
            </p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                icon: FlaskConical,
                title: 'Un catalyseur de projets innovants',
                desc: "Medicacom accompagne le développement de projets innovants en apportant une expertise technologique avancée, un support en développement de solutions digitales et d'intelligence artificielle.",
                color: 'text-brand-secondary',
                bg: 'bg-brand-secondary/10',
              },
              {
                icon: Users,
                title: 'Collaborations académiques',
                desc: "Nos projets sont développés en étroite collaboration avec des chercheurs, des professeurs universitaires, des facultés de médecine et de pharmacie, et des hôpitaux universitaires.",
                color: 'text-brand-blue',
                bg: 'bg-brand-blue/10',
              },
              {
                icon: Shield,
                title: 'Valorisation scientifique',
                desc: "Medicacom participe à la production et à la diffusion de travaux scientifiques dans le domaine de la santé numérique et de l'analyse des données médicales.",
                color: 'text-brand-accent',
                bg: 'bg-brand-accent/10',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp(0.1 * i)}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className={`inline-flex rounded-xl ${item.bg} p-3 mb-5`}>
                  <item.icon className={`size-6 ${item.color}`} />
                </div>
                <h3 className="text-lg font-bold text-brand-primary mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp(0.3)} className="mt-12 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-blue hover:shadow-lg">
              Collaborer avec Medicacom <ArrowRight className="size-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
