import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, CheckCircle2, Clock } from "lucide-react"
import { cn } from "@/lib/utils"
import type { SecurityAlert } from "@/lib/data/mock-asset-details"

interface SecurityAlertsProps {
  alerts: SecurityAlert[]
}

export function SecurityAlerts({ alerts }: SecurityAlertsProps) {
  const getSeverityColor = (severity: SecurityAlert['severity']) => {
    switch (severity) {
      case 'critical':
        return 'bg-red-100 text-red-800'
      case 'high':
        return 'bg-orange-100 text-orange-800'
      case 'medium':
        return 'bg-yellow-100 text-yellow-800'
      case 'low':
        return 'bg-blue-100 text-blue-800'
    }
  }

  const getStatusIcon = (status: SecurityAlert['status']) => {
    switch (status) {
      case 'open':
        return <AlertTriangle className="h-4 w-4 text-red-500" />
      case 'investigating':
        return <Clock className="h-4 w-4 text-yellow-500" />
      case 'resolved':
        return <CheckCircle2 className="h-4 w-4 text-green-500" />
    }
  }

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp)
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date)
  }

  return (
    <Card>
      <CardHeader className="pb-1 pt-3 px-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">Security Alerts</CardTitle>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <div className="h-2 w-2 rounded-full bg-red-500" />
              <span className="text-xs text-muted-foreground">Critical</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="h-2 w-2 rounded-full bg-orange-500" />
              <span className="text-xs text-muted-foreground">High</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="h-2 w-2 rounded-full bg-yellow-500" />
              <span className="text-xs text-muted-foreground">Medium</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-2 p-3 pt-0">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="flex items-start gap-2 p-2 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
          >
            <div className="mt-0.5">{getStatusIcon(alert.status)}</div>
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm font-medium">{alert.description}</div>
                <span className={cn(
                  "px-2 py-0.5 rounded-full text-xs font-medium",
                  getSeverityColor(alert.severity)
                )}>
                  {alert.severity}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-muted-foreground">{alert.category}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">{formatDate(alert.timestamp)}</span>
                <span className="text-muted-foreground">•</span>
                <span className="capitalize text-muted-foreground">{alert.status}</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
