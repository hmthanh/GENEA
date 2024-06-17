"use client"

// import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
// Import FilePond styles
// import "filepond/dist/filepond.min.css"
// import { FilePond, registerPlugin } from "react-filepond"
// import { useState } from "react"
// import FilePond from "@/components/filepond/customfilepond"
// import NewFilePond from "@/components/filepond/newfilepond"
import { upload } from "./actions"
import Upload from "./upload"

// import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation"
// import FilePondPluginImagePreview from "filepond-plugin-image-preview"
// import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css"

// registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

export default function Page() {
  return (
    <>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
        Submission
      </h1>
      <h2 class="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-10 border-b pb-1 text-3xl border-neutral-200/70 contrast-more:border-neutral-400 dark:border-primary-100/10 contrast-more:dark:border-neutral-400">
        Download input samples
      </h2>
      <p className="mt-6 leading-7 first:mt-0">
        When enabled, KaTe's CSS and fonts will be automatically included in
        your site, and you can start writing math expressions in your MDX files.
        Using LaTeX within MDX is as simple as wrapping your expression in
      </p>
      <h2 class="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-10 border-b pb-1 text-3xl border-neutral-200/70 contrast-more:border-neutral-400 dark:border-primary-100/10 contrast-more:dark:border-neutral-400">
        Upload videos
      </h2>
      <div className="mt-3">
        <Upload handleUpload={upload} />
      </div>
      {/* <button onClick={handleThis}>Sample</button> */}
    </>
  )
}
