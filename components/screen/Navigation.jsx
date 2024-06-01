import React from "react"
import PreviousButton from "./PreviousButton"
import NextButton from "./NextButton"
import { ArrowLeftIcon, ArrowRightIcon } from "@/nextra/icons"

export default function Navigation() {
  return (
    // <div className="ui-body ui-body-a ui-corner-all" >
    //     <PreviousButton />
    //     <NextButton />
    // </div>
    // <div
    //   id="page_navigation"
    //   className="w-full flex flex-row gap-4 justify-center p-3 bg-white rounded-[9.60px] border border-zinc-300"
    //   // border border-zinc-300
    // >
    //   <div className="bg-neutral-100 rounded-lg shadow border border-zinc-300"></div>
    //   <div className="bg-neutral-100 rounded-lg shadow border border-zinc-300"></div>
    // </div>
    <div
      id="page_navigation"
      className="w-full flex flex-row justify-between"
      // border border-zinc-300
    >
      <button className="pb-3 px-5 text-center text-zinc-800 font-bold leading-5 flex align-middle gap-2  ">
        <ArrowLeftIcon className="h-5 inline shrink-0 ltr:rotate-180" />
        Previous
      </button>

      <button className="pb-3 px-5 text-center text-zinc-800 font-bold leading-5 flex align-middle gap-2 ">
        Next
        <ArrowRightIcon className="h-5 inline shrink-0 rtl:rotate-180" />
      </button>
    </div>
  )
}
