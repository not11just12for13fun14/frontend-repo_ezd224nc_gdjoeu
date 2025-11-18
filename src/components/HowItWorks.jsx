import { motion, useScroll, useTransform } from 'framer-motion'

function Step({ index, title, description, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_20px_60px_rgba(0,0,0,0.35)]"
    >
      <div className="mb-4 text-sm font-semibold text-cyan-300/90">Step {index + 1}</div>
      <h3 className="text-2xl md:text-3xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-white/70">{description}</p>
      <div className="mt-6">{children}</div>
    </motion.div>
  )
}

export default function HowItWorks() {
  const { scrollYProgress } = useScroll()
  const glow = useTransform(scrollYProgress, [0, 1], [0.1, 0.35])

  return (
    <section id="science" className="relative py-24 md:py-36">
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute inset-0 opacity-60" style={{
          background: 'radial-gradient(1000px 600px at 50% 0%, rgba(124,58,237,0.15), rgba(56,189,248,0.1), transparent)'
        }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.h2
          style={{ textShadow: glow.get() ? `0 0 ${glow.get()*80}px rgba(56,189,248,0.6)` : undefined }}
          className="text-center text-3xl md:text-5xl font-semibold text-white"
        >
          How 1st‑Word Works
        </motion.h2>
        <p className="mt-4 text-center text-white/70 max-w-3xl mx-auto">
          A seamless pipeline from neural signals to expressive speech.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Step index={0} title="EEG Sensors Detect Brain Patterns" description="Ultra-sensitive electrodes capture non-invasive brainwave activity.">
            <div className="h-32 rounded-xl bg-gradient-to-r from-cyan-400/20 to-violet-400/20 border border-white/10 flex items-center justify-center">
              <div className="h-1 w-3/4 bg-gradient-to-r from-cyan-300 via-white to-violet-300 animate-pulse rounded-full" />
            </div>
          </Step>

          <Step index={1} title="AI Chip Decodes Thought Signals" description="On-device neural networks translate patterns into semantic embeddings.">
            <div className="grid grid-cols-6 gap-1">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="h-10 rounded bg-white/10">
                  <div className="h-full w-full rounded bg-gradient-to-br from-violet-400/30 to-cyan-400/30 animate-pulse" style={{ animationDuration: `${1 + (i%5)*0.2}s` }} />
                </div>
              ))}
            </div>
          </Step>

          <Step index={2} title="Emotion + Thought Recognition" description="Real-time detection of affective state and intent.">
            <div className="flex flex-wrap gap-3">
              {['Pain','Fear','Hunger','Happiness','Yes','No'].map(tag => (
                <span key={tag} className="px-4 py-2 rounded-full border border-white/15 bg-white/5 text-white/80 backdrop-blur">
                  {tag}
                </span>
              ))}
              <div className="mt-3 w-full rounded-xl border border-white/10 bg-black/30 p-4 text-cyan-100/90 font-mono">
                “I need water, please.”
              </div>
            </div>
          </Step>

          <Step index={3} title="Output on Speaker + App" description="Audible speech and a holographic app UI mirror the decoded message.">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0 p-6">
                <div className="h-4 w-3/4 bg-white/40 rounded mb-2" />
                <div className="h-3 w-1/2 bg-white/20 rounded" />
                <div className="mt-6 h-10 bg-gradient-to-r from-cyan-300 to-violet-300 rounded-full animate-pulse" />
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="h-6 w-1/2 bg-white/40 rounded mb-4" />
                <div className="space-y-2">
                  {['Hello','I feel cold','Where is mom?','Thank you'].map((s, i) => (
                    <div key={i} className="h-9 rounded-xl bg-gradient-to-r from-white/5 to-white/0 border border-white/10 flex items-center px-4 text-white/80">
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Step>
        </div>
      </div>
    </section>
  )
}
