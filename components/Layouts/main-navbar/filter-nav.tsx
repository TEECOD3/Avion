import React from "react"
import Link from "next/link"

type Props = {}

const FilterLinks = [
  {
    label: "plant pots",
    href: "/",
  },
  {
    label: "ceramics",
    href: "/",
  },
  {
    label: "Tables",
    href: "/",
  },
  {
    label: "chairs",
    href: "/",
  },
  {
    label: "crockery",
    href: "/",
  },
  {
    label: "Tableware",
    href: "/",
  },
  {
    label: "cutlery",
    href: "/",
  },
]

const FilterNav = (props: Props) => {
  return (
    <div className="text-light-text font-satoshi flex items-center gap-x-6 py-4 capitalize">
      {FilterLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="cursor-pointer text-sm hover:text-[#2A254B]"
        >
          {link.label}
        </Link>
      ))}
    </div>
  )
}

export default FilterNav
