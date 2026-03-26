import { motion } from 'framer-motion'
import { Cpu, Database, Blocks, BarChart3, Cloud, Webhook, Zap } from 'lucide-react'

const ORBIT_NODES = [
  { label: 'RPA',     desc: 'Automatisation', Icon: Zap,       color: 'text-brand-accent',    bg: 'bg-brand-accent/20',    ring: 'ring-brand-accent/40',    delay: 0 },
  { label: 'ETL',     desc: 'Pipelines Data', Icon: Database,  color: 'text-brand-secondary', bg: 'bg-brand-secondary/20', ring: 'ring-brand-secondary/40', delay: -5 },
  { label: 'API',     desc: 'Middleware',     Icon: Webhook,   color: 'text-brand-blue',      bg: 'bg-brand-blue/20',      ring: 'ring-brand-blue/40',      delay: -10 },
  { label: 'BI',      desc: 'Reporting',      Icon: BarChart3, color: 'text-emerald-400',     bg: 'bg-emerald-400/20',     ring: 'ring-emerald-400/40',     delay: -15 },
  { label: 'CLOUD',   desc: 'Infrastructure', Icon: Cloud,     color: 'text-rose-400',        bg: 'bg-rose-400/20',        ring: 'ring-rose-400/40',        delay: -20 },
  { label: 'SYSTEMS', desc: 'Intégration',    Icon: Blocks,    color: 'text-purple-400',      bg: 'bg-purple-400/20',      ring: 'ring-purple-400/40',      delay: -25 },
]

export function TechOrbitSimulator() {
  return (
    <div className="relative flex w-full max-w-lg aspect-square items-center justify-center overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl">
      
      {/* Background Starfield / Noise */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,80,164,0.1)_0%,transparent_100%)]" />
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '16px 16px' }} />

      {/* Orbit Rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute size-[340px] rounded-full border border-white/5" />
        <div className="absolute size-[240px] rounded-full border border-brand-secondary/20 border-dashed animate-[spin_40s_linear_infinite]" />
        <div className="absolute size-[140px] rounded-full border border-brand-blue/30 border-dotted animate-[spin_20s_linear_infinite_reverse]" />
      </div>

      {/* Center Core */}
      <motion.div 
        animate={{ scale: [1, 1.05, 1] }} 
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-20 flex size-24 items-center justify-center rounded-full bg-gradient-to-br from-brand-secondary to-brand-blue shadow-[0_0_40px_rgba(0,168,168,0.5)] border border-white/20"
      >
        <Cpu className="size-10 text-white" />
        <div className="absolute -inset-2 rounded-full border-2 border-transparent border-t-white/50 border-r-white/50 animate-[spin_3s_linear_infinite]" />
      </motion.div>

      <div className="absolute text-center mt-36 z-20 pointer-events-none">
        <div className="text-[10px] font-bold tracking-widest text-brand-secondary uppercase">CORE PLATFORM</div>
      </div>

      {/* Orbiting Nodes */}
      <div className="absolute w-full h-full flex items-center justify-center">
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute w-full h-full flex items-center justify-center"
        >
          {ORBIT_NODES.map((node, i) => {
            const angle = (i / ORBIT_NODES.length) * 360;
            // Radius of the main orbit
            const radius = 170; 
            
            return (
              <motion.div 
                key={node.label}
                className="absolute flex items-center justify-center"
                style={{
                  // Position the container on the circle
                  transform: `rotate(${angle}deg) translateX(${radius}px)`,
                }}
              >
                {/* Counter-rotate the child so the text/icon stays upright */}
                <motion.div 
                  animate={{ rotate: -360 }} 
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="flex flex-col items-center justify-center gap-2"
                  // To perfectly cancel out the parent's initial static rotation, we subtract it inside the animate or style.
                  // But since Framer Motion's rotate takes over, we can just apply an offset based on the angle inside `initial` and `animate`.
                  initial={{ rotate: -angle }}
                  // Overriding the previous animate definition to include the offset
                  // animate={{ rotate: -(360 + angle) }}
                >
                  <TooltipWrapper node={node} angle={angle} />
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
      
    </div>
  )
}

function TooltipWrapper({ node, angle }: { node: typeof ORBIT_NODES[0], angle: number }) {
  return (
    <motion.div 
      initial={{ rotate: -angle }}
      animate={{ rotate: -(360 + angle) }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className="group relative flex flex-col items-center justify-center cursor-pointer pointer-events-auto"
    >
      <div className={`relative flex size-12 items-center justify-center rounded-2xl bg-[#0b1622] border ring-1 ${node.ring} shadow-lg shadow-${node.color.split('-')[1]}/20 hover:scale-110 transition-transform`}>
        <div className={`absolute inset-0 ${node.bg} rounded-xl blur-md`} />
        <node.Icon className={`relative z-10 size-5 ${node.color}`} />
      </div>
      
      <div className="absolute top-14 flex flex-col items-center opacity-0 transform -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all pointer-events-none">
        <div className="bg-slate-800 text-white text-[10px] font-bold px-3 py-1.5 rounded-md whitespace-nowrap border border-white/10 shadow-xl">
          {node.label}
          <div className="text-[9px] text-white/50 font-normal">{node.desc}</div>
        </div>
      </div>
    </motion.div>
  )
}
