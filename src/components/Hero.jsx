import { motion, useMotionValue, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function useParallaxTilt() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-0.5, 0.5], [10, -10])
  const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10])
  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    x.set(px)
    y.set(py)
  }
  return { rotateX, rotateY, onMouseMove }
}

export default function Hero() {
  const { rotateX, rotateY, onMouseMove } = useParallaxTilt()

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient and particle overlays */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-24 opacity-60 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.25),rgba(56,189,248,0.15),transparent_60%)]" />
        <div className="absolute inset-0 mix-blend-screen bg-[linear-gradient(120deg,transparent,rgba(147,51,234,0.2),transparent)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24 sm:pt-32">
        <motion.div
          onMouseMove={onMouseMove}
          style={{ rotateX, rotateY }}
          className="mx-auto max-w-3xl text-center will-change-transform">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/70 drop-shadow-[0_0_35px_rgba(59,130,246,0.35)]"
          >
            1st-Word — The Future of Human Expression Begins Here.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 text-lg sm:text-xl text-white/80"
          >
            A neuro-AI smart cap that decodes thoughts and emotions into real words in real time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#science" className="group inline-flex items-center justify-center rounded-xl px-6 py-3 text-slate-900 bg-white/90 hover:bg-white transition shadow-[0_0_25px_rgba(255,255,255,0.25)]">
              Explore the Science
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#funding" className="inline-flex items-center justify-center rounded-xl px-6 py-3 border border-white/20 bg-white/10 hover:bg-white/15 text-white backdrop-blur-md transition">
              Request Funding / Partnership
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <span
            key={i}
            className="absolute inline-block h-1 w-1 rounded-full bg-cyan-300/70 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${6 + Math.random() * 6}s ease-in-out ${Math.random() * 5}s infinite`,
              opacity: 0.8,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
          100% { transform: translateY(0) translateX(0); }
        }
      `}</style>
    </section>
  )
}
