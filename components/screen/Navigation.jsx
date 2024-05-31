import React from 'react'
import PreviousButton from './PreviousButton'
import NextButton from './NextButton'

export default function Navigation() {
  return (
    // <div className="ui-body ui-body-a ui-corner-all" id="page_navigation">
    //     <PreviousButton />
    //     <NextButton />
    // </div>
    <div className="w-full h-[73.95px]  bg-white rounded-[9.60px] border border-zinc-300">
      <div className="w-[66.69px] h-[43.17px]  bg-neutral-100 rounded-[5px] shadow border border-zinc-300">
        <div className="w-[34.89px] h-[20.80px] text-center text-zinc-800 text-base font-bold font-['Inter'] leading-tight">
          Next
        </div>
      </div>
    </div>
  )
}
