import * as React from 'react';
import type {SVGProps} from 'react';
const SvgTable = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 16 12" id="table">
      <path
        d="M3.291 5.645h.947v2.98l-.947.205V5.645zm8.471 2.98l.948.205V5.645h-.948v2.98zM16 3.928L13.765 0H2.234L0 3.928v1.25h1.009V12h1.729V5.178h10.523V12h1.729V5.178H16v-1.25z"
        fill="#3d3d3d"
      />
    </symbol>
    <use href="#table" />
  </svg>
);
export default SvgTable;
