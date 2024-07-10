import React from "react"
import Image from "next/image"
import Link from "next/link"
import productsampleimage from "@/public/assets/Images/light.png"

type Props = {}

const ProductCard = (props: Props) => {
  const productid = "product-id"
  return (
    <Link href={`/product-details/${productid}`} className="w-full">
      <div className="w-full h-[288px] lg:h-[462px]">
        <Image
          className="h-[201px] lg:h-[375px]"
          src={productsampleimage}
          alt="product image"
          height={650}
          width={650}
          loading="eager"
        />

        <div className="mt-3 lg:mt-6 space-y-8 lg:space-y-10">
          <p className="text-base lg:text-xl font-clash-display">
            The Dandy chair
          </p>
          <span>$250</span>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
