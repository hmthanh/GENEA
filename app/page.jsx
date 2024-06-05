import React from "react"
import HomePage from "./homepage.mdx"
import Twitter from "@/components/twitter"

export default function Page() {
  return (
    <main className="w-full min-w-0  px-2 pt-4">
      <div className="grid grid-cols-3">
        <div className="col-span-2 w-full  pl-16 pr-4">
          <HomePage />
        </div>

        <div className="w-full">
          <Twitter />
        </div>
      </div>
    </main>
  )
}
