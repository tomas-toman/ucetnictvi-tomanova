import { SVGProps } from "react";

export default function Refresh(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20.25 12A8.25 8.25 0 1 1 17.83 6.17" />
      <path d="M20.25 3.75V8.25H15.75" />
    </svg>
  );
}
