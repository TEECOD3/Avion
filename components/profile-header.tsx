"use client"

import React from "react"
import { usePathname } from "next/navigation"

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

type Props = {}

const ProfileHeader = (props: Props) => {
  let pathname = usePathname()

  let currentHeaderDescription = "update your avion profile"
  let textdesc = "my avion account"

  switch (pathname) {
    case (pathname = "/profile/my-avion-account"):
      currentHeaderDescription = "update your avion profile"
      textdesc = "my avion account"
      break
    case (pathname = "/profile/orders"):
      currentHeaderDescription = "your order history"
      textdesc = "orders"
      break
    case (pathname = "/profile/inbox"):
      currentHeaderDescription = "your lastest inbox messages"
      textdesc = "inbox"
      break
    case (pathname = "/profile/saved-items"):
      currentHeaderDescription = "your order history"
      textdesc = "saved items"
      break
    default:
      break
  }

  return (
    <div className="flex gap-x-6 items-center">
      <div className="">
        <Avatar className="size-14">
          <AvatarImage src="https://github.com/shadcn.png" alt="useravatar" />
          <AvatarFallback>TD</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-col gap-y-1">
        <div className="space-x-2  text-black/80 capitalize text-base font-semibold  lg:text-xl">
          <span className=" mr-1 ">Temitope david</span>/
          <span className="ml-1">{textdesc}</span>
        </div>
        <p className="text-muted-foreground capitalize">
          {currentHeaderDescription}
        </p>
      </div>
    </div>
  )
}

export default ProfileHeader
