import React from "react"
import { Minus, Plus } from "lucide-react"

import { cn } from "@/lib/utils"

import { icons } from "./custom-icons/Index"
import { Button } from "./ui/button"

type Props = {}

const ProductDetailDesc = (props: Props) => {
  return (
    <div className="flex flex-col gap-y-10">
      <div className="text-black  font-clash-display">
        <h3 className="text-header-3 lg:text-header-1">The Dandy Chair</h3>
        <h5 className="text-header-4 lg:text-header-3">$250</h5>
      </div>
      <div className="space-y-4">
        <h5 className=" text-black font-clash-display">Description</h5>
        <p>
          A timeless design, with premium materials features as one of our most
          popular and iconic pieces. The dandy chair is perfect for any stylish
          living space with beech legs and lambskin leather upholstery.
        </p>
        <ul className="list-disc list-inside">
          <li>Premium material Quality </li>
          <li>Handmade upholstery </li>
          <li>timeless classic</li>
        </ul>
      </div>
      <div className="font-clash-display capitalize">
        <h4 className="body-medium font-clash-display mb-4 text-black">
          dimensions
        </h4>
        <div className="flex w-full lg:max-w-[15rem] justify-between">
          <div className="flex flex-col gap-y-2 body-small">
            <h5>height</h5>
            <span>15cm</span>
          </div>
          <div className="flex flex-col gap-y-2 body-small">
            <h5>width</h5>
            <span>15cm</span>
          </div>
          <div className="flex flex-col gap-y-2 body-small">
            <h5>Depth</h5>
            <span>15cm</span>
          </div>
        </div>
      </div>

      <div className="">
        <h4 className="body-medium font-clash-display mb-4 text-black ">
          Quantity
        </h4>
        <div className="flex  items-center justify-center max-w-[10rem] py-1 bg-white border-muted border-[1px]">
          <div className="flex items-center justify-center flex-1 cursor-pointer">
            <span className="text-xl">
              <icons.Plus className="size-4" />
            </span>
          </div>
          <input
            type="number"
            value={1}
            className="block text-base  px-3 py-2 bg-white w-[40%] text-black border text-center border-gray-300 rounded-md  shadow-sm
      focus:outline-none focus:border-none focus:ring-none focus:ring-none border-none"
          />
          <div className="flex items-center justify-center flex-1 cursor-pointer">
            <span className="text-xl">
              <icons.Minus className="size-4" />
            </span>
          </div>
        </div>
      </div>

      <div className="flex gap-x-5 w-1/2">
        <Button
          variant="blue"
          className={cn(
            "rounded-none mx-auto capitalize max-w-max px-6 text-white/80 py-7"
          )}
        >
          add to cart
        </Button>
        <Button
          variant="ghost"
          className={cn(
            "rounded-none mx-auto capitalize max-w-max px-6 text-dark-primary bg-gray-100 py-7  hover:bg-dark-primary hover:text-white"
          )}
        >
          save to favourites
        </Button>
      </div>
    </div>
  )
}

export default ProductDetailDesc
