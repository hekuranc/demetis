"use client";

import { Button } from "@nextui-org/react";
import { FaRocket, FaFileSignature, FaArrowRight } from "react-icons/fa";

export function CtaSection() {
  return (
    <section className="w-full py-32 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/20 to-primary-500/20 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-500/20 to-cyan-500/20 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-primary-900/50 rounded-full border border-primary-700 mb-8">
              <FaFileSignature className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-sm text-gray-300">Future-Proof Your Documents Today</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-300 to-primary-400 text-transparent bg-clip-text">
              Ready for Post-Quantum Security?
            </h2>
            
              <p className="text-2xl text-cyan-300 font-semibold mb-4 max-w-2xl mx-auto">
                Secure Today. Quantum-Proof Tomorrow.
              </p>
              
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Get started with Q in minutes. Protect your sensitive documents with NIST-approved post-quantum cryptography before it's too late.
              </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-400 to-cyan-600 text-white font-semibold hover:opacity-90 px-8 h-14"
              endContent={<FaArrowRight />}
            >
              Get Started Now
            </Button>
            <Button
              size="lg"
              className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 text-white hover:bg-gray-900/70 px-8 h-14"
              endContent={<FaRocket className="text-cyan-400" />}
            >
              Schedule Demo
            </Button>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800/50 backdrop-blur-xl">
              <div className="text-2xl font-bold text-white mb-2">10 Minutes</div>
              <p className="text-gray-400">Quick API integration</p>
            </div>
            <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800/50 backdrop-blur-xl">
              <div className="text-2xl font-bold text-white mb-2">10+ Years</div>
              <p className="text-gray-400">Future-proof protection</p>
            </div>
            <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800/50 backdrop-blur-xl">
              <div className="text-2xl font-bold text-white mb-2">100%</div>
              <p className="text-gray-400">NIST PQC compliance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-[100px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,130.83,141.14,213.2,56.44Z"
            className="fill-black/40"
          ></path>
        </svg>
      </div>
    </section>
  );
}
