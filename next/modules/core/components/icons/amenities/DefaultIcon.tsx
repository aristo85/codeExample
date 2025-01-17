import * as React from 'react';
import {SVGProps} from 'react';

const EmptySpaceIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    {...props}>
    <circle cx="12" cy="12" r="3" fill="#8DAEC1" />
  </svg>
);

export default EmptySpaceIcon;
