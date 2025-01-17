import * as React from 'react';
import type {SVGProps} from 'react';
const SvgDishwasher = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 16 16" id="dishwasher">
      <path
        d="M0 2.684V16h16V2.684H0zm11.848 1.609H4.152v-.636h7.695v.636zM16 2.385V0H0v2.385h16zM6.515.77h2.972v.895H6.515V.77z"
        fill="#3d3d3d"
      />
    </symbol>
    <use href="#dishwasher" />
  </svg>
);
export default SvgDishwasher;
