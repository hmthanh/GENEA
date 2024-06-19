"use client"

import axios from "axios"
import React, { useState } from "react"

export default function Page() {
  const [submission, setSubmission] = useState("")
  const [studies, setStudies] = useState("")
  const handleGenerate = async () => {
    const result = await axios.get("/api/generate")
    setSubmission(JSON.stringify(result.data.data, null, 2))
    console.log("result", result)
  }

  return (
    <div className="flex flex-col gap-3">
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

      <div className="flex flex-row items-center gap-4">
        <label htmlFor="submission" className="flex justify-end w-[15%]">
          Submission
        </label>
        <textarea
          className="flex-grow min-w-0 appearance-none rounded-md border border-[#666666] bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:border-[#888888] dark:bg-transparent dark:text-white dark:focus:border-white sm:text-sm"
          id="submission"
          rows="20"
          name="submission"
          value={submission}
          onChange={(e) => setSubmission(e.target.value)}
        />
      </div>

      <div className="flex flex-row items-center gap-4">
        <label htmlFor="studies" className="flex justify-end w-[15%]">
          Studies
        </label>
        <textarea
          className="flex-grow min-w-0 appearance-none rounded-md border border-[#666666] bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:border-[#888888] dark:bg-transparent dark:text-white dark:focus:border-white sm:text-sm"
          id="studies"
          rows="20"
          name="studies"
          value={studies}
          onChange={(e) => setStudies(e.target.value)}
        />
      </div>
    </div>
  )
}
