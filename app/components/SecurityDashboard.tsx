"use client";

import { Card } from "@nextui-org/react";
import { FaFileSignature, FaKey, FaExclamationTriangle, FaCheckCircle, FaChartLine, FaFileAlt, FaHistory } from "react-icons/fa";

export function SecurityDashboard() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Dashboard Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-400/20 rounded-lg blur-lg"></div>
            <div className="relative w-12 h-12 bg-black/40 backdrop-blur-xl border border-cyan-500/30 rounded-lg flex items-center justify-center">
              <FaFileSignature className="w-6 h-6 text-cyan-400" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Document Security</h3>
            <p className="text-sm text-gray-400">Post-Quantum Protection Status</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 px-3 py-1 bg-green-500/10 rounded-full border border-green-500/20">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm text-green-400">System Active</span>
          </div>
          <div className="flex items-center space-x-2 px-3 py-1 bg-cyan-500/10 rounded-full border border-cyan-500/20">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            <span className="text-sm text-cyan-400">Quantum-Safe</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <Card className="p-4 bg-gray-900/50 border border-gray-800 hover:border-cyan-500/30 transition-colors duration-300">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-cyan-900/30 rounded-lg flex items-center justify-center">
              <FaFileAlt className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <div className="text-sm text-gray-400">Documents Secured</div>
              <div className="text-xl font-bold text-white">1,247</div>
            </div>
          </div>
        </Card>
        
        <Card className="p-4 bg-gray-900/50 border border-gray-800 hover:border-cyan-500/30 transition-colors duration-300">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-cyan-900/30 rounded-lg flex items-center justify-center">
              <FaKey className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <div className="text-sm text-gray-400">Key Strength</div>
              <div className="text-xl font-bold text-white">256-bit</div>
            </div>
          </div>
        </Card>
      </div>
      
      <div className="space-y-4">
        <div className="group bg-gray-900/50 p-4 rounded-xl border border-gray-800 hover:border-cyan-500/30 transition-colors duration-300">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <FaFileSignature className="w-4 h-4 text-cyan-400" />
              <span className="font-medium text-white">Signature Status</span>
            </div>
            <span className="text-cyan-400 text-sm font-medium">Quantum-Safe</span>
          </div>
          <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
            <span>Dilithium: Active</span>
            <span>Hybrid Mode: Enabled</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div className="bg-gradient-to-r from-cyan-400 to-cyan-600 h-2 rounded-full animate-pulse" style={{ width: "100%" }}></div>
          </div>
        </div>
        
        <div className="group bg-gray-900/50 p-4 rounded-xl border border-gray-800 hover:border-cyan-500/30 transition-colors duration-300">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <FaExclamationTriangle className="w-4 h-4 text-yellow-500" />
              <span className="font-medium text-white">Security Alerts</span>
            </div>
            <span className="text-yellow-500 text-sm font-medium">1 Warning</span>
          </div>
          <div className="text-sm text-gray-400">
            Legacy RSA certificate expires in 30 days
          </div>
        </div>

        <div className="group bg-gray-900/50 p-4 rounded-xl border border-gray-800 hover:border-cyan-500/30 transition-colors duration-300">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <FaHistory className="w-4 h-4 text-cyan-400" />
              <span className="font-medium text-white">Recent Activity</span>
            </div>
            <span className="text-cyan-400 text-sm font-medium">Active</span>
          </div>
          <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
            <span>Signed: 24</span>
            <span>Encrypted: 18</span>
            <span>Verified: 32</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div className="bg-gradient-to-r from-cyan-400 to-cyan-600 h-2 rounded-full" style={{ width: "92%" }}></div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 px-3 py-1 bg-cyan-500/10 rounded-full border border-cyan-500/20">
              <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
              <span className="text-sm text-cyan-400">NIST PQC Compliant</span>
            </div>
            <span className="text-sm text-gray-500">Cryptographic Agility: Enabled</span>
          </div>
          <button className="group px-4 py-2 bg-cyan-500/10 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-colors">
            <span className="text-cyan-400 font-medium group-hover:text-cyan-300 transition-colors">
              View Document History →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
