
"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Search, Plus } from "lucide-react"
import { mockAssets, assetStats } from "@/lib/data/mock-assets"

export default function AssetsPage() {
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState<"all" | "integrated" | "discovered">("all")
  const [typeFilter, setTypeFilter] = useState<"all" | "endpoint" | "cloud" | "network">("all")
  const [page, setPage] = useState(1)
  const itemsPerPage = 10

  const filteredAssets = mockAssets.filter(asset => {
    const searchLower = search.toLowerCase()
    const matchesSearch = asset.name.toLowerCase().includes(searchLower) || 
                         asset.location.toLowerCase().includes(searchLower)
    const matchesStatus = statusFilter === "all" || asset.status === statusFilter
    const matchesType = typeFilter === "all" || asset.type === typeFilter
    return matchesSearch && matchesStatus && matchesType
  })

  const totalPages = Math.ceil(filteredAssets.length / itemsPerPage)
  const paginatedAssets = filteredAssets.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  )

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="container mx-auto px-4 py-3 lg:px-8 lg:py-4 space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold tracking-tight mb-0.5">Asset Management</h1>
            <p className="text-base text-muted-foreground">
              Manage and monitor all enterprise assets
            </p>
          </div>
          <div className="flex gap-2">
            <Button size="sm">
              <Plus className="h-4 w-4 mr-1.5" />
              Add Asset
            </Button>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Total Assets</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{assetStats.total.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground mt-1">
                {assetStats.byType.endpoint.toLocaleString()} endpoints
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Cloud Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{assetStats.byType.cloud.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground mt-1">
                {Math.round((assetStats.byType.cloud / assetStats.total) * 100)}% of total assets
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Network Devices</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{assetStats.byType.network.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground mt-1">
                {Math.round((assetStats.byType.network / assetStats.total) * 100)}% of total assets
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Integration Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{assetStats.integrated.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground mt-1">
                {Math.round((assetStats.integrated / assetStats.total) * 100)}% integrated
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search by name or location..."
              className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 pl-8 sm:w-[300px] md:w-[400px]"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Button
              variant={statusFilter === "all" ? "default" : "outline"}
              onClick={() => setStatusFilter("all")}
            >
              All
            </Button>
            <Button
              variant={statusFilter === "integrated" ? "default" : "outline"}
              onClick={() => setStatusFilter("integrated")}
            >
              Integrated
            </Button>
            <Button
              variant={statusFilter === "discovered" ? "default" : "outline"}
              onClick={() => setStatusFilter("discovered")}
            >
              Discovered
            </Button>
          </div>
          <div className="flex gap-2">
            <Button
              variant={typeFilter === "all" ? "default" : "outline"}
              onClick={() => setTypeFilter("all")}
            >
              All Types
            </Button>
            <Button
              variant={typeFilter === "endpoint" ? "default" : "outline"}
              onClick={() => setTypeFilter("endpoint")}
            >
              Endpoints
            </Button>
            <Button
              variant={typeFilter === "cloud" ? "default" : "outline"}
              onClick={() => setTypeFilter("cloud")}
            >
              Cloud
            </Button>
            <Button
              variant={typeFilter === "network" ? "default" : "outline"}
              onClick={() => setTypeFilter("network")}
            >
              Network
            </Button>
          </div>
        </div>

        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Seen</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedAssets.map((asset) => (
                  <TableRow key={asset.id}>
                    <TableCell>{asset.name}</TableCell>
                    <TableCell>{asset.type}</TableCell>
                    <TableCell>{asset.location}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        asset.status === "integrated"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}>
                        {asset.status}
                      </span>
                    </TableCell>
                    <TableCell>{asset.lastSeen}</TableCell>
                    <TableCell className="text-right">
                      <Link href={`/assets/${asset.id}`}>
                        <Button variant="ghost" size="sm">
                          Details
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-muted-foreground">
            Showing {((page - 1) * itemsPerPage) + 1} to {Math.min(page * itemsPerPage, filteredAssets.length)} of {filteredAssets.length} assets
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
