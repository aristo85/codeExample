import * as React from 'react';
import {SVGProps} from 'react';
const MinusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}>
    <path fill="#0071C2" d="M13.5 8.5h-11a.5.5 0 1 1 0-1h11a.5.5 0 0 1 0 1Z" />
  </svg>
);
export default MinusIcon;
