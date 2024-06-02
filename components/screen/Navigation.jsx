import React from "react"
import { ArrowLeftIcon, ArrowRightIcon } from "@/nextra/icons"
import { useScreenControl } from "@/contexts/screencontroll"
import { useTotalPageNumber } from "@/contexts/experiment"
import { useActionRecorder } from "@/contexts/action-recorder"
import { DEFAULT_ACTION_STRING } from "@/config/constants"

export function Navigation() {
  const { currentPage, setPrev, setNext } = useScreenControl()
  const totalPage = useTotalPageNumber()
  const { addAction } = useActionRecorder()
  const finishPage = () => {
    addAction(DEFAULT_ACTION_STRING.clickFinish)
  }

  const prevPage = () => {
    setPrev()
    addAction(DEFAULT_ACTION_STRING.clickPrev)
  }

  const nextPage = () => {
    setNext()
    addAction(DEFAULT_ACTION_STRING.clickNext)
  }

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
      <button
        disabled={currentPage === 0}
        data-role="button"
        data-inline="true"
        className="py-3 px-5 text-center text-zinc-800 font-bold leading-5 flex align-middle gap-2 disabled:text-gray-400"
        onClick={prevPage}
      >
        <ArrowLeftIcon className="h-5 inline shrink-0 ltr:rotate-180" />
        Previous
      </button>

      {currentPage === totalPage - 1 ? (
        <button
          data-role="button"
          data-inline="true"
          className="py-3 px-5 text-center text-white bg-green-600 rounded-xl text-zinc-800 font-bold leading-5 flex align-middle gap-2 disabled:text-gray-400"
          onClick={finishPage}
        >
          Finish
          <ArrowRightIcon className="h-5 inline shrink-0 rtl:rotate-180" />
        </button>
      ) : (
        <button
          data-role="button"
          data-inline="true"
          className="py-3 px-5 text-center text-zinc-800 font-bold leading-5 flex align-middle gap-2 disabled:text-gray-400"
          onClick={nextPage}
        >
          Next
          <ArrowRightIcon className="h-5 inline shrink-0 rtl:rotate-180" />
        </button>
      )}
    </div>
  )
}
