"use client";

import { Button } from "@nextui-org/react";
import { FaLock, FaArrowRight, FaFileSignature, FaShieldAlt } from "react-icons/fa";
import { SecurityDashboard } from "./SecurityDashboard";
import { AnimatedCircuit } from "./AnimatedCircuit";
import { InstallationDemo } from "./InstallationDemo";
import { SyscallMonitor } from "./SyscallMonitor";
import { MonitorFrame } from "./MonitorFrame";

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-200 text-transparent bg-clip-text">
        {number}
      </div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      <AnimatedCircuit />

      <div className="relative z-20 container mx-auto px-4">
        <div className="min-h-screen flex flex-col">
          {/* Main Hero Content */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-32">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-primary-900/50 rounded-full border border-primary-700 mb-8">
                <FaShieldAlt className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-sm text-gray-300">
                  Post-Quantum Security
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-300 to-primary-400 text-transparent bg-clip-text leading-tight">
                Quantum-Resistant Document Signing & Encryption
              </h1>

              <p className="text-2xl text-cyan-300 font-semibold mb-4 max-w-2xl mx-auto lg:mx-0">
                Secure Today. Quantum-Proof Tomorrow.
              </p>

              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
                Future-proof your sensitive documents with NIST-approved post-quantum cryptography before quantum computers break traditional encryption.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-400 to-cyan-600 text-white font-semibold hover:opacity-90 px-8"
                  endContent={<FaArrowRight />}
                >
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="bordered"
                  className="border-gray-700 text-white hover:border-cyan-400 px-8 group"
                  startContent={
                    <FaFileSignature className="group-hover:text-cyan-400 transition-colors" />
                  }
                >
                  Try Demo
                </Button>
              </div>

              {/* Stats Grid */}
              <div className="hidden md:grid grid-cols-4 gap-8 pt-8 border-t border-gray-800">
                <Stat number="2035" label="Quantum Threat Timeline" />
                <Stat number="256-bit" label="Quantum-Safe Keys" />
                <Stat number="100%" label="NIST Compliance" />
                <Stat number="10+" label="Years of Protection" />
              </div>
            </div>

            {/* Document Security Monitor */}
            <div className="relative w-full max-w-2xl mx-auto">
              <MonitorFrame>
                <SyscallMonitor />
              </MonitorFrame>
            </div>
          </div>

          {/* Document Signing Demo */}
          <div className="w-full max-w-7xl mx-auto px-4 py-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-300 to-primary-400 text-transparent bg-clip-text">
                Simple Integration, Quantum-Proof Security
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Integrate post-quantum document signing into your workflow in minutes
              </p>
            </div>
            <div className="relative">
              <MonitorFrame>
                <InstallationDemo />
              </MonitorFrame>
            </div>
          </div>

          {/* Document Security Dashboard */}
          <div className="w-full max-w-7xl mx-auto px-4 py-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-300 to-primary-400 text-transparent bg-clip-text">
                Document Security Dashboard
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Monitor your document security status and manage cryptographic keys with our intuitive dashboard
              </p>
            </div>
            <div className="relative">
              {/* Background Effects */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-3xl transform -rotate-1 opacity-10 blur-xl "></div>

              {/* Dashboard Container */}
              <div className="relative bg-gradient-to-b from-gray-900/80 to-black p-8 rounded-2xl border border-gray-800/50 backdrop-blur-xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-primary-500/5 rounded-2xl"></div>
                <div className="relative">
                  <SecurityDashboard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
