import React, {SVGProps} from 'react';

const ArrowSelectUp = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={10}
      fill="none"
      {...props}>
      <path
        stroke={props.stroke || '#222121'}
        strokeLinecap="round"
        strokeWidth={2}
        d="M17 1L9.707 8.293a1 1 0 01-1.414 0L1 1"
      />
    </svg>
  );
};

export default ArrowSelectUp;
