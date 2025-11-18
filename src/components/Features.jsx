import { motion } from 'framer-motion'

const cards = [
  { title: 'Lightweight Smart Cap', desc: 'Ergonomic, breathable design with adaptive fit.' },
  { title: 'EEG Sensors Inside', desc: 'High-fidelity, non-invasive electrodes.' },
  { title: 'On-Device AI Chip', desc: 'Low-latency neural decoding on the edge.' },
  { title: 'Built-in Micro Speaker', desc: 'Crystal-clear voice output anywhere.' },
  { title: 'Rechargeable Battery', desc: 'All-day power with fast USB‑C charging.' },
  { title: 'Caregiver App', desc: 'Real-time notifications and translation.' },
  { title: 'Emotion Detection', desc: 'Affective computing for nuanced expression.' },
  { title: 'Thought‑to‑Speech', desc: 'From neural intent to spoken words.' },
]

export default function Features() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(600px_400px_at_50%_0,rgba(56,189,248,0.12),transparent)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl md:text-5xl font-semibold text-white">Product Features</h2>
        <p className="mt-3 text-center text-white/70 max-w-3xl mx-auto">Glowing, floating cards with subtle parallax and rotation on hover.</p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.04 }}
              whileHover={{ rotateX: -4, rotateY: 6, translateZ: 12 }}
              className="group relative rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.06)]"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-400/15 via-transparent to-violet-400/15 opacity-0 group-hover:opacity-100 transition" />
              <h3 className="relative z-10 text-lg font-semibold text-white">{c.title}</h3>
              <p className="relative z-10 mt-2 text-white/70">{c.desc}</p>
              <div className="relative z-10 mt-6 h-10 w-10 rounded-full bg-gradient-to-br from-cyan-300/40 to-violet-300/40 blur-sm group-hover:blur transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
