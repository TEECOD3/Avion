import React from "react"

type Props = {}

const ProfileInboxwidget = (props: Props) => {
  return (
    <div className="flex flex-col gap-y-2 border-[1px] border-muted-foreground/4 p-3">
      <span className=" text-[14px] lg:text-sm">29th june 2024</span>
      <span className=" text-[14px] lg:text-sm">how was your experience?</span>
      <p className="text-muted-foreground text-[14px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet similique
        excepturi ullam velit quasi corrupti eum, magni consectetur
        voluptatibus! Repellendus ea commodi molestias officia quia alias
        necessitatibus, expedita cumque vel.
      </p>
    </div>
  )
}

export default ProfileInboxwidget
