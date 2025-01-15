import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { ComplianceScore } from "@/lib/data/mock-asset-details"
import { cn } from "@/lib/utils"

interface ComplianceScoreProps {
  score: ComplianceScore
}

export function ComplianceScore({ score }: ComplianceScoreProps) {
  const getStatusColor = (status: ComplianceScore['status']) => {
    switch (status) {
      case 'compliant':
        return 'bg-green-100 text-green-800'
      case 'partially_compliant':
        return 'bg-yellow-100 text-yellow-800'
      case 'non_compliant':
        return 'bg-red-100 text-red-800'
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600'
    if (score >= 70) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">{score.framework}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-4xl font-bold">
            <span className={getScoreColor(score.score)}>{score.score}</span>
            <span className="text-base text-muted-foreground">/100</span>
          </div>
          <span className={cn(
            "px-2.5 py-1 rounded-full text-xs font-medium",
            getStatusColor(score.status)
          )}>
            {score.status.replace('_', ' ')}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="text-muted-foreground">Last Assessment</div>
            <div className="font-medium">{score.lastAssessment}</div>
          </div>
          <div>
            <div className="text-muted-foreground">Findings</div>
            <div className="font-medium">
              {score.findings} ({score.criticalFindings} critical)
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
