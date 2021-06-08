import React, { useMemo, useState, useContext } from "react"

interface SelectedInformationState {
  selectedInformation: string
  updateSelectedInformation: React.Dispatch<React.SetStateAction<string>>
}

const initialState = {
  selectedInformation: "",
}

export const SelectedInformationContext = React.createContext<SelectedInformationState>(initialState as SelectedInformationState)

export const SelectedInformationContextProvider: React.FC = (props) => {
  const [selectedInformation, updateSelectedInformation] = useState("")
  const value = useMemo(
    () => ({
      selectedInformation,
      updateSelectedInformation,
    }),
    [selectedInformation]
  )
  return <SelectedInformationContext.Provider value={value} {...props} />
}

export const useSelectedInformation = () => {
  const context = useContext(SelectedInformationContext)
  if (context === undefined) {
    throw new Error(`useSelectedInformation must be used within a SelectedInformationProvider`)
  }
  return context
}
