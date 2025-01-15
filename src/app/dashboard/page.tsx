"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AssessmentFormData, RiskLevel } from "@/lib/schemas/assessment"
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  Minus, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Archive, 
  Plus,
  Cloud,
  Monitor,
  Server,
  Calendar,
  AlertOctagon,
  BarChart,
  Activity,
  FileText
} from "lucide-react"
import { enterpriseAssets } from "@/lib/data/mock-enterprise-data"
import { toast } from "sonner"
import { MetricCard, RiskBar, IncidentCard } from "./components"

const getRiskLevelCount = (assessments: AssessmentFormData[], level: RiskLevel) => {
  return assessments.filter(a => 
    (a.networkSecurity?.riskLevel === level) ||
    (a.dataProtection?.riskLevel === level) ||
    (a.endpointSecurity?.riskLevel === level)
  ).length
}

export default function DashboardPage() {
  const [assessments, setAssessments] = useState<AssessmentFormData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchAssessments()
  }, [])

  const fetchAssessments = async () => {
    try {
      const { getAssessments } = await import("@/lib/data/mock-assessments")
      const data = await getAssessments()
      setAssessments(data)
    } catch (error) {
      console.error("Error fetching assessments:", error)
      toast.error("Failed to load assessments")
    } finally {
      setLoading(false)
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status?.toLowerCase()) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "in-progress":
        return <Clock className="h-4 w-4 text-blue-500" />
      case "archived":
        return <Archive className="h-4 w-4 text-gray-500" />
      default:
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />
    }
  }

  const getRiskTrend = (assessment: AssessmentFormData) => {
    const risks = [
      assessment.networkSecurity?.riskLevel,
      assessment.dataProtection?.riskLevel,
      assessment.endpointSecurity?.riskLevel,
    ].filter((r): r is RiskLevel => r !== undefined)
    
    const highCount = risks.filter(r => r === "high" || r === "critical").length
    
    if (highCount >= 2) return <ArrowUpRight className="h-4 w-4 text-red-500" />
    if (highCount === 1) return <Minus className="h-4 w-4 text-yellow-500" />
    return <ArrowDownRight className="h-4 w-4 text-green-500" />
  }

  const getFrameworkBadge = (framework: string | undefined) => {
    if (!framework) return null
    
    const badges: Record<string, { color: string; label: string }> = {
      "nist-rmf": { color: "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300", label: "NIST RMF" },
      "iso-27005": { color: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300", label: "ISO 27005" },
      "fair": { color: "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300", label: "FAIR" },
      "custom": { color: "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300", label: "Custom" },
    }
    
    const badge = badges[framework] || badges.custom
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${badge.color}`}>
        {badge.label}
      </span>
    )
  }

  const getMetrics = () => {
    const total = assessments.length
    const completed = assessments.filter(a => a.status === "completed").length
    const inProgress = assessments.filter(a => a.status === "in-progress").length
    const highRisk = getRiskLevelCount(assessments, "high") + getRiskLevelCount(assessments, "critical")

    return { total, completed, inProgress, highRisk }
  }

  const metrics = getMetrics()

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="container mx-auto px-4 py-3 lg:px-8 lg:py-4 space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-2 pl-1">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold tracking-tight mb-0.5">Security Dashboard</h1>
            <p className="text-base text-muted-foreground">
              Enterprise Security Risk Management
            </p>
          </div>
          <Button asChild className="w-full sm:w-auto hover:shadow-lg transition-all">
            <Link href="/assessments/new">
              <Plus className="mr-2 h-4 w-4" /> New Assessment
            </Link>
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <MetricCard
            title="Total Assessments"
            value={metrics.total}
            icon={FileText}
            progress={Math.round((metrics.total / 10) * 100)}
            trend={<Activity className="h-4 w-4" />}
            trendValue="+20% from last month"
          />
          <MetricCard
            title="Completed"
            value={metrics.completed}
            icon={CheckCircle}
            progress={Math.round((metrics.completed / metrics.total) * 100)}
            progressColor="bg-green-500"
            trend={<ArrowUpRight className="h-4 w-4" />}
            trendValue={`${Math.round((metrics.completed / metrics.total) * 100)}%`}
            trendColor="text-green-500"
          />
          <MetricCard
            title="In Progress"
            value={metrics.inProgress}
            icon={Clock}
            progress={Math.round((metrics.inProgress / metrics.total) * 100)}
            progressColor="bg-blue-500"
            trend={<Activity className="h-4 w-4" />}
            trendValue={`${metrics.inProgress} pending`}
            trendColor="text-blue-500"
          />
          <MetricCard
            title="High Risk Issues"
            value={metrics.highRisk}
            icon={AlertTriangle}
            progress={Math.round((metrics.highRisk / metrics.total) * 100)}
            progressColor="bg-red-500"
            trend={metrics.highRisk > 2 ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
            trendValue={`${metrics.highRisk} critical`}
            trendColor={metrics.highRisk > 2 ? "text-red-500" : "text-green-500"}
          />
        </div>

        <div className="grid gap-4 xl:grid-cols-3 min-h-[calc(100vh-24rem)]">
          {/* Asset Overview & Risk Distribution */}
          <div className="space-y-4 xl:col-span-2">
            {/* Asset Overview */}
            <Card className="dashboard-card">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-base flex items-center gap-1.5">
                      <Monitor className="h-4 w-4 text-muted-foreground" />
                      Enterprise Assets
                    </CardTitle>
                    <CardDescription>Infrastructure and cloud resources</CardDescription>
                  </div>
                  <Button variant="outline" size="sm" className="hover:shadow-md transition-all">
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="grid gap-4">
                {/* Endpoints */}
                <div className="space-y-1.5">
                  <div className="flex justify-between">
                    <h3 className="text-sm font-medium">Endpoints</h3>
                    <span className="text-xs text-yellow-600 font-medium">
                      {enterpriseAssets.endpoints.needsAttention} need attention
                    </span>
                  </div>
                  <RiskBar
                    risks={{
                      critical: enterpriseAssets.endpoints.needsAttention,
                      high: 0,
                      medium: 0,
                      low: enterpriseAssets.endpoints.compliant,
                    }}
                  />
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1.5">
                    <div>
                      <p className="text-xl font-bold">{enterpriseAssets.endpoints.total}</p>
                      <p className="text-xs text-muted-foreground">Total Devices</p>
                    </div>
                    <div>
                      <p className="text-xl font-bold">{enterpriseAssets.endpoints.compliant}</p>
                      <p className="text-xs text-muted-foreground">Compliant</p>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-yellow-600">
                        {enterpriseAssets.endpoints.needsAttention}
                      </p>
                      <p className="text-xs text-muted-foreground">At Risk</p>
                    </div>
                  </div>
                </div>

                {/* Cloud Resources */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-sm font-medium">Cloud Infrastructure</h3>
                    <span className="text-xs text-muted-foreground">
                      {enterpriseAssets.cloud.aws.instances + 
                       enterpriseAssets.cloud.azure.instances + 
                       enterpriseAssets.cloud.gcp.instances} total instances
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3 rounded-lg border hover:shadow-md transition-all">
                      <div className="flex items-center gap-2 mb-2">
                        <Cloud className="h-4 w-4 text-orange-500" />
                        <p className="text-sm font-medium">AWS</p>
                      </div>
                      <p className="text-xl font-bold">{enterpriseAssets.cloud.aws.instances}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {enterpriseAssets.cloud.aws.regions.length} regions
                      </p>
                    </div>
                    <div className="p-3 rounded-lg border hover:shadow-md transition-all">
                      <div className="flex items-center gap-2 mb-2">
                        <Cloud className="h-4 w-4 text-blue-500" />
                        <p className="text-sm font-medium">Azure</p>
                      </div>
                      <p className="text-xl font-bold">{enterpriseAssets.cloud.azure.instances}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {enterpriseAssets.cloud.azure.regions.length} regions
                      </p>
                    </div>
                    <div className="p-3 rounded-lg border hover:shadow-md transition-all">
                      <div className="flex items-center gap-2 mb-2">
                        <Cloud className="h-4 w-4 text-green-500" />
                        <p className="text-sm font-medium">GCP</p>
                      </div>
                      <p className="text-xl font-bold">{enterpriseAssets.cloud.gcp.instances}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {enterpriseAssets.cloud.gcp.regions.length} regions
                      </p>
                    </div>
                  </div>
                </div>

                {/* Network Infrastructure */}
                <div>
                  <h3 className="text-sm font-medium mb-2">Network Infrastructure</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg border hover:shadow-md transition-all">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm font-medium">Locations</p>
                        <Server className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <p className="text-xl font-bold">{enterpriseAssets.network.locations}</p>
                      <p className="text-xs text-muted-foreground mt-1">Global presence</p>
                    </div>
                    <div className="p-3 rounded-lg border hover:shadow-md transition-all">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm font-medium">Network Devices</p>
                        <Activity className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <p className="text-xl font-bold">
                        {enterpriseAssets.network.firewalls + enterpriseAssets.network.loadBalancers}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">Active devices</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Risk Distribution */}
            <Card className="dashboard-card">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-base flex items-center gap-1.5">
                      <BarChart className="h-4 w-4 text-muted-foreground" />
                      Risk Distribution
                    </CardTitle>
                    <CardDescription>Risk levels by asset category</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(enterpriseAssets.risksByAssetType).map(([type, risks]) => {
                    const total = risks.critical + risks.high + risks.medium + risks.low
                    return (
                      <div key={type} className="hover:bg-muted/50 p-2 rounded-lg transition-colors">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium capitalize">{type.replace(/([A-Z])/g, ' $1').trim()}</span>
                          <span className="text-muted-foreground">{total} findings</span>
                        </div>
                        <RiskBar risks={risks} />
                        <div className="flex justify-between text-xs text-muted-foreground mt-1">
                          <span>{risks.critical + risks.high} critical/high</span>
                          <span>{Math.round(((risks.low + risks.medium) / total) * 100)}% under control</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Compliance & Incidents */}
          <div className="flex flex-col gap-4 xl:col-span-1">
            {/* Compliance Deadlines */}
            <Card className="dashboard-card flex-1">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-base flex items-center gap-1.5">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      Compliance Deadlines
                    </CardTitle>
                    <CardDescription>Upcoming requirements</CardDescription>
                  </div>
                  <Button variant="outline" size="sm" className="hover:shadow-md transition-all">
                    View Calendar
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="overflow-auto" style={{ maxHeight: "calc(35vh - 2rem)" }}>
                <div className="space-y-2">
                  {enterpriseAssets.compliance.nextDeadlines.map((deadline) => {
                    const daysUntil = Math.ceil(
                      (new Date(deadline.deadline).getTime() - new Date('2025-01-14').getTime()) / 
                      (1000 * 60 * 60 * 24)
                    )
                    const statusColor = 
                      deadline.status === "At Risk" ? "text-red-500 bg-red-50 dark:bg-red-950/50" :
                      deadline.status === "In Progress" ? "text-yellow-500 bg-yellow-50 dark:bg-yellow-950/50" :
                      "text-blue-500 bg-blue-50 dark:bg-blue-950/50"
                    return (
                      <div key={deadline.framework} 
                        className="hover-trigger p-2 rounded-lg border hover:shadow-md transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-1.5 rounded-full ${statusColor.split(" ")[1]}`}>
                            <Calendar className={`h-4 w-4 ${statusColor.split(" ")[0]}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start gap-2">
                              <p className="text-sm font-medium">{deadline.framework}</p>
                              <span className={`px-2 py-0.5 rounded text-xs font-medium ${statusColor}`}>
                                {deadline.status}
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground mt-0.5">
                              Due in {daysUntil} days
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Recent Incidents */}
            <Card className="dashboard-card flex-1">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-base flex items-center gap-1.5">
                      <AlertOctagon className="h-4 w-4 text-muted-foreground" />
                      Recent Incidents
                    </CardTitle>
                    <CardDescription>Latest security events</CardDescription>
                  </div>
                  <Button variant="outline" size="sm" className="hover:shadow-md transition-all">
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="overflow-auto" style={{ maxHeight: "calc(35vh - 2rem)" }}>
                <div className="space-y-2">
                  {enterpriseAssets.recentIncidents.map((incident) => (
                    <IncidentCard key={incident.id} incident={incident} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Assessments */}
        <Card className="dashboard-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base flex items-center gap-1.5">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  Recent Assessments
                </CardTitle>
                <CardDescription>Latest security evaluations</CardDescription>
              </div>
              <Button variant="outline" size="sm" className="hover:shadow-md transition-all">
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {assessments.length === 0 ? (
              <div className="text-center py-12">
                <div className="flex justify-center">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Plus className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-medium">No assessments found</h3>
                <p className="text-sm text-muted-foreground mt-2 max-w-sm mx-auto">
                  Get started by creating your first security assessment.
                </p>
                <Button asChild className="mt-6">
                  <Link href="/assessments/new">Create Assessment</Link>
                </Button>
              </div>
            ) : (
              <div className="rounded-lg border overflow-x-auto">
                <Table className="min-w-[800px]">
                  <TableHeader>
                    <TableRow>
                      <TableHead>Assessment Name</TableHead>
                      <TableHead>Framework</TableHead>
                      <TableHead>Organization</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Risk Trend</TableHead>
                      <TableHead>Created</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {assessments.map((assessment) => (
                      <TableRow key={assessment.id} className="hover:bg-muted/50 transition-colors">
                        <TableCell className="font-medium">
                          <Link 
                            href={`/assessments/${assessment.id}`}
                            className="hover:text-primary flex items-center gap-2"
                          >
                            {assessment.assessmentName}
                          </Link>
                        </TableCell>
                        <TableCell>{getFrameworkBadge(assessment.framework)}</TableCell>
                        <TableCell>{assessment.organization}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {getStatusIcon(assessment.status || "pending")}
                            <span className="capitalize">{assessment.status || "Pending"}</span>
                          </div>
                        </TableCell>
                        <TableCell>{getRiskTrend(assessment)}</TableCell>
                        <TableCell className="text-muted-foreground">
                          {new Date(assessment.createdAt || "").toLocaleDateString()}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
