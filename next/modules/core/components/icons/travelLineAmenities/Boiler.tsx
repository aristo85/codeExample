import * as React from 'react';
import type {SVGProps} from 'react';
const SvgBoiler = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 16 16" id="boiler">
      <path
        d="M13 12.412l-.278.511s-.537 1.306-2.695 1.846V16h-1v-1.059A9.281 9.281 0 018 15c-.358 0-.682-.022-.99-.055V16h-1v-1.222c-2.19-.534-2.732-1.855-2.732-1.855L3 12.412c3.923.452 6.076.452 10 0zm0-10.038v9.442c-3.928.457-6.072.457-10 0V2.374S4.101 0 8 0s5 2.374 5 2.374zM9.111 7.708S8.915 7.114 8 7.114s-1.111.594-1.111.594v3.264h2.222V7.708zm0-5.803S8.915 1.608 8 1.608s-1.111.297-1.111.297v.296h2.222v-.296z"
        fill="#3d3d3d"
      />
    </symbol>
    <use href="#boiler" />
  </svg>
);
export default SvgBoiler;
