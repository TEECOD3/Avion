import React from "react";
import type { SVGProps } from "react";

export function LogoFacebook(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="24" height="24" />
      <path
        d="M20.0025 3H3.9975C3.73355 3.00196 3.48097 3.10769 3.29433 3.29433C3.10769 3.48097 3.00196 3.73355 3 3.9975V20.0025C3.00196 20.2664 3.10769 20.519 3.29433 20.7057C3.48097 20.8923 3.73355 20.998 3.9975 21H12.615V14.04H10.275V11.3175H12.615V9.315C12.615 6.99 14.0325 5.7225 16.1175 5.7225C16.815 5.7225 17.5125 5.7225 18.21 5.8275V8.25H16.7775C15.645 8.25 15.4275 8.79 15.4275 9.5775V11.31H18.1275L17.775 14.0325H15.4275V21H20.0025C20.2664 20.998 20.519 20.8923 20.7057 20.7057C20.8923 20.519 20.998 20.2664 21 20.0025V3.9975C20.998 3.73355 20.8923 3.48097 20.7057 3.29433C20.519 3.10769 20.2664 3.00196 20.0025 3Z"
        fill="white"
      />
    </svg>
  );
}
