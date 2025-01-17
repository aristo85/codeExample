import * as React from 'react';
import type {SVGProps} from 'react';
const SvgChildRollaway = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 16 16" id="child-rollaway">
      <path
        d="M14.519 1.667V3.74H1.481V1.667H0V15h1.481v-2.963h13.037V15H16V1.667h-1.481zM5.653 4.629h2.098v5.333H5.653V4.629zm-.592 5.334H2.963V4.629h2.098v5.334zm3.283-5.334h2.098v5.333H8.344V4.629zm2.689 0h2.098v5.333h-2.098V4.629zm-9.552 0h.889v5.333h-.889V4.629zm12.243 5.334V4.629h.795v5.333h-.795z"
        fill="#3d3d3d"
      />
    </symbol>
    <use href="#child-rollaway" />
  </svg>
);
export default SvgChildRollaway;
