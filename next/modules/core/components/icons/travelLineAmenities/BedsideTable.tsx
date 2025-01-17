import * as React from 'react';
import type {SVGProps} from 'react';
const SvgBedsideTable = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 12 16" id="bedside-table">
      <path
        d="M0 0v14.021h12V0H0zm10.3 1.669v5.007H1.701V1.669H10.3zM1.701 12.352V7.344H10.3v5.008H1.701zM.68 14.664h1.701V16H.68v-1.336zm8.939 0h1.7V16h-1.7v-1.336zM6.989 3.266H5.011v-.668H6.99v.668zM5.011 8.314H6.99v.668H5.011v-.668z"
        fill="#3d3d3d"
      />
    </symbol>
    <use href="#bedside-table" />
  </svg>
);
export default SvgBedsideTable;
