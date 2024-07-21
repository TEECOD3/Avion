import React from "react"
import Image from "next/image"
import image from "@/public/assets/Images/10029.jpg"

import QuantityButton from "./quantity-buttons"

type Props = {}

const CartBasketItem = (props: Props) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-[1.5fr_1fr] mt-1 gap-x-5">
      <div className="flex gap-x-8">
        <div className=" h-[220px] lg:size-[150px] relative max-lg:w-full">
          <Image
            src={image}
            alt="cart-item-image"
            className="object-cover object-top"
            fill
            placeholder="blur"
          />
        </div>
        <div className="lg:flex hidden  flex-col gap-y-6 max-lg:w-full lg:max-w-[15rem] text-dark-primary">
          <span className="text-xl lg:text-2xl font-clash-display capitalize ">
            graystone vase
          </span>
          <p>A timeless ceramic vase with a tri color grey glaze.</p>
          <span className="font-clash-display">$85</span>
        </div>
      </div>
      <div className="flex flex-col  gap-y-8 lg:flex-row lg:items-center lg:place-content-center ">
        <div className="flex lg:hidden flex-col gap-y-4 max-lg:w-full lg:max-w-[15rem] text-dark-primary">
          <span className="text-xl lg:text-2xl font-clash-display capitalize ">
            graystone vase
          </span>
          <p>A timeless ceramic vase with a tri color grey glaze.</p>
          <span className="font-clash-display">$85</span>
        </div>
        <div className="max-lg:flex max-lg:flex-col-reverse flex w-full">
          <div className="w-full">
            <QuantityButton />
          </div>
          <div className="font-clash-display lg:flex lg:justify-end w-full hidden">
            <span>$85</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartBasketItem
