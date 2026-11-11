import { SVGProps, useId } from "react";

export default function Logo(props: SVGProps<SVGSVGElement>) {
  const leafGradientId = useId();
  const strokeGradientId = useId();

  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="142 151 952 687"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeMiterlimit={10}
      {...props}
    >
      <defs>
        <linearGradient
          id={leafGradientId}
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(210,-242,242,210,580,390)"
        >
          <stop offset="0" stopColor="rgb(40,133,136)" />
          <stop offset="1" stopColor="rgb(56,156,148)" />
        </linearGradient>
        <linearGradient
          id={strokeGradientId}
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(875,-188.1,188.1,875,55,461.5)"
        >
          <stop offset="0" stopColor="rgb(44,105,154)" />
          <stop offset="0.5" stopColor="rgb(40,133,136)" />
          <stop offset="1" stopColor="rgb(43,147,118)" />
        </linearGradient>
      </defs>
      <g transform="translate(125.897761 32.897761)">
        <path
          d="M600,320C650,185 700,148 790,148C740,180 730,230 740,285C670,295 625,320 580,390L600,320Z"
          fill={`url(#${leafGradientId})`}
          fillRule="nonzero"
        />
        <path
          d="M550,775L335,280C310,225 275,215 210,215L55,215L265,710C285,755 315,775 375,775L615,775C675,775 705,755 725,710L930,148L780,148C690,148 645,190 610,275L480,610"
          fill="none"
          stroke={`url(#${strokeGradientId})`}
          strokeWidth={36}
        />
      </g>
    </svg>
  );
}
