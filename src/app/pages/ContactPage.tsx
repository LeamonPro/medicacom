import { useState, useCallback } from 'react'
import { site } from '../siteData'
import { SEOHead } from '../components/SEOHead'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MapPin, Phone, Mail, ArrowRight, CheckCircle2,
  Calendar, Zap, Shield, Clock, AlertCircle,
} from 'lucide-react'

/* ── Constants ─────────────────────────────────────────────────────────── */

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.55, delay, ease: 'easeOut' as const },
})

const reasons = [
  { Icon: Zap,      text: 'Réponse sous 24h garantie' },
  { Icon: Calendar, text: 'Démo personnalisée & gratuite' },
  { Icon: Shield,   text: 'Confidentialité totale de vos données' },
  { Icon: Clock,    text: 'Accompagnement sur le long terme' },
]

const contactCards = [
  { Icon: MapPin, label: 'Adresse',   value: site.contact.location, href: 'https://maps.google.com/?q=Sfax+Tunisie', color: 'text-brand-secondary', bg: 'bg-brand-secondary/10', border: 'border-brand-secondary/20' },
  { Icon: Phone,  label: 'Téléphone', value: site.contact.phone,    href: `tel:${site.contact.phone}`,               color: 'text-brand-blue',      bg: 'bg-brand-blue/10',      border: 'border-brand-blue/20'      },
  { Icon: Mail,   label: 'Email',     value: site.contact.email,    href: `mailto:${site.contact.email}`,            color: 'text-brand-accent',    bg: 'bg-brand-accent/10',    border: 'border-brand-accent/20'    },
]

/* ── Validation rules ──────────────────────────────────────────────────── */

type Fields = {
  nom: string
  entreprise: string
  email: string
  tel: string
  sujet: string
  message: string
}

type Errors = Partial<Record<keyof Fields, string>>

function validate(fields: Fields): Errors {
  const errors: Errors = {}

  if (!fields.nom.trim())
    errors.nom = 'Le nom complet est requis.'
  else if (fields.nom.trim().length < 2)
    errors.nom = 'Minimum 2 caractères.'

  if (!fields.entreprise.trim())
    errors.entreprise = "Le nom de l'entreprise est requis."

  if (!fields.email.trim())
    errors.email = "L'email est requis."
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
    errors.email = 'Adresse email invalide.'

  if (fields.tel && !/^[+\d\s\-().]{6,20}$/.test(fields.tel))
    errors.tel = 'Numéro de téléphone invalide.'

  if (!fields.message.trim())
    errors.message = 'Le message est requis.'
  else if (fields.message.trim().length < 20)
    errors.message = 'Minimum 20 caractères, merci de décrire votre besoin.'

  return errors
}

/* ── Component ─────────────────────────────────────────────────────────── */

