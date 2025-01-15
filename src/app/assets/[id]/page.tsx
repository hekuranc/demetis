"use client"

import { useParams } from "next/navigation"
import { ArrowLeft, Clock, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { mockAssets } from "@/lib/data/mock-assets"
import { mockComplianceScores, mockDORAMetrics, mockObservabilityMetrics, mockSecurityAlerts } from "@/lib/data/mock-asset-details"
import { MetricChart } from "./components/metric-chart"
import { ComplianceScore } from "./components/compliance-score"
import { DORAMetrics } from "./components/dora-metrics"
import { SecurityAlerts } from "./components/security-alerts"

export default function AssetDetailPage() {
  const params = useParams()
  const asset = mockAssets.find(a => a.id === params.id)

  if (!asset) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Asset not found</h1>
        <Link href="/assets">
          <Button>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Assets
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 lg:px-8">
        <div className="flex items-center gap-4 mb-6">
          <Link href="/assets">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold tracking-tight">{asset.name}</h1>
            <p className="text-muted-foreground">Asset Details</p>
          </div>
        </div>

        {/* Asset Information */}
        <div className="grid gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Asset Information</CardTitle>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <div className="text-sm font-medium text-muted-foreground mb-1">Type</div>
                <div className="capitalize font-medium">{asset.type}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground mb-1">Status</div>
                <div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    asset.status === "integrated"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {asset.status}
                  </span>
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground mb-1">Last Seen</div>
                <div className="flex items-center gap-2 font-medium">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  {asset.lastSeen}
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground mb-1">Location</div>
                <div className="flex items-center gap-2 font-medium">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  {asset.location}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Observability Metrics */}
        <div className="grid gap-6 mb-6">
          <div>
            <h2 className="text-lg font-semibold mb-4">Observability</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {mockObservabilityMetrics.map((metric) => (
                <MetricChart key={metric.name} metric={metric} />
              ))}
            </div>
          </div>
        </div>

        {/* Compliance and DORA */}
        <div className="grid gap-6 mb-6 lg:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold mb-4">Compliance</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {mockComplianceScores.map((score) => (
                <ComplianceScore key={score.framework} score={score} />
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">DORA Metrics</h2>
            <DORAMetrics metrics={mockDORAMetrics} />
          </div>
        </div>

        {/* Security Alerts */}
        <div className="grid gap-6">
          <SecurityAlerts alerts={mockSecurityAlerts} />
        </div>
      </div>
    </div>
  )
}
