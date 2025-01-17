import * as React from 'react';
import {SVGProps} from 'react';
const ClockIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={8}
    fill="none"
    {...props}>
    <g clipPath="url(#a)">
      <path
        fill="#8DAEC1"
        d="M4 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm.4-4V2h-.8v2.8H6V4H4.4Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h8v8H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default ClockIcon;
