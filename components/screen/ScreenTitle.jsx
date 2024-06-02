import React from "react"

export function ScreenTitle({ name = "Experiment - Sample 1" }) {
  return (
    // <h3 className="ui-bar ui-bar-a ui-corner-all" id="page_header" style={{ borderRadius: "all" }}>
    //     MUSHRA - Random 2
    // </h3>
    <div className="w-full  py-1 px-4 bg-gradient-to-b from-slate-200 to-gray-200 shadow border-gray-300  border rounded-lg border-zinc-300">
      <h3 className="text-gray-800  text-shadow-sm  text-center text-zinc-800 text-xl font-bold  leading-normal">
        {name}
      </h3>
    </div>
  )
}
