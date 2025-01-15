import { NextResponse } from "next/server"
import { AssessmentFormData } from "@/lib/schemas/assessment"

// In a real app, this would be a database
const assessments: AssessmentFormData[] = []

export async function POST(request: Request) {
  try {
    const assessment = await request.json()
    
    // Add created date and ID
    const newAssessment = {
      ...assessment,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      status: "pending",
    }
    
    assessments.push(newAssessment)
    
    return NextResponse.json(newAssessment, { status: 201 })
  } catch (error) {
    console.error("Failed to create assessment:", error)
    return NextResponse.json(
      { error: "Failed to create assessment" },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    return NextResponse.json(assessments)
  } catch (error) {
    console.error("Failed to fetch assessments:", error)
    return NextResponse.json(
      { error: "Failed to fetch assessments" },
      { status: 500 }
    )
  }
}
