import * as React from 'react';
import type {SVGProps} from 'react';
const SvgSmoking = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 16 16" id="smoking">
      <path
        d="M8 1.185A6.822 6.822 0 0114.814 8c0 3.757-3.057 6.814-6.814 6.814S1.185 11.757 1.185 8A6.822 6.822 0 018 1.185M8 0a8 8 0 100 16A8 8 0 008 0zm4.212 8.51h1.095v2.002h-1.095V8.51zm-9.249 2.002h8.638V8.51H2.963v2.002zm9.947-2.407c.883-1.327.153-2.145-.698-2.646-1.131-.667-2.933-.943-2.708-2.761-1.218 3.518 4.126 3.463 3.349 5.521"
        fill="#3d3d3d"
      />
    </symbol>
    <use href="#smoking" />
  </svg>
);
export default SvgSmoking;
