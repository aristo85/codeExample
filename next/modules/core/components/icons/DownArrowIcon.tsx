import * as React from 'react';
import {SVGProps} from 'react';
const DownArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={2}
      d="m20 8.5-7.293 7.293a1 1 0 0 1-1.414 0L4 8.5"
    />
  </svg>
);
export default DownArrowIcon;
