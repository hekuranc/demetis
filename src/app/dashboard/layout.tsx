import "./styles.css"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-50" />
        
        {/* Content */}
        <div className="relative">
          {children}
        </div>
      </div>
    </div>
  )
}
