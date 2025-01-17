import * as React from 'react';
import type {SVGProps} from 'react';
const SvgNoWindow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 24 24" id="no-window">
      <path
        d="M17.605 6.363l-3.272 3.272v-.944l2.341-2.342h.917l.014.014zM14.333 12.967v-.942l3.27-3.272v.943l-3.27 3.271z"
        fill="#3d3d3d"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 20.586l.707.707-1.414 1.414-19-19 1.414-1.414.707.707H21v17.586zm-2-2V5h-6v7.587l6 6zm-8-8V4.999H5.413l2.32 2.32.97-.97h.918l.012.014L8.205 7.79l1.194 1.194.234-.235v.469L11 10.586z"
        fill="#3d3d3d"
      />
      <path d="M3 21V8.242l2 2V19h6v-2.757l2 2V19h.757l2 2H3z" fill="#3d3d3d" />
    </symbol>
    <use href="#no-window" />
  </svg>
);
export default SvgNoWindow;
