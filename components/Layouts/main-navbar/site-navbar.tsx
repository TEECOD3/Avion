"use client"

import Link from "next/link"

// import { useSearchParams } from "next/navigation"

import { icons } from "@/components/custom-icons/Index"

import FilterNav from "./filter-nav"

export const Navbar = () => {
  // const searchparams = useSearchParams()
  // console.log(searchparams.get("search"))
  // console.log(searchparams.entries())
  // const searchvalues = Array.from(searchparams.entries())
  // console.log(searchvalues)
  return (
    <>
      <div className="w-full flex items-center justify-center h-[2.6rem] bg-dark-primary">
        <div className="text-white  text-[10px] lg:text-base flex items-center font-light justify-center">
          <icons.Deliverywhite className="mr-1" />
          <span>
            Free delivery on all orders over £50 with code easter checkout
          </span>
        </div>
      </div>
      <nav className="container mx-auto flex w-full  flex-col lg:px-4">
        <div className="flex w-full items-center justify-between py-4 ">
          <Link href="/?search=tee&product=yeezy&category=shoes">
            <h1 className="text-header-3 font-clash-display">Avion</h1>
          </Link>
          <div className="mx-auto hidden max-w-[60%] lg:block">
            <FilterNav />
          </div>

          <div className="hidden gap-x-4 lg:flex items-center">
            <icons.search className="hidden  cursor-pointer lg:block size-6" />
            <Link href={"/cart-basket"}>
              <icons.cart className="cursor-pointer size-6" />
            </Link>
            <icons.user className="size-4 cursor-pointer lg:size-6" />
          </div>

          <div className="flex gap-x-4 lg:hidden items-center">
            <icons.search className=" cursor-pointer size-6" />
            <Link href={"/cart-basket"}>
              <icons.cart className="cursor-pointer size-6" />
            </Link>
            <icons.menu className="cursor-pointer size-6" />
          </div>
        </div>
      </nav>
    </>
  )
}
