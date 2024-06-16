// import { createClient } from "@/utils/supabase/client"
// import Link from "next/link"
// import { signOut } from "./actions"
// import { useSession } from "next-auth/react"
// import Image from "next/image"
// import Loading from "../loading/loading"
// import { signIn } from "@/auth"
"use client"

import { useState } from "react"
import { useSession, signIn, signOut } from "next-auth/react"
import Loading from "../loading/loading"
import Image from "next/image"
import Link from "next/link"

export default function AuthButton() {
  const { data: session, status } = useSession()
  const [loading, setLoading] = useState(false)
  // const supabase = createClient()
  // const { data: session, status } = useSession()
  // const [loading, setLoading] = useState(false)

  // const {
  //   data: { user },
  // } = await supabase.auth.getUser()

  // return session ? (
  //   <div className="flex items-center gap-4">
  //     <span
  //       className="text-sm font-medium subpixel-antialiased contrast-more:text-gray-700 contrast-more:dark:text-gray-100"
  //       aria-current="true"
  //     >
  //       Hi, {user.email}
  //     </span>
  //     <form action={signOut}>
  //       <button
  //         className="text-sm p-2 contrast-more:text-gray-700 contrast-more:dark:text-gray-100 max-md:hidden whitespace-nowrap font-semibold subpixel-antialiased hover:underline"
  //         aria-current="true"
  //       >
  //         Logout
  //       </button>
  //     </form>
  //   </div>
  // ) : (
  //   <Link
  //     href="/login"
  //     //   className="py-2 px-3 flex font-medium rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
  //     className="py-2 px-3 flex contrast-more:text-gray-700 contrast-more:dark:text-gray-100 max-md:hidden whitespace-nowrap font-semibold subpixel-antialiased"
  //   >
  //     Login
  //   </Link>
  // )
  return (
    <>
      {status !== "loading" &&
        (session?.user ? (
          <div className="flex items-center gap-4">
            <span
              className="text-sm font-medium subpixel-antialiased contrast-more:text-gray-700 contrast-more:dark:text-gray-100"
              aria-current="true"
            >
              Hi, {session.user.name || "User"}
            </span>
            <form action={signOut}>
              <button
                className="text-sm py-1 px-2 border border-black  contrast-more:text-gray-700 contrast-more:dark:text-gray-100 max-md:hidden whitespace-nowrap subpixel-antialiased hover:underline rounded-md transition-all"
                aria-current="true"
              >
                Logout
              </button>
            </form>
          </div>
        ) : (
          <button
            disabled={loading}
            onClick={() => {
              setLoading(true)
              signIn("github", { callbackUrl: `/getting-started` })
            }}
            className={`${
              loading
                ? "bg-gray-200 border-gray-300"
                : "bg-black hover:bg-white border-black"
            } w-36 h-8 py-1 text-white hover:text-black border rounded-md text-sm transition-all`}
          >
            {loading ? <Loading color="gray" /> : "Log in with GitHub"}
          </button>
        ))}
    </>
  )
}
