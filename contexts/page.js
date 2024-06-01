import { createContext, useContext } from "react"

const PageContext = createContext({
  page: [],
  setPage: () => false,
})

export const usePage = () => useContext(PageContext)

export const PageProvider = PageContext.Provider
