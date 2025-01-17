import React, {SVGProps} from 'react';

const CheckIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}>
      <path
        stroke="#8DAEC1"
        strokeLinecap="round"
        strokeWidth={2}
        d="M11 1l-5.43 9.05a1 1 0 01-1.457.285L1 8"
      />
    </svg>
  );
};

export default CheckIcon;
