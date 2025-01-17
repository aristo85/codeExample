import * as React from 'react';
import type {SVGProps} from 'react';
const SvgPrivateRoomEntrance = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 16 16" id="private-room-entrance">
      <path
        fill="#3d3d3d"
        d="M2 0v16h11V0H2zm9.222 14.223L6.777 12.74V3.259l4.444-1.481v12.445zM6.924 8a.46.46 0 01.459-.459c.254 0 1.315.206 1.315.459s-1.06.459-1.315.459A.46.46 0 016.924 8z"
      />
    </symbol>
    <use href="#private-room-entrance" />
  </svg>
);
export default SvgPrivateRoomEntrance;
