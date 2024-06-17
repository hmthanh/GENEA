"use client"

import { useSession } from "next-auth/react"
import React, { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import { Callout, Steps } from "@/nextra"
import Loading from "@/components/loading/loading"
import { upload } from "./actions"

export default function Upload() {
  const { data: session, status } = useSession()
  const [files, setFiles] = useState([])
  const [previews, setPreviews] = useState([])
  const [isError, setIsError] = useState("")

  const onDrop = useCallback(async (acceptedFiles) => {
    setIsError(false)
    // Do something with the files, like upload to a server
    // console.log(acceptedFiles)
    setFiles(acceptedFiles)
    const selectedFiles = Array.from(acceptedFiles).map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }))
    setPreviews(selectedFiles)

    try {
      // handleUpload()
      // console.log(response.data.message)
    } catch (error) {
      console.error("Error uploading files:", error)
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const handleUpload = async (e) => {
    e.preventDefault()
    if (!session) {
      setIsError("Please login with github")
      return
    }

    if (files.length <= 0) {
      setIsError("Please upload video")
      return
    }

    console.log("object", files)
    const formData = new FormData()
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i])
    }
    formData.append("userId", session.userId)
    // const response = await axios.post("/api/upload", formData, {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // })
  }

  if (status === "loading") {
    return (
      <div className="flex w-full p-32 justify-center ">
        <Loading />
      </div>
    )
  }

  if (!session) {
    return <Callout type="error">Please login with github</Callout>
  }

  return (
    <form className="mt-6 flex flex-col w-[80%] px-10 gap-4">
      <div className="flex flex-row items-center gap-4">
        <label htmlFor="email-address" className="w-[20%] flex justify-end">
          Email address
        </label>
        <input
          disabled={true}
          className="flex-grow min-w-0 appearance-none rounded-md border border-[#666666] bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:border-[#888888] dark:bg-transparent dark:text-white dark:focus:border-white sm:text-sm"
          id="email-address"
          type="email"
          name="email-address"
          value={session.email ? session.email : "sample@gmail.com"}
        />
      </div>

      <div className="flex flex-row items-center gap-4">
        <label htmlFor="username" className="w-[20%] flex justify-end">
          Github username
        </label>
        <input
          disabled={true}
          className="flex-grow min-w-0 appearance-none rounded-md border border-[#666666] bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:border-[#888888] dark:bg-transparent dark:text-white dark:focus:border-white sm:text-sm"
          id="username"
          type="username"
          name="username"
          value={session.username}
        />
      </div>

      <div className="flex flex-row items-center gap-4">
        <label htmlFor="name" className="w-[20%] flex justify-end">
          Name
        </label>
        <input
          disabled={true}
          className="flex-grow min-w-0 appearance-none rounded-md border border-[#666666] bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:border-[#888888] dark:bg-transparent dark:text-white dark:focus:border-white sm:text-sm"
          id="name"
          type="name"
          name="name"
          value={session.name}
        />
      </div>

      <div className="flex flex-row items-center gap-4">
        <label htmlFor="userId" className="w-[20%] flex justify-end">
          Your ID
        </label>
        <input
          disabled={true}
          className="flex-grow min-w-0 appearance-none rounded-md border border-[#666666] bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:border-[#888888] dark:bg-transparent dark:text-white dark:focus:border-white sm:text-sm"
          id="userId"
          type="userId"
          name="userId"
          value={session.userId}
        />
      </div>

      <div className="flex flex-row items-center gap-4">
        <label htmlFor="upload" className="w-[20%] flex justify-end">
          Videos upload
        </label>
        <div
          {...getRootProps()}
          style={{ border: "2px dashed #666666" }}
          className="w-[80%] p-4 cursor-pointer rounded-lg text-center appearance-none border border-[#666666] bg-white text-base text-gray-900 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:border-[#888888] dark:bg-transparent dark:text-white dark:focus:border-white sm:text-sm"
        >
          <input {...getInputProps()} accept="video/*" />
          {previews.length > 0 && (
            <ul className="w-full flex flex-wrap gap-2 justify-center">
              {previews.map(({ file, url }, index) => (
                <li
                  key={index}
                  className="w-32 flex flex-col justify-center items-center gap-1 p-2  border rounded-md border-black"
                >
                  <video width="160" height="120" controls>
                    <source src={url} type={file.type} />
                    Your browser does not support the video tag.
                  </video>
                  <p>{file.name}</p>
                </li>
              ))}
            </ul>
          )}
          {isDragActive ? (
            <p>Drop the files here...</p>
          ) : (
            <p>Drag and drop some files here, or click to select files</p>
          )}
        </div>
      </div>

      {isError && (
        <div className="w-full pl-[20%]">
          <Callout type="error" className="mt-0  ">
            {isError}
          </Callout>
        </div>
      )}

      <div className="flex flex-col items-center">
        <div className="pl-[20%] flex justify-start">
          <button
            className=" flex h-10  w-44 betterhover:hover:bg-gray-600 dark:betterhover:hover:bg-gray-300 justify-center rounded-md border border-transparent bg-black px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-gray-800 dark:bg-white dark:text-black dark:focus:ring-white sm:text-sm  transition-all "
            onClick={handleUpload}
          >
            Submission
          </button>
        </div>
      </div>
    </form>
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
