import * as React from 'react';
import {SVGProps} from 'react';

const TVIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    fill="none"
    {...props}>
    <path
      fill="#000"
      d="M53 83c-1.1 0-2 .67-2 1.5s.9 1.5 2 1.5 2-.67 2-1.5-.9-1.5-2-1.5z"
    />
    <path
      fill="#000"
      d="M84.6 7H15.4A8.4 8.4 0 007 15.4v55.76a8.4 8.4 0 008.4 8.4h14.5l-5.5 11A1.68 1.68 0 0025.9 93h48.2a1.68 1.68 0 001.5-2.43l-5.5-11h14.5a8.4 8.4 0 008.4-8.4V15.4A8.4 8.4 0 0084.6 7zm-69.2 3.36h69.2c2.2 0 4.06 1.4 4.75 3.36h-78.7a5.05 5.05 0 014.75-3.36zm55.99 79.28H28.6l1.77-3.53h15.76a1.68 1.68 0 000-3.36H32.06l1.6-3.19h32.69l5.04 10.08zm18.25-18.48a5.04 5.04 0 01-5.04 5.04H15.4a5.04 5.04 0 01-5.04-5.04v-5.03h79.28v5.03zm0-8.4H10.36V17.09h79.28v45.69z"
    />
  </svg>
);

export default TVIcon;
