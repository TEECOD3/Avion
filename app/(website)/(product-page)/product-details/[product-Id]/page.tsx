import Image from "next/image"
import Link from "next/link"
import image from "@/public/assets/Images/10030.jpg"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import ProductCard from "@/components/product-card"
import ProductDetailDesc from "@/components/product-detail-description"
import BrandCore from "@/app/(Homepage)/_components/brand-core"

type Props = {}

const page = (props: Props) => {
  return (
    <article className="space-y-10 lg:space-y-16">
      <section className="w-full bg-light-gray min-h-[70vh]">
        <div className="flex flex-col max-lg:gap-y-8 md:flex-row">
          <div className="h-96 md:h-[500px] lg:h-[765px] w-full relative">
            <Image
              src={image}
              alt="product-detail-image"
              fill
              className="object-cover absolute h-full w-full"
              placeholder="blur"
            />
          </div>
          <div className="w-full py-8 lg:px-12 lg:py-10 max-lg:container max-lg:mx-auto text-[#505977]">
            <div className="lg:p-8">
              <ProductDetailDesc />
            </div>
          </div>
        </div>
      </section>

      <ProductsMightLike />
      <BrandCore className="!pb-32" />
    </article>
  )
}

export default page

function ProductsMightLike() {
  return (
    <section className="container mx-auto py-10  lg:pt-20">
      <div className="w-full">
        <h4 className="max-w-xl font-clash-display text-xl lg:text-header-2">
          You might also like
        </h4>

        <div className="my-6 grid grid-cols-2 lg:grid-cols-4 gap-x-5">
          {[1, 2, 4, 5].map((product, idx) => (
            <ProductCard key={idx} />
          ))}
        </div>
        <div className="w-full flex justify-center">
          <Link
            href="/product-listing"
            className={cn(
              buttonVariants({ variant: "gray" }),
              "rounded-none mx-auto  max-sm:w-full"
            )}
          >
            View collection
          </Link>
        </div>
      </div>
    </section>
  )
}
