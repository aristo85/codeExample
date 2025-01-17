import * as React from 'react';
import type {SVGProps} from 'react';
const SvgLaptop = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 16 11.952" id="laptop">
      <path
        d="M14.849 0H1.15a.256.256 0 00-.254.255v9.05h14.206V.255A.254.254 0 0014.849 0zm-.635 8.416H1.785V.89h12.429v7.526zm.897 1.462H0v1.186c0 .488.4.889.889.889h14.223c.489 0 .889-.4.889-.889V9.878h-.89zM2.378 11.211H.896v-.593h1.481v.593zm.889 0h-.296v-.593h.296v.593z"
        fill="#3d3d3d"
      />
    </symbol>
    <use href="#laptop" />
  </svg>
);
export default SvgLaptop;
