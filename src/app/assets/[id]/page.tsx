"use client"

import { useParams } from "next/navigation"
import { ArrowLeft, Clock, Globe, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { mockAssets } from "@/lib/data/mock-assets"

// Mock events for the timeline
const mockEvents = [
  {
    id: 1,
    date: "2024-01-15",
    type: "status",
    description: "Asset successfully integrated",
  },
  {
    id: 2,
    date: "2024-01-14",
    type: "security",
    description: "Security scan completed - No vulnerabilities found",
  },
  {
    id: 3,
    date: "2024-01-13",
    type: "update",
    description: "System updates installed",
  },
  {
    id: 4,
    date: "2024-01-12",
    type: "alert",
    description: "High CPU usage detected",
  },
]

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

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Asset Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-1">Type</div>
                  <div className="capitalize">{asset.type}</div>
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
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    {asset.lastSeen}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-1">Location</div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    {asset.location}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Security Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Vulnerabilities</div>
                  <div className="text-green-600 font-medium">None detected</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Last Security Scan</div>
                  <div>2024-01-14</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Compliance Status</div>
                  <div className="text-green-600 font-medium">Compliant</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Uptime</div>
                  <div>99.9%</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Response Time</div>
                  <div>120ms</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Resource Utilization</div>
                  <div>65%</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockEvents.map((event) => (
                    <div key={event.id} className="flex gap-4">
                      <div className="mt-1">
                        <Activity className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">{event.description}</div>
                        <div className="text-sm text-muted-foreground">{event.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
