import * as React from 'react';
import type {SVGProps} from 'react';
const SvgRiverView = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 24 24" id="river-view">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.91 1.09H4.363v19.637h18.545V1.091zM2.181 0v21.818L0 24h21.818L24 21.818V0H2.182z"
        fill="#3d3d3d"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.727 6.545c-4.363.546 2.578 4.93-4.909 6.546C10.91 14.18 12 18.546 12 18.546H6.545v-3.273c2.728-3.819 5.44-2.879 8.728-3.819 3.88-1.108-3.818-4.909 5.454-6v1.091z"
        fill="#3d3d3d"
      />
    </symbol>
    <use href="#river-view" />
  </svg>
);
export default SvgRiverView;
