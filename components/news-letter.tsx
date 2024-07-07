import React from "react"

import { cn } from "@/lib/utils"

import { Button } from "./ui/button"
import { Input } from "./ui/input"

type Props = {}

const NewsLetter = (props: Props) => {
  return (
    <section className="bg-light-gray py-20 flex items-center justify-center">
      <div className="container py-10 bg-white ">
        <div className="text-center w-full space-y-6">
          <p className="text-xl lg:text-3xl font-clash-display">
            Join the club and get the benefits
          </p>
          <p className="max-w-xl mx-auto">
            Sign up for our newsletter and receive exclusive offers on new
            ranges, sales, pop up stores and more
          </p>
        </div>

        <div className="flex mt-16 max-w-2xl mx-auto">
          <div className="bg-muted-foreground/5 w-full flex items-center">
            <Input
              type="email"
              className="border-none outline-none focus:border-none focus:outline-none bg-transparent text-muted "
              placeholder="your@gmail.com"
            />
          </div>
          <Button
            variant="blue"
            className={cn("rounded-none mx-auto  w-[30%] text-white/60 py-7")}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </section>
  )
}

export default NewsLetter
