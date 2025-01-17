import * as React from 'react';
import type {SVGProps} from 'react';
const SvgRefrigerator = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 16 16" id="refrigerator">
      <path
        d="M11.773.02H4.294c-.101 0-.263.16-.263.262v9.174H12V.282c0-.102-.125-.262-.227-.262zM5.479 8.668c0 .145-.098.264-.219.264-.12 0-.219-.119-.219-.264v-1.05c0-.145.099-1.313.219-1.313.121 0 .219 1.169.219 1.313v1.05zm3.675-7.19H6.792V1.02h2.362v.458zM4.031 9.719v6.038c0 .102.162.263.263.263h7.443c.103 0 .263-.161.263-.263V9.719H4.031zm1.448 1.575c0 .144-.098 1.313-.219 1.313-.12 0-.219-1.169-.219-1.313v-.788c0-.144.099-.263.219-.263.121 0 .219.119.219.263v.788z"
        fill="#3d3d3d"
      />
    </symbol>
    <use href="#refrigerator" />
  </svg>
);
export default SvgRefrigerator;
