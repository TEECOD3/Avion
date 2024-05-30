import React from "react";
import type { SVGProps } from "react";

export function SpinnersBouncingBall(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <ellipse cx={12} cy={5} fill="currentColor" rx={4} ry={4}>
        <animate
          id="svgSpinnersBouncingBall0"
          fill="freeze"
          attributeName="cy"
          begin="0;svgSpinnersBouncingBall2.end"
          calcMode="spline"
          dur="0.375s"
          keySplines=".33,0,.66,.33"
          values="5;20"
        ></animate>
        <animate
          attributeName="rx"
          begin="svgSpinnersBouncingBall0.end"
          calcMode="spline"
          dur="0.05s"
          keySplines=".33,0,.66,.33;.33,.66,.66,1"
          values="4;4.8;4"
        ></animate>
        <animate
          attributeName="ry"
          begin="svgSpinnersBouncingBall0.end"
          calcMode="spline"
          dur="0.05s"
          keySplines=".33,0,.66,.33;.33,.66,.66,1"
          values="4;3;4"
        ></animate>
        <animate
          id="svgSpinnersBouncingBall1"
          attributeName="cy"
          begin="svgSpinnersBouncingBall0.end"
          calcMode="spline"
          dur="0.025s"
          keySplines=".33,0,.66,.33"
          values="20;20.5"
        ></animate>
        <animate
          id="svgSpinnersBouncingBall2"
          attributeName="cy"
          begin="svgSpinnersBouncingBall1.end"
          calcMode="spline"
          dur="0.4s"
          keySplines=".33,.66,.66,1"
          values="20.5;5"
        ></animate>
      </ellipse>
    </svg>
  );
}
