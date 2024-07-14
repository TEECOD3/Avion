"use client"

import React from "react"

import { filteroptions } from "@/config/product"

import { Checkbox } from "./ui/checkbox"
import { Label } from "./ui/label"

type Props = {}

const ProductFilter = (props: Props) => {
  return (
    <form className="space-y-6">
      {filteroptions.map((options, optionsidx) => (
        <div key={optionsidx} className="space-y-6">
          <h4 className="text-dark-primary font-clash-display">
            {options.name}
          </h4>
          <div className="flex flex-col gap-y-4 ">
            {options.options.map((choice, choiceidx) => (
              <div key={choiceidx} className="flex gap-x-2 items-center ">
                <Checkbox />
                <Label className="text-dark-primary">{choice.label}</Label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </form>
  )
}

export default ProductFilter
