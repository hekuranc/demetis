import * as z from "zod"

const riskLevelSchema = z.enum(["low", "medium", "high", "critical"])

const securityAreaSchema = z.object({
  description: z.string().optional(),
  riskLevel: riskLevelSchema.optional()
})

export const assessmentSchema = z.object({
  assessmentName: z.string().min(1, "Assessment name is required"),
  organization: z.string().min(1, "Organization name is required"),
  framework: z.string().optional(),
  assessmentType: z.string().optional(),
  benchmarks: z.object({
    cloud: z.string().optional(),
    containers: z.string().optional(),
    endpoints: z.string().optional(),
    network: z.string().optional()
  }),
  // For compatibility with existing dashboard
  networkSecurity: securityAreaSchema.optional(),
  dataProtection: securityAreaSchema.optional(),
  endpointSecurity: securityAreaSchema.optional(),
  // Metadata
  id: z.string().optional(),
  status: z.string().optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional()
})

export type AssessmentFormData = z.infer<typeof assessmentSchema>

export type AssessmentArea = {
  id: string
  name: string
  icon: React.ReactNode
  benchmarks: string[]
}

export type Benchmark = {
  value: string
  label: string
}

export type RiskLevel = z.infer<typeof riskLevelSchema>

export type SecurityArea = z.infer<typeof securityAreaSchema>
