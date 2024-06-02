"use client"

import React, { useEffect, useState } from "react"
import { ScreenTitle } from "./ScreenTitle"
import { ScreenMain } from "./ScreenMain"
import { EvaluationBoard } from "./EvaluationBoard"
import { ScreenMessage } from "./ScreenMessage"
import { Navigation } from "./Navigation"
import { AnimatePresence, motion } from "framer-motion"
import { NavScreen, PopupDialog, PopupError, Progressbar } from "."
import { useExperimentConfig } from "@/contexts/experiment"
import { useScreenControl } from "@/contexts/screencontroll"

export function Screen() {
  const config = useExperimentConfig()
  const { currentPage } = useScreenControl()

  if (!config) {
    return <></>
  }

  return (
    <div className="w-full max-h-screen h-screen flex flex-col bg-stone-50">
      <NavScreen name={config.testname} />
      <div className="w-full h-screen px-[7%] gap-2 p-2 flex flex-col bg-stone-50">
        <Progressbar value={process} />
        <div className="flex flex-col  w-full h-full gap-2">
          <ScreenTitle currentPage={currentPage} />

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
                  className="absolute w-full h-full overflow-hidden flex flex-col gap-2 justify-center align-middle"
                  // className="absolute bg-red-500 w-[93%] h-[83%] overflow-hidden"
                >
                  <ScreenMain currentPage={currentPage} />
                  <EvaluationBoard />
                  <ScreenMessage />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <Navigation />
        </div>

        <PopupDialog />
        <PopupError />
      </div>
    </div>
  )
}
