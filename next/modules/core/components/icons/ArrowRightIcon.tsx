import * as React from 'react';
import {SVGProps} from 'react';

type ArrowRightIconProps = {
  color?: 'white' | 'black';
} & SVGProps<SVGSVGElement>;

const ArrowRightIcon = (props: ArrowRightIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <path
      stroke={props.color === 'white' ? '#ffffff' : '#222121'}
      strokeLinecap="round"
      strokeWidth={2}
      d="m7 2 9.293 9.293a1 1 0 0 1 0 1.414L7 22"
    />
  </svg>
);
export default ArrowRightIcon;
