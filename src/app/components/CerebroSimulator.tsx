import { motion } from 'framer-motion'
import { BrainCircuit, Database, Activity, Dna, FileText, Zap } from 'lucide-react'
import { useState, useEffect } from 'react'

const LOGS = [
  "Initialisation du réseau de neurones CEREBRO-RX...",
  "Connexion aux bases de données cliniques [OK]",
  "Analyse de 2.4M dossiers patients anonymisés...",
  "Extraction temporelle des prescriptions...",
  "Calcul des probabilités de rupture de traitement...",
  "Ciblage géographique : Région Sfax [Haut Risque]",
  "Génération de recommandations pour délégués médicaux...",
  "Optimisation terminée. Modèle stabilisé."
]

export function CerebroSimulator() {
  const [logIndex, setLogIndex] = useState(0)
  const [displayedLogs, setDisplayedLogs] = useState<string[]>([])
  const [accuracy, setAccuracy] = useState(87.4)

  // Terminal log typing effect
  useEffect(() => {
    if (logIndex < LOGS.length) {
      const timer = setTimeout(() => {
        setDisplayedLogs((prev) => [...prev, LOGS[logIndex]].slice(-4)) // Keep only last 4
        setLogIndex(i => i + 1)
      }, 1500 + Math.random() * 1000)
      return () => clearTimeout(timer)
    } else {
      // Loop the logs for infinite effect
      const timer = setTimeout(() => {
        setLogIndex(0)
        setDisplayedLogs([])
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [logIndex])

  // Live Accuracy Ticker
  useEffect(() => {
    const timer = setInterval(() => {
      // Fluctuate between 98.4 and 99.9
      setAccuracy(98.4 + Math.random() * 1.5)
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-[#0b1622] p-1 shadow-[0_20px_50px_rgba(0,168,168,0.2)] border border-white/10">
      {/* Background glow & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,168,168,0.15)_0%,transparent_70%)]" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

      <div className="relative flex flex-col items-center p-8 z-10">
        
        {/* Top Header */}
        <div className="flex w-full items-center justify-between mb-10">
          <div className="flex items-center gap-2">
            <div className="size-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-[10px] tracking-widest text-emerald-400/80">CORE ENGINE ONLINE</span>
          </div>
          <div className="font-mono text-[10px] text-white/40">
            PRÉCISION: <span className="text-white font-bold">{accuracy.toFixed(1)}%</span>
          </div>
        </div>

        {/* Central Visualization */}
        <div className="relative flex w-full max-w-[280px] items-center justify-center aspect-square mb-8">
          
          {/* Animated Connecting SVG Lines */}
          <svg className="absolute inset-0 size-full" style={{ filter: 'drop-shadow(0 0 4px rgba(0,168,168,0.5))' }}>
            <motion.path 
              d="M 20,40 Q 140,40 140,140" 
              fill="none" 
              stroke="url(#grad1)" 
              strokeWidth="2"
              strokeDasharray="4 4"
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <motion.path 
              d="M 260,40 Q 140,40 140,140" 
              fill="none" 
              stroke="url(#grad2)" 
              strokeWidth="2"
              strokeDasharray="4 4"
              initial={{ strokeDashoffset: -100 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <motion.path 
              d="M 20,240 Q 140,240 140,140" 
              fill="none" 
              stroke="url(#grad1)" 
              strokeWidth="2"
              strokeDasharray="4 4"
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <motion.path 
              d="M 260,240 Q 140,240 140,140" 
              fill="none" 
              stroke="url(#grad2)" 
              strokeWidth="2"
              strokeDasharray="4 4"
              initial={{ strokeDashoffset: -100 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00A8A8" stopOpacity="0" />
                <stop offset="100%" stopColor="#00A8A8" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0050A4" stopOpacity="0" />
                <stop offset="100%" stopColor="#0050A4" stopOpacity="1" />
              </linearGradient>
            </defs>
          </svg>

          {/* Core Node */}
          <motion.div 
            animate={{ scale: [1, 1.05, 1], boxShadow: ['0 0 20px rgba(0,168,168,0.2)', '0 0 60px rgba(0,168,168,0.6)', '0 0 20px rgba(0,168,168,0.2)'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 flex size-24 items-center justify-center rounded-full bg-gradient-to-br from-brand-secondary to-brand-blue shadow-[0_0_40px_rgba(0,168,168,0.5)] border border-white/20"
          >
            <BrainCircuit className="size-10 text-white drop-shadow-lg" />
            
            {/* Scanning Ring */}
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full border border-transparent border-t-emerald-400/50 border-r-emerald-400/20"
            />
          </motion.div>

          {/* Floating Data Sources */}
          <div className="absolute top-0 left-0 flex flex-col items-center">
            <div className="flex size-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] text-white/60">
              <Database className="size-4" />
            </div>
            <span className="mt-2 text-[8px] font-mono text-white/40">E-SANTÉ</span>
          </div>

          <div className="absolute top-0 right-0 flex flex-col items-center">
            <div className="flex size-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] text-white/60">
              <Dna className="size-4" />
            </div>
            <span className="mt-2 text-[8px] font-mono text-white/40">CLINIQUE</span>
          </div>

          <div className="absolute bottom-0 left-0 flex flex-col items-center">
            <div className="flex size-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] text-white/60">
              <Activity className="size-4" />
            </div>
            <span className="mt-2 text-[8px] font-mono text-white/40">IOT / WEARABLES</span>
          </div>

          <div className="absolute bottom-0 right-0 flex flex-col items-center">
            <div className="flex size-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] text-white/60">
              <FileText className="size-4" />
            </div>
            <span className="mt-2 text-[8px] font-mono text-white/40">PRESCRIPTIONS</span>
          </div>

        </div>

        {/* Terminal Window */}
        <div className="w-full rounded-xl bg-black/40 border border-white/5 p-4 inset-shadow-sm h-32 flex flex-col justify-end overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-[#0b1622] to-transparent z-10" />
          <div className="flex flex-col gap-1.5 font-mono text-[10px] w-full text-brand-secondary">
            {displayedLogs.map((log, i) => (
              <motion.div 
                key={log + i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: i === displayedLogs.length - 1 ? 1 : 0.4, x: 0 }}
                className="flex items-start gap-2"
              >
                <span className="shrink-0 pt-0.5"><Zap className="size-2.5" /></span>
                <span>{log}</span>
              </motion.div>
            ))}
            {/* Blinking block cursor */}
            <motion.div 
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
              className="h-3 w-1.5 bg-brand-secondary ml-4 mt-1"
            />
          </div>
        </div>

      </div>
    </div>
  )
}
