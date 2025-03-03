"use client";

import { useState, useEffect } from "react";
import { FaFileSignature, FaCheck, FaDownload, FaKey, FaCode } from "react-icons/fa";

const installSteps = [
  {
    command: "npm install @q/post-quantum-crypto",
    output: `added 42 packages in 2.4s
+ @q/post-quantum-crypto@1.5.2
`,
  },
  {
    command: "npx q-pqc init --generate-keys",
    output: `Generating post-quantum cryptographic keys...
Creating ML-KEM-768 key pair... Done
Creating Dilithium-5 key pair... Done
Creating hybrid RSA+Dilithium key pair... Done
Keys stored securely in ./pqc-keys/

Configuration file created: pqc-config.json
PQC initialization complete!`,
  },
  {
    command:
      "node -e \"const { signDocument } = require('@q/post-quantum-crypto'); signDocument('contract.pdf');\"",
    output: `Loading document: contract.pdf
Applying Dilithium-5 signature...
Creating signature timestamp...
Embedding signature in document...
Document signed successfully!

Signature details:
- Algorithm: Dilithium-5 (NIST-approved PQC)
- Key ID: pq-sign-d5-2025-03-03
- Timestamp: 2025-03-03T17:20:42.123Z
- Verification URL: https://verify.q.io/d5-abcdef123456`,
  },
];

export function InstallationDemo() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showOutput, setShowOutput] = useState(false);
  const [completed, setCompleted] = useState<number[]>([]);

  useEffect(() => {
    if (currentStep < installSteps.length) {
      const timer = setTimeout(() => {
        setShowOutput(true);
        const outputTimer = setTimeout(() => {
          setCompleted((prev) => [...prev, currentStep]);
          if (currentStep < installSteps.length - 1) {
            setCurrentStep((prev) => prev + 1);
            setShowOutput(false);
          }
        }, 2000);
        return () => clearTimeout(outputTimer);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3 pl-4 pt-2">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-400/20 rounded-lg blur-lg"></div>
            <div className="relative w-12 h-12 bg-black/40 backdrop-blur-xl border border-cyan-500/30 rounded-lg flex items-center justify-center">
              <FaFileSignature className="w-6 h-6 text-cyan-400" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white pt-4">
              Simple API Integration
            </h3>
            <p className="text-gray-400">Add quantum-safe document signing in minutes</p>
          </div>
        </div>
      </div>

      <div className="bg-black/40 backdrop-blur-xl rounded-xl border border-gray-800/50 overflow-hidden">
        <div className="flex items-center space-x-2 px-4 py-2 border-b border-gray-800/50">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-2 text-sm text-gray-400">
            Post-Quantum Crypto Integration
          </span>
        </div>

        <div className="p-4 font-mono text-sm">
          {installSteps.map((step, index) => (
            <div
              key={index}
              className={`mb-4 ${
                index > currentStep ? "opacity-0" : "opacity-100"
              } transition-opacity duration-500`}
            >
              <div className="flex items-center space-x-2 text-gray-400">
                <span className="text-green-400">$</span>
                <span className="text-white">{step.command}</span>
                {completed.includes(index) && (
                  <FaCheck className="w-4 h-4 text-green-400 ml-2" />
                )}
              </div>
              {showOutput && currentStep === index && (
                <div className="mt-2 p-3 bg-gray-900/50 rounded-lg border border-gray-800/50">
                  <pre className="text-gray-400 whitespace-pre-wrap">
                    {step.output}
                  </pre>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-4">
        <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-800/50">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-8 h-8 bg-cyan-500/10 rounded-lg flex items-center justify-center">
              <FaDownload className="w-4 h-4 text-cyan-400" />
            </div>
            <span className="text-sm font-medium text-white">Simple API</span>
          </div>
          <p className="text-xs text-gray-400">
            Easy-to-use JavaScript/TypeScript SDK
          </p>
        </div>

        <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-800/50">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-8 h-8 bg-cyan-500/10 rounded-lg flex items-center justify-center">
              <FaKey className="w-4 h-4 text-cyan-400" />
            </div>
            <span className="text-sm font-medium text-white">
              Key Management
            </span>
          </div>
          <p className="text-xs text-gray-400">
            Secure post-quantum key generation and storage
          </p>
        </div>

        <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-800/50">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center">
              <FaCode className="w-4 h-4 text-green-400" />
            </div>
            <span className="text-sm font-medium text-white">Cross-Platform</span>
          </div>
          <p className="text-xs text-gray-400">
            Works with Node.js, browsers, and mobile apps
          </p>
        </div>
      </div>
    </div>
  );
}
