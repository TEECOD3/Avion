import React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import { SearchError } from "./custom-icons/search-error"
import ProductCard from "./product-card"
import { Button, buttonVariants } from "./ui/button"

type Props = {}

const ProductGrid = (props: Props) => {
  const productarr = Array.from({ length: 8 })
  return (
    <>
      {productarr.length === 0 ? (
        <div className="h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl text-dark-primary font-clash-display flex items-center justify-center gap-x-4">
              <span>No products found</span> <SearchError className="size-7" />
            </h2>
            <p className="text-muted-foreground mt-2">
              Try adjusting the filters or
              <Link href="/product-listing" scroll={false}>
                <p className="text-muted-foreground underline underline-offset-2">
                  clear all filters
                </p>
              </Link>
            </p>
          </div>
        </div>
      ) : (
        <div className="my-6 grid grid-cols-2 lg:grid-cols-3 gap-x-5">
          {productarr.map((product, idx) => (
            <ProductCard key={idx} />
          ))}
        </div>
      )}
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
