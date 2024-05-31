import React from 'react'
import PreviousButton from './PreviousButton'
import NextButton from './NextButton'

export default function Navigation() {
  return (
    // <div className="ui-body ui-body-a ui-corner-all" id="page_navigation">
    //     <PreviousButton />
    //     <NextButton />
    // </div>
    <div className="w-full flex flex-row justify-center p-3 bg-white rounded-[9.60px] border border-zinc-300">
      <div className="bg-neutral-100 rounded-[5px] shadow border border-zinc-300">
        <div className="p-4 text-center text-zinc-800 text-base font-bold leading-tight">
          Previous
        </div>
      </div>
      <div className="bg-neutral-100 rounded-[5px] shadow border border-zinc-300">
        <div className="p-4 text-center text-zinc-800 text-base font-bold leading-tight">
          Next
        </div>
      </div>
    </div>
  )
}
