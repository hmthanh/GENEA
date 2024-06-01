"use client"

import React, { useState } from "react"
import ScreenTitle from "./ScreenTitle"
import ScreenMain from "./ScreenMain"
import EvaluationBoard from "./EvaluationBoard"
import ScreenMessage from "./ScreenMessage"
import Navigation from "./Navigation"

export default function Screen() {
  const [currentPage, setCurrentPage] = useState(1)

  const nextPage = () => {
    console.log("object")
    setCurrentPage((prevPage) => prevPage + 1)
  }

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1)
  }

  return (
    <>
      <ScreenTitle />
      <div className="w-full flex-grow bg-white p-0 py-2 sm:p-4 border-none rounded-xl sm:border sm:border-zinc-300 flex flex-col gap-4">
        <ScreenMain />
        <EvaluationBoard />
        <ScreenMessage />
      </div>
      <Navigation />
    </>
  )
}
