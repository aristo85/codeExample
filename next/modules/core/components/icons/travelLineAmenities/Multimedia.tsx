import * as React from 'react';
import type {SVGProps} from 'react';
const SvgMultimedia = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 16 16" id="multimedia">
      <path
        d="M0 8a8 8 0 1116 0A8 8 0 010 8zm5.668 3.848L12.333 8 5.668 4.152v7.696z"
        fill="#3d3d3d"
      />
    </symbol>
    <use href="#multimedia" />
  </svg>
);
export default SvgMultimedia;
