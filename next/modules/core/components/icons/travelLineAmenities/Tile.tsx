import * as React from 'react';
import type {SVGProps} from 'react';
const SvgTile = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 16 16" id="tile">
      <path
        d="M0 .07v7.407h7.407V.07H0zm.889 6.519V.959h5.63l-5.63 5.63zM8.593.07v7.407H16V.07H8.593zm.888 6.519V.959h5.63l-5.63 5.63zM0 8.663v7.407h7.407V8.663H0zm.889 6.519v-5.63h5.63l-5.63 5.63zm7.704-6.519v7.407H16V8.663H8.593zm.888 6.519v-5.63h5.63l-5.63 5.63z"
        fill="#3d3d3d"
      />
    </symbol>
    <use href="#tile" />
  </svg>
);
export default SvgTile;
