import React, { ReactNode } from "react"

import ModalsProvider from "./modals-provider"

type Props = {
  children: ReactNode
}

function MainProvider({ children }: Props) {
  return (
    <div>
      <ModalsProvider>{children}</ModalsProvider>
    </div>
  )
}

export default MainProvider
