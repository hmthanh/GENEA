'use client'

import { createContext, useContext, useRef } from 'react'

const ExperimentConfigContext = createContext({})
ExperimentConfigContext.displayName = 'ExperimentConfig'
export const useExperimentConfig = () => useContext(ExperimentConfigContext)

export function ExperimentConfigProvider({ value, children }) {
  const storeRef = useRef()
  storeRef.current ||= {
    ...DEFAULT_SCREEN,
    ...(value &&
      Object.fromEntries(
        Object.entries(value).map(([key, value]) => [
          key,
          value && typeof value === 'object' && DEEP_OBJECT_KEYS.includes(key)
            ? { ...DEFAULT_Experiment[key], ...value }
            : value,
        ])
      )),
  }

  return (
    <ExperimentConfigContext.Provider value={storeRef.current}>
      {children}
    </ExperimentConfigContext.Provider>
  )
}
