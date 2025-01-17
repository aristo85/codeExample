import * as React from 'react';
import type {SVGProps} from 'react';
const SvgGlasses = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 24 24" id="glasses">
      <path d="M11 4H0l1.58 15H8V7h2.5l.5-3z" fill="#3d3d3d" />
      <path
        d="M24 14.505c0-2.655-2.215-4.8-4.968-4.858V8.313H9.84v11.625a.751.751 0 00.751.752h7.68a.751.751 0 00.751-.75v-.582C21.785 19.305 24 17.145 24 14.505zm-4.968 3.285v-6.578c1.848.048 3.336 1.505 3.336 3.29 0 1.786-1.488 3.24-3.336 3.288z"
        fill="#3d3d3d"
      />
    </symbol>
    <use href="#glasses" />
  </svg>
);
export default SvgGlasses;
