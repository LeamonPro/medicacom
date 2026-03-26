import { Link } from 'react-router-dom'
import { site } from '../siteData'
import { motion } from 'framer-motion'
import { 
  BrainCircuit, Database, Network, Shield, Activity, ArrowRight, 
  BarChart3, TrendingUp, Users, Sparkles, Globe, Zap, Lightbulb, Eye
} from 'lucide-react'
import { SEOHead } from '../components/SEOHead'
import { CerebroSimulator } from '../components/CerebroSimulator'
import { useTheme } from '../components/ThemeContext'
import { useTranslation } from 'react-i18next'

const FloatingIcon = ({ icon: Icon, delay = 0, color = "text-[#2962B4]", isDark = false, iconClass = 'w-6 h-6', containerClass = 'p-3' }: any) => (
  <motion.div
    animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}
    className={`flex items-center justify-center rounded-2xl backdrop-blur-sm shadow-xl border ${containerClass} ${isDark ? 'bg-gray-800/90 border-gray-700' : 'bg-white/90 border-gray-100'} ${color}`}
  >
    <Icon className={iconClass} />
  </motion.div>
)

const GlassCard = ({ children, className = "", delay = 0, isDark = false }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className={`relative overflow-hidden rounded-2xl backdrop-blur-sm border p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${className} ${isDark ? 'bg-gray-800/80 border-gray-700' : 'bg-white/80 border-gray-100'}`}
  >
    {children}
  </motion.div>
)


