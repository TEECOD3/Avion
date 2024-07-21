import React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import { icons } from "./custom-icons/Index"
import { buttonVariants } from "./ui/button"

type Props = {}

const CartEmptyBasket = (props: Props) => {
  return (
    <div className="h-[80dvh] container mx-auto flex items-center justify-center">
      <div className=" max-w-xl mx-auto border-dotted border-[2px] border-dark-primary rounded-xl p-10 lg:p-20">
        <div className="flex flex-col justify-center items-center gap-y-4">
          <span className="font-clash-display text-xl lg:text-2xl ">
            Your shopping cart is empty
          </span>{" "}
          <icons.Emptycart className=" size-14 lg:size-28" />
          <Link
            href="/product-listing"
            className={cn(
              buttonVariants({ variant: "blue" }),
              "text-white hover:text-white hover:bg-dark-primary/80 capitalize font-clash-display"
            )}
          >
            <icons.PlusIcon
              color="white"
              className="size-4 mr-1 hover:invert-0"
            />
            <span>start shoping</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CartEmptyBasket
