import React, { ReactNode } from "react"

import SearchModal from "../modals/search-modal"

type Props = {
  children: ReactNode
}

function ModalsProvider({ children }: Props) {
  return (
    <div>
      <SearchModal />
      {children}
    </div>
  )
}

export default ModalsProvider
