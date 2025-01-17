import * as React from 'react';
import type {SVGProps} from 'react';
const SvgDouble = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 15 11.224" id="double">
      <path
        d="M14.985 1.873C14.985.84 14.145 0 13.112 0H1.903C.87 0 .03.84.03 1.873H0v9.35h.974v-.898h13.112v.899h.899zM15 7.507H.015v-.914h.54V6.22c0-.6.464-1.08 1.063-1.08h11.779c.599 0 1.064.48 1.064 1.08v.374H15zm-6.563-4.51c0-.3.24-.54.539-.54h2.667c.3 0 .54.24.54.54V4.72H8.437V2.997zm-5.59 0c0-.3.225-.54.54-.54h2.652a.54.54 0 01.554.54V4.72H2.847V2.997z"
        fill="#3d3d3d"
      />
    </symbol>
    <use href="#double" />
  </svg>
);
export default SvgDouble;
