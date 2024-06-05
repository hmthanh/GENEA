// "use client"

import { Button } from "@/nextra"
// import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
// Import FilePond styles
import "filepond/dist/filepond.min.css"
// import { FilePond, registerPlugin } from "react-filepond"
// import { useState } from "react"
import FilePond from "@/components/filepond/customfilepond"
import NewFilePond from "@/components/filepond/newfilepond"
import Upload from "@/components/upload/Upload"

// import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation"
// import FilePondPluginImagePreview from "filepond-plugin-image-preview"
// import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css"

// registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

export default async function Page() {
  //   const supabase = createClient()

  //   const {
  //     data: { user },
  //   } = await supabase.auth.getUser()

  //   if (!user) {
  //     return redirect("/login")
  //   }

  return (
    <>
      <div className="">
        <Upload />
      </div>
    </>
  )
}
