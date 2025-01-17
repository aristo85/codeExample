import * as React from 'react';
import type {SVGProps} from 'react';
const SvgSlippers = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 16 16" id="slippers">
      <path
        d="M3.383.937C.332.937-.184 4.172.05 6.745.389 10.457.941 16 3.664 16c2.628 0 2.355-2.617 2.064-4.646-.415-2.904.323-3.584.689-6.1C6.715 3.064 5.213.937 3.383.937zM4.74 14.934c-.081.088-.33.356-1.076.356-1.448 0-2.146-2.815-2.521-5.47C2.28 6.998 4.008 6.868 4.87 9.284c-.035.598-.01 1.29.116 2.166.139.974.399 2.786-.246 3.484zM3.301 2.482c-.807 0-1.573.228-2.27.635a2.95 2.95 0 01.53-.856c.447-.491 1.043-.73 1.822-.73.582 0 1.159.292 1.623.824.186.213.34.451.468.707a4.439 4.439 0 00-2.173-.58zm6.308 1.266c-.085 2.54.52 3.341-.406 6.126-.646 1.944-1.379 4.471 1.206 4.938 2.68.483 4.208-4.873 5.201-8.468.688-2.488.754-5.765-2.247-6.307-1.801-.324-3.657 1.503-3.754 3.711zm.309 6.352c.279-.84.428-1.517.499-2.11 1.276-2.226 2.106-2.192 3.571 1.188-.841 2.545-2.027 5.192-3.453 4.936-.733-.132-.931-.441-.994-.542-.511-.801.066-2.539.377-3.472zm1.009-8.342c.172-.228.365-.436.586-.613.552-.439 1.171-.625 1.745-.521.765.138 1.309.479 1.663 1.041.166.263.288.579.368.938a4.46 4.46 0 00-2.121-1.028 4.423 4.423 0 00-2.241.183z"
        fill="#3d3d3d"
      />
    </symbol>
    <use href="#slippers" />
  </svg>
);
export default SvgSlippers;
