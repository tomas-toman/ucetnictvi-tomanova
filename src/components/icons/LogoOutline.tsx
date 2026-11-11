import { SVGProps } from "react";

export default function LogoOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="142 151 952 687"
      fill="none"
      stroke="currentColor"
      strokeMiterlimit={10}
      {...props}
    >
      <g transform="translate(125.897761 32.897761)">
        <path
          d="M600,320C650,185 700,148 790,148C740,180 730,230 740,285C670,295 625,320 580,390L600,320Z"
          strokeWidth={24}
          strokeLinejoin="round"
        />
        <path
          d="M550,775L335,280C310,225 275,215 210,215L55,215L265,710C285,755 315,775 375,775L615,775C675,775 705,755 725,710L930,148L780,148C690,148 645,190 610,275L480,610"
          strokeWidth={36}
        />
      </g>
    </svg>
  );
}
