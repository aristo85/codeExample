import * as React from 'react';
import type {SVGProps} from 'react';
const SvgSmartHouse = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 24 24" id="smart-house">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.555 3.168a1 1 0 00-1.11 0l-9.554 6.37L3 11.202V20h2V9.869l7-4.667 7 4.666V20h2v-8.798l1.109-1.664-9.555-6.37zm3.851 10.7l.332-.348.938-1.082C16.218 10.936 14.223 10 12.005 10c-2.21 0-4.21.93-5.669 2.435L7.45 13.72l.144.149C8.707 12.695 10.35 12 12.004 12c1.655 0 3.287.702 4.402 1.869zm-6.69 2.465l-1.31-1.511a5.541 5.541 0 013.599-1.334c1.378 0 2.625.513 3.602 1.338l-1.31 1.511a3.562 3.562 0 00-2.292-.85c-.86 0-1.65.311-2.29.846zm3.713 1.006l-1.421 1.64-1.423-1.642a3.201 3.201 0 012.844.002z"
        fill="#3d3d3d"
      />
    </symbol>
    <use href="#smart-house" />
  </svg>
);
export default SvgSmartHouse;
