import React from "react"

import { Skeleton } from "../ui/skeleton"

type Props = {}

const ProductDetailSkeleton = (props: Props) => {
  return (
    <div className="w-full h-full p-2">
      <div className="flex flex-col max-lg:gap-y-8 md:flex-row gap-x-5">
        <Skeleton className="w-full h-48 lg:h-[34rem]"></Skeleton>
        <div className=" text-[#505977] w-full h-full flex-col flex">
          <Skeleton className="h-[50px] w-full" />
          <Skeleton className="h-[50px] w-full" />
          <Skeleton className="h-[50px] w-full" />
          <Skeleton className="h-[50px] w-full" />
          <Skeleton className="h-[50px] w-full" />
        </div>
      </div>
    </div>
  )
}

export default ProductDetailSkeleton
