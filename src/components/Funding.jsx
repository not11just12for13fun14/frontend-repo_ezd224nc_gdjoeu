import { motion } from 'framer-motion'

export default function Funding() {
  return (
    <section id="funding" className="relative py-24 md:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(700px_500px_at_50%_0,rgba(59,130,246,0.12),transparent)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
          <h2 className="text-3xl md:text-5xl font-semibold text-white">We are seeking funding through Equity, Debt, or Bridge Investment.</h2>
          <p className="mt-4 text-white/70 max-w-3xl">Join us in building the future of human expression. We are pioneering non‑invasive neuro‑AI for people who need a voice.</p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="text-white font-semibold">Market Potential</h3>
              <p className="text-white/70 mt-2">Assistive tech, healthcare, and human‑computer interaction markets are converging into a multi‑billion dollar opportunity.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold">Vision</h3>
              <p className="text-white/70 mt-2">Enable anyone, anywhere to be heard — regardless of speech ability.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold">Roadmap</h3>
              <p className="text-white/70 mt-2">Clinical pilots → regulated device → global rollout with developer SDK.</p>
            </div>
          </div>

          <div className="mt-8">
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-slate-900 bg-white/90 hover:bg-white transition shadow-[0_0_25px_rgba(255,255,255,0.25)]">
              Invest in the Future
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
