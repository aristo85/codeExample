import * as React from 'react';
import type {SVGProps} from 'react';
const SvgScales = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 16 16" id="scales">
      <path
        d="M0 5.926h16v8.889c0 .652-.533 1.185-1.186 1.185H1.186A1.189 1.189 0 010 14.814V5.926zm16-4.74v4.148H0V1.186C0 .533.533 0 1.186 0h13.629C15.467 0 16 .533 16 1.186zm-5.285.644zm-5.613.186zm5.687 2.729l-.004-.005c0-.077.856-.215 1.183-.266a4.033 4.033 0 00-.979-2.35c-.263.193-.965.7-1.019.646-.055-.055.454-.76.646-1.021a3.93 3.93 0 00-2.35-.982C8.217 1.09 8.077 1.955 8 1.955S7.783 1.09 7.734.768a3.928 3.928 0 00-2.35.982c.192.261.701.966.647 1.021-.055.055-.756-.452-1.02-.646a4.03 4.03 0 00-.979 2.35c.325.05 1.183.188 1.183.266 0 .001-.004.003-.004.005h5.578zM8 3.49c-.217 0-.41.07-.587.167-.501-.358-1.28-.897-1.353-.825-.073.074.47.859.827 1.359a1.262 1.262 0 00-.133.507h2.492A1.247 1.247 0 008 3.49z"
        fill="#3d3d3d"
      />
    </symbol>
    <use href="#scales" />
  </svg>
);
export default SvgScales;
