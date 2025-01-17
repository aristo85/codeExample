import * as React from 'react';
import {SVGProps} from 'react';
const PeopleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={8}
    fill="none"
    {...props}>
    <g clipPath="url(#a)">
      <path
        fill="#8DAEC1"
        d="M4.4 4.451c.884 0 1.6.737 1.6 1.647v.618a.609.609 0 01-.6.617H.6a.609.609 0 01-.6-.617v-.618c0-.91.716-1.647 1.6-1.647h2.8zm2.4 0c.663 0 1.2.553 1.2 1.235v.618a.609.609 0 01-.6.618h-.6v-.824c0-.673-.314-1.271-.8-1.647h.8zM3 .333c.994 0 1.8.83 1.8 1.853C4.8 3.21 3.994 4.04 3 4.04s-1.8-.83-1.8-1.853C1.2 1.163 2.006.333 3 .333zM6.4 1.57c.663 0 1.2.553 1.2 1.235S7.063 4.04 6.4 4.04c-.663 0-1.2-.553-1.2-1.235S5.737 1.57 6.4 1.57z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h8v8H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default PeopleIcon;
