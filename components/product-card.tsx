import React from "react"
import Image from "next/image"
import Link from "next/link"
import productsampleimage from "@/public/assets/Images/light.png"

type Props = {}

const ProductCard = (props: Props) => {
  const productid = "product-id"
  return (
    <Link
      href={`/product-listing/${productid}`}
      className="w-full"
      scroll={false}
    >
      <div className="w-full h-[288px] lg:h-[462px] group overflow-hidden max-sm:pointer-events-none">
        <Image
          className="h-[201px] lg:h-[375px] group-hover:scale-105 transition-all duration-300 ease-in-out group-hover:brightness-75"
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
