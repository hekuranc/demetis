import { AlertCircle } from "lucide-react"

interface FormErrorProps {
  message?: string
}

export function FormError({ message }: FormErrorProps) {
  if (!message) return null

  return (
    <div className="flex items-center gap-x-2 rounded-md bg-destructive/15 px-3 py-2 text-sm text-destructive mt-2">
      <AlertCircle className="h-4 w-4" />
      <p>{message}</p>
    </div>
  )
}
