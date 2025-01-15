"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"

interface AuthContextType {
  isAuthenticated: boolean
  login: () => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  // Check if user is authenticated on mount and route changes
  useEffect(() => {
    const checkAuth = () => {
      const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"
      setIsAuthenticated(isLoggedIn)

      // Redirect to login if not authenticated and not already on login page
      if (!isLoggedIn && pathname !== "/") {
        router.push("/")
      }
      
      // Redirect to dashboard if authenticated and on login page
      if (isLoggedIn && pathname === "/") {
        router.push("/dashboard")
      }
    }

    checkAuth()
  }, [pathname, router])

  const login = () => {
    localStorage.setItem("isLoggedIn", "true")
    setIsAuthenticated(true)
  }

  const logout = () => {
    localStorage.removeItem("isLoggedIn")
    setIsAuthenticated(false)
    router.push("/")
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
