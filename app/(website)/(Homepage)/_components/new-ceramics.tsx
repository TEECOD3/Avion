import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import ProductCard from "@/components/product-card"

const Newceramics = () => {
  return (
    <section className="container mx-auto pb-10">
      <div className="w-full">
        <h4 className="max-w-xl font-clash-display text-xl lg:text-header-2">
          New Ceramics
        </h4>

        <div className="my-6 grid grid-cols-2 lg:grid-cols-4 gap-x-5">
          {Array.from({ length: 4 }).map((product, idx) => (
            <ProductCard key={idx} />
          ))}
        </div>
        <div className="w-full flex justify-center">
          <Link
            href="/product-listing"
            className={cn(
              buttonVariants({ variant: "gray" }),
              "rounded-none mx-auto  max-sm:w-full !p-7"
            )}
          >
            View collection
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Newceramics
