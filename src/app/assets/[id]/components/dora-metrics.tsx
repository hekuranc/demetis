import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDown, ArrowUp, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

interface DORAMetric {
  score: number
  value: string
  trend: string
  industry: string
}

interface DORAMetricsProps {
  metrics: {
    deploymentFrequency: DORAMetric
    leadTime: DORAMetric
    timeToRestore: DORAMetric
    changeFailureRate: DORAMetric
    availability: DORAMetric
    incidentResponse: DORAMetric
  }
}

export function DORAMetrics({ metrics }: DORAMetricsProps) {
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'improving':
        return <ArrowUp className="h-4 w-4 text-green-500" />
      case 'declining':
        return <ArrowDown className="h-4 w-4 text-red-500" />
      case 'stable':
        return <Minus className="h-4 w-4 text-yellow-500" />
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600'
    if (score >= 70) return 'text-yellow-600'
    return 'text-red-600'
  }

  const MetricRow = ({ title, metric }: { title: string; metric: DORAMetric }) => (
    <div className="flex items-center justify-between py-3 border-b last:border-0">
      <div>
        <div className="font-medium mb-0.5">{title}</div>
        <div className="text-sm text-muted-foreground">{metric.value}</div>
      </div>
      <div className="text-right">
        <div className="flex items-center gap-2 justify-end mb-0.5">
          <span className={cn("font-bold", getScoreColor(metric.score))}>
            {metric.score}
          </span>
          {getTrendIcon(metric.trend)}
        </div>
        <div className="text-xs text-muted-foreground">{metric.industry}</div>
      </div>
    </div>
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">DORA Metrics</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <MetricRow
          title="Deployment Frequency"
          metric={metrics.deploymentFrequency}
        />
        <MetricRow
          title="Lead Time for Changes"
          metric={metrics.leadTime}
        />
        <MetricRow
          title="Time to Restore Service"
          metric={metrics.timeToRestore}
        />
        <MetricRow
          title="Change Failure Rate"
          metric={metrics.changeFailureRate}
        />
        <MetricRow
          title="Service Availability"
          metric={metrics.availability}
        />
        <MetricRow
          title="Incident Response Time"
          metric={metrics.incidentResponse}
        />
      </CardContent>
    </Card>
  )
}
