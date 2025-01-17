import * as React from 'react';
import type {SVGProps} from 'react';
const SvgMountainView = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 24 24" id="mountain-view">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.91 1.09H4.363v19.637h18.545V1.091zM2.181 0v21.818L0 24h21.818L24 21.818V0H2.182z"
        fill="#3d3d3d"
      />
      <path
        d="M9.818 10.364L6.545 13.09v5.455h14.182v-2.182l-4.363-2.728-3.273 3.273h-1.636l3.818-3.818L16.363 12l4.364 2.727V9.818l-3.272-2.182L13.09 12l-2.182 2.182-1.09-.546L12 11.455l-2.182-1.091z"
        fill="#3d3d3d"
      />
    </symbol>
    <use href="#mountain-view" />
  </svg>
);
export default SvgMountainView;
