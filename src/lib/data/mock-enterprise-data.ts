type Severity = "High" | "Medium" | "Low"

interface Incident {
  id: string
  type: string
  severity: Severity
  status: string
  affectedAssets: string[]
  detectedAt: string
}

interface CloudProvider {
  services: string[]
  regions: string[]
  instances: number
  storageSize: string
  monthlySpend: string
}

interface ComplianceDeadline {
  framework: string
  deadline: string
  status: string
}

interface RiskMetrics {
  critical: number
  high: number
  medium: number
  low: number
}

export const enterpriseAssets = {
  endpoints: {
    total: 5234,
    compliant: 4890,
    needsAttention: 344,
    byType: {
      workstations: 4200,
      servers: 820,
      mobileDevices: 214,
    }
  },
  cloud: {
    aws: {
      services: ["EC2", "S3", "RDS", "Lambda"],
      regions: ["us-east-1", "eu-west-1", "ap-southeast-1"],
      instances: 245,
      storageSize: "500TB",
      monthlySpend: "$180,000"
    } as CloudProvider,
    azure: {
      services: ["VMs", "Blob Storage", "SQL Database", "Functions"],
      regions: ["East US", "West Europe", "Southeast Asia"],
      instances: 178,
      storageSize: "350TB",
      monthlySpend: "$150,000"
    } as CloudProvider,
    gcp: {
      services: ["Compute Engine", "Cloud Storage", "Cloud SQL", "Cloud Functions"],
      regions: ["us-central1", "europe-west1", "asia-southeast1"],
      instances: 123,
      storageSize: "200TB",
      monthlySpend: "$90,000"
    } as CloudProvider
  },
  network: {
    locations: 12,
    firewalls: 24,
    vpnConnections: 18,
    loadBalancers: 32
  },
  compliance: {
    frameworks: ["SOC 2", "HIPAA", "GDPR", "PCI DSS"],
    nextDeadlines: [
      {
        framework: "SOC 2",
        deadline: "2025-03-15",
        status: "In Progress"
      },
      {
        framework: "HIPAA",
        deadline: "2025-06-30",
        status: "Pending Review"
      },
      {
        framework: "PCI DSS",
        deadline: "2025-02-28",
        status: "At Risk"
      }
    ] as ComplianceDeadline[]
  },
  risksByAssetType: {
    endpoints: {
      critical: 12,
      high: 45,
      medium: 156,
      low: 234
    } as RiskMetrics,
    cloudServices: {
      critical: 8,
      high: 23,
      medium: 89,
      low: 167
    } as RiskMetrics,
    networkInfrastructure: {
      critical: 5,
      high: 18,
      medium: 67,
      low: 143
    } as RiskMetrics,
    applications: {
      critical: 15,
      high: 34,
      medium: 112,
      low: 245
    } as RiskMetrics
  },
  recentIncidents: [
    {
      id: "INC-2025-001",
      type: "Security",
      severity: "High",
      status: "In Progress",
      affectedAssets: ["AWS EC2", "Customer Data"],
      detectedAt: "2025-01-13T08:23:00Z"
    },
    {
      id: "INC-2025-002",
      type: "Compliance",
      severity: "Medium",
      status: "Under Review",
      affectedAssets: ["Employee Workstations"],
      detectedAt: "2025-01-12T15:45:00Z"
    },
    {
      id: "INC-2025-003",
      type: "Performance",
      severity: "Low",
      status: "Resolved",
      affectedAssets: ["Azure Load Balancer"],
      detectedAt: "2025-01-11T11:30:00Z"
    }
  ] as Incident[]
}
