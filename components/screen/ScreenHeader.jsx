import React from "react"
import { useCurrentPage, useTotalPageNumber } from "@/contexts/experiment"
import { ArrowLeftIcon, ArrowRightIcon } from "@/nextra/icons"
import { useActionRecorder } from "@/contexts/action-recorder"
import { DEFAULT_ACTION_STRING } from "@/config/constants"

export function ScreenHeader({ currentPage, setPrev, setNext }) {
  const page = useCurrentPage(currentPage)
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
    // <h3 className="ui-bar ui-bar-a ui-corner-all" id="page_header" style={{ borderRadius: "all" }}>
    //     MUSHRA - Random 2
    // </h3>
    <div className="w-full flex flex-row items-center justify-between py-1 px-4 bg-gradient-to-b from-slate-200 to-gray-200 shadow border-gray-300  border rounded-lg border-zinc-300">
      {currentPage === 0 ? (
        <div></div>
      ) : (
        <button
          disabled={currentPage === 0}
          data-role="button"
          data-inline="true"
          onClick={prevPage}
          className="py-2 m-1 px-5 text-center text-zinc-800 font-bold leading-5 flex items-center gap-2 disabled:text-gray-400"
        >
          <ArrowLeftIcon className="h-5 inline shrink-0 ltr:rotate-180" />
          Previous
        </button>
      )}

      <h3 className="flex-grow items-center flex justify-center text-gray-800 h-full text-shadow-sm text-center text-zinc-800 text-xl font-bold">
        {page.name}
      </h3>

      {currentPage === totalPage - 1 ? (
        <button
          data-role="button"
          data-inline="true"
          className="py-2 m-1 px-7 text-center text-white bg-green-600 rounded-xl text-zinc-800 font-bold leading-5 flex align-middle gap-2 disabled:text-gray-400"
          onClick={finishPage}
        >
          Finish
          <ArrowRightIcon className="h-5 inline shrink-0 rtl:rotate-180" />
        </button>
      ) : (
        <button
          data-role="button"
          data-inline="true"
          className="py-2 m-1 px-5 text-center text-zinc-800 font-bold leading-5 flex align-middle gap-2 disabled:text-gray-400"
          onClick={nextPage}
        >
          Next
          <ArrowRightIcon className="h-5 inline shrink-0 rtl:rotate-180" />
        </button>
      )}
    </div>
  )
}
