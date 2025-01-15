import { Asset } from "@/types"

// Helper function to generate random dates within the last week
const getRandomRecentDate = () => {
  const date = new Date()
  date.setDate(date.getDate() - Math.floor(Math.random() * 7))
  return date.toISOString().split('T')[0]
}

// Generate a large dataset of mock assets
const generateMockAssets = () => {
  const assets: Asset[] = []
  const locations = [
    "New York", "London", "Singapore", "San Francisco", "Tokyo",
    "Paris", "Berlin", "Sydney", "Toronto", "Mumbai", "Dubai", "São Paulo"
  ]
  
  // Generate endpoints (workstations, laptops, servers)
  const endpointPrefixes = ["WS", "LT", "SRV"]
  for (let i = 1; i <= 5234; i++) {
    const prefix = endpointPrefixes[Math.floor(Math.random() * endpointPrefixes.length)]
    const location = locations[Math.floor(Math.random() * locations.length)]
    const status = Math.random() > 0.97 ? "discovered" : "integrated" // ~3% discovered
    
    assets.push({
      id: `endpoint-${i}`,
      name: `${prefix}-${location.substring(0, 3).toUpperCase()}-${i.toString().padStart(4, '0')}`,
      type: "endpoint",
      location,
      status,
      lastSeen: getRandomRecentDate()
    })
  }

  // Generate cloud accounts
  const cloudPrefixes = ["AWS", "Azure", "GCP"]
  const environments = ["Prod", "Dev", "Stage", "Test"]
  for (let i = 1; i <= 350; i++) {
    const prefix = cloudPrefixes[Math.floor(Math.random() * cloudPrefixes.length)]
    const env = environments[Math.floor(Math.random() * environments.length)]
    const status = Math.random() > 0.95 ? "discovered" : "integrated" // ~5% discovered
    
    assets.push({
      id: `cloud-${i}`,
      name: `${prefix}-${env}-${i.toString().padStart(3, '0')}`,
      type: "cloud",
      location: "Global",
      status,
      lastSeen: getRandomRecentDate()
    })
  }

  // Generate network devices (routers, switches, firewalls)
  const networkPrefixes = ["RTR", "SW", "FW"]
  for (let i = 1; i <= 450; i++) {
    const prefix = networkPrefixes[Math.floor(Math.random() * networkPrefixes.length)]
    const location = locations[Math.floor(Math.random() * locations.length)]
    const status = Math.random() > 0.96 ? "discovered" : "integrated" // ~4% discovered
    
    assets.push({
      id: `network-${i}`,
      name: `${prefix}-${location.substring(0, 3).toUpperCase()}-${i.toString().padStart(3, '0')}`,
      type: "network",
      location,
      status,
      lastSeen: getRandomRecentDate()
    })
  }

  return assets
}

export const mockAssets = generateMockAssets()

// Calculate statistics
export const assetStats = {
  total: mockAssets.length,
  integrated: mockAssets.filter(a => a.status === "integrated").length,
  discovered: mockAssets.filter(a => a.status === "discovered").length,
  locations: new Set(mockAssets.map(a => a.location)).size,
  byType: {
    endpoint: mockAssets.filter(a => a.type === "endpoint").length,
    cloud: mockAssets.filter(a => a.type === "cloud").length,
    network: mockAssets.filter(a => a.type === "network").length
  }
}
