import * as React from 'react';
import type {SVGProps} from 'react';
const SvgPoolView = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 24 24" id="pool-view">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.91 1.09H4.363v19.637h18.545V1.091zM2.181 0v21.818L0 24h21.818L24 21.818V0H2.182z"
        fill="#3d3d3d"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.67 18.873c-.981.436-1.963.763-2.945.763-1.2 0-2.4-.545-3.6-1.09-1.2-.546-2.4-1.091-3.6-1.091-1.418 0-2.727.327-4.036.872v-2.182c.763-.327 1.418-.545 2.181-.654V6.545c0-1.854 1.419-3.272 3.273-3.272 1.418 0 2.618.872 3.055 2.182h-3.055c-.654 0-1.09.436-1.09 1.09v1.091h5.454v-1.09c0-1.855 1.418-3.273 3.273-3.273 1.418 0 2.618.872 3.054 2.182H18.58c-.655 0-1.091.436-1.091 1.09v10.91a17.299 17.299 0 002.181-.764v2.182zM9.853 9.818h5.455V12H9.852V9.818zm5.455 4.364H9.852v1.09c1.103.13 2.166.607 3.237 1.087.731.327 1.466.656 2.218.877v-3.054z"
        fill="#3d3d3d"
      />
    </symbol>
    <use href="#pool-view" />
  </svg>
);
export default SvgPoolView;
