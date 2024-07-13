import React from "react"
import Image from "next/image"
import productheroimage from "@/public/assets/Images/10025.jpg"

type Props = {}

const page = (props: Props) => {
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
    </section>
  )
}

export default page
