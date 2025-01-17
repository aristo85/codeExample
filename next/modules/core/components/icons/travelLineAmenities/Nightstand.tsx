import * as React from 'react';
import type {SVGProps} from 'react';
const SvgNightstand = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 24 24" id="nightstand">
      <path
        d="M0 0h24v3h-2v19h-2v2h-2v-2H6v2H4v-2H2V3H0V0zm20 3H4v8h16V3zM4 13v7h16v-7H4zm7-6a1 1 0 112 0 1 1 0 01-2 0zm1 8a1 1 0 100 2 1 1 0 000-2z"
        fill="#3d3d3d"
      />
    </symbol>
    <use href="#nightstand" />
  </svg>
);
export default SvgNightstand;
