"use client";

import { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { FaFileSignature, FaLock } from "react-icons/fa";
import Link from "next/link";

export function MainNav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-black/80 backdrop-blur-xl" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400/20 rounded-lg blur-lg group-hover:bg-cyan-400/30 transition-all duration-300"></div>
              <div className="relative w-10 h-10 bg-black border border-cyan-500/20 rounded-lg flex items-center justify-center overflow-hidden">
                <FaFileSignature className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <span className="text-xl font-bold text-white">Q</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#architecture">Architecture</NavLink>
            <NavLink href="#security">Quantum Security</NavLink>
            <NavLink href="#demo">Live Demo</NavLink>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Button
              className="bg-black/20 backdrop-blur-lg border border-gray-800 text-white hover:bg-black/40 hidden md:flex"
              variant="bordered"
              startContent={<FaLock className="text-cyan-400" />}
            >
              Login
            </Button>
            <Button
              className="bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-semibold hover:opacity-90"
              startContent={<FaFileSignature />}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay - To be implemented */}
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="group relative text-gray-300 hover:text-white transition-colors"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-cyan-300 group-hover:w-full transition-all duration-300"></span>
    </Link>
  );
}
