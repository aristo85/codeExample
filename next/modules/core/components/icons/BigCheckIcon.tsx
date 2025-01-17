import * as React from 'react';
import {SVGProps} from 'react';

function BigCheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={157}
      height={157}
      viewBox={'0 0 157 157'}
      fill="none"
      {...props}>
      <g clipPath="url(#big-check-icon)">
        <circle cx={78.5} cy={78.5} r={78} fill="#C6E1F3" />
        <path
          stroke="#8DAEC1"
          strokeLinecap="square"
          strokeWidth={15.6}
          d="M52.175 84.53l18.404 18.345 37.171-37.05"
        />
      </g>
      <defs>
        <clipPath id="big-check-icon">
          <path fill="#fff" d="M.5.5h156v156H.5z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default BigCheckIcon;
