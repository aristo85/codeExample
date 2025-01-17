import * as React from 'react';
import type {SVGProps} from 'react';
const SvgPoof = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 16 15.359" id="poof">
      <path
        d="M5.12 15.359H2.88V14.08h2.24v1.279zm8-1.279h-2.24v1.279h2.24V14.08zM1.6 11.84c0 .88.721 1.6 1.601 1.6h9.6c.88 0 1.601-.72 1.601-1.6v-6.4H1.6v6.4zM16 2.24c0-.881-.72-1.601-1.6-1.601 0 0-1.921-.64-6.428-.64S1.6.64 1.6.64C.721.64 0 1.359 0 2.24v.959C0 4.08.721 4.8 1.6 4.8h12.8c.88 0 1.6-.72 1.6-1.601V2.24z"
        fill="#3d3d3d"
      />
    </symbol>
    <use href="#poof" />
  </svg>
);
export default SvgPoof;
