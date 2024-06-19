import React from "react"
import cn from "clsx"

export default function SubmissionInfo({ submission }) {
  return (
    <div
      className={cn(
        "flex flex-col border p-2 rounded-lg",
        "border-red-200 bg-red-100"
      )}
    >
      <div className="">inputid: {submission.inputid}</div>
      <div className="">videoid: {submission.videoid}</div>
      <div className="">teamid: {submission.teamid}</div>
      <div className="">
        url:{" "}
        <a
          href={submission.url}
          className="text-primary-600 underline decoration-from-font [text-underline-position:from-font]"
        >
          {submission.url}
        </a>
      </div>
    </div>
  )
}
