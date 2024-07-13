"use client"

import Link from "next/link"

import { Separator } from "@/components/ui/separator"
import { icons } from "@/components/custom-icons/Index"

import FilterNav from "./filter-nav"

export const Navbar = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center h-[2.6rem] bg-dark-primary">
        <div className="text-white  text-[10px] lg:text-base flex items-center font-light justify-center">
          <icons.Deliverywhite className=" mr-1" />
          <span>
            Free delivery on all orders over £50 with code easter checkout
          </span>
        </div>
      </div>
      <nav className="container mx-auto flex w-full  flex-col lg:px-4">
        <div className="flex w-full items-center justify-between py-4 ">
          <Link href="/">
            <h1 className="text-header-3 font-clash-display">Avion</h1>
          </Link>
          <div className="mx-auto hidden max-w-[60%] lg:block">
            <FilterNav />
          </div>

          <div className="hidden gap-x-4 lg:flex items-center">
            <icons.search className="hidden size-4 cursor-pointer lg:block lg:size-6" />
            <Link href={"/cart-basket"}>
              <icons.cart className="size-4 cursor-pointer lg:size-6" />
            </Link>
            <icons.user className="size-4 cursor-pointer lg:size-6" />
          </div>

          <div className="flex gap-x-4 lg:hidden items-center">
            <icons.search className="size-4 cursor-pointer lg:size-6" />
            <icons.menu className="cursor-pointer lg:size-6" />
          </div>
        </div>
      </nav>
    </>
  )
}
