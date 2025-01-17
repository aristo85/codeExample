import * as React from 'react';
import type {SVGProps} from 'react';
const SvgWindowLeaf = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 16 16" id="window-leaf">
      <path
        fill="#3d3d3d"
        d="M0 0v16h16V0H0zm7.111 14.222H1.778V1.777h5.333v12.445zm7.112 0L10.37 12.74V3.259l3.853-1.481v12.444zM5.896 2.989L2.988 5.897v-.838L5.07 2.977h.815l.011.012zm0 2.963L2.988 8.86v-.838l2.908-2.908v.838z"
      />
    </symbol>
    <use href="#window-leaf" />
  </svg>
);
export default SvgWindowLeaf;
