import { AssessmentFormData } from "../schemas/assessment"

const mockAssessments: AssessmentFormData[] = [
  {
    id: "a1",
    assessmentName: "Q4 2024 Security Review",
    organization: "Acme Corp",
    assessmentType: "Quarterly",
    framework: "nist-rmf",
    status: "completed",
    createdAt: "2024-12-15",
    networkSecurity: {
      description: "Network security assessment completed",
      riskLevel: "medium"
    },
    dataProtection: {
      description: "Data protection measures reviewed",
      riskLevel: "low"
    },
    endpointSecurity: {
      description: "Endpoint security analysis completed",
      riskLevel: "high"
    },
    benchmarks: {
      cloud: "cis-aws",
      network: "cis-aws",
      endpoints: "cis-windows"
    }
  },
  {
    id: "a2",
    assessmentName: "Cloud Infrastructure Audit",
    organization: "TechCorp",
    assessmentType: "Infrastructure",
    framework: "iso-27005",
    status: "in-progress",
    createdAt: "2024-12-10",
    networkSecurity: {
      description: "Network assessment in progress",
      riskLevel: "high"
    },
    dataProtection: {
      description: "Data protection review ongoing",
      riskLevel: "medium"
    },
    endpointSecurity: {
      description: "Endpoint security evaluation",
      riskLevel: "low"
    },
    benchmarks: {
      cloud: "cis-azure",
      containers: "cis-kubernetes"
    }
  },
  {
    id: "a3",
    assessmentName: "Annual Security Assessment",
    organization: "GlobalTech",
    assessmentType: "Annual",
    framework: "fair",
    status: "completed",
    createdAt: "2024-12-01",
    networkSecurity: {
      description: "Comprehensive network review",
      riskLevel: "critical"
    },
    dataProtection: {
      description: "Data security evaluation",
      riskLevel: "high"
    },
    endpointSecurity: {
      description: "Endpoint protection analysis",
      riskLevel: "medium"
    },
    benchmarks: {
      cloud: "cis-gcp",
      network: "cis-gcp",
      containers: "cis-docker"
    }
  }
]

export const getAssessments = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  return mockAssessments
}

export const createAssessment = async (assessment: AssessmentFormData) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  const newAssessment: AssessmentFormData = {
    ...assessment,
    id: `a${mockAssessments.length + 1}`,
    createdAt: new Date().toISOString(),
    status: "in-progress"
  }
  
  mockAssessments.push(newAssessment)
  return newAssessment
}
