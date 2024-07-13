import React from "react"

import { icons } from "./custom-icons/Index"

type Props = {}

const QuantityButton = (props: Props) => {
  return (
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
  )
}

export default QuantityButton
