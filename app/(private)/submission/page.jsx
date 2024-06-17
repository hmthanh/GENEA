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
import { useSession } from "next-auth/react"
import { Callout, Steps } from "@/nextra"
import Loading from "@/components/loading/loading"

// import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation"
// import FilePondPluginImagePreview from "filepond-plugin-image-preview"
// import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css"

// registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

export default function Page() {
  const { data: session, status } = useSession()

  // if (!session) {
  //   return <Callout type="error">Please login with github</Callout>
  // }

  const handleUpload = () => {
    console.log("object")
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

  console.log(session)
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
      <div className="mt-6 mb-52">
        {/* <p className="mt-3 leading-7 first:mt-0">Github information</p> */}
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
              Upload
            </label>
            <Upload handleUpload={handleUpload} />
          </div>
          <div className="flex flex-col items-center">
            <div className="pl-[20%] flex justify-start">
              <button
                className=" flex h-10  w-44 betterhover:hover:bg-gray-600 dark:betterhover:hover:bg-gray-300 justify-center rounded-md border border-transparent bg-black px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-gray-800 dark:bg-white dark:text-black dark:focus:ring-white sm:text-sm  transition-all "
                onClick={handleUpload}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* <Upload handleUpload={upload} /> */}
    </>
  )
}
