import { createContext, useContext } from "react"

const ErrorContext = createContext({
  error: [],
  setError: () => {},
})

export const useError = () => useContext(ErrorContext)

export const ErrorProvider = ErrorContext.Provider
