import { Circle } from "lucide-react"
import { LucideIcon } from "lucide-react"

interface RingProgressProps {
  value: number
  size?: number
  strokeWidth?: number
}

interface StatusDotProps {
  status: string
}

interface RiskMetrics {
  critical: number
  high: number
  medium: number
  low: number
}

interface RiskBarProps {
  risks: RiskMetrics
}

interface MetricCardProps {
  title: string
  value: string | number
  icon?: LucideIcon
  trend?: React.ReactNode
  trendValue?: string | number
  trendColor?: string
  progress?: number
  progressColor?: string
}

interface IncidentCardProps {
  incident: {
    id: string
    type: string
    severity: 'High' | 'Medium' | 'Low'
    status: string
    affectedAssets: string[]
    detectedAt: string
  }
}

export function RingProgress({ value, size = 40, strokeWidth = 3 }: RingProgressProps) {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (value / 100) * circumference

  return (
    <svg width={size} height={size} className="progress-ring">
      <circle
        stroke="currentColor"
        strokeWidth={strokeWidth}
        fill="transparent"
        r={radius}
        cx={size / 2}
        cy={size / 2}
        className="text-muted-foreground/20"
      />
      <circle
        stroke="currentColor"
        strokeWidth={strokeWidth}
        fill="transparent"
        r={radius}
        cx={size / 2}
        cy={size / 2}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        className="text-primary"
      />
    </svg>
  )
}

export function StatusDot({ status }: StatusDotProps) {
  const colors: Record<string, string> = {
    critical: "text-red-500",
    high: "text-orange-500",
    medium: "text-yellow-500",
    low: "text-green-500",
    completed: "text-green-500",
    "in-progress": "text-blue-500",
    pending: "text-yellow-500",
    archived: "text-gray-500"
  }

  const colorClass = colors[status.toLowerCase()] || "text-gray-500"

  return (
    <Circle 
      className={`h-2 w-2 fill-current ${colorClass}`} 
    />
  )
}

export function RiskBar({ risks }: RiskBarProps) {
  const total = Object.values(risks).reduce((a, b) => a + b, 0)
  const segments = [
    { key: "critical" as const, color: "bg-red-500" },
    { key: "high" as const, color: "bg-orange-500" },
    { key: "medium" as const, color: "bg-yellow-500" },
    { key: "low" as const, color: "bg-green-500" }
  ]

  return (
    <div className="flex h-1.5 rounded-full overflow-hidden">
      {segments.map(({ key, color }) => {
        const width = (risks[key] / total) * 100
        return width > 0 ? (
          <div
            key={key}
            className={`${color} transition-all duration-500`}
            style={{ width: `${width}%` }}
          />
        ) : null
      })}
    </div>
  )
}

export function MetricCard({ 
  title, 
  value, 
  icon: Icon, 
  trend,
  trendValue,
  trendColor = "text-green-500",
  progress,
  progressColor = "bg-primary"
}: MetricCardProps) {
  return (
    <div className="dashboard-card metric-card p-3 rounded-lg border bg-card hover:shadow-lg transition-all">
      <div className="flex justify-between items-start mb-2">
        <div className="space-y-0.5">
          <p className="text-xs font-medium text-muted-foreground">{title}</p>
          <p className="text-xl font-bold">{value}</p>
        </div>
        {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
      </div>
      {progress !== undefined && (
        <div className="space-y-1">
          <div className="h-1 rounded-full bg-muted overflow-hidden">
            <div 
              className={`h-full rounded-full transition-all duration-500 ${progressColor}`}
              style={{ width: `${progress}%` }}
            />
          </div>
          {trend && (
            <div className="flex items-center gap-1 text-[10px]">
              {trend}
              <span className={trendColor}>{trendValue}</span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export function IncidentCard({ incident }: IncidentCardProps) {
  const severityColors = {
    High: "text-red-500 bg-red-50 dark:bg-red-950/50",
    Medium: "text-yellow-500 bg-yellow-50 dark:bg-yellow-950/50",
    Low: "text-blue-500 bg-blue-50 dark:bg-blue-950/50"
  } as const

  return (
    <div className="incident-card rounded-lg p-2 hover:shadow-md transition-all border">
      <div className="flex items-start gap-2">
        <div className={`p-1 rounded-full ${severityColors[incident.severity].split(" ")[1]}`}>
          <StatusDot status={incident.severity} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start gap-2">
            <p className="text-sm font-medium truncate">{incident.type}</p>
            <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${severityColors[incident.severity]}`}>
              {incident.severity}
            </span>
          </div>
          <p className="text-xs text-muted-foreground truncate">
            {incident.affectedAssets.join(", ")}
          </p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[10px] text-muted-foreground whitespace-nowrap">
              {new Date(incident.detectedAt).toLocaleDateString()}
            </span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-muted/50">
              {incident.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
