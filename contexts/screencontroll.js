"use client"

import { createContext, useContext, useState } from "react"

const ScreenControlContext = createContext({
  currentPage: 0,
  setPrev: () => {},
  setNext: () => {},
})

export const useScreenControl = () => useContext(ScreenControlContext)

export function ScreenControlProvider({ children }) {
  const [currentPage, setCurrentPage] = useState(0)

  const setPrev = () => {
    setCurrentPage(currentPage - 1)
  }

  const setNext = () => {
    setCurrentPage(currentPage + 1)
  }

  return (
    <ScreenControlContext.Provider value={{ currentPage, setPrev, setNext }}>
      {children}
    </ScreenControlContext.Provider>
  )
}
