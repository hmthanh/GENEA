"use client"

// import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"

import Upload from "./upload"

export default function Page() {
  return (
    <>
      <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
        Submission
      </h1>
      <h2 className="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-10 border-b pb-1 text-3xl border-neutral-200/70 contrast-more:border-neutral-400 dark:border-primary-100/10 contrast-more:dark:border-neutral-400">
        Download input samples
      </h2>
      <p className="mt-6 leading-7 first:mt-0">
        First please download input video files.
      </p>
      <p className="mt-3 leading-7 first:mt-0">
        Run your model to get inference output
      </p>
      <p className="mt-3 leading-7 first:mt-0">
        Login with github and Create submission result in below section.
      </p>
      <h2 className="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-10 border-b pb-1 text-3xl border-neutral-200/70 contrast-more:border-neutral-400 dark:border-primary-100/10 contrast-more:dark:border-neutral-400">
        Upload videos
      </h2>
      <div className="mt-6 mb-32">
        {/* <p className="mt-3 leading-7 first:mt-0">Github information</p> */}
        <Upload />
      </div>

      {/* <Upload handleUpload={upload} /> */}
    </>
  )
}
