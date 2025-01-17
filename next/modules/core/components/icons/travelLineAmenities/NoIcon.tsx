import * as React from 'react';
import type {SVGProps} from 'react';
const SvgNoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 16 16" id="no-icon">
      <path
        d="M15.632 5.599A8 8 0 118 0c1.956 0 3.747.705 5.137 1.871L11.998 3.01A6.369 6.369 0 008 1.6 6.407 6.407 0 001.6 8c0 3.529 2.871 6.4 6.4 6.4A6.407 6.407 0 0014.399 8c0-.366-.038-.722-.097-1.072l1.33-1.329zm.085-1.782l-1.414-1.414L7.514 9.19 3.837 5.514 2.423 6.929l5.091 5.091 1.414-1.413v-.001l6.789-6.789z"
        fill="#3d3d3d"
      />
    </symbol>
    <use href="#no-icon" />
  </svg>
);
export default SvgNoIcon;
