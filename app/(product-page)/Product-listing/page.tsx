import React from "react"
import Image from "next/image"
import productheroimage from "@/public/assets/Images/10026.jpg"

type Props = {}

const page = (props: Props) => {
  return (
    <section>
      <div className="h-[30vh] w-full">
        <Image
          src={productheroimage}
          fill
          className="object-cover object-top "
          alt="all product hero image"
        />
      </div>
    </section>
  )
}

export default page
