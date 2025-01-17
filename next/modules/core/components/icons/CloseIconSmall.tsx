import React, {SVGProps} from 'react';

const CloseIconSmall = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={17}
      height={16}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M3.94 2.2a.658.658 0 00-.945 0 .693.693 0 000 .965l4.87 4.976-4.593 4.694a.693.693 0 000 .965c.26.267.684.267.944 0L8.81 9.106l4.573 4.674c.261.267.684.267.945 0a.693.693 0 000-.965L9.754 8.141l4.85-4.956a.693.693 0 000-.965.658.658 0 00-.944 0L8.81 7.176 3.94 2.2z"
        fill="#fff"
      />
    </svg>
  );
};

export default CloseIconSmall;
