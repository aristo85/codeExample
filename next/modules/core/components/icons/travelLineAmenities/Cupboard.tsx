import * as React from 'react';
import type {SVGProps} from 'react';
const SvgCupboard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 13 16" id="cupboard">
      <path
        d="M0 1.916V16h6.205V1.916H0zm5.602 7.577h-.887V7.424h.887v2.069zm1.193-7.577V16H13V1.916H6.795zm1.474 7.577h-.886V7.424h.886v2.069zm4.73-8.014H0V0h12.999v1.479z"
        fill="#3d3d3d"
      />
    </symbol>
    <use href="#cupboard" />
  </svg>
);
export default SvgCupboard;
