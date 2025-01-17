import * as React from 'react';
import {SVGProps} from 'react';
const CheckMark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    {...props}>
    <path
      stroke="#8DAEC1"
      strokeLinecap="round"
      strokeWidth={2}
      d="m11 1-5.43 9.05a1 1 0 0 1-1.457.285L1 8"
    />
  </svg>
);
export default CheckMark;