export function ContactPage() {
  const [fields, setFields] = useState<Fields>({
    nom: '', entreprise: '', email: '', tel: '', sujet: 'Démo Medicacom Data Platform', message: '',
  })
  const [errors, setErrors]     = useState<Errors>({})
  const [touched, setTouched]   = useState<Partial<Record<keyof Fields, boolean>>>({})
  const [sent, setSent]         = useState(false)
  const [loading, setLoading]   = useState(false)

  /* Validate a single field on blur */
  const handleBlur = useCallback((name: keyof Fields) => {
    setTouched(t => ({ ...t, [name]: true }))
    setErrors(validate(fields))
  }, [fields])

  /* Update field value + re-validate touched fields */
  const handleChange = useCallback((name: keyof Fields, value: string) => {
    const updated = { ...fields, [name]: value }
    setFields(updated)
    if (touched[name]) setErrors(validate(updated))
  }, [fields, touched])

  /* Submit */
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Mark all fields as touched so errors become visible
    const allTouched = Object.keys(fields).reduce(
      (acc, k) => ({ ...acc, [k]: true }),
      {} as Record<keyof Fields, boolean>
    )
    setTouched(allTouched)
    const errs = validate(fields)
    setErrors(errs)
    if (Object.keys(errs).length > 0) return // stop if invalid

    setLoading(true)
    setTimeout(() => { setLoading(false); setSent(true) }, 1400)
  }

  const hasError = (name: keyof Fields) => touched[name] && !!errors[name]
  const isValid  = (name: keyof Fields) => touched[name] && !errors[name] && !!fields[name]

  return (
    <>
      <SEOHead
        title="Contact"
        description="Contactez Medicacom pour démarrer votre transformation digitale. Réservez une démo de nos solutions IA et Data pour le secteur pharmaceutique."
        url="https://www.medicacom.tn/contact"
        keywords="contact medicacom, demo data platform pharma, rdv medicacom, sfax tunisie IT sante"
      />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-primary via-brand-blue to-brand-accent pt-28 pb-20">
        <div className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 size-[500px] rounded-full bg-white/10 blur-[120px]" />
          <div className="absolute bottom-0 left-0 size-[300px] rounded-full bg-brand-secondary/30 blur-[100px]" />
        </div>
        <div className="container relative text-center">
          <motion.div {...fadeUp()}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white/80 mb-6 backdrop-blur-sm">
              Contact
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">Démarrons ensemble</h1>
            <p className="mt-5 text-lg text-white/70 max-w-xl mx-auto leading-relaxed">{site.contact.description}</p>
          </motion.div>
          <motion.div {...fadeUp(0.15)} className="mt-10 flex flex-wrap justify-center gap-3">
            {reasons.map(({ Icon, text }) => (
              <div key={text} className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium text-white/85 backdrop-blur-sm">
                <Icon className="size-3.5 text-brand-secondary" />{text}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Main content ─────────────────────────────────────────────── */}
      <section className="relative py-20 bg-slate-50">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 size-[600px] rounded-full bg-brand-secondary/5 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 size-[400px] rounded-full bg-brand-blue/5 blur-[100px]" />
        </div>
        <div className="container relative">
          <div className="grid gap-8 lg:grid-cols-12">

            {/* ── Form card ─────────────────────────────────────────── */}
            <motion.div {...fadeUp(0.05)} id="demo" className="lg:col-span-7">
              <div className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_4px_40px_rgba(11,60,93,.07)]">
                <div className="absolute top-0 left-8 right-8 h-0.5 rounded-full bg-gradient-to-r from-brand-secondary via-brand-blue to-brand-accent" />

                <AnimatePresence mode="wait">
                  {!sent ? (
                    <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <div className="mb-7">
                        <h2 className="text-2xl font-bold text-brand-primary">Réservez votre démo</h2>
                        <p className="mt-1.5 text-sm text-slate-500">Complétez le formulaire — nous vous rappelons sous 24h.</p>
                      </div>

                      <form onSubmit={handleSubmit} noValidate className="space-y-5">
                        <div className="grid gap-5 sm:grid-cols-2">
                          <ValidatedField
                            id="nom" label="Nom complet" placeholder="Votre nom" required
                            value={fields.nom} error={hasError('nom') ? errors.nom : undefined}
                            valid={isValid('nom')}
                            onChange={v => handleChange('nom', v)}
                            onBlur={() => handleBlur('nom')}
                          />
                          <ValidatedField
                            id="entreprise" label="Entreprise" placeholder="Nom de l'entreprise" required
                            value={fields.entreprise} error={hasError('entreprise') ? errors.entreprise : undefined}
                            valid={isValid('entreprise')}
                            onChange={v => handleChange('entreprise', v)}
                            onBlur={() => handleBlur('entreprise')}
                          />
                          <ValidatedField
                            id="email" label="Email professionnel" placeholder="nom@entreprise.com" type="email" required
                            value={fields.email} error={hasError('email') ? errors.email : undefined}
                            valid={isValid('email')}
                            onChange={v => handleChange('email', v)}
                            onBlur={() => handleBlur('email')}
                          />
                          <ValidatedField
                            id="tel" label="Téléphone" placeholder="+216 …"
                            value={fields.tel} error={hasError('tel') ? errors.tel : undefined}
                            valid={isValid('tel') && !!fields.tel}
                            onChange={v => handleChange('tel', v)}
                            onBlur={() => handleBlur('tel')}
                          />
                        </div>

                        {/* Subject */}
                        <div className="grid gap-1.5">
                          <label htmlFor="sujet" className="text-xs font-bold uppercase tracking-widest text-slate-500">
                            Sujet
                          </label>
                          <select
                            id="sujet"
                            value={fields.sujet}
                            onChange={e => handleChange('sujet', e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-brand-primary outline-none focus:border-brand-secondary/50 focus:ring-2 focus:ring-brand-secondary/10 transition-all"
                          >
                            <option>Démo Medicacom Data Platform</option>
                            <option>Démo CEREBRO-RX</option>
                            <option>Solutions IT / Technologies</option>
                            <option>Partenariat / R&D</option>
                            <option>Autre</option>
                          </select>
                        </div>

                        {/* Message */}
                        <div className="grid gap-1.5">
                          <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-slate-500">
                            Message <span className="text-brand-secondary">*</span>
                          </label>
                          <textarea
                            id="message"
                            rows={5}
                            value={fields.message}
                            onChange={e => handleChange('message', e.target.value)}
                            onBlur={() => handleBlur('message')}
                            placeholder="Décrivez votre contexte, objectifs, sources de données, délais… (min. 20 caractères)"
                            className={`w-full resize-none rounded-xl border px-4 py-3 text-sm text-brand-primary placeholder:text-slate-400 outline-none transition-all
                              ${hasError('message')
                                ? 'border-rose-400 bg-rose-50 focus:ring-2 focus:ring-rose-400/20'
                                : isValid('message')
                                  ? 'border-emerald-400 bg-emerald-50/30 focus:ring-2 focus:ring-emerald-400/20'
                                  : 'border-slate-200 bg-slate-50 focus:border-brand-secondary/50 focus:ring-2 focus:ring-brand-secondary/10'
                              }`}
                          />
                          <AnimatePresence>
                            {hasError('message') && (
                              <ErrorMsg key="msg-err" text={errors.message!} />
                            )}
                          </AnimatePresence>
                          {/* Character counter */}
                          <div className={`text-right text-[11px] font-medium transition-colors ${
                            fields.message.length < 20 && fields.message.length > 0
                              ? 'text-rose-400' : 'text-slate-400'
                          }`}>
                            {fields.message.length} / 20 min
                          </div>
                        </div>

                        {/* Footer */}
                        <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                          <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
                            Vos données sont traitées de manière confidentielle et ne sont jamais partagées.
                          </p>
                          <button
                            type="submit"
                            disabled={loading}
                            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-brand-primary px-7 py-3.5 text-sm font-bold text-white shadow-md hover:bg-brand-blue hover:shadow-[0_0_24px_rgba(0,80,164,.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-70"
                          >
                            {loading ? (
                              <><span className="size-4 rounded-full border-2 border-white/30 border-t-white animate-spin" /> Envoi…</>
                            ) : (
                              <>Envoyer <ArrowRight className="size-4" /></>
                            )}
                          </button>
                        </div>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-16 text-center"
                    >
                      <div className="flex size-16 items-center justify-center rounded-full bg-brand-secondary/10 mb-5">
                        <CheckCircle2 className="size-8 text-brand-secondary" />
                      </div>
                      <h3 className="text-2xl font-bold text-brand-primary">Message envoyé !</h3>
                      <p className="mt-3 text-slate-500 max-w-sm text-sm leading-relaxed">
                        Merci pour votre message. Notre équipe vous recontactera dans les 24 heures.
                      </p>
                      <button
                        onClick={() => { setSent(false); setFields({ nom: '', entreprise: '', email: '', tel: '', sujet: 'Démo Medicacom Data Platform', message: '' }); setTouched({}); setErrors({}) }}
                        className="mt-8 text-sm font-semibold text-brand-secondary hover:underline"
                      >
                        Envoyer un autre message
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* ── Right: Info + CTA ─────────────────────────────────── */}
            <div className="space-y-5 lg:col-span-5">
              {contactCards.map((card, i) => (
                <motion.a
                  key={card.label}
                  href={card.href}
                  target={card.label === 'Adresse' ? '_blank' : undefined}
                  rel={card.label === 'Adresse' ? 'noopener noreferrer' : undefined}
                  {...fadeUp(0.1 + i * 0.08)}
                  className={`group flex items-center gap-4 rounded-2xl border ${card.border} bg-white p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300`}
                >
                  <div className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${card.bg}`}>
                    <card.Icon className={`size-5 ${card.color}`} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400">{card.label}</div>
                    <div className="mt-0.5 text-sm font-semibold truncate text-brand-primary">{card.value}</div>
                  </div>
                  <ArrowRight className={`ml-auto size-4 shrink-0 ${card.color} opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all`} />
                </motion.a>
              ))}

              {/* CTA card */}
              <motion.div
                {...fadeUp(0.35)}
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-primary to-brand-blue p-6 shadow-lg"
              >
                <div className="absolute top-0 right-0 size-40 rounded-full bg-white/8 blur-2xl pointer-events-none" />
                <div className="relative">
                  <div className="text-sm font-bold text-white/60 uppercase tracking-widest mb-2">Action rapide</div>
                  <h3 className="text-lg font-bold text-white mb-1">Pas encore prêt pour une démo ?</h3>
                  <p className="text-sm text-white/65 mb-4 leading-relaxed">
                    Écrivez-nous directement — notre équipe répond en moins d'une journée.
                  </p>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-white/15 px-5 py-2.5 text-sm font-bold text-white hover:bg-white/25 transition-colors border border-white/20"
                  >
                    <Mail className="size-4" />{site.contact.email}
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Full-width map strip ─────────────────────────────────────── */}
      <section className="relative bg-white border-t border-slate-100">
        <div className="container py-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: 'easeOut' as const }}
            className="grid lg:grid-cols-3 gap-10 items-center"
          >
            <div className="lg:col-span-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-secondary/25 bg-brand-secondary/8 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-secondary mb-5">
                <MapPin className="size-3.5" />Notre bureau
              </div>
              <h2 className="text-2xl font-bold text-brand-primary mb-3">Où nous trouver</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Basés à Sfax, au cœur de la région économique tunisienne, nous intervenons à l'échelle nationale et régionale.
              </p>
              <div className="space-y-3">
                {[
                  { Icon: MapPin, text: site.contact.location, color: 'text-brand-secondary', bg: 'bg-brand-secondary/10' },
                  { Icon: Phone,  text: site.contact.phone,    color: 'text-brand-blue',      bg: 'bg-brand-blue/10'      },
                  { Icon: Mail,   text: site.contact.email,    color: 'text-brand-accent',    bg: 'bg-brand-accent/10'    },
                ].map(({ Icon, text, color, bg }) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className={`flex size-8 shrink-0 items-center justify-center rounded-lg ${bg}`}>
                      <Icon className={`size-4 ${color}`} />
                    </div>
                    <span className="text-sm font-medium text-slate-600">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-[0_4px_40px_rgba(11,60,93,.08)]">
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-full border border-white/60 bg-white/90 px-3 py-1.5 shadow-md backdrop-blur-sm">
                  <div className="size-2 rounded-full bg-brand-secondary animate-pulse" />
                  <span className="text-xs font-bold text-brand-primary">Sfax, Tunisie</span>
                </div>
                <iframe
                  title="Medicacom location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.1!2d10.76!3d34.74!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQ0JzI0LjAiTiAxMMKwNDUnMzYuMCJF!5e0!3m2!1sfr!2stn!4v1"
                  className="h-72 w-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

/* ── Sub-components ───────────────────────────────────────────────────── */

function ErrorMsg({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -6, height: 0 }}
      animate={{ opacity: 1, y: 0, height: 'auto' }}
      exit={{ opacity: 0, y: -6, height: 0 }}
      transition={{ duration: 0.2 }}
      className="flex items-center gap-1.5 text-xs font-semibold text-rose-500 overflow-hidden"
    >
      <AlertCircle className="size-3.5 shrink-0" />
      {text}
    </motion.div>
  )
}

function ValidatedField({
  id, label, placeholder, type = 'text', required,
  value, error, valid,
  onChange, onBlur,
}: {
  id: string
  label: string
  placeholder: string
  type?: string
  required?: boolean
  value: string
  error?: string
  valid?: boolean
  onChange: (v: string) => void
  onBlur: () => void
}) {
  const borderCls = error
    ? 'border-rose-400 bg-rose-50 focus:ring-rose-400/20'
    : valid
      ? 'border-emerald-400 bg-emerald-50/40 focus:ring-emerald-400/20'
      : 'border-slate-200 bg-slate-50 focus:border-brand-secondary/50 focus:ring-brand-secondary/10'

  return (
    <div className="grid gap-1.5">
      <label htmlFor={id} className="text-xs font-bold uppercase tracking-widest text-slate-500">
        {label}{required && <span className="ml-0.5 text-brand-secondary">*</span>}
      </label>
      <div className="relative">
        <input
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          required={required}
          onChange={e => onChange(e.target.value)}
          onBlur={onBlur}
          className={`w-full rounded-xl border px-4 py-3 text-sm text-brand-primary placeholder:text-slate-400 outline-none focus:ring-2 transition-all pr-9 ${borderCls}`}
        />
        {/* Inline icon feedback */}
        <AnimatePresence>
          {error && (
            <motion.span
              key="err-icon"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-rose-400"
            >
              <AlertCircle className="size-4" />
            </motion.span>
          )}
          {valid && (
            <motion.span
              key="ok-icon"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-500"
            >
              <CheckCircle2 className="size-4" />
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {error && <ErrorMsg key={`${id}-err`} text={error} />}
      </AnimatePresence>
    </div>
  )
}
