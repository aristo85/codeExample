import React, {SVGProps} from 'react';

const PaginationArrowToLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}>
    <path
      stroke="#222121"
      strokeLinecap="round"
      strokeWidth={2}
      d="m25 30-9.293-9.293a1 1 0 0 1 0-1.414L25 10"
    />
  </svg>
);
export default PaginationArrowToLeft;
