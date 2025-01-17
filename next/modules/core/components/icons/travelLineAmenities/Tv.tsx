import * as React from 'react';
import type {SVGProps} from 'react';
const SvgTv = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 16 16" id="tv">
      <path
        d="M16 13.055V2.02H0v11.035h6.896v1.104H4.138l-.827.826h9.655l-.828-.826H9.379v-1.104H16zm-1-.785h-1v-.484h1v.484zM1 3.02h14v8H1v-8z"
        fill="#3d3d3d"
      />
    </symbol>
    <use href="#tv" />
  </svg>
);
export default SvgTv;
