"use client";

import { useEffect, useRef } from "react";
import { FaNetworkWired, FaKey, FaLock, FaFileSignature, FaUserShield, FaFileAlt } from "react-icons/fa";

const securityLayers = [
  {
    title: "Document Verification",
    icon: FaFileSignature,
    description: "Quantum-resistant signature verification",
    color: "cyan",
    position: { x: 50, y: 20 }
  },
  {
    title: "Key Management",
    icon: FaKey,
    description: "Secure key generation and storage",
    color: "purple",
    position: { x: 20, y: 40 }
  },
  {
    title: "API Gateway",
    icon: FaNetworkWired,
    description: "Secure document transmission",
    color: "blue",
    position: { x: 80, y: 40 }
  },
  {
    title: "Access Control",
    icon: FaUserShield,
    description: "Identity verification and permissions",
    color: "yellow",
    position: { x: 35, y: 60 }
  },
  {
    title: "Encryption Engine",
    icon: FaLock,
    description: "Hybrid post-quantum encryption",
    color: "red",
    position: { x: 65, y: 60 }
  },
  {
    title: "Document Core",
    icon: FaFileAlt,
    description: "Secure document processing",
    color: "green",
    position: { x: 50, y: 80 }
  }
];

export function ArchitectureSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const drawConnections = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Set line style
      ctx.lineWidth = 2;
      
      // Animate the line
      const time = Date.now() * 0.001;
      ctx.setLineDash([4, 4]);
      ctx.lineDashOffset = -time * 30;

      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(34, 211, 238, 0.2)');
      gradient.addColorStop(0.5, 'rgba(168, 85, 247, 0.2)');
      gradient.addColorStop(1, 'rgba(239, 68, 68, 0.2)');
      ctx.strokeStyle = gradient;

      // Draw hexagonal connections
      securityLayers.forEach((layer, i) => {
        const startX = (canvas.width * layer.position.x) / 100;
        const startY = (canvas.height * layer.position.y) / 100;

        securityLayers.forEach((target, j) => {
          if (i !== j) {
            const endX = (canvas.width * target.position.x) / 100;
            const endY = (canvas.height * target.position.y) / 100;

            // Calculate distance
            const dx = endX - startX;
            const dy = endY - startY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Only connect if within reasonable distance
            if (distance < canvas.width * 0.4) {
              ctx.beginPath();
              ctx.moveTo(startX, startY);
              ctx.lineTo(endX, endY);
              ctx.stroke();
            }
          }
        });
      });

      requestAnimationFrame(drawConnections);
    };

    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (!container) return;
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    drawConnections();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section className="w-full py-32 bg-black/40 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-300 to-primary-400 text-transparent bg-clip-text">
            Multi-Layer Security Architecture
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive protection through interconnected security layers
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connection Lines Canvas */}
          <div className="relative min-h-[800px]">
            <canvas 
              ref={canvasRef} 
              className="absolute inset-0 w-full h-full pointer-events-none"
            />

            {/* Security Layer Components */}
            {securityLayers.map((layer) => (
              <div
                key={layer.title}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 w-64"
                style={{
                  left: `${layer.position.x}%`,
                  top: `${layer.position.y}%`
                }}
              >
                <div className={`relative p-6 bg-gray-900/50 rounded-xl border border-gray-800/50 backdrop-blur-xl group hover:scale-105 transition-transform duration-300 hover:border-${layer.color}-500/30`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-black/50 rounded-xl"></div>
                  <div className="relative">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="relative">
                        <div className={`absolute inset-0 rounded-lg blur-lg bg-${layer.color}-400/20`}></div>
                        <div className={`relative w-10 h-10 bg-black/40 border border-gray-800/50 rounded-lg flex items-center justify-center group-hover:border-${layer.color}-500/30 transition-colors`}>
                          <layer.icon className={`w-5 h-5 text-${layer.color}-400`} />
                        </div>
                      </div>
                      <span className="text-white font-medium">{layer.title}</span>
                    </div>
                    <p className="text-sm text-gray-400">{layer.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
