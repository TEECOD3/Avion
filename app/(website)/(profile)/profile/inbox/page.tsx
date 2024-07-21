import React from "react"

import ProfileInboxwidget from "@/components/profile-inbox-widget"

type Props = {}

const page = (props: Props) => {
  return (
    <div className="space-y-4">
      <ProfileInboxwidget />
      <ProfileInboxwidget />
      <ProfileInboxwidget />
    </div>
  )
}

export default page
