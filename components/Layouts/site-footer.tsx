"use client"

import React from "react"
import Link from "next/link"

import {
  category,
  footerSocialsLinks,
  menuLinks,
  ourcompany,
} from "@/config/footer"
import { cn } from "@/lib/utils"

import { icons } from "../custom-icons/Index"
import { buttonVariants } from "../ui/button"
import { Separator } from "../ui/separator"

type Props = {}

export const Footer = (props: Props) => {
  return (
    <footer className="mt-auto bg-dark-primary py-16 ">
      <div className="mb-4 grid grid-cols-1 md:grid-cols-[30rem_1fr] container text-[#FFFFFF]/50 md:gap-x-[10rem] gap-y-10">
        <div className="grid grid-cols-2 lg:flex flex-row justify-between ">
          <div className="flex flex-col gap-y-2">
            <h4 className="font-clash-display text-header-2 text-white">
              Avion
            </h4>
            <p>21 New York Street</p>
            <p>New York City</p>
            <p>United States of America</p>
            <p>432 34</p>
          </div>

          <div className="flex flex-col justify-start">
            <h4 className="font-clash-display capitalize text-white ">
              social links
            </h4>
            <ul className="flex-wrap flex mt-6 gap-x-2">
              {footerSocialsLinks.map((socialLink, idx) => (
                <div key={idx} className="text-white/60">
                  <socialLink.icon />
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-2  lg:flex  lg:justify-between flex-row gap-y-10">
          <div className="max-lg:col-start-2 ">
            <h4 className="font-clash-display capitalize text-white ">Menu</h4>
            <ul className="flex flex-col gap-y-2 mt-6">
              {menuLinks.map((menu, idx) => (
                <span
                  key={idx}
                  className="capitalize hover:underline hover:underline-offset-4 cursor-pointer"
                >
                  {menu.label}
                </span>
              ))}
            </ul>
          </div>

          <div className="hidden md:block">
            <h4 className="font-clash-display capitalize text-white  ">
              categories
            </h4>
            <ul className="flex flex-col gap-y-2 mt-6">
              {category.map((menu, idx) => (
                <span
                  key={idx}
                  className="capitalize hover:underline hover:underline-offset-4 cursor-pointer"
                >
                  {menu.label}
                </span>
              ))}
            </ul>
          </div>

          <div className="max-lg:col-start-1 max-lg:row-start-1">
            <h4 className="font-clash-display capitalize text-white ">
              our company
            </h4>
            <ul className="flex flex-col gap-y-2 mt-6">
              {ourcompany.map((company, idx) => (
                <span
                  key={idx}
                  className="capitalize hover:underline hover:underline-offset-4 cursor-pointer"
                >
                  {company.label}
                </span>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Separator className="bg-white/60 container my-5" />
      <div className="text-white/60 container mx-auto  capitalize">
        <span className="text-sm font-semibold flex items-center  ">
          site built with love <icons.love className="mx-1 size-4" />
          <span className="mr-1"> {new Date().getFullYear()}</span> by
          <Link
            href="https://github.com/TEECOD3"
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: "link" }),
              "px-0 text-white/60 ml-2 cursor-pointer"
            )}
          >
            <span className="mr-2">TEECOD3</span>{" "}
            <icons.gitHub className="size-4" />
          </Link>
        </span>
      </div>
    </footer>
  )
}
