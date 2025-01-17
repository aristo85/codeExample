import * as React from 'react';
import type {SVGProps} from 'react';
const SvgHeating = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 16 16" id="heating">
      <path
        d="M15.111 2.37h-1.186v.593h-.593v-.716l-.927-1.186V0h-.813v1.062l-.926 1.186v.716h-.89v-.717l-.924-1.185V0h-.815v1.062l-.926 1.185v.716h-.889v-.716l-.927-1.185V0h-.813v1.062l-.926 1.185v.716h-.889v-.716L1.74 1.062V0H.926v1.062L0 2.247v11.507l.926 1.186V16h.814v-1.062l.927-1.186v-.716h.889v.716l.926 1.186V16h.813v-1.062l.927-1.186v-.716h.889v.716l.926 1.186V16h.814v-1.062l.926-1.186v-.716h.89v.716l.926 1.186V16h.813v-1.062l.927-1.186v-.716h.593v.593h1.186v-.593H16V11.85h-.889v-.593h-1.186v.593h-.593V4.148h.593v.593h1.186v-.593H16V2.963h-.889V2.37zM2.667 11.852V4.148h.889v7.703h-.889zm3.555 0V4.148h.889v7.703h-.889zm4.445 0h-.89V4.148h.89v7.704zM16 1.481v.593h-2.074v-.593H16zm-2.074 8.889H16v.593h-2.074v-.593z"
        fill="#3d3d3d"
      />
    </symbol>
    <use href="#heating" />
  </svg>
);
export default SvgHeating;
