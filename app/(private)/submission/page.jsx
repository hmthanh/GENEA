"use server"

import React from "react"
import clientPromise from "@/server/mongodb"
import Study from "./Team"
import { Code, Pre, Table, Th, Tr } from "@/nextra"
import cn from "clsx"

async function fetchTeam() {
  try {
    const client = await clientPromise
    const db = client.db("HemVip")

    const team = await db.collection("team").find({}).toArray()

    // const newteam = team.filter((study) => study.status === "new")

    return team
  } catch (e) {
    console.error(e)
    return JSON.stringify({ message: "Internal Server Error" })
  }
}

export default async function Page() {
  const data = await fetchTeam()

  return (
    <div>
      <div
        className={cn(
          "-mx-6 mb-4 mt-6 overflow-x-auto overscroll-x-contain px-6 pb-4 ",
          "mask-gradient"
        )}
      >
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b py-4 text-left dark:border-neutral-700">
              <th className="py-2 font-semibold">ID</th>
              <th className="py-2 font-semibold">Team name</th>
              <th className="py-2 pl-6 font-semibold">Submissions</th>
            </tr>
          </thead>
          <tbody className="align-baseline text-gray-900 dark:text-gray-100">
            {data.map((team, index) => (
              <tr
                key={index}
                className="border-b border-gray-100 dark:border-neutral-700/50"
              >
                <td className="py-2 pl-6">{team.id}</td>
                <td className="py-2 pl-6">{team.name}</td>
                <td className="py-2 pl-6 h-24">
                  <div className="w-full overflow-y-auto nextra-code relative mt-6 first:mt-0">
                    {JSON.stringify(team.submissions)}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
