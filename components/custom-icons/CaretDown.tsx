import type { SVGProps } from "react";
import React from "react";

export function CaretDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="16" height="16" />
      <path d="M12 6L8 11L4 6H12Z" fill="#2A254B" />
    </svg>
  );
}
