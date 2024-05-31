'use client'

import React from 'react'

export default function Progressbar() {
  return (
    <>
      {/* <div
        id="page_progressbar"
        className="ui-tolito-progressbar ui-tolito-progressbar-outer-a ui-tolito-progressbar-corner-all ui-tolito-progressbar-mini"
        role="progressbar"
        style={{
          minValue: 0,
          maxValue: 100,
          contentValue: '33.33333333333333',
        }}
      >
        <div
          className="ui-tolito-progressbar-bg ui-tolito-progressbar-active-b ui-tolito-progressbar-corner-all"
          style={{ width: '33.3333%' }}
        ></div>
      </div>

      */}
      <div className="w-1/3 flex flex-start bg-blue-gray-50 overflow-hidden mx-auto border border-black font-sans rounded-full text-xs font-medium h-3.5">
        <div
          className="flex justify-center items-center h-full overflow-hidden break-all rounded-full bg-gray-900 text-white"
          style={{ width: '75%' }}
        ></div>
      </div>
      {/* <div className="w-[32em] h-[1em]  mx-auto bg-white rounded-2xl border border-black" /> */}
    </>
  )
}
