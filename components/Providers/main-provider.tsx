import React, { ReactNode } from "react"

import ModalProvider from "./modals-provider"

type Props = {
  children: ReactNode
}

function MainProvider({ children }: Props) {
  return (
    <div>
      <ModalProvider>{children}</ModalProvider>
    </div>
  )
}

export default MainProvider
