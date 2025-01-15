export interface User {
  id: string
  name: string
  email: string
  role: 'ciso' | 'risk_manager' | 'security_analyst' | 'compliance_officer' | 'auditor'
  organization: string
  permissions: string[]
  department: string
  lastLogin: string
}

export interface RiskFramework {
  id: string
  name: string
  description: string
  type: 'qualitative' | 'quantitative'
  categories: RiskCategory[]
  metrics: RiskMetric[]
  thresholds: RiskThreshold[]
  owner: string
  lastReview: string
}

export interface RiskCategory {
  id: string
  name: string
  description: string
  weight: number
  subCategories: string[]
  controlObjectives: string[]
}

export interface RiskMetric {
  id: string
  name: string
  description: string
  unit: string
  threshold: number
  trend: 'increasing' | 'decreasing' | 'stable'
  impact: 'low' | 'medium' | 'high' | 'critical'
  dataSource: string
}

export interface RiskThreshold {
  level: 'low' | 'medium' | 'high' | 'critical'
  score: number
  description: string
  requiredActions: string[]
  escalationPath: string[]
}

export interface SecurityProgram {
  id: string
  name: string
  status: 'active' | 'planned' | 'completed'
  type: 'policy' | 'control' | 'initiative'
  owner: string
  budget: number
  startDate: string
  endDate: string
  objectives: string[]
  metrics: ProgramMetric[]
  stakeholders: string[]
}

export interface ProgramMetric {
  name: string
  target: number
  current: number
  unit: string
  trend: 'positive' | 'negative' | 'neutral'
}

export interface Assessment {
  id: string
  name: string
  organization: string
  createdAt: string
  updatedAt: string
  status: 'draft' | 'in_progress' | 'completed' | 'archived'
  type: 'risk' | 'compliance' | 'vendor' | 'technical'
  riskScore: number
  residualRisk: number
  inherentRisk: number
  riskAppetite: number
  criticalIssues: number
  scope: string
  methodology: string
  framework: string[]
  assignedTo: string[]
  reviewedBy: string
  approvedBy: string
  controls: SecurityControl[]
  findings: Finding[]
  recommendations: Recommendation[]
  nextReviewDate: string
}

export interface SecurityControl {
  id: string
  name: string
  type: 'preventive' | 'detective' | 'corrective'
  status: 'implemented' | 'partial' | 'planned' | 'not_implemented'
  effectiveness: number
  lastReview: string
  owner: string
  cost: number
  dependencies: string[]
}

export interface Finding {
  id: string
  title: string
  description: string
  severity: 'low' | 'medium' | 'high' | 'critical'
  status: 'open' | 'in_progress' | 'resolved' | 'accepted'
  discoveredDate: string
  resolvedDate?: string
  owner: string
  remediation: string
  evidence: string[]
  relatedControls: string[]
  cost: number
}

export interface Recommendation {
  id: string
  title: string
  description: string
  priority: 'low' | 'medium' | 'high'
  status: 'proposed' | 'approved' | 'rejected' | 'implemented'
  estimatedCost: number
  estimatedEffort: string
  benefits: string[]
  risks: string[]
  dependencies: string[]
}

export interface ComplianceRequirement {
  id: string
  framework: string
  control: string
  description: string
  status: 'compliant' | 'non_compliant' | 'partially_compliant'
  evidence: string[]
  lastAssessment: string
  nextAssessment: string
  owner: string
  gaps: string[]
}

export interface SecurityMetrics {
  id: string
  category: string
  name: string
  value: number
  target: number
  trend: 'improving' | 'declining' | 'stable'
  period: string
  source: string
  confidence: number
}

export interface SecurityIncident {
  id: string
  title: string
  description: string
  severity: 'low' | 'medium' | 'high' | 'critical'
  status: 'new' | 'investigating' | 'contained' | 'resolved'
  type: string
  reportedBy: string
  assignedTo: string
  discoveryDate: string
  resolutionDate?: string
  impact: {
    financial: number
    operational: string
    reputational: string
  }
  affectedSystems: string[]
  timeline: IncidentEvent[]
  lessons: string[]
}

export interface IncidentEvent {
  timestamp: string
  description: string
  actor: string
  action: string
  evidence: string[]
}

export interface ExecutiveReport {
  id: string
  period: string
  summary: string
  keyMetrics: {
    riskScore: number
    complianceRate: number
    openIncidents: number
    criticalVulnerabilities: number
    securityBudget: number
    programMaturity: number
  }
  trends: {
    riskTrend: 'improving' | 'stable' | 'declining'
    incidentTrend: 'increasing' | 'decreasing' | 'stable'
    budgetTrend: 'increasing' | 'decreasing' | 'stable'
  }
  recommendations: string[]
  priorities: string[]
}

export interface SecurityBudget {
  id: string
  year: number
  total: number
  allocated: number
  spent: number
  categories: {
    technology: number
    personnel: number
    training: number
    consulting: number
    incidents: number
  }
  projects: BudgetItem[]
  forecast: number
  variance: number
}

export interface BudgetItem {
  name: string
  allocated: number
  spent: number
  status: 'planned' | 'in_progress' | 'completed'
  roi: number
}

export interface VendorAssessment {
  id: string
  vendorName: string
  service: string
  riskLevel: 'low' | 'medium' | 'high' | 'critical'
  status: 'approved' | 'pending' | 'rejected'
  assessmentDate: string
  nextReview: string
  findings: Finding[]
  documents: string[]
  contractValue: number
  dataAccess: string[]
}

export interface AssessmentFormValues {
  assessmentName: string
  assessmentType: string
  organization: string
  framework: string
  scope: string
  objectives: string
  networkSecurity: {
    firewallStatus: string
    encryptionLevel: string
    networkIssues: string
    riskLevel: string
  }
  dataProtection: {
    dataClassification: string
    accessControls: string
    dataIssues: string
    riskLevel: string
  }
  endpointSecurity: {
    antivirusStatus: string
    patchStatus: string
    endpointIssues: string
    riskLevel: string
  }
}

export interface Asset {
  id: string
  name: string
  type: "endpoint" | "cloud" | "network"
  location: string
  status: "integrated" | "discovered"
  lastSeen: string
}
