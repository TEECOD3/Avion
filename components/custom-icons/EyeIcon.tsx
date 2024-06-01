import React from "react";
import type { SVGProps } from "react";

export default function EyeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 512 512'
      {...props}
    >
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={32}
        d='M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112'
      ></path>
      <circle
        cx={256}
        cy={256}
        r={80}
        fill='none'
        stroke='currentColor'
        strokeMiterlimit={10}
        strokeWidth={32}
      ></circle>
    </svg>
  );
}
