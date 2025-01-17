import * as React from 'react';
import type {SVGProps} from 'react';
const SvgSecuritySystem = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 14 16" id="security-system">
      <path
        d="M0 0v10.074C0 12.421 6.492 16 7.021 16 7.55 16 14 12.421 14 10.074V0H0zm6.801 10.643L2.859 6.807l1.288-1.258L6.8 8.131l4.417-4.332 1.292 1.258-5.708 5.586z"
        fill="#3d3d3d"
      />
    </symbol>
    <use href="#security-system" />
  </svg>
);
export default SvgSecuritySystem;
