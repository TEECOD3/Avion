import React from "react"

import { icons } from "./custom-icons/Index"

type Props = {}

const ProfileAccount = (props: Props) => {
  return (
    <div className="flex flex-col gap-y-1 text-muted-foreground">
      <span className="capitalize text-black font-semibold">
        welcome david temitope
      </span>
      <span className="text-sm">temitope@gmail.com</span>

      <div className="flex flex-col gap-y-1 text-muted-foreground">
        <span className="capitalize text-black font-semibold">
          address book
        </span>
        <div className="text-sm">your default shipping address</div>
        <p>
          David Temitope Federal housing lugbe abuja ABUJA-MARARABA, Federal
          Capital Territory +234 9031269618 / +234 7051223716
        </p>
      </div>
      <div className="font-semibold flex items-center gap-x-2 capitalize text-sm mt-4">
        <span>logout</span>
        <icons.LogOut className="size-4" />
      </div>
    </div>
  )
}

export default ProfileAccount
