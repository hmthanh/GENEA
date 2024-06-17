"use client"

import axios from "axios"
import React, { useCallback } from "react"
import { useDropzone } from "react-dropzone"

const dropzoneStyles = {
  border: "2px dashed #666666",
}

export default function Upload({ handleUpload }) {
  // const [files, setFiles] = useState([])

  //   const {
  //     data: { user },
  //   } = await supabase.auth.getUser()

  //   if (!user) {
  //     return redirect("/login")
  //   }
  const onDrop = useCallback(async (acceptedFiles) => {
    // Do something with the files, like upload to a server
    console.log(acceptedFiles)
    const formData = new FormData()
    for (let i = 0; i < acceptedFiles.length; i++) {
      formData.append("files", acceptedFiles[i])
    }

    try {
      // const response = await axios.post("/api/upload", formData, {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // })
      handleUpload()
      // console.log(response.data.message)
    } catch (error) {
      console.error("Error uploading files:", error)
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  // const handleUpload = async () => {
  //   console.log(files)
  // }

  // const handleFileChange = (e) => {
  //   console.log(e.target)
  //   setFiles(e.target.value)
  // }

  return (
    <div
      {...getRootProps()}
      style={dropzoneStyles}
      className="flex-grow min-w-0 p-32 cursor-pointer rounded-lg text-center appearance-none border border-[#666666] bg-white text-base text-gray-900 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:border-[#888888] dark:bg-transparent dark:text-white dark:focus:border-white sm:text-sm"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here...</p>
      ) : (
        <p>Drag and drop some files here, or click to select files</p>
      )}
    </div>
  )
}

// <div className="flexx items-center justify-center w-full gap-2">
//   {/* <label
//     htmlFor="dropzone-file"
//     className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed roundedLg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
//   >
//     <div className="flex flex-col items-center justify-center pt-5 pb-6">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth={1.5}
//         stroke="currentColor"
//         className="size-8"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
//         />
//       </svg>

//       <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
//         <span className="font-semibold">Click to upload</span> or drag and
//         drop
//       </p>
//       <p className="text-xs text-gray-500 dark:text-gray-400">
//         Upload your video
//       </p>
//     </div>
//     <input
//       id="dropzone-file"
//       type="file"
//       multiple
//       value={files}
//       className="hidden"
//       onChange={handleFileChange}
//     />
//   </label> */}
//   {/* <NewFilePond /> */}

// </div>
