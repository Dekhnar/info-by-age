import React, { useEffect, useState } from "react"
import Drawer from "@material-ui/core/Drawer"
import { useUI } from "@contexts/ui.context"

type BaseDrawerProps = {
  children: React.ReactNode
}

const BaseDrawer: React.FC<BaseDrawerProps> = ({ children }) => {
  const { displaySidebar, closeSidebar } = useUI()
  return (
    <div>
      <Drawer anchor="left" open={displaySidebar} onClose={closeSidebar}>
        {children}
      </Drawer>
    </div>
  )
}

export default BaseDrawer