export function HomePage() {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const domainCards = [
    {
      icon: BarChart3,
      image: `${import.meta.env.BASE_URL}assets/Visuel-pharmacie.jpg`,
      title: t('home.domains.cards.pharma.title'),
      alt: t('home.domains.cards.pharma.alt'),
      text: t('home.domains.cards.pharma.text'),
    },
    {
      icon: Shield,
      image: `${import.meta.env.BASE_URL}assets/santepublique.jpg`,
      title: t('home.domains.cards.publicHealth.title'),
      alt: t('home.domains.cards.publicHealth.alt'),
      text: t('home.domains.cards.publicHealth.text'),
    },
    {
      icon: BrainCircuit,
      image: `${import.meta.env.BASE_URL}assets/HealthTech.jpg`,
      title: t('home.domains.cards.healthTech.title'),
      alt: t('home.domains.cards.healthTech.alt'),
      text: t('home.domains.cards.healthTech.text'),
    },
  ]

  const missionCards = [
    {
      icon: TrendingUp,
      title: t('home.mission.cards.value.title'),
      description: t('home.mission.cards.value.description'),
      gradient: 'from-brand-secondary/10 to-[#2962B4]/20',
      iconColor: 'text-brand-secondary',
    },
    {
      icon: Shield,
      title: t('home.mission.cards.secure.title'),
      description: t('home.mission.cards.secure.description'),
      gradient: 'from-brand-secondary/10 to-[#2962B4]/20',
      iconColor: 'text-brand-secondary',
    },
    {
      icon: Lightbulb,
      title: t('home.mission.cards.innovate.title'),
      description: t('home.mission.cards.innovate.description'),
      gradient: 'from-brand-secondary/10 to-[#2962B4]/20',
      iconColor: 'text-brand-secondary',
    },
  ]

  const strengthsCards = [
    { icon: Shield, title: t('home.strengths.cards.expertise.title'), text: t('home.strengths.cards.expertise.text') },
    { icon: Sparkles, title: t('home.strengths.cards.innovation.title'), text: t('home.strengths.cards.innovation.text') },
    { icon: Globe, title: t('home.strengths.cards.impact.title'), text: t('home.strengths.cards.impact.text') },
  ]

  const cerebroBullets = [t('home.cerebro.bullet1'), t('home.cerebro.bullet2'), t('home.cerebro.bullet3')]

  const dataFeatures = [
    { title: t('home.data.features.platformTitle'), desc: t('home.data.features.platformDesc'), icon: Database, delay: 0 },
    { title: t('home.data.features.biTitle'), desc: t('home.data.features.biDesc'), icon: Zap, delay: 0.1 },
  ]

  return (
    <>
    

      <SEOHead
        title={t('home.seo.title')}
        description={t('home.seo.description')}
        url="https://www.medicacom.tn"
        keywords={t('home.seo.keywords')}
      />

      {/* Hero Section */}
      <section
        className={`relative min-h-screen flex items-center overflow-hidden transition-colors duration-300 ${isDark ? 'bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900' : 'bg-gradient-to-br from-[#0a1a2f] via-[#0a1a2f] to-[#0a1a2f]'}`}
      >
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                `url('${import.meta.env.BASE_URL}assets/hero_bg.png')`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a2f]/95 via-[#0a1a2f]/90 to-[#0a1a2f]/85" />

          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#2962B4] rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1e4a7a] rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2 bg-[#3a7bc9] rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000" />
          </div>

          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.1)'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.1)'} 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm border mb-6 ${isDark ? 'bg-brand-secondary/15 border-brand-secondary/30' : 'bg-brand-secondary/10 border-brand-secondary/20'}`}
              >
                <Sparkles className="w-4 h-4 text-brand-secondary" />
                <span
                  className="text-xs font-semibold uppercase tracking-wider text-brand-secondary"
                >
                  {t('home.hero.badge')}
                </span>
              </div>

              <h1
                className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 ${isDark ? 'text-white' : 'text-white'}`}
              >
                {t('home.hero.title1')}
                <span className="block bg-gradient-to-r from-[#0f4fb5] via-[#6de3ff] to-[#6de3ff] bg-clip-text text-transparent [text-shadow:0_2px_20px_rgba(22,177,255,0.28)]">
                  {t('home.hero.title2')}
                </span>
              </h1>

              <p className={`text-lg leading-relaxed mb-8 max-w-xl ${isDark ? 'text-gray-300' : 'text-gray-300'}`}>
                {t('home.hero.text')}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to={site.ctas.primary.to}
                  className="group relative inline-flex items-center gap-2 px-8 py-4 bg-[#2962B4] rounded-full text-white font-semibold hover:bg-[#1e4a7a] hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <span>{t('home.hero.ctaPrimary')}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className={`inline-flex items-center gap-2 px-8 py-4 backdrop-blur-sm border rounded-full font-semibold transition-all ${isDark ? 'bg-white/10 border-white/30 text-white hover:bg-white/20' : 'bg-white/10 border-white/30 text-white hover:bg-white/20'}`}
                >
                  <Users className="w-4 h-4" />
                  <span>{t('home.hero.ctaSecondary')}</span>
                </Link>
              </div>

              <div className={`flex items-center gap-6 mt-8 pt-8 border-t ${isDark ? 'border-white/20' : 'border-white/20'}`}>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute -top-10 -left-10">
                  <FloatingIcon icon={BrainCircuit} color="text-brand-secondary" iconClass="w-8 h-8" containerClass="p-4" isDark={isDark} />
                </div>
                <div className="absolute -bottom-10 -right-10">
                  <FloatingIcon icon={Database} delay={1.5} color="text-[#2962B4]" iconClass="w-8 h-8" containerClass="p-4" isDark={isDark} />
                </div>
                <div className="absolute top-1/2 -right-16">
                  <FloatingIcon icon={Network} delay={2.5} color="text-brand-secondary" iconClass="w-8 h-8" containerClass="p-4" isDark={isDark} />
                </div>

                <div className="relative w-80 h-80 mx-auto">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#2962B4] to-[#1e4a7a] animate-pulse opacity-50 blur-2xl" />
                  <div className="absolute inset-0 rounded-full border-4 border-white/20 animate-spin-slow" />
                  <div className="absolute inset-8 rounded-full border-4 border-[#2962B4]/30 animate-spin-reverse" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/30">
                      <Activity className="w-20 h-20 text-white animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    

      {/* Domains Section */}
      <section className={`py-24 transition-colors duration-300 ${isDark ? 'bg-gradient-to-b from-gray-900 to-gray-900' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="mb-5 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-brand-secondary/20" />
              <Globe className="h-5 w-5 text-brand-secondary" />
              <span className="text-sm md:text-base font-semibold uppercase tracking-[0.16em] text-brand-secondary">
                {t('home.domains.badge')}
              </span>
              <span className="h-px w-12 bg-brand-secondary/20" />
            </div>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t('home.domains.title1')}
              <span className={`mt-3 block text-xl md:text-2xl lg:text-3xl font-semibold ${isDark ? 'text-[#8bd9ff]' : 'text-[#2962B4]'}`}>
                {t('home.domains.title2')}
              </span>
              <span className="mx-auto mt-4 block h-1 w-32 rounded-full bg-gradient-to-r from-[#0f4fb5] via-[#1d7fe6] to-[#35c3ff]" />
            </h2>
            <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {domainCards.map((card, index) => (
              <GlassCard key={card.title} delay={0.1 + index * 0.1} isDark={isDark} className="group p-0">
                <div className="relative p-6">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#2962B4] to-[#1e4a7a]" />
                  <div className={`absolute -top-24 -right-24 w-56 h-56 rounded-full blur-3xl ${isDark ? 'bg-[#2962B4]/10' : 'bg-[#2962B4]/15'}`} />
                  <div className="relative flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${isDark ? 'bg-white/5 border-white/10' : 'bg-[#2962B4]/5 border-[#2962B4]/15'} group-hover:scale-[1.02] transition-transform`}>
                      <card.icon className="w-6 h-6 text-brand-secondary" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {card.title}
                      </h3>
                      <motion.div
                        className={`mb-4 overflow-hidden rounded-xl border ${isDark ? 'border-white/10 bg-white/5' : 'border-slate-200/70 bg-white'}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                      >
                        <img src={card.image} alt={card.alt} className="h-36 w-full object-cover" loading="lazy" />
                      </motion.div>
                      <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {card.text}
                      </p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          
        </div>
      </section>

      {/* Vision Section */}
      <section className={`relative py-24 overflow-hidden transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute top-10 -left-20 w-96 h-96 rounded-full blur-[110px] ${isDark ? 'bg-[#2962B4]/10' : 'bg-[#2962B4]/15'}`} />
          <div className={`absolute -bottom-20 right-0 w-[28rem] h-[28rem] rounded-full blur-[120px] ${isDark ? 'bg-[#1e4a7a]/10' : 'bg-[#1e4a7a]/15'}`} />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8 flex justify-center"
            >
              <div className="flex items-center justify-center gap-4">
                <span className="h-px w-12 bg-brand-secondary/20" />
                <Eye className="h-5 w-5 text-brand-secondary" />
                <span className="text-sm md:text-base font-semibold text-brand-secondary uppercase tracking-[0.16em]">
                  {t('home.vision.badge')}
                </span>
                <span className="h-px w-12 bg-brand-secondary/20" />
              </div>
            </motion.div>

            <div className="grid lg:grid-cols-[0.95fr_1.2fr] gap-8 lg:gap-10 items-start lg:items-center">
              <motion.div
                initial={{ opacity: 0, x: -24, rotateY: -5 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="space-y-5 lg:pt-4"
                style={{ transformStyle: 'preserve-3d' }}
              >
               
                <h2 className={`text-1xl md:text-4xl lg:text-1xl font-bold leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('home.vision.title1')}
                  <span className={`block mt-2 ${isDark ? 'text-[#8bd9ff]' : 'text-[#2962B4]'}`}>{t('home.vision.title2')}</span>
                </h2>

                <p className={`text-base md:text-lg leading-relaxed max-w-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t('home.vision.text')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24, rotateY: 8 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                whileHover={{ y: -10, rotateY: -10, rotateX: 6, scale: 1.015 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, type: 'spring' }}
                className="relative"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  animate={{ y: [0, -8, 0], rotate: [0, 1.5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -inset-5 rounded-[2rem] bg-gradient-to-tr from-[#2962B4]/25 to-[#1e4a7a]/10 blur-2xl"
                />

                <div className={`group relative overflow-hidden rounded-2xl border shadow-[0_30px_70px_rgba(9,30,66,0.28)] ${isDark ? 'border-gray-700 bg-gray-900/60' : 'border-slate-200 bg-white'}`}>
                  <img
                    src={`${import.meta.env.BASE_URL}assets/vision.jpg`}
                    alt={t('home.vision.imageAlt')}
                    className="h-72 md:h-[23rem] w-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#0a1a2f]/38" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a2f]/88 via-[#0a1a2f]/42 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a1a2f]/60 to-transparent" />
                  <div className="absolute left-5 right-5 bottom-5 md:left-7 md:right-7 md:bottom-7">
                    <p className="text-white text-sm md:text-base font-semibold leading-snug drop-shadow-lg">
                      {t('home.vision.captionTitle')}
                    </p>
                    <p className="text-white/85 text-xs md:text-sm mt-1 drop-shadow-lg">
                      {t('home.vision.captionText')}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>


  {/* Mission Section - Redesigned */}
      <section className={`relative py-24 transition-colors duration-300 overflow-hidden ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] ${isDark ? 'bg-[#2962B4]/5' : 'bg-[#2962B4]/10'}`} />
          <div className={`absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[80px] ${isDark ? 'bg-[#1e4a7a]/5' : 'bg-[#1e4a7a]/10'}`} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="mb-6 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-brand-secondary/20" />
              <Lightbulb className="h-5 w-5 text-brand-secondary" />
              <span className="text-sm md:text-base font-semibold text-brand-secondary uppercase tracking-[0.16em]">{t('home.mission.badge')}</span>
              <span className="h-px w-12 bg-brand-secondary/20" />
            </div>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t('home.mission.title1')}
              <span className={`block mt-2 ${isDark ? 'text-[#8bd9ff]' : 'text-[#2962B4]'}`}>{t('home.mission.title2')}</span>
            </h2>
            <p className={`text-lg leading-relaxed max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {t('home.mission.text')}
            </p>
          </motion.div>

          {/* Mission Cards with new design */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {missionCards.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-2 ${
                  isDark 
                    ? 'bg-gray-800/50 border-gray-600 hover:border-[#2962B4]/60 hover:shadow-xl hover:shadow-[#2962B4]/10' 
                    : 'bg-white border-slate-200 hover:border-[#2962B4]/40 hover:shadow-2xl'
                }`}
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${
                    isDark ? 'bg-gray-700/50' : 'bg-gray-50'
                  }`}>
                    <item.icon className={`w-7 h-7 ${item.iconColor} ${isDark ? 'text-white' : ''}`} />
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {item.title}
                  </h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {item.description}
                  </p>
                  
                </div>
              </motion.div>
            ))}
          </div>

        
        </div>
      </section>

      <section className={`relative py-20 transition-colors duration-300 overflow-hidden ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute top-0 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full blur-3xl ${isDark ? 'bg-[#2962B4]/20' : 'bg-[#2962B4]/15'}`} />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mx-auto max-w-6xl px-6 py-8 md:px-10 md:py-10"
          >
            <div className="text-center">
              <div className="mb-4 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-brand-secondary/30" />
                <Sparkles className="h-5 w-5 text-brand-secondary" />
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-secondary">{t('home.strengths.badge')}</span>
                <span className="h-px w-10 bg-brand-secondary/30" />
              </div>

              <h2 className={`text-3xl md:text-5xl font-black leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {t('home.strengths.titlePrefix')} <span className={`${isDark ? 'text-[#8bd9ff]' : 'text-[#2962B4]'}`}>{t('home.strengths.titleAccent')}</span>
              </h2>

             
            </div>

            <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3 md:gap-5">
              {strengthsCards.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 1, y: 0, scale: 1 }}
                  animate={{
                    y: [0, -5, 0],
                    rotate: [0, idx % 2 === 0 ? -0.35 : 0.35, 0],
                    boxShadow: isDark
                      ? ['0 8px 30px rgba(15, 23, 42, 0.24)', '0 12px 36px rgba(15, 23, 42, 0.32)', '0 8px 30px rgba(15, 23, 42, 0.24)']
                      : ['0 10px 26px rgba(41, 98, 180, 0.08)', '0 16px 34px rgba(41, 98, 180, 0.14)', '0 10px 26px rgba(41, 98, 180, 0.08)'],
                  }}
                  whileHover={{ y: -9, scale: 1.015 }}
                  transition={{ duration: 4.8, delay: idx * 0.08, repeat: Infinity, ease: 'easeInOut' }}
                  className={`group relative cursor-default overflow-hidden rounded-3xl border p-6 text-left transition-all duration-300 ${
                    isDark
                      ? 'border-gray-700/80 bg-gradient-to-b from-gray-800/70 to-gray-900/70 hover:border-[#8bd9ff]/50'
                      : 'border-slate-200 bg-gradient-to-b from-white to-slate-50 hover:border-[#2962B4]/45'
                  }`}
                >
                  <motion.span
                    animate={{ opacity: [0.55, 1, 0.55] }}
                    transition={{ duration: 4.6, delay: idx * 0.3, repeat: Infinity, ease: 'easeInOut' }}
                    className={`absolute left-0 top-0 h-1 w-full ${isDark ? 'bg-[#8bd9ff]/55' : 'bg-[#2962B4]/45'}`}
                  />
                  <motion.div
                    animate={{ opacity: [0.18, 0.4, 0.18], scale: [1, 1.14, 1] }}
                    transition={{ duration: 5.4, delay: idx * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                    className={`pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full blur-3xl ${isDark ? 'bg-[#8bd9ff]/25' : 'bg-[#2962B4]/25'}`}
                  />
                  <motion.span
                    animate={{ x: [-160, 420] }}
                    transition={{ duration: 5.2, delay: idx * 0.5, repeat: Infinity, repeatDelay: 1.1, ease: 'easeInOut' }}
                    className={`pointer-events-none absolute top-0 h-full w-20 -skew-x-12 ${isDark ? 'bg-white/5' : 'bg-white/60'}`}
                  />

                  <div className="relative z-10 mb-5 flex items-center justify-between">
                    <motion.div
                      animate={{ y: [0, -2, 0], rotate: [0, -5, 0], scale: [1, 1.04, 1] }}
                      transition={{ duration: 3.9, delay: idx * 0.35, repeat: Infinity, ease: 'easeInOut' }}
                      className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border ${isDark ? 'bg-[#8bd9ff]/15 border-[#8bd9ff]/30' : 'bg-[#2962B4]/10 border-[#2962B4]/20'}`}
                    >
                      <item.icon className={`h-4 w-4 ${isDark ? 'text-[#8bd9ff]' : 'text-[#2962B4]'}`} />
                    </motion.div>
                    <span className={`rounded-full px-3 py-1 text-[11px] font-extrabold tracking-[0.2em] ${isDark ? 'bg-[#8bd9ff]/10 text-[#8bd9ff]/85' : 'bg-[#2962B4]/10 text-[#2962B4]/80'}`}>
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="relative z-10">
                    <h3 className={`text-xl font-black leading-snug transition-colors duration-300 ${isDark ? 'text-white group-hover:text-[#8bd9ff]' : 'text-slate-900 group-hover:text-[#2962B4]'}`}>{item.title}</h3>
                    <p className={`mt-3 text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>{item.text}</p>
                  </div>

                 
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
  
  
      {/* CEREBRO-RX Feature */}
      <section className={`py-24 relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-gradient-to-br from-gray-900 to-gray-900' : 'bg-gradient-to-br from-[#fafbfc] to-[#fafbfc]'}`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(236, 237, 237, 0.1),transparent_50%)]" />
        </div>
         <div className="-mt-4 mb-6 flex items-center justify-center gap-4">
                <span className="h-px w-12 bg-brand-secondary/20" />
                <BrainCircuit className="h-5 w-5 text-brand-secondary" />
                <span className="text-sm md:text-base font-semibold text-brand-secondary uppercase tracking-[0.16em]">
                  {t('home.cerebro.badge')}
                </span>
                <span className="h-px w-12 bg-brand-secondary/20" />
              </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
             
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                CEREBRO-RX
                <span className={`${isDark ? 'text-[#8bd9ff]' : 'text-[#2962B4]'} block`}>{t('home.cerebro.title2')}</span>
              </h2>
              <p className={`text-lg leading-relaxed mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {t('home.cerebro.text')}
              </p>
              <div className="space-y-4">
                {cerebroBullets.map((item, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    key={i} 
                    className={`flex items-center gap-3 text-sm p-4 rounded-xl border transition-colors ${
                      isDark
                        ? 'text-gray-200 bg-gray-800/70 border-gray-700 hover:border-[#2962B4]/50'
                        : 'text-slate-700 bg-slate-50 border-slate-200 hover:border-brand-secondary/30'
                    }`}
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
              whileHover={{ rotateY: 8, rotateX: 5, y: -8, scale: 1.02 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="relative perspective-1000"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-brand-secondary/20 to-brand-blue/5 blur-2xl z-0" />
              <div className="relative z-10 w-full max-w-lg mx-auto transform translate-y-4 shadow-[0_22px_50px_rgba(41,98,180,0.25)] rounded-3xl">
                <CerebroSimulator />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Data Ecosystem Section */}
      <section className={`py-24 transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="mb-4 flex items-center justify-center gap-4">
                <span className="h-px w-12 bg-brand-secondary/20" />
                <Database className="h-5 w-5 text-brand-secondary" />
                <span className="text-sm md:text-base font-semibold text-brand-secondary uppercase tracking-[0.16em]">
                  {t('home.data.badge')}
                </span>
                <span className="h-px w-12 bg-brand-secondary/20" />
              </div>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-last lg:order-first"
            >
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#2962B4]/20 to-[#1e4a7a]/5 blur-2xl z-0" />
              <img 
                src={`${import.meta.env.BASE_URL}assets/saas_dashboard.png`} 
                alt={t('home.data.dashboardAlt')} 
                className="relative z-10 w-full rounded-2xl shadow-2xl border border-slate-200/50 object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
             
              <h2 className={`text-3xl font-bold md:text-5xl mb-6 ${isDark ? 'text-[#8bd9ff]' : 'text-[#2962B4]'}`}>{t('home.data.title')}</h2>
              <p className={`mt-6 text-lg leading-relaxed mb-8 ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
                {t('home.data.text')}
              </p>
              
              <div className="space-y-6">
                {dataFeatures.map((item) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: item.delay }}
                    viewport={{ once: true }}
                    className={`flex gap-4 p-4 rounded-2xl border shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_20px_rgba(41,98,180,0.1)] transition-all ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-slate-100'}`}
                  >
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ring-1 ${isDark ? 'bg-gray-700 ring-gray-600' : 'bg-slate-50 ring-slate-200'}`}>
                      <item.icon className="w-5 h-5 text-brand-secondary" />
                    </div>
                    <div>
                      <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.title}</h4>
                      <p className={`mt-1 text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      

      {/* CTA Final */}
      <section className="relative overflow-hidden py-24">
        <div className={`absolute inset-0 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`} />
        <div className={`absolute left-1/2 top-10 h-48 w-48 -translate-x-1/2 rounded-full blur-3xl ${isDark ? 'bg-[#4f83bf]/15' : 'bg-[#4f83bf]/18'}`} />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-5xl"
          >
            <div className="text-center">
           
          <div className="mb-4 flex items-center justify-center gap-4">
                <span className="h-px w-12 bg-brand-secondary/20" />
                <Sparkles className="h-5 w-5 text-brand-secondary" />
              <span className="text-sm md:text-base font-semibold text-brand-secondary uppercase tracking-[0.16em]">
                {t('home.cta.badge')}
              </span>
              <span className="h-px w-12 bg-brand-secondary/20" />
            </div>

              <h2 className={`mb-5 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl ${isDark ? 'text-[#8bd9ff]' : 'text-[#2962B4]'}`}>
                {t('home.cta.title')}
              </h2>

              <p className={`mx-auto max-w-3xl text-base md:text-lg ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
                {t('home.cta.text')}
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  to={site.ctas.primary.to}
                  className="inline-flex min-w-[210px] items-center justify-center rounded-xl bg-[#4f83bf] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3f74b3]"
                >
                  {t('nav.ctaPrimary')}
                </Link>
                <Link
                  to="/contact"
                  className={`inline-flex min-w-[210px] items-center justify-center rounded-xl border px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${isDark ? 'border-gray-500 bg-gray-800 text-gray-100 hover:bg-gray-700' : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'}`}
                >
                  {t('home.cta.secondary')}
                </Link>
              </div>

              <p className={`mt-4 text-xs ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
                {t('home.cta.response')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Add required CSS animations */}
      <style>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        .animate-spin-reverse {
          animation: spin-reverse 18s linear infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </>
  )
}