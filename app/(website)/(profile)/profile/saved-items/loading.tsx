import React from "react"

import { Skeleton } from "@/components/ui/skeleton"

type Props = {}

const Loading = (props: Props) => {
  return (
    <div className="flex flex-col gap-y-4">
      <Skeleton className="h-20 w-full"></Skeleton>
      <Skeleton className="h-20 w-full"></Skeleton>
    </div>
  )
}

export default Loading
