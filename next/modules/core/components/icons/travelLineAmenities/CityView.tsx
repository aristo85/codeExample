import * as React from 'react';
import type {SVGProps} from 'react';
const SvgCityView = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 24 24" id="city-view">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.91 1.09H4.363v19.637h18.545V1.091zM2.181 0v21.818L0 24h21.818L24 21.818V0H2.182z"
        fill="#3d3d3d"
      />
      <path
        d="M20.727 14.182v4.364h-5.454v-4.364h1.09V13.09h-2.181v5.455h-3.273v-3.273l2.182-2.182H12l-2.182 2.182v3.273H6.545V12s.546-.546 1.091-.546c.546 0 1.091.546 1.091.546v2.182l1.091-1.091V8.18L12 9.819V12h1.09V8.182l1.092-2.727 1.09 2.727v1.636h2.183v4.364h1.09V12h2.182v2.182z"
        fill="#3d3d3d"
      />
    </symbol>
    <use href="#city-view" />
  </svg>
);
export default SvgCityView;
