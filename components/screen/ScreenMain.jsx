import Video from '@/nextra/video'
import React, { useEffect, useRef } from 'react'
import cn from 'clsx'

export default function ScreenMain() {
  const video1Ref = useRef()

  useEffect(() => {}, [video1Ref])

  return (
    <div className="w-full h-full overflow-hidden">
      <div className="w-full h-full flex justify-center align-middle gap-2 ">
        <div className="flex-1 h-full">
          {/* <img
            src="https://static.vecteezy.com/system/resources/previews/025/067/762/non_2x/4k-beautiful-colorful-abstract-wallpaper-photo.jpg"
            className="h-full w-full "
          ></img> */}
          <div className="h-full w-full relative flex items-center justify-center">
            <video
              muted={false}
              autoPlay={false}
              playsInline
              loop
              controls
              className={cn(
                'absolute inset-0 h-full w-full object-contain sm:rounded-xl sm:border dark:border-zinc-800'
              )}
            >
              <source src={'/gesture_video.mp4'} type="video/mp4" />
            </video>
          </div>
          {/* <Video src={'/gesture_video.mp4'} className="object-contain" /> */}
        </div>

        <div className="flex-1 h-full">
          {/* <img
            src="https://static.vecteezy.com/system/resources/previews/025/067/762/non_2x/4k-beautiful-colorful-abstract-wallpaper-photo.jpg"
            className="h-full  w-full object-contain"
          ></img> */}
          <div className="h-full w-full relative flex items-center justify-center">
            <video
              muted={false}
              autoPlay={false}
              playsInline
              loop
              controls
              className={cn(
                'absolute inset-0 h-full  w-full object-contain sm:rounded-xl sm:border dark:border-zinc-800'
              )}
            >
              <source src={'/gesture_video.mp4'} type="video/mp4" />
            </video>
          </div>
          {/* <Video src={'/gesture_video.mp4'} className="object-contain" /> */}
        </div>
      </div>
    </div>
  )
}
