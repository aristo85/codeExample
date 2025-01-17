import * as React from 'react';
import {SVGProps} from 'react';

const MobileButtonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={12}
    fill="none"
    {...props}>
    <path
      fill={`${props.fill ? props.fill : '#222121'}`}
      d="M0 12h6v-2H0v2ZM0 0v2h18V0H0Zm0 7h12V5H0v2Z"
    />
  </svg>
);
export default MobileButtonIcon;
