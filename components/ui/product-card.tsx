import React from "react"
import Image from "next/image"

type Props = {}

const ProductCard = (props: Props) => {
  return (
    <div className="w-full h-[288px] lg:h-[462px]">
      <Image
        className="h-[201px] lg:h-[375px]"
        src={"/assets/images/10029.jpg"}
        alt="product image"
        height={650}
        width={650}
        loading="eager"
      />

      <div className="mt-6 lg: space-y-8 lg:space-y-10">
        <p className="text-xl font-clash-display">The Dandy chair</p>
        <span>$250</span>
      </div>
    </div>
  )
}

export default ProductCard
