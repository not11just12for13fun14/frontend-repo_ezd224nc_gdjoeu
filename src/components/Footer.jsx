export default function Footer() {
  return (
    <footer id="contact" className="relative py-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(600px_400px_at_50%_0,rgba(99,102,241,0.1),transparent)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <div className="mx-auto h-28 w-28 rounded-2xl border border-white/20 bg-white/10 backdrop-blur grid place-items-center shadow-[0_0_40px_rgba(59,130,246,0.35)]">
          <div className="h-16 w-16 bg-gradient-to-br from-cyan-400 to-violet-400 animate-pulse rounded" />
        </div>
        <p className="mt-6 text-white/80">Made for the future of human expression.</p>
        <div className="mt-3 text-white/60 text-sm">Scan to connect</div>
      </div>
    </footer>
  )
}
