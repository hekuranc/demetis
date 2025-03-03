export function AnimatedCircuit() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Circuit Pattern */}

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32">
        <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute inset-4 bg-cyan-400/20 rounded-full blur-2xl animate-pulse [animation-delay:1s]"></div>
        <div className="absolute inset-8 bg-cyan-300/20 rounded-full blur-xl animate-pulse [animation-delay:2s]"></div>
      </div>

      <div className="absolute bottom-1/4 right-1/4 w-40 h-40">
        <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-3xl animate-pulse [animation-delay:2s]"></div>
        <div className="absolute inset-4 bg-primary-400/20 rounded-full blur-2xl animate-pulse [animation-delay:3s]"></div>
        <div className="absolute inset-8 bg-primary-300/20 rounded-full blur-xl animate-pulse [animation-delay:4s]"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
    </div>
  );
}
