import React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import ProductCard from "./product-card"
import { Button, buttonVariants } from "./ui/button"

type Props = {}

const ProductGrid = (props: Props) => {
  return (
    <>
      <div className="my-6 grid grid-cols-2 lg:grid-cols-3 gap-x-5">
        {[1, 2, 4, 5, 7, 9].map((product, idx) => (
          <ProductCard key={idx} />
        ))}
      </div>
      <div className="w-full flex items-center justify-center">
        <Button
          className={cn(
            buttonVariants({ variant: "gray" }),
            "bg-light-gray text-light-text max-w-max px-10 text-base hover:bg-light-text/20 mt-10 w-full p-6 transition duration-300 ease-out hover:text-gray-600"
          )}
        >
          Load more
        </Button>
      </div>
    </>
  )
}

export default ProductGrid
