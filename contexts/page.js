"use client"

import { createContext, useCallback, useContext, useState } from "react"

const PageContext = createContext({
  currentPage: 0,
  setPrev: () => {},
  setNext: () => {},
})

export const usePage = () => useContext(PageContext)

export function PageProvider({ children }) {
  const [currentPage, setCurrentPage] = useState(0)

  const setPrev = () => {
    setCurrentPage(currentPage - 1)
  }

  const setNext = () => {
    setCurrentPage(currentPage + 1)
  }

  return (
    <PageContext.Provider value={{ currentPage, setPrev, setNext }}>
      {children}
    </PageContext.Provider>
  )
}
