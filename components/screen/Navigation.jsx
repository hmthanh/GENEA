import React from 'react'
import PreviousButton from './PreviousButton'
import NextButton from './NextButton'
import { ArrowLeftIcon, ArrowRightIcon } from '@/nextra/icons'

export default function Navigation() {
  return (
    // <div className="ui-body ui-body-a ui-corner-all" >
    //     <PreviousButton />
    //     <NextButton />
    // </div>
    <div
      id="page_navigation"
      className="w-full flex flex-row gap-4 justify-center p-3 bg-white rounded-[9.60px] border border-zinc-300"
      // border border-zinc-300
    >
      <div className="bg-neutral-100 rounded-lg shadow border border-zinc-300"></div>
      <div className="bg-neutral-100 rounded-lg shadow border border-zinc-300"></div>
    </div>
  )
}
