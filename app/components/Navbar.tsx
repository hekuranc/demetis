import { Button } from "@nextui-org/react";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-primary-700 to-primary-900 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-primary-900 font-bold text-xl">S</span>
            </div>
            <span className="text-xl font-bold">SecureIoT</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="hover:text-cyan-300 transition-colors">
              Features
            </Link>
            <Link href="#about" className="hover:text-cyan-300 transition-colors">
              About
            </Link>
            <Link href="#solutions" className="hover:text-cyan-300 transition-colors">
              Solutions
            </Link>
            <Link href="#contact" className="hover:text-cyan-300 transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              className="bg-transparent border-white hidden md:flex"
              variant="bordered"
            >
              Log In
            </Button>
            <Button
              className="bg-cyan-300 text-primary-900 shadow-lg hover:bg-cyan-400"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
