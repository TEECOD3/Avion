import React from "react"
import Image from "next/image"
import Link from "next/link"
import HeroImage from "@/public/assets/Images/anthony-tran-vXymirxr5ac-unsplash.jpg"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"

type Props = {}

const Hero = (props: Props) => {
  return (
    <section className="relative h-96 w-full lg:h-[39rem]">
      <div className="container my-10 lg:hidden">
        <div className="relative h-full">
          <p
            className="font-clash-display text-header-3  text-black;
]"
          >
            Luxury homeware for people who love timeless design quality
          </p>
          <p className="text-light-text mt-6">
            Shop the new Spring 2022 collection today
          </p>
          <Button className="bg-light-gray text-light-text hover:bg-light-text/20 mt-10 w-full p-6 transition duration-300 ease-out hover:text-gray-600">
            View Collection
          </Button>
        </div>
      </div>
      <div className="relative size-full">
        <Image
          className="size-full object-cover object-right"
          alt="HeroImage"
          src={HeroImage}
          height={1400}
          width={1440}
          placeholder="blur"
          loading="eager"
        />
      </div>

      <div className="absolute right-20 top-20 hidden h-[26rem] w-[39.5rem] bg-white p-12 lg:block">
        <div className="relative h-full">
          <p
            className="font-clash-display text-header-2  text-black;
]"
          >
            Luxury homeware for people who love timeless design quality
          </p>
          <p className="text-light-text mt-6">
            Shop the new Spring 2022 collection today
          </p>
          <Link
            href="/product-listing"
            className={cn(
              buttonVariants({ variant: "gray" }),
              "absolute bottom-0"
            )}
          >
            View Collection
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
