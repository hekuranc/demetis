"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import {
  BarChart,
  FileText,
  Download,
  Filter,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  CheckCircle,
  AlertTriangle,
  FileBarChart,
  FileSpreadsheet,
  FilePieChart,
  Share2
} from "lucide-react"

const reports = [
  {
    id: "REP-2025-001",
    name: "Q4 2024 Security Assessment",
    type: "Quarterly Review",
    status: "Completed",
    trend: "positive",
    date: "2025-01-10",
    findings: 24,
    critical: 3
  },
  {
    id: "REP-2025-002",
    name: "Cloud Infrastructure Audit",
    type: "Infrastructure",
    status: "In Progress",
    trend: "neutral",
    date: "2025-01-08",
    findings: 18,
    critical: 2
  },
  {
    id: "REP-2025-003",
    name: "Compliance Gap Analysis",
    type: "Compliance",
    status: "Completed",
    trend: "negative",
    date: "2025-01-05",
    findings: 31,
    critical: 5
  },
  {
    id: "REP-2025-004",
    name: "Network Security Review",
    type: "Security",
    status: "In Review",
    trend: "positive",
    date: "2025-01-03",
    findings: 15,
    critical: 1
  }
]

const reportCategories = [
  { name: "Security Assessments", count: 45, icon: FileBarChart },
  { name: "Compliance Reports", count: 32, icon: FileSpreadsheet },
  { name: "Audit Reports", count: 28, icon: FilePieChart }
]

const metrics = {
  total: 105,
  completed: 87,
  inProgress: 18,
  critical: 12
}

export default function ReportsPage() {
  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "in progress":
        return <Clock className="h-4 w-4 text-blue-500" />
      default:
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />
    }
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "positive":
        return <ArrowDownRight className="h-4 w-4 text-green-500" />
      case "negative":
        return <ArrowUpRight className="h-4 w-4 text-red-500" />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="container mx-auto px-4 py-3 lg:px-8 lg:py-4 space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-2 pl-1">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold tracking-tight mb-0.5">Reports</h1>
            <p className="text-base text-muted-foreground">
              Security assessment and compliance reports
            </p>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
              <Filter className="h-4 w-4 mr-1.5" />
              Filter
            </Button>
            <Button size="sm" className="flex-1 sm:flex-none">
              <Download className="h-4 w-4 mr-1.5" />
              Export
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <Card className="p-3">
            <div className="flex justify-between items-start">
              <div className="space-y-0.5">
                <p className="text-xs font-medium text-muted-foreground">Total Reports</p>
                <p className="text-xl font-bold">{metrics.total}</p>
              </div>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </div>
          </Card>
          <Card className="p-3">
            <div className="flex justify-between items-start">
              <div className="space-y-0.5">
                <p className="text-xs font-medium text-muted-foreground">Completed</p>
                <p className="text-xl font-bold">{metrics.completed}</p>
              </div>
              <CheckCircle className="h-4 w-4 text-green-500" />
            </div>
          </Card>
          <Card className="p-3">
            <div className="flex justify-between items-start">
              <div className="space-y-0.5">
                <p className="text-xs font-medium text-muted-foreground">In Progress</p>
                <p className="text-xl font-bold">{metrics.inProgress}</p>
              </div>
              <Clock className="h-4 w-4 text-blue-500" />
            </div>
          </Card>
          <Card className="p-3">
            <div className="flex justify-between items-start">
              <div className="space-y-0.5">
                <p className="text-xs font-medium text-muted-foreground">Critical Findings</p>
                <p className="text-xl font-bold">{metrics.critical}</p>
              </div>
              <AlertTriangle className="h-4 w-4 text-red-500" />
            </div>
          </Card>
        </div>

        <div className="grid gap-4 xl:grid-cols-3">
          {/* Recent Reports */}
          <Card className="xl:col-span-2">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-base flex items-center gap-1.5">
                    <BarChart className="h-4 w-4 text-muted-foreground" />
                    Recent Reports
                  </CardTitle>
                  <CardDescription>Latest security and compliance reports</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border overflow-x-auto">
                <Table className="min-w-[600px]">
                  <TableHeader>
                    <TableRow>
                      <TableHead>Report Name</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Findings</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {reports.map((report) => (
                      <TableRow key={report.id}>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            {report.name}
                            {getTrendIcon(report.trend)}
                          </div>
                        </TableCell>
                        <TableCell>{report.type}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            {getStatusIcon(report.status)}
                            <span>{report.status}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <span>{report.findings}</span>
                            {report.critical > 0 && (
                              <span className="text-[10px] font-medium text-red-500">
                                ({report.critical} critical)
                              </span>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>{new Date(report.date).toLocaleDateString()}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                            <Share2 className="h-3.5 w-3.5" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Report Categories */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-1.5">
                <FileText className="h-4 w-4 text-muted-foreground" />
                Report Categories
              </CardTitle>
              <CardDescription>Reports by type</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {reportCategories.map((category) => {
                  const Icon = category.icon
                  return (
                    <div
                      key={category.name}
                      className="flex items-center justify-between p-2 rounded-lg border hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">{category.name}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{category.count}</span>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
