import * as React from 'react';
import type {SVGProps} from 'react';
const SvgParkView = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 24 24" id="park-view">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.314 2.723A1.843 1.843 0 0016.849 2a1.855 1.855 0 00-1.841 2.034 3.5 3.5 0 101.94 6.654l.052.048V19h1v-7.67a3 3 0 003.437-4.58 2.625 2.625 0 00-3.123-4.026zM15 13H7v2h1v1H6v2h1v1h1.5v-1h5v1H15v-1h1v-2h-2v-1h1v-2zm-2.5 2v1h-3v-1h3z"
        fill="#3d3d3d"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.91 1.09H4.363v19.637h18.545V1.091zM2.181 0v21.818L0 24h21.818L24 21.818V0H2.182z"
        fill="#3d3d3d"
      />
    </symbol>
    <use href="#park-view" />
  </svg>
);
export default SvgParkView;
