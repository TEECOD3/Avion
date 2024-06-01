import React from 'react';
import type {SVGProps} from 'react';

export default function Menu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect width='16' height='16' />
      <path d='M14 3H2V4H14V3Z' fill='#2A254B' />
      <path d='M14 12H2V13H14V12Z' fill='#2A254B' />
      <path d='M14 6H2V7H14V6Z' fill='#2A254B' />
      <path d='M14 9H2V10H14V9Z' fill='#2A254B' />
    </svg>
  );
}
