import * as React from 'react';
import {SVGProps} from 'react';
const DefaultTableSortingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="2 2 20 20"
    fill="none"
    {...props}>
    <path fill="#fff" d="m12 18.5 4-4H8l4 4ZM16 10.5l-4-4-4 4h8Z" />
  </svg>
);
export default DefaultTableSortingIcon;
