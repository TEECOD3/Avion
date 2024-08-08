import React from "react"
import type { SVGProps } from "react"

export function Close(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none">
        <circle cx={12} cy={12} r={9} fill="gray" fillOpacity={0.25}></circle>
        <path
          stroke="gray"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          d="m16 8l-8 8m0-8l8 8"
        ></path>
      </g>
    </svg>
  )
}
