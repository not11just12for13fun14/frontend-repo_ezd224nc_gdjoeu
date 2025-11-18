import { motion } from 'framer-motion'

const scenes = [
  { title: 'Patient to Speech', desc: 'A patient thinks, the cap converts to audible words.', hue: 'from-cyan-400/30 to-violet-400/30' },
  { title: 'Child Communication', desc: 'A child uses 1st‑Word to express feelings.', hue: 'from-violet-400/30 to-cyan-400/30' },
  { title: 'Assistive Expression', desc: 'People with speech disabilities share needs instantly.', hue: 'from-cyan-400/30 to-blue-400/30' },
  { title: 'Caregiver Alerts', desc: 'Caregivers receive intelligent, context-aware notifications.', hue: 'from-blue-400/30 to-violet-400/30' },
]

export default function Scenes() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(700px_500px_at_50%_0,rgba(168,85,247,0.1),transparent)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl md:text-5xl font-semibold text-white">Real‑Life Use Cases</h2>
        <p className="mt-3 text-center text-white/70 max-w-3xl mx-auto">Holographic scenes that convey real human impact.</p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {scenes.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`relative overflow-hidden rounded-3xl border border-white/10 bg-black/30 backdrop-blur-xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)]`}
            >
              <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-br ${s.hue} opacity-20`} />
              <div className="relative z-10">
                <div className="mb-4 h-48 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 grid place-items-center">
                  <div className="h-24 w-24 rounded-full border border-white/20 bg-white/10 animate-pulse shadow-[0_0_40px_rgba(56,189,248,0.35)]" />
                </div>
                <h3 className="text-xl font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-white/70">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
