import React from "react"

export default function ActionList({ actions }) {
  return (
    <div className="flex flex-row gap-2 overflow-x-auto justify-start items-center">
      {actions.map((action, index) => (
        <div
          className="border border-gray-500 bg-gray-400 px-2 py-0 rounded-lg text-center text-nowrap"
          key={index}
        >
          {action}
        </div>
      ))}
    </div>
  )
}
