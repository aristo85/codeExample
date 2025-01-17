import * as React from 'react';
import type {SVGProps} from 'react';
const SvgCouch = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 24 14" id="couch">
      <path
        d="M4.767 6.91V5.5c0-1.166-.608-2.182-1.503-2.706C3.436 1.224 4.688 0 6.204 0h11.59c1.516 0 2.768 1.224 2.94 2.794-.894.524-1.503 1.54-1.503 2.705v1.41H4.767z"
        fill="#3d3d3d"
      />
      <path
        d="M20.242 5.5c0-1.107.843-2.007 1.878-2.007 1.036 0 1.878.9 1.88 2.006v4.495C24 11.1 23.157 12 22.122 12H21v2h-2v-2H5v2H3v-2H1.878C.843 12 0 11.1 0 9.994V5.5c0-1.106.843-2.006 1.878-2.006 1.036 0 1.879.9 1.879 2.006v2.489h16.485V5.499z"
        fill="#3d3d3d"
      />
    </symbol>
    <use href="#couch" />
  </svg>
);
export default SvgCouch;
