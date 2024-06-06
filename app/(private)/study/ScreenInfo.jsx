import React from "react"
import cn from "clsx"

export default function ScreenInfo({ info }) {
  const colors = {
    generic: "border-green-200 bg-green-100",
    video: "border-red-200 bg-red-100",
    finish: "border-orange-200 bg-orange-100",
  }
  return (
    <div
      className={cn("flex flex-col border p-2 rounded-xl", colors[info.type])}
    >
      <div className="">pageid: {info.pageid}</div>
      <div className="">type: {info.type}</div>
      <div className="">name: {info.name}</div>
      {info.videos && (
        <div className="flex flex-col">
          <div className="">teamid : {info.videos[0].teamid}</div>
          <div className="">inputid : {info.videos[0].inputid}</div>
          <div className="">value : {info.videos[0].value}</div>
          <div className="">url : {info.videos[0].url}</div>

          <div className="">teamid: {info.videos[1].teamid}</div>
          <div className="">inputid: {info.videos[1].inputid}</div>
          <div className="">value: {info.videos[1].value}</div>
          <div className="">url: {info.videos[1].url}</div>
        </div>
      )}
      <div className="">actions : {JSON.stringify(info.actions)}</div>
    </div>
  )
}
