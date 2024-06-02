// "use client"
"use client"
import React, { useState } from "react"
import { ScreenTitle } from "./ScreenTitle"
import { ScreenMain } from "./ScreenMain"
import { EvaluationBoard } from "./EvaluationBoard"
import { ScreenMessage } from "./ScreenMessage"
import { Navigation } from "./Navigation"
import { AnimatePresence, motion } from "framer-motion"
import { NavScreen, PopupDialog, PopupError, Progressbar } from "."

export function Screen({ config }) {
  const [currentPage, setCurrentPage] = useState(1)
  console.log(config)

  const nextPage = () => {
    console.log("object")
    setCurrentPage((prevPage) => prevPage + 1)
  }

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1)
  }

  const pages = [
    { id: 1, content: "Page 1 content" },
    { id: 2, content: "Page 2 content" },
    { id: 3, content: "Page 3 content" },
  ]

  return (
    <div className="w-full max-h-screen h-screen flex flex-col bg-stone-50">
      <NavScreen name={config.testname} />
      <div className="w-full h-screen px-[7%] gap-2 p-2 flex flex-col bg-stone-50">
        <Progressbar value={45} />
        <div className="flex flex-col  w-full h-full gap-2">
          <ScreenTitle />

          <div className="flex-grow w-full h-full bg-white p-0 py-2 sm:p-4 border-none rounded-xl sm:border sm:border-zinc-300 flex flex-col gap-4">
            <div className="relative h-full w-full  flex justify-center align-middle">
              <AnimatePresence initial={false} custom={currentPage}>
                <motion.div
                  key={currentPage}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  custom={currentPage}
                  variants={{
                    enter: (direction) => {
                      return {
                        x: direction > 0 ? "100%" : "-100%",
                        opacity: 0,
                      }
                    },
                    center: {
                      x: 0,
                      opacity: 1,
                    },
                    exit: (direction) => {
                      return {
                        x: direction > 0 ? "-100%" : "100%",
                        opacity: 0,
                      }
                    },
                  }}
                  transition={{
                    ease: "linear",
                    x: { type: "linear", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="absolute  w-full h-full overflow-hidden flex flex-col gap-2 justify-center align-middle"
                  // className="absolute bg-red-500 w-[93%] h-[83%] overflow-hidden"
                >
                  {pages.find((page) => page.id === currentPage)?.content}
                  <ScreenMain />
                  <EvaluationBoard />
                  <ScreenMessage />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <Navigation
            isDisablePrev={currentPage === 1}
            isDisableNext={currentPage === pages.length}
            prevPage={prevPage}
            nextPage={nextPage}
          />
        </div>

        <PopupDialog />
        <PopupError />
      </div>
    </div>
  )
}
