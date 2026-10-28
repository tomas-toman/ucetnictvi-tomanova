import { SVGProps } from "react";

export default function X(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <line
        x1="18.6666"
        y1="5.3333"
        x2="5.3333"
        y2="18.6666"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      ></line>
      <line
        x1="5.3333"
        y1="5.3333"
        x2="18.6666"
        y2="18.6666"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      ></line>
    </svg>
  );
}
