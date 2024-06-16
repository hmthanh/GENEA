import { useSession } from "next-auth/react"
import React from "react"

export default function SampleUser() {
  const { data: session, status } = useSession()
  return (
    <div>
      {session}
      {status}
    </div>
  )
}
