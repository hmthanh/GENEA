"use server"

import React from "react"
import clientPromise from "@/server/mongodb"
import Study from "./Study"
import { Table, Th, Tr } from "@/nextra"
import cn from "clsx"

async function fetchStudy() {
  try {
    const client = await clientPromise
    const db = client.db("HemVip")

    const studies = await db.collection("studies").find({}).toArray()

    // const newStudies = studies.filter((study) => study.status === "new")

    return studies
  } catch (e) {
    console.error(e)
    return JSON.stringify({ message: "Internal Server Error" })
  }

  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error("Failed to fetch data")
  // }

  // return res.json()
}

export default async function Page() {
  const data = await fetchStudy()
  // console.log(data)

  return (
    <div>
      {/* <Table>
        <thead>
          <Tr>
            <Th>ID</Th>
            <Th align="center">Name</Th>
            <Th align="right">Page</Th>
            <Th align="right">Status</Th>
          </Tr>
        </thead>
        <tbody>
          {data.map((study, index) => {
            return <Study study={study} index={index} key={index} />
          })}
        </tbody>
      </Table> */}

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
              <th className="py-2 font-semibold">Name</th>
              <th className="py-2 pl-6 font-semibold">Page</th>
              <th className="px-6 py-2 font-semibold">Status</th>
              <th className="px-6 py-2 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="align-baseline text-gray-900 dark:text-gray-100">
            {data.map((study, index) => (
              <tr
                key={index}
                className="border-b border-gray-100 dark:border-neutral-700/50"
              >
                <td className="py-2 pl-6">{index + 1}</td>
                <td className="py-2 pl-6">{study.status}</td>
                <td className="py-2 pl-6">{study.pages.length}</td>
                <td className="py-2 pl-6 h-24">
                  <div className="w-full overflow-y-auto">study</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <div class="grid grid-cols-4 ">
        <div class="bg-white p-4 border">Row 1, Col 1</div>
        <div class="bg-white p-4 border border-l-0">Row 1, Col 2</div>
        <div class="bg-white p-4 border border-l-0">Row 1, Col 3</div>
        <div class="bg-white p-4 border border-l-0">Row 1, Col 4</div>

        <div class="bg-white p-4 border">Row 2, Col 1</div>
        <div class="bg-white p-4 border border-l-0">Row 2, Col 2</div>
        <div class="bg-white p-4 border border-l-0">Row 2, Col 3</div>
        <div class="bg-white p-4 border border-l-0">Row 2, Col 4</div>

        <div class="bg-white p-4 border">Row 3, Col 1</div>
        <div class="bg-white p-4 border">Row 3, Col 2</div>
        <div class="bg-white p-4 border">Row 3, Col 3</div>
        <div class="bg-white p-4 border">Row 3, Col 4</div>

        <div class="bg-white p-4 border">Row 4, Col 1</div>
        <div class="bg-white p-4 border">Row 4, Col 2</div>
        <div class="bg-white p-4 border">Row 4, Col 3</div>
        <div class="bg-white p-4 border">Row 4, Col 4</div>

        <div class="bg-white p-4 border">Row 5, Col 1</div>
        <div class="bg-white p-4 border">Row 5, Col 2</div>
        <div class="bg-white p-4 border">Row 5, Col 3</div>
        <div class="bg-white p-4 border">Row 5, Col 4</div>
      </div> */}
    </div>
  )
}
