import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Scenes from './components/Scenes'
import TechDive from './components/TechDive'
import Funding from './components/Funding'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Global background effects */}
      <div className="pointer-events-none fixed inset-0 opacity-60">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_50%_-10%,rgba(99,102,241,0.15),rgba(6,182,212,0.08),transparent_70%)]" />
        <div className="absolute inset-0 mix-blend-screen bg-[linear-gradient(120deg,transparent,rgba(56,189,248,0.07),transparent_60%,rgba(147,51,234,0.07))]" />
      </div>

      <Hero />
      <HowItWorks />
      <Features />
      <Scenes />
      <TechDive />
      <Funding />
      <Footer />
    </div>
  )
}

export default App
