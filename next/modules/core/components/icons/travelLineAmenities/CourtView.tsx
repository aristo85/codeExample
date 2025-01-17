import * as React from 'react';
import type {SVGProps} from 'react';
const SvgCourtView = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 24 24" id="court-view">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.91 1.09H4.363v19.637h18.545V1.091zM2.181 0v21.818L0 24h21.818L24 21.818V0H2.182z"
        fill="#3d3d3d"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.727 3.273L9.818 9.818v1.091h3.273v7.636h2.182v-3.272h2.181v3.272h1.091v-3.272h2.182v-1.091h-2.182v-3.273h2.182V3.273zm-5.454 7.636h2.181v3.273h-2.181v-3.273z"
        fill="#3d3d3d"
      />
    </symbol>
    <use href="#court-view" />
  </svg>
);
export default SvgCourtView;
