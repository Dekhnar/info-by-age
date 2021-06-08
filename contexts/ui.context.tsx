import React, { FC, useMemo, useState } from "react"

export interface UIState {
  displaySidebar: boolean
  openSidebar: () => void
  closeSidebar: () => void
  toggleSidebar: () => void
}

const initialState = {
  displaySidebar: false,
}

export const UIContext = React.createContext<UIState>(initialState as UIState)

export const UIProvider: FC = (props) => {
  const [displaySidebar, setDisplaySidebar] = useState(false)

  const openSidebar = () => setDisplaySidebar(true)
  const closeSidebar = () => setDisplaySidebar(false)
  const toggleSidebar = () => setDisplaySidebar(!displaySidebar)
  const value = useMemo(
    () => ({
      displaySidebar,
      openSidebar,
      closeSidebar,
      toggleSidebar,
    }),
    [displaySidebar]
  )

  return <UIContext.Provider value={value} {...props} />
}

export const useUI = () => {
  const context = React.useContext(UIContext)
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`)
  }
  return context
}
