import * as React from 'react';
import {SVGProps} from 'react';

const RandomServiceIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <path
      stroke={props.stroke ?? 'none'}
      fill={props.fill ?? '#222121'}
      strokeWidth={props.strokeWidth || 1}
      d="M20.859 9.46a.372.372 0 0 1 .467.265 9.6 9.6 0 1 1-3.723-5.52.372.372 0 0 1 .07.533.397.397 0 0 1-.543.072 8.832 8.832 0 1 0 3.458 5.127.397.397 0 0 1 .271-.477Z"
    />
    <path
      stroke={props.stroke ?? 'none'}
      strokeWidth={props.strokeWidth || 1}
      fill={props.fill ?? '#000'}
      fillRule="evenodd"
      d="M21.855 4.273a.384.384 0 0 1 .032.542L12.212 15.67a.624.624 0 0 1-.896.037l-4.86-4.629a.384.384 0 0 1 .529-.556l4.752 4.526 9.576-10.744a.384.384 0 0 1 .543-.03Z"
      clipRule="evenodd"
    />
  </svg>
);

export default RandomServiceIcon;
