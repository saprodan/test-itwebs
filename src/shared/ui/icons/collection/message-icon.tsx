import * as React from "react";
import type { SVGProps } from "react";
const SvgMessageIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 21 21"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.478 18.905a9.8 9.8 0 0 0 5.777-1.868c1.653-1.211 2.833-2.907 3.353-4.82a8.45 8.45 0 0 0-.478-5.75c-.83-1.814-2.275-3.315-4.108-4.268a9.9 9.9 0 0 0-6.016-.994C6.94 1.513 5.041 2.46 3.608 3.9 2.174 5.34 1.288 7.188 1.09 9.155a8.52 8.52 0 0 0 1.42 5.61l-1.461 4.14 4.384-1.38a9.8 9.8 0 0 0 5.045 1.38"
    />
  </svg>
);
export default SvgMessageIcon;
