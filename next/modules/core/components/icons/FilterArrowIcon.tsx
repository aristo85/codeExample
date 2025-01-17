import * as React from 'react';
import {SVGProps} from 'react';
const FilterArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="2 2 20 20"
    fill="none"
    {...props}>
    <path fill="#fff" d="M13 6.5h-2v8H8l4 4 4-4h-3v-8Z" />
  </svg>
);
export default FilterArrowIcon;
