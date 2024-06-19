"use client"

import axios from "axios"
import React from "react"

export default function Page() {
  const handleGenerate = async () => {
    const result = await axios.get("/api/generate")
    console.log("result", result)
  }

  return (
    <div>
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
        Generate all study screen
      </h1>
      <p className="mt-6 leading-7 first:mt-0">
        This page is private to only for Thanh Youngwoo Rajmund
      </p>
      <div className="mt-3"></div>
      <button
        className="text-sm py-2 px-4 border border-green-500 bg-green-500 text-white contrast-more:text-gray-700 contrast-more:dark:text-gray-100 max-md:hidden whitespace-nowrap subpixel-antialiased hover:underline rounded-md transition-all"
        aria-current="true"
        onClick={handleGenerate}
      >
        Generate All
      </button>
    </div>
  )
}
