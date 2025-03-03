"use client";

import { useEffect, useState } from "react";
import {
  FaFileSignature,
  FaCheck,
  FaFileAlt,
  FaKey,
  FaLock,
  FaFileContract,
  FaExclamationTriangle,
  FaHistory,
} from "react-icons/fa";

const documentEvents = [
  {
    name: "sign",
    icon: FaFileSignature,
    color: "text-green-400",
    description: "Contract signed with Dilithium-5 algorithm",
    quantum: true,
  },
  {
    name: "verify",
    icon: FaCheck,
    color: "text-yellow-400",
    description: "Signature verification using hybrid RSA+Dilithium",
    quantum: true,
  },
  {
    name: "encrypt",
    icon: FaLock,
    color: "text-green-400",
    description: "Document encrypted with ML-KEM-768",
    quantum: true,
  },
  {
    name: "decrypt",
    icon: FaKey,
    color: "text-green-400",
    description: "Document decrypted with ML-KEM key",
    quantum: true,
  },
  {
    name: "sign_legacy",
    icon: FaFileContract,
    color: "text-red-400",
    description: "Legacy RSA-2048 signature detected",
    quantum: false,
  },
  {
    name: "access",
    icon: FaFileAlt,
    color: "text-green-400",
    description: "Document accessed by authorized user",
    quantum: true,
  },
  {
    name: "encrypt_legacy",
    icon: FaExclamationTriangle,
    color: "text-red-400",
    description: "Legacy ECC encryption detected",
    quantum: false,
  },
  {
    name: "audit",
    icon: FaHistory,
    color: "text-cyan-400",
    description: "Document access log exported",
    quantum: true,
  },
];

const createEvent = (type: (typeof documentEvents)[number]) => ({
  id: Date.now() + Math.random(),
  type: type.name,
  status: (type.quantum ? "quantum-safe" : "vulnerable") as "quantum-safe" | "vulnerable",
  timestamp: new Date().toLocaleTimeString(),
});

export function SyscallMonitor() {
  const [events, setEvents] = useState<
    Array<{
      id: number;
      type: string;
      status: "quantum-safe" | "vulnerable";
      timestamp: string;
    }>
  >([
    createEvent(documentEvents[0]), // contract signed
    createEvent(documentEvents[2]), // document encrypted
    createEvent(documentEvents[4]), // legacy signature
  ]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const scheduleNextEvent = () => {
      const delay = Math.floor(Math.random() * 4000) + 3000; // Random delay between 3-7 seconds

      timeout = setTimeout(() => {
        const selectedType =
          documentEvents[Math.floor(Math.random() * documentEvents.length)];
        const newEvent = {
          id: Date.now(),
          type: selectedType.name,
          status: (selectedType.quantum ? "quantum-safe" : "vulnerable") as
            | "quantum-safe"
            | "vulnerable",
          timestamp: new Date().toLocaleTimeString(),
        };

        setEvents((prev) => [newEvent, ...prev].slice(0, 3));
        scheduleNextEvent();
      }, delay);
    };

    scheduleNextEvent();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full h-full bg-black/40  overflow-hidden flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-800/50">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400/20 rounded-lg blur-lg"></div>
              <div className="relative w-10 h-10 bg-black/40 border border-cyan-500/30 rounded-lg flex items-center justify-center">
                <FaFileSignature className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                Document Monitor
              </h3>
              <p className="text-sm text-gray-400">Real-time cryptographic events</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="px-3 py-1 bg-green-500/10 rounded-full border border-green-500/20">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-sm text-green-400">PQC Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Events List */}
      <div className="flex-1 min-h-0 p-4">
        <div
          className="h-[calc(3*5.5rem)] overflow-y-auto space-y-3 pr-2 events-list scroll-smooth"
          style={{ scrollbarGutter: "stable" }}
        >
          {events.map((event) => {
            const eventType = documentEvents.find((t) => t.name === event.type);
            const Icon = eventType?.icon || FaFileAlt;
            const isQuantumSafe = eventType?.quantum;

            return (
              <div
                key={event.id}
                className={`flex items-center justify-between p-3 rounded-lg border animate-fade-in hover:bg-gray-900/80 transition-all duration-300 group ${
                  !isQuantumSafe
                    ? "bg-red-950/20 border-red-900/30 hover:border-red-700/30"
                    : "bg-gray-900/50 border-gray-800/50 hover:border-gray-700/50"
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div
                      className={`absolute inset-0 blur-lg ${
                        !isQuantumSafe ? "bg-red-500/10" : "bg-cyan-500/10"
                      }`}
                    ></div>
                    <div className="relative w-10 h-10 bg-black/60 rounded-lg flex items-center justify-center border border-gray-800/50 group-hover:scale-105 transition-transform duration-300">
                      <Icon className={`w-5 h-5 ${eventType?.color}`} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <div className="text-sm font-medium text-white">
                        {event.type.replace('_', ' ')}
                      </div>
                      {!isQuantumSafe && (
                        <div className="px-1.5 py-0.5 bg-red-500/10 rounded-full border border-red-500/20">
                          <span className="text-[10px] uppercase tracking-wider text-red-400 font-medium">
                            Quantum Vulnerable
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="text-xs text-gray-400 mt-0.5">
                      {eventType?.description} • {event.timestamp}
                    </div>
                  </div>
                </div>
                <div
                  className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg ${
                    event.status === "quantum-safe"
                      ? "bg-green-500/10 border border-green-500/20"
                      : "bg-red-500/10 border border-red-500/20"
                  }`}
                >
                  {event.status === "quantum-safe" ? (
                    <>
                      <FaCheck className="w-3 h-3 text-green-400" />
                      <span className="text-xs font-medium text-green-400">
                        Quantum-Safe
                      </span>
                    </>
                  ) : (
                    <>
                      <FaExclamationTriangle className="w-3 h-3 text-red-400" />
                      <span className="text-xs font-medium text-red-400">
                        Vulnerable
                      </span>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
