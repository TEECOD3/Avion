import React from "react"
import { redirect } from "next/navigation"

type Props = {}

const page = (props: Props) => {
  return redirect("/profile/my-avion-account")
}

export default page
