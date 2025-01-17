import * as React from 'react';
import type {SVGProps} from 'react';
const SvgPanoramicWindows = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 24 24" id="panoramic-windows">
      <path
        d="M17.271 7.013L14 10.285v-.943L16.342 7h.917l.012.013zM14 12.676L17.271 9.4v.946L14 13.618v-.942zM7 8.285l3.271-3.272L10.26 5h-.917L7 7.342v.943zM10.271 7.4L7 10.677v.942l3.271-3.271V7.4z"
        fill="#3d3d3d"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 2v20h16V2H4zm14 2h-5v10h5V4zm0 12h-5v4h5v-4zm-7-2V4H6v10h5zm-5 2h5v4H6v-4z"
        fill="#3d3d3d"
      />
    </symbol>
    <use href="#panoramic-windows" />
  </svg>
);
export default SvgPanoramicWindows;
