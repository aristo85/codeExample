import * as React from 'react';
import type {SVGProps} from 'react';
const SvgNoSmoking = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 16 16" id="no-smoking">
      <path
        d="M8 0a8 8 0 100 16A8 8 0 008 0zm6.814 8a6.785 6.785 0 01-1.578 4.354l-1.842-1.842h.206V8.51H9.393L3.646 2.763A6.775 6.775 0 018 1.185 6.822 6.822 0 0114.814 8zM1.185 8c0-1.678.612-3.213 1.621-4.401L7.717 8.51H2.963v2.002h6.756l2.682 2.682a6.776 6.776 0 01-4.4 1.621C4.242 14.814 1.185 11.757 1.185 8zm11.027.51h1.095v2.002h-1.095V8.51zM9.504 2.699c-.225 1.818 1.577 2.094 2.708 2.761.852.501 1.581 1.318.698 2.646l-.058.115c.778-2.059-4.566-2.004-3.348-5.522z"
        fill="#3d3d3d"
      />
    </symbol>
    <use href="#no-smoking" />
  </svg>
);
export default SvgNoSmoking;
