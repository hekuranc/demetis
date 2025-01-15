"use client"

import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Shield, LogOut } from "lucide-react"
import { useAuth } from "@/components/providers/auth-provider"

export function Navbar() {
  const { isAuthenticated, logout } = useAuth()

  return (
    <div className="border-b">
      <div className="flex h-14 items-center px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Shield className="h-5 w-5 text-primary" />
          <span>Demetis</span>
        </Link>
        {isAuthenticated && (
          <>
            <nav className="flex items-center gap-4 ml-6">
          <Link
            href="/dashboard"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Dashboard
          </Link>
          <Link
            href="/assessments/new"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            New Assessment
          </Link>
          <Link
            href="/reports"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Reports
          </Link>
          <Link
            href="/assets"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Assets
          </Link>
            </nav>
            <div className="ml-auto flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={logout}
                className="gap-2"
              >
                <LogOut className="h-4 w-4" />
                Sign out
              </Button>
              <ModeToggle />
            </div>
          </>
        )}
        {!isAuthenticated && (
          <div className="ml-auto">
            <ModeToggle />
          </div>
        )}
      </div>
    </div>
  )
}
