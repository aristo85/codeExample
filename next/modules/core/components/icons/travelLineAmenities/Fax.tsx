import * as React from 'react';
import type {SVGProps} from 'react';
const SvgFax = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 16 16" id="fax">
      <path
        d="M6.549 11.434V16h6.408v-4.566H6.549zm5.815 3.972H7.142v-3.38h5.223v3.38zm-4.688-1.875v-.594h4.153v.594H7.676zm0 1.187v-.594h4.153v.594H7.676zM6.549 0v4.804h6.408V0H6.549zm5.815 4.211H7.142V.594h5.223v3.617zm2.621 1.227H3.559v7.563h2.039V10.46h8.31v2.541h1.078c.56 0 1.015-.454 1.015-1.014V6.453a1.018 1.018 0 00-1.016-1.015zm-1.064 2.517h-2.988V6.941h2.988v1.014zM2.966 14.138a.596.596 0 01-.593.594H.593A.596.596 0 010 14.138V4.35c0-.326.267-.594.593-.594h1.78c.326 0 .593.268.593.594v9.788z"
        fill="#3d3d3d"
      />
    </symbol>
    <use href="#fax" />
  </svg>
);
export default SvgFax;
