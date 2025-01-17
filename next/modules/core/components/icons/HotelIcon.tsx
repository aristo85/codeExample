import * as React from 'react';
import {SVGProps} from 'react';
const HotelIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={8}
    fill="none"
    {...props}>
    <g clipPath="url(#a)">
      <path
        fill="#1D7ABD"
        d="M0 0v.8h.4V8h2.8V6.4h1.6V8h2.8V.8H8V0H0Zm2.4 5.6h-.8v-.8h.8v.8Zm0-1.6h-.8v-.8h.8V4Zm0-1.6h-.8v-.8h.8v.8Zm2 3.2h-.8v-.8h.8v.8Zm0-1.6h-.8v-.8h.8V4Zm0-1.6h-.8v-.8h.8v.8Zm2 3.2h-.8v-.8h.8v.8Zm0-1.6h-.8v-.8h.8V4Zm0-1.6h-.8v-.8h.8v.8Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h8v8H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default HotelIcon;
