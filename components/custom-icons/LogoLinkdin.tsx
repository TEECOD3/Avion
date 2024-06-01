import React from 'react';
import type {SVGProps} from 'react';

export default function LogoLinkdin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect width='24' height='24' />
      <path
        d='M19.65 3H4.35C3.6 3 3 3.6 3 4.275V19.65C3 20.325 3.6 20.925 4.35 20.925H19.65C20.4 20.925 21 20.325 21 19.65V4.275C21 3.6 20.4 3 19.65 3ZM8.325 18.3H5.7V9.75H8.325V18.3ZM7.05 8.55C6.225 8.55 5.475 7.875 5.475 6.975C5.475 6.075 6.15 5.4 7.05 5.4C7.875 5.4 8.625 6.075 8.625 6.975C8.625 7.875 7.875 8.55 7.05 8.55ZM18.375 18.225H15.75V14.025C15.75 13.05 15.75 11.7 14.325 11.7C12.9 11.7 12.75 12.825 12.75 13.875V18.15H10.125V9.75H12.6V10.875H12.675C13.05 10.2 13.95 9.45 15.225 9.45C17.925 9.45 18.45 11.25 18.45 13.575V18.225H18.375Z'
        fill='white'
      />
    </svg>
  );
}
