import * as React from 'react';
import type {SVGProps} from 'react';
const SvgIroningBoard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 16 16" id="ironing-board">
      <path
        d="M15.457 2H.593C.267 2 0 2.52 0 2.846v.136C0 3.308 2.934 4 3.259 4h-.271c-.163 0-.297.344-.297.5s.134.5.297.5h3.358c.163 0 .296-.344.296-.5S6.509 4 6.346 4h1.548l1.924 3.056-7.792 6.925a.296.296 0 00.197.519c.07 0 .141-.024.197-.075l7.718-6.86 4.279 6.798a.298.298 0 00.409.092.296.296 0 00.093-.408l-4.332-6.881L14.146 4h1.311c.326 0 .543-.582.543-.908v-.246C16 2.52 15.783 2 15.457 2zm-5.19 4.657L8.594 4h4.661l-2.988 2.657z"
        fill="#3d3d3d"
      />
    </symbol>
    <use href="#ironing-board" />
  </svg>
);
export default SvgIroningBoard;
