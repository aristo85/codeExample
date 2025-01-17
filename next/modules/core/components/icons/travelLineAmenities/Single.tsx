import * as React from 'react';
import type {SVGProps} from 'react';
const SvgSingle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 15 16.304" id="single">
      <path
        d="M14.984 2.707C14.967 1.223 13.76 0 12.26 0H2.755C1.255 0 .033 1.223.033 2.707H0v13.597h1.402v-1.32h12.261v1.32h1.32zM15 10.859H.016V9.505H.8v-.587c0-.847.685-1.532 1.549-1.532h10.32c.848 0 1.55.685 1.55 1.532v.587H15zM4.109 4.337c0-.424.358-.783.782-.783h5.234c.44 0 .783.359.783.783v2.495h-6.8V4.337z"
        fill="#3d3d3d"
      />
    </symbol>
    <use href="#single" />
  </svg>
);
export default SvgSingle;
