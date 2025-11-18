import { motion } from 'framer-motion'

export default function TechDive() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(800px_500px_at_50%_0,rgba(34,211,238,0.12),transparent)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl md:text-5xl font-semibold text-white">Technical Deep Dive</h2>
        <p className="mt-3 text-center text-white/70 max-w-3xl mx-auto">An exploded view of the cap and the decoding pipeline.</p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Exploded view */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
          >
            <div className="h-72 grid place-items-center">
              <div className="relative">
                {['Fabric','Sensors','AI Chip','Speaker'].map((layer, i) => (
                  <motion.div
                    key={layer}
                    initial={{ y: 0, opacity: 0 }}
                    whileInView={{ y: -i*24, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 * i, duration: 0.7 }}
                    className="mx-auto mb-4 h-12 w-56 rounded-xl border border-white/15 bg-gradient-to-r from-white/10 to-white/0 grid place-items-center text-white/80"
                  >
                    {layer}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Pipeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
          >
            <ol className="space-y-4 text-white/80">
              {[
                'EEG signal acquisition',
                'Preprocessing + artifact removal',
                'Neural embedding generation',
                'Intent + emotion decoding',
                'Speech synthesis + app sync',
              ].map((step, i) => (
                <li key={i} className="flex items-center gap-4">
                  <span className="h-8 w-8 grid place-items-center rounded-full bg-gradient-to-br from-cyan-300/30 to-violet-300/30 border border-white/15 text-white/80">{i+1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>

            <div className="mt-6 h-24 rounded-xl border border-white/10 bg-gradient-to-r from-cyan-400/10 to-violet-400/10">
              <div className="h-full w-1/2 bg-gradient-to-r from-cyan-300/20 to-violet-300/20 animate-pulse" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
