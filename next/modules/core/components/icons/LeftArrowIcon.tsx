import * as React from 'react';
import {SVGProps} from 'react';

const LeftArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={20}
    fill="none"
    {...props}>
    <path
      stroke={props.stroke ? props.stroke : '#222121'}
      strokeLinecap="round"
      strokeWidth={2}
      d="m1 1 7.293 7.293a1 1 0 0 1 0 1.414L1 17"
    />
  </svg>
);
export default LeftArrowIcon;
