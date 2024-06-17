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
  //   const supabase = createClient()

  //   const {
  //     data: { user },
  //   } = await supabase.auth.getUser()

  //   if (!user) {
  //     return redirect("/login")
  //   }

  return (
    <>
      <h1 class="mt-3 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
        Upload
      </h1>
      <p class="mt-6 leading-7 first:mt-0">
        When enabled, KaTeX’s CSS and fonts will be automatically included in
        your site, and you can start writing math expressions in your MDX files.
        Using LaTeX within MDX is as simple as wrapping your expression in{" "}
        <code class="nextra-code" dir="ltr">
          $
        </code>{" "}
        or{" "}
        <code class="nextra-code" dir="ltr">
          $$
        </code>
        .
      </p>
      <div className="mt-3">
        <Upload handleUpload={upload} />
      </div>
      {/* <button onClick={handleThis}>Sample</button> */}
    </>
  )
}
