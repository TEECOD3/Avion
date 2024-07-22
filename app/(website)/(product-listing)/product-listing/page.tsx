import Image from "next/image"
import productheroimage from "@/public/assets/Images/10025.jpg"

import ProductFilter from "@/components/product-filter"
import ProductGrid from "@/components/product-grid"
import ProductMobileFilter from "@/components/product-mobile-filter"
import ProductSort from "@/components/product-sort"

const page = () => {
  return (
    <section>
      <div className="h-[20vh] sm:h-[25vh] lg:h-[30vh] w-full relative">
        <Image
          src={productheroimage}
          fill
          className="object-cover object-bottom brightness-50"
          alt="all product hero image"
          placeholder="blur"
        />
        <div className="absolute container mx-auto bottom-14 lg:left-24 font-clash-display text-white z-10 max-lg:text-center text-2xl lg:text-4xl">
          All Products
        </div>
      </div>

      <section className="my-16 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[18rem_1fr] capitalize ">
          <div className="hidden lg:block">
            <ProductFilter />
          </div>
          <div className="">
            <div className="w-full flex lg:justify-end justify-between px-1">
              <ProductSort />
              <ProductMobileFilter />
            </div>

            <ProductGrid />
          </div>
        </div>
      </section>
    </section>
  )
}

export default page
