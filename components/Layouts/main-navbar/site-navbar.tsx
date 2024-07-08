"use client"

import Link from "next/link"

import { Separator } from "@/components/ui/separator"
import { icons } from "@/components/custom-icons/Index"

import FilterNav from "./filter-nav"

export const Navbar = () => {
  return (
    <nav className="container  mx-auto flex w-full max-w-[1500px] flex-col lg:px-4">
      <div className="flex w-full items-center justify-between py-4 ">
        <icons.search className="hidden size-4 cursor-pointer lg:block lg:size-6" />
        <Link href="/">
          <h1 className="text-header-3 font-clash-display">Avion</h1>
        </Link>

        <div className="hidden gap-x-4 lg:flex items-center">
          <icons.cart className="size-4 cursor-pointer lg:size-6" />
          <icons.user className="size-4 cursor-pointer lg:size-6" />
        </div>

        <div className="flex gap-x-4 lg:hidden items-center">
          <icons.search className="size-4 cursor-pointer lg:size-6" />
          <icons.menu className="cursor-pointer lg:size-6" />
        </div>
      </div>
      <Separator />
      <div className="mx-auto hidden max-w-[60%] lg:block">
        <FilterNav />
      </div>
    </nav>
  )
}
