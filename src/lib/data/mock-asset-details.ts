export interface ComplianceScore {
  framework: string
  score: number
  lastAssessment: string
  status: 'compliant' | 'partially_compliant' | 'non_compliant'
  findings: number
  criticalFindings: number
}

export interface ObservabilityMetric {
  name: string
  value: number
  unit: string
  trend: 'up' | 'down' | 'stable'
  history: { timestamp: string; value: number }[]
}

export interface SecurityAlert {
  id: string
  severity: 'low' | 'medium' | 'high' | 'critical'
  description: string
  timestamp: string
  status: 'open' | 'investigating' | 'resolved'
  category: string
}

export const mockComplianceScores: ComplianceScore[] = [
  {
    framework: "DORA",
    score: 87,
    lastAssessment: "2024-01-10",
    status: "partially_compliant",
    findings: 3,
    criticalFindings: 1
  },
  {
    framework: "ISO 27001",
    score: 92,
    lastAssessment: "2024-01-12",
    status: "compliant",
    findings: 2,
    criticalFindings: 0
  },
  {
    framework: "NIST CSF",
    score: 85,
    lastAssessment: "2024-01-08",
    status: "partially_compliant",
    findings: 4,
    criticalFindings: 0
  },
  {
    framework: "SOC 2",
    score: 95,
    lastAssessment: "2024-01-15",
    status: "compliant",
    findings: 1,
    criticalFindings: 0
  }
]

// Generate random historical data points
const generateHistory = (baseValue: number, points: number = 24) => {
  const history = []
  for (let i = points - 1; i >= 0; i--) {
    const date = new Date()
    date.setHours(date.getHours() - i)
    const variance = (Math.random() - 0.5) * 10
    history.push({
      timestamp: date.toISOString(),
      value: Math.max(0, Math.min(100, baseValue + variance))
    })
  }
  return history
}

export const mockObservabilityMetrics: ObservabilityMetric[] = [
  {
    name: "CPU Utilization",
    value: 65.4,
    unit: "%",
    trend: "up",
    history: generateHistory(65)
  },
  {
    name: "Memory Usage",
    value: 78.2,
    unit: "%",
    trend: "stable",
    history: generateHistory(78)
  },
  {
    name: "Network Latency",
    value: 42,
    unit: "ms",
    trend: "down",
    history: generateHistory(42)
  },
  {
    name: "Disk I/O",
    value: 25.7,
    unit: "MB/s",
    trend: "stable",
    history: generateHistory(25)
  },
  {
    name: "Error Rate",
    value: 0.05,
    unit: "%",
    trend: "down",
    history: generateHistory(0.05)
  },
  {
    name: "Request Rate",
    value: 850,
    unit: "req/s",
    trend: "up",
    history: generateHistory(850)
  }
]

export const mockSecurityAlerts: SecurityAlert[] = [
  {
    id: "1",
    severity: "high",
    description: "Unusual authentication pattern detected",
    timestamp: "2024-01-15T08:23:15Z",
    status: "investigating",
    category: "Authentication"
  },
  {
    id: "2",
    severity: "medium",
    description: "SSL certificate expiring in 15 days",
    timestamp: "2024-01-15T10:45:00Z",
    status: "open",
    category: "Certificates"
  },
  {
    id: "3",
    severity: "critical",
    description: "Multiple failed sudo attempts",
    timestamp: "2024-01-14T22:15:30Z",
    status: "resolved",
    category: "Access Control"
  },
  {
    id: "4",
    severity: "low",
    description: "Non-critical port scan detected",
    timestamp: "2024-01-14T15:30:00Z",
    status: "resolved",
    category: "Network Security"
  }
]

export const mockDORAMetrics = {
  deploymentFrequency: {
    score: 85,
    value: "Multiple deploys per day",
    trend: "improving",
    industry: "Elite performer"
  },
  leadTime: {
    score: 78,
    value: "Less than one day",
    trend: "stable",
    industry: "Elite performer"
  },
  timeToRestore: {
    score: 92,
    value: "Less than 1 hour",
    trend: "improving",
    industry: "Elite performer"
  },
  changeFailureRate: {
    score: 88,
    value: "0-15%",
    trend: "improving",
    industry: "Elite performer"
  },
  availability: {
    score: 99.95,
    value: "Four nines",
    trend: "stable",
    industry: "Above average"
  },
  incidentResponse: {
    score: 82,
    value: "< 30 minutes",
    trend: "improving",
    industry: "High performer"
  }
}
