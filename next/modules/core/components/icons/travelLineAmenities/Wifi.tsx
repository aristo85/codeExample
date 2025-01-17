import * as React from 'react';
import type {SVGProps} from 'react';
const SvgWifi = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 15 11.194" id="wifi">
      <path
        d="M15 3.267C13.067 1.244 10.43 0 7.507 0 4.585 0 1.933 1.244 0 3.282L1.424 4.78a8.255 8.255 0 016.083-2.667c2.368 0 4.526 1.004 6.07 2.652L15 3.267zM2.502 5.919l1.424 1.499c.914-.96 2.173-1.559 3.581-1.559 1.394 0 2.653.585 3.567 1.544l1.424-1.499c-1.29-1.334-3.042-2.173-4.99-2.173-1.964 0-3.717.84-5.006 2.188zm2.533 2.682l2.458 2.593 2.472-2.608c-.63-.659-1.483-1.079-2.458-1.079a3.39 3.39 0 00-2.472 1.094z"
        fill="#3d3d3d"
      />
    </symbol>
    <use href="#wifi" />
  </svg>
);
export default SvgWifi;
