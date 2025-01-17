import * as React from 'react';
import {SVGProps} from 'react';
const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}>
    <path
      fill="#0071C2"
      d="M13.5 7.5h-5v-5a.5.5 0 1 0-1 0v5h-5a.5.5 0 1 0 0 1h5v5a.5.5 0 0 0 1 0v-5h5a.5.5 0 0 0 0-1Z"
    />
  </svg>
);
export default PlusIcon;
