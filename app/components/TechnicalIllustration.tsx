import { FaShieldAlt, FaServer, FaNetworkWired, FaBrain } from "react-icons/fa";

export function TechnicalIllustration() {
  return (
    <div className="relative w-full h-full">
      {/* Central Shield */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute inset-2 bg-cyan-500/10 rounded-full blur-2xl animate-pulse-glow [animation-delay:1s]"></div>
          <div className="absolute inset-4 bg-primary-500/10 rounded-full blur-xl animate-pulse-glow [animation-delay:2s]"></div>
          <div className="relative w-32 h-32 bg-black/40 backdrop-blur-xl border border-cyan-500/30 rounded-full flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-primary-500/10 rounded-full group-hover:opacity-100 opacity-0 transition-opacity duration-500"></div>
            <FaShieldAlt className="w-12 h-12 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
          </div>
        </div>
      </div>

      {/* Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(34,211,238,0.1)" />
            <stop offset="100%" stopColor="rgba(34,211,238,0.4)" />
          </linearGradient>
          <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(34,211,238,0)" />
            <stop offset="50%" stopColor="rgba(34,211,238,0.3)" />
            <stop offset="100%" stopColor="rgba(34,211,238,0)" />
          </linearGradient>
        </defs>
        
        {/* Glow Effect Paths */}
        <g className="animate-pulse [animation-delay:1s]">
          <path
            d="M200,200 L100,100"
            stroke="url(#glowGradient)"
            strokeWidth="4"
            fill="none"
            opacity="0.5"
          />
          <path
            d="M200,200 L300,100"
            stroke="url(#glowGradient)"
            strokeWidth="4"
            fill="none"
            opacity="0.5"
          />
          <path
            d="M200,200 L300,300"
            stroke="url(#glowGradient)"
            strokeWidth="4"
            fill="none"
            opacity="0.5"
          />
          <path
            d="M200,200 L100,300"
            stroke="url(#glowGradient)"
            strokeWidth="4"
            fill="none"
            opacity="0.5"
          />
        </g>
        
        {/* Main Lines */}
        <g>
          <path
            d="M200,200 L100,100"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="200"
            strokeDashoffset="200"
            className="animate-dash"
          />
          <path
            d="M200,200 L300,100"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="200"
            strokeDashoffset="200"
            className="animate-dash [animation-delay:0.2s]"
          />
          <path
            d="M200,200 L300,300"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="200"
            strokeDashoffset="200"
            className="animate-dash [animation-delay:0.4s]"
          />
          <path
            d="M200,200 L100,300"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="200"
            strokeDashoffset="200"
            className="animate-dash [animation-delay:0.6s]"
          />
        </g>
        
        {/* Connection Points */}
        <g className="animate-pulse">
          <circle cx="200" cy="200" r="4" fill="rgba(34,211,238,0.4)" />
          <circle cx="100" cy="100" r="4" fill="rgba(34,211,238,0.4)" />
          <circle cx="300" cy="100" r="4" fill="rgba(34,211,238,0.4)" />
          <circle cx="300" cy="300" r="4" fill="rgba(34,211,238,0.4)" />
          <circle cx="100" cy="300" r="4" fill="rgba(34,211,238,0.4)" />
        </g>
      </svg>

      {/* Feature Icons */}
      <div className="absolute top-[15%] left-[25%] transform -translate-x-1/2 -translate-y-1/2">
        <FeatureNode
          icon={<FaBrain className="w-6 h-6" />}
          label="ML Model"
          delay="0s"
        />
      </div>
      <div className="absolute top-[15%] right-[25%] transform translate-x-1/2 -translate-y-1/2">
        <FeatureNode
          icon={<FaServer className="w-6 h-6" />}
          label="eBPF Driver"
          delay="0.2s"
        />
      </div>
      <div className="absolute bottom-[15%] right-[25%] transform translate-x-1/2 translate-y-1/2">
        <FeatureNode
          icon={<FaNetworkWired className="w-6 h-6" />}
          label="Network Analysis"
          delay="0.4s"
        />
      </div>
      <div className="absolute bottom-[15%] left-[25%] transform -translate-x-1/2 translate-y-1/2">
        <FeatureNode
          icon={<FaServer className="w-6 h-6" />}
          label="Metrics Collection"
          delay="0.6s"
        />
      </div>
    </div>
  );
}

function FeatureNode({ 
  icon, 
  label, 
  delay 
}: { 
  icon: React.ReactNode; 
  label: string; 
  delay: string;
}) {
  return (
    <div className="flex flex-col items-center animate-fade-in opacity-0 animate-float" style={{ animationDelay: delay }}>
      <div className="relative mb-2">
        <div className="absolute inset-0 bg-cyan-400/20 rounded-lg blur-lg animate-pulse-glow"></div>
        <div className="absolute inset-1 bg-cyan-500/10 rounded-lg blur-md animate-pulse-glow [animation-delay:1s]"></div>
        <div className="relative w-12 h-12 bg-black/40 backdrop-blur-xl border border-cyan-500/30 rounded-lg flex items-center justify-center text-cyan-400 hover:scale-110 hover:border-cyan-400 transition-all duration-300">
          {icon}
        </div>
      </div>
      <span className="text-sm text-gray-400 whitespace-nowrap">{label}</span>
    </div>
  );
}
