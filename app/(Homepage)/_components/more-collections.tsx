"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import HeroImage from "@/public/assets/Images/ImageBlock.png"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

type Props = {}

const MoreCollection = (props: Props) => {
  return (
    <section className="container mx-auto grid grid-cols-1 lg:grid-cols-2 py-20 gap-6 ">
      <div className="px-4 lg:px-16 py-10 lg:py-16 w-full bg-dark-primary text-white flex flex-col gap-y-8 justify-between ">
        <div className="space-y-6">
          <h4 className=" text-xl lg:text-3xl font-clash-display">
            It started with a small idea
          </h4>
          <p className="text-sm lg:text-base">
            A global brand with local beginnings, our story begain in a small
            studio in South London in early 2014
          </p>
        </div>
        <div className="w-full">
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "gray" }),
              "rounded-none mx-auto py-4 px-4 max-sm:w-full bg-white/20 text-white"
            )}
          >
            View collection
          </Link>
        </div>
      </div>
      <div className="w-full h-full">
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
    </section>
  )
}

export default MoreCollection
