import React, {SVGProps} from 'react';
const PaginationArrowToRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="m15 10 9.293 9.293a1 1 0 0 1 0 1.414L15 30"
    />
  </svg>
);
export default PaginationArrowToRight;
