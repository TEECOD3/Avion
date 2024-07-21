"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

import { Profilelinks } from "@/config/profile"
import { cn } from "@/lib/utils"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type Props = {}

const ProfileNavMenu = (props: Props) => {
  const pathname = usePathname()
  const router = useRouter()
  const [sortvalue, setsortvalue] = useState("")

  const navigateHandler = (value) => {
    router.push(`${value}`)
  }

  return (
    <>
      <div className="lg:hidden">
        <Select onValueChange={navigateHandler}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="My Avion Account" />
          </SelectTrigger>
          <SelectContent>
            {Profilelinks.map((sort, sortidx) => (
              <SelectItem value={sort.link} key={sortidx}>
                {sort.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex-col lg:flex gap-y-4 capitalize text-muted-foreground hidden">
        {Profilelinks.map((link, linkidx) => (
          <div className="" key={linkidx}>
            <Link
              href={link.link}
              className={cn(
                `${pathname === link.link ? "text-black font-semibold" : ""}`
              )}
            >
              {link.label}
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default ProfileNavMenu
