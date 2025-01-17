import * as React from 'react';
import type {SVGProps} from 'react';
const SvgNewspaper = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 16 16" id="newspaper">
      <path
        d="M12.333 2.963V0H0v13.926C0 15.066.834 16 1.852 16h12.334l-.019-.002c1.01-.012 1.833-.938 1.833-2.072V2.963h-3.667zM1.852 15.407c-.693 0-1.259-.664-1.259-1.481V.593H11.74v13.333c0 .548.152 1.058.413 1.481H1.852zM1.481 1.481h9.481v1.777H1.481V1.481zm3.556 9.482H1.481V5.926h3.556v5.037zM1.481 4.444h9.481v.593H1.481v-.593zm0 7.408h9.481v.593H1.481v-.593zm4.148-5.926h5.334v.593H5.629v-.593zm0 1.481h5.334V8H5.629v-.593zm0 1.482h5.334v.593H5.629v-.593zM8 10.37v.593H5.629v-.593H8z"
        fill="#3d3d3d"
      />
    </symbol>
    <use href="#newspaper" />
  </svg>
);
export default SvgNewspaper;
