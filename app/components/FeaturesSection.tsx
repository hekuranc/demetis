import { FaShieldAlt, FaLock, FaFileSignature, FaServer, FaGlobe, FaKey, FaHistory, FaUserShield, FaFileAlt } from "react-icons/fa";

export function FeaturesSection() {
  return (
    <section className="w-full py-32 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-primary-900/50 rounded-full border border-primary-700 mb-8">
            <FaKey className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-sm text-gray-300">Quantum-Resistant Security</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-300 to-primary-400 text-transparent bg-clip-text">
            Future-Proof Document Security
          </h2>
          <p className="text-xl text-gray-400">
            Our NIST-approved post-quantum cryptography solution protects your documents from both current and future quantum computing threats.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:bg-gray-900/70 transition-all duration-300">
            <div className="w-16 h-16 bg-cyan-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaFileSignature className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Quantum-Safe Signatures
            </h3>
            <p className="text-gray-400 mb-6">
              Secure your documents with post-quantum digital signatures that ensure authenticity and non-repudiation even against quantum attacks.
            </p>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center">
                <FaShieldAlt className="w-4 h-4 mr-3 text-cyan-400" />
                NIST-Approved Algorithms
              </li>
              <li className="flex items-center">
                <FaHistory className="w-4 h-4 mr-3 text-cyan-400" />
                Long-Term Validity
              </li>
            </ul>
          </div>
          
          <div className="group bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:bg-gray-900/70 transition-all duration-300">
            <div className="w-16 h-16 bg-cyan-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaLock className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Hybrid Encryption
            </h3>
            <p className="text-gray-400 mb-6">
              Protect sensitive documents with hybrid encryption that combines traditional and post-quantum algorithms for maximum security.
            </p>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center">
                <FaKey className="w-4 h-4 mr-3 text-cyan-400" />
                ML-KEM Key Encapsulation
              </li>
              <li className="flex items-center">
                <FaUserShield className="w-4 h-4 mr-3 text-cyan-400" />
                Defense Against "Harvest Now, Decrypt Later"
              </li>
            </ul>
          </div>
          
          <div className="group bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:bg-gray-900/70 transition-all duration-300">
            <div className="w-16 h-16 bg-cyan-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaFileAlt className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Document Lifecycle Management
            </h3>
            <p className="text-gray-400 mb-6">
              Comprehensive document security throughout the entire lifecycle with cryptographic agility to adapt to evolving standards.
            </p>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center">
                <FaServer className="w-4 h-4 mr-3 text-cyan-400" />
                Seamless API Integration
              </li>
              <li className="flex items-center">
                <FaGlobe className="w-4 h-4 mr-3 text-cyan-400" />
                Cross-Platform Compatibility
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
