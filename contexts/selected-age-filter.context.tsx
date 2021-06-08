import React, { useMemo, useState, useContext } from "react"

export type AgeInterval = [number, number]

interface SelectedAgeIntervalFilterState {
  selectedAgeIntervalFilter: AgeInterval
  updateSelectedAgeIntervalFilter: React.Dispatch<React.SetStateAction<AgeInterval>>
}

const initialState = {
  selectedAgeIntervalFilter: [0, 0],
}

export const SelectedAgeIntervalFilterContext = React.createContext<SelectedAgeIntervalFilterState>(
  initialState as SelectedAgeIntervalFilterState
)

export const SelectedAgeIntervalFilterContextProvider: React.FC = (props) => {
  const [selectedAgeIntervalFilter, updateSelectedAgeIntervalFilter] = useState<AgeInterval>([0, 0])
  const value = useMemo(
    () => ({
      selectedAgeIntervalFilter,
      updateSelectedAgeIntervalFilter,
    }),
    [selectedAgeIntervalFilter]
  )
  return <SelectedAgeIntervalFilterContext.Provider value={value} {...props} />
}

export const useSelectedAgeIntervalFilter = () => {
  const context = useContext(SelectedAgeIntervalFilterContext)
  if (context === undefined) {
    throw new Error(`useSelectedAgeIntervalFilter must be used within a SelectedAgeIntervalFilterProvider`)
  }
  return context
}
