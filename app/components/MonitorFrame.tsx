"use client";

import { ReactNode } from "react";
import { FaCircle, FaMinus, FaExpand } from "react-icons/fa";

export function MonitorFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-full">
      {/* Background Effects */}
      <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-primary-500/20 rounded-3xl blur-3xl animate-pulse-glow"></div>

      {/* Frame */}
      <div className="relative bg-black/40  rounded-2xl border border-gray-800/50 overflow-hidden">
        {/* Title Bar */}
        <div className="px-4 py-3 bg-gray-900/50 border-b border-gray-800/50 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FaCircle className="w-3 h-3 text-red-500" />
            <FaCircle className="w-3 h-3 text-yellow-500" />
            <FaCircle className="w-3 h-3 text-green-500" />
          </div>

          <div className="flex items-center space-x-4">
            <FaMinus className="w-3 h-3 text-gray-600" />
            <FaExpand className="w-3 h-3 text-gray-600" />
          </div>
        </div>

        {/* Content */}
        <div className="relative">{children}</div>
      </div>
    </div>
  );
}
