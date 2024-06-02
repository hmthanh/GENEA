"use client"

import Video from "@/nextra/video"
import React, { useEffect, useRef } from "react"
import cn from "clsx"
import { useCurrentPage, useExperimentConfig } from "@/contexts/experiment"
import { useScreenControl } from "@/contexts/screencontroll"

export function ScreenMain({ currentPage }) {
  const page = useCurrentPage(currentPage)
  const video1URL =
    page.type == "video" ? page.stimuli[0].url : "/gesture_video.mp4"
  const video2URL =
    page.type == "video" ? page.stimuli[1].url : "/gesture_video.mp4"

  return (
    <div className="w-full h-full overflow-hidden">
      <div className="w-full h-full flex justify-center align-middle gap-2 ">
        <div className="flex-1 h-full">
          <div className="h-full w-full relative flex items-center justify-center">
            <video
              muted={false}
              autoPlay={false}
              playsInline
              loop
              controls
              className={cn(
                "absolute inset-0 h-full w-full object-contain sm:rounded-xl sm:border dark:border-zinc-800"
              )}
            >
              <source src={video1URL} type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="flex-1 h-full">
          <div className="h-full w-full relative flex items-center justify-center">
            <video
              muted={false}
              autoPlay={false}
              playsInline
              loop
              controls
              className={cn(
                "absolute inset-0 h-full  w-full object-contain sm:rounded-xl sm:border dark:border-zinc-800"
              )}
            >
              {/* <source src={"/gesture_video.mp4"} type="video/mp4" /> */}
              <source src={video2URL} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  )
}
