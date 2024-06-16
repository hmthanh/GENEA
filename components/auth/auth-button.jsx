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
      {/* {status !== "loading" &&
        (session?.user ? (
          <Link href={`/${session.username}`}>
            <a className="w-8 h-8 rounded-full overflow-hidden">
              <Image
                src={
                  session.user.image ||
                  `https://avatar.tobi.sh/${session.user.name}`
                }
                alt={session.user.name || "User"}
                width={300}
                height={300}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2PYsGHDfwAHNAMQumvbogAAAABJRU5ErkJggg=="
              />
            </a>
          </Link>
        ) : (
          <button
            disabled={loading}
            onClick={() => {
              setLoading(true)
              signIn("github", { callbackUrl: `/profile` })
            }}
            className={`${
              loading
                ? "bg-gray-200 border-gray-300"
                : "bg-black hover:bg-white border-black"
            } w-36 h-8 py-1 text-white hover:text-black border rounded-md text-sm transition-all`}
          >
            {loading ? <Loading color="gray" /> : "Log in with GitHub"}
          </button>
        ))} */}
      {/* <form
        action={async () => {
          "use server"
          await signIn("github")
        }}
      >
        <button type="submit">Signin with GitHub</button>
      </form> */}
      {status !== "loading" &&
        (session?.user ? (
          <Link href={`/${session.username}`}>
            <a className="w-8 h-8 rounded-full overflow-hidden">
              <Image
                src={
                  session.user.image ||
                  `https://avatar.tobi.sh/${session.user.name}`
                }
                alt={session.user.name || "User"}
                width={300}
                height={300}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2PYsGHDfwAHNAMQumvbogAAAABJRU5ErkJggg=="
              />
            </a>
          </Link>
        ) : (
          <button
            disabled={loading}
            onClick={() => {
              setLoading(true)
              signIn("github", { callbackUrl: `/profile` })
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
