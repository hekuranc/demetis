"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { AssessmentFormData, assessmentSchema } from "@/lib/schemas/assessment"
import { toast } from "sonner"
import { ArrowLeft, Cloud, Database, FileText, HardDrive, Network } from "lucide-react"
import Link from "next/link"


type BenchmarkValue = "cis-aws" | "cis-azure" | "cis-gcp" | "cis-kubernetes" | "cis-windows" | "cis-linux" | "cis-docker"

const benchmarks: { value: BenchmarkValue; label: string }[] = [
  { value: "cis-aws", label: "CIS AWS Foundations" },
  { value: "cis-azure", label: "CIS Microsoft Azure" },
  { value: "cis-gcp", label: "CIS Google Cloud Platform" },
  { value: "cis-kubernetes", label: "CIS Kubernetes" },
  { value: "cis-windows", label: "CIS Microsoft Windows" },
  { value: "cis-linux", label: "CIS Linux Distribution" },
  { value: "cis-docker", label: "CIS Docker" }
]

const assessmentAreas = [
  { 
    id: "cloud" as const,
    name: "Cloud Infrastructure",
    icon: Cloud,
    benchmarks: ["cis-aws", "cis-azure", "cis-gcp"] as BenchmarkValue[]
  },
  {
    id: "containers" as const,
    name: "Containers & Orchestration",
    icon: Database,
    benchmarks: ["cis-kubernetes", "cis-docker"] as BenchmarkValue[]
  },
  {
    id: "endpoints" as const,
    name: "Endpoint Security",
    icon: HardDrive,
    benchmarks: ["cis-windows", "cis-linux"] as BenchmarkValue[]
  },
  {
    id: "network" as const,
    name: "Network Security",
    icon: Network,
    benchmarks: ["cis-aws", "cis-azure", "cis-gcp"] as BenchmarkValue[]
  }
] as const


export default function NewAssessmentPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentArea, setCurrentArea] = useState("")

  const form = useForm<AssessmentFormData>({
    resolver: zodResolver(assessmentSchema),
    defaultValues: {
      assessmentName: "",
      organization: "",
      benchmarks: {
        cloud: undefined,
        containers: undefined,
        endpoints: undefined,
        network: undefined
      }
    }
  })

  async function simulateAssessment(benchmarks: Record<string, string | undefined>) {
    const selectedAreas = Object.entries(benchmarks)
      .filter(([, value]) => value !== undefined)
      .map(([key]) => key)
    
    const totalSteps = selectedAreas.length * 100
    let currentProgress = 0

    for (const area of selectedAreas) {
      setCurrentArea(area)
      for (let i = 0; i < 100; i++) {
        currentProgress++
        setProgress((currentProgress / totalSteps) * 100)
        await new Promise(resolve => setTimeout(resolve, 50))
      }
    }
  }

  async function onSubmit(data: AssessmentFormData) {
    setLoading(true)
    try {
      // Start automated assessment
      await simulateAssessment(data.benchmarks)
      
      const response = await fetch("/api/assessments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
      
      if (!response.ok) throw new Error("Failed to create assessment")
      
      toast.success("Assessment completed successfully")
      router.push("/dashboard")
  } catch {
    toast.error("Assessment failed")
    } finally {
      setLoading(false)
      setProgress(0)
      setCurrentArea("")
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="container mx-auto px-4 py-3 lg:px-8 lg:py-4 space-y-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Link href="/dashboard" className="hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <span className="text-xs">/</span>
          <span className="text-xs">New Assessment</span>
        </div>

        <div>
          <h1 className="text-2xl lg:text-3xl font-bold tracking-tight mb-0.5">New Assessment</h1>
          <p className="text-base text-muted-foreground">
            Configure automated CIS benchmark assessment
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Basic Information */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-1.5">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  Assessment Details
                </CardTitle>
                <CardDescription>Basic assessment information</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3">
                <FormField
                  control={form.control}
                  name="assessmentName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-medium">Assessment Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Q1 2025 Security Assessment" {...field} className="h-8 text-sm" />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="organization"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-medium">Organization</FormLabel>
                      <FormControl>
                        <Input placeholder="Organization name" {...field} className="h-8 text-sm" />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Assessment Areas */}
            <div className="grid gap-3 sm:grid-cols-2">
              {assessmentAreas.map((area) => {
                const Icon = area.icon
                const fieldName = `benchmarks.${area.id}` as const
                return (
                  <Card key={area.id} className="relative overflow-hidden">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center gap-1.5">
                        <Icon className="h-4 w-4 text-muted-foreground" />
                        {area.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <FormField
                        control={form.control}
                        name={fieldName}
                        render={({ field }) => (
                          <FormItem>
                            <Select 
                              onValueChange={field.onChange} 
                              value={field.value || undefined}
                            >
                              <FormControl>
                                <SelectTrigger className="h-8 text-sm">
                                  <SelectValue placeholder="Select benchmark" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {benchmarks
                                  .filter(b => area.benchmarks.includes(b.value))
                                  .map((benchmark) => (
                                    <SelectItem key={benchmark.value} value={benchmark.value} className="text-sm">
                                      {benchmark.label}
                                    </SelectItem>
                                  ))
                                }
                              </SelectContent>
                            </Select>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        )}
                      />
                      {currentArea === area.id && (
                        <div className="space-y-1">
                          <div className="text-xs text-muted-foreground">Running assessment...</div>
                          <Progress value={progress} className="h-1" />
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="flex justify-end gap-3">
              <Button 
                type="button" 
                variant="outline" 
                size="sm"
                onClick={() => router.back()}
                disabled={loading}
              >
                Cancel
              </Button>
              <Button type="submit" size="sm" disabled={loading}>
                {loading ? "Running Assessment..." : "Start Assessment"}
              </Button>
            </div>
          </form>
        </Form>

        {loading && (
          <Card>
            <CardContent className="py-3">
              <div className="space-y-2">
                <div className="text-sm font-medium">Overall Progress</div>
                <Progress value={progress} className="h-1" />
                <div className="text-xs text-muted-foreground">
                  {currentArea ? `Assessing ${assessmentAreas.find(a => a.id === currentArea)?.name}...` : 'Preparing assessment...'}
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
