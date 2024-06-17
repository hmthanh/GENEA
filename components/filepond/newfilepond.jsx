"use client"

import React, { useState } from "react"
import FilePond from "./customfilepond"

export default function NewFilePond() {
  const [files, setFiles] = useState([])

  return (
    <FilePond
      files={files}
      onupdatefiles={setFiles}
      allowMultiple={true}
      maxFiles={3}
      server="/api/upload"
      name="files" /* sets the file input name, it's filepond by default */
      labelIdle='Drag & Drop your files or <span className="filepond--label-action">Browse</span>'
    />
  )
}
