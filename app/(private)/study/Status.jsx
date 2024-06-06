import React from "react"
import cn from "clsx"

export function Status({ type }) {
  const status = {
    new: {
      label: "New",
      color: "border-green-500 text-green-600 bg-green-100",
    },
    started: {
      label: "Started",
      color: "border-orange-500 text-orange-600 bg-orange-100",
    },
    finish: {
      label: "Finish",
      color: "border-blue-500 text-blue-600 bg-blue-100",
    },
    uncomplete: {
      label: "Uncomplete",
      color: "border-neutral-500 text-neutral-600 bg-neutral-100",
    },
  }
  if (!type || !status[type]) {
    return null
  }

  const { label, color } = status[type]

  return (
    <div
      className={cn(
        "flex text-xs items-center justify-between p-2 py-1 border leading-normal rounded-lg",
        color
      )}
    >
      {label}
    </div>
  )
}
