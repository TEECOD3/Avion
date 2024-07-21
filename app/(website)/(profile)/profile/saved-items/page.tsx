import React from "react"

import SavedItem from "@/components/saved-item"

type Props = {}

const page = (props: Props) => {
  return (
    <div className=" gap-y-4">
      <SavedItem />
      <SavedItem />
    </div>
  )
}

export default page
