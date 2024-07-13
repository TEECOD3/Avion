import React from "react"
import Image from "next/image"
import image from "@/public/assets/Images/10029.jpg"
import { Separator } from "@radix-ui/react-separator"

import { Button } from "@/components/ui/button"
import QuantityButton from "@/components/quantity-buttons"

type Props = {}

const page = (props: Props) => {
  return (
    <section className="bg-light-gray min-h-[70vh]">
      <div className="container mx-auto py-5 lg:py-16">
        <div className="">
          <h4 className="text-2xl md:text-3xl lg:text-3xl font-clash-display">
            Your shopping cart
          </h4>
          <div className="hidden w-full lg:grid grid-cols-[3fr_1fr_1fr] mt-16 capitalize font-clash-display">
            <span>product</span>
            <div className="flex justify-start">
              <span>quantity</span>
            </div>
            <div className="flex justify-end">
              <span>Total</span>
            </div>
          </div>

          <div className="h-[1px] bg-muted-foreground/40 my-4 w-full" />
        </div>
        <div className="space-y-8">
          <ShoppingCartItem />
          <ShoppingCartItem />
          <ShoppingCartItem />
        </div>

        <div className="h-[1px] bg-muted-foreground/40 my-4 w-full" />

        <div className="w-full flex justify-end items-center">
          <div className="flex flex-col items-end justify-center text-[#4E4D93]">
            <div className="flex gap-x-2  font-clash-display items-center">
              <span className="text-xl">subtotal</span>
              <span className="text-dark-primary text-2xl">$210</span>
            </div>
            <p className="mt-3">
              Taxes and shipping are calculated at checkout
            </p>
          </div>
        </div>
        <div className="w-full flex lg:justify-end my-8 lg:my-4">
          <Button className="bg-dark-primary max-lg:w-full py-7">
            Go to checkout
          </Button>
        </div>
      </div>
    </section>
  )
}

export default page

function ShoppingCartItem() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-[1.5fr_1fr] mt-1 gap-x-5">
      <div className="flex gap-x-8">
        <div className=" h-[200px] lg:size-[150px] relative max-lg:w-full">
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