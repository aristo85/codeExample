import * as React from 'react';
import type {SVGProps} from 'react';
const SvgRadio = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 16 15.789" id="radio">
      <path
        d="M15.407 5.419H2.568v-.405l6.553-2.386-.05-.136 3.84-1.398.112.309.629-.229L13.226 0l-.63.229.112.309-3.839 1.397-.05-.136-6.471 2.354a.583.583 0 00-.372-.141h-.495a.594.594 0 00-.593.593v.814H.593A.595.595 0 000 6.012v9.185c0 .326.267.593.593.593h14.814a.595.595 0 00.593-.593V6.012a.595.595 0 00-.593-.593zM1.186 7.197h13.629v1.777H1.186V7.197zm8.888 7.271H1.186v-.593h8.889v.593zm0-1.78H1.186v-.593h8.889v.593zm0-1.782H1.186v-.592h8.889v.592zm2.963 3.562a2.074 2.074 0 110-4.148 2.074 2.074 0 010 4.148zm1.482-2.074a1.48 1.48 0 11-2.962 0 1.48 1.48 0 012.962 0z"
        fill="#3d3d3d"
      />
    </symbol>
    <use href="#radio" />
  </svg>
);
export default SvgRadio;
