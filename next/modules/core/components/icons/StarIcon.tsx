import React, {SVGProps} from 'react';

const StarIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={16}
      fill="none"
      {...props}>
      <path
        fill="#1D7ABD"
        stroke="#fff"
        strokeWidth={1.5}
        d="M9.612 2.567L9 1.702l-.612.865-2.005 2.831L3.071 6.43l-1.012.315.633.85 2.074 2.78-.043 3.47-.013 1.06 1.004-.34L9 13.452l3.286 1.113 1.004.34-.013-1.06-.043-3.47 2.074-2.78.633-.85-1.012-.315-3.312-1.032-2.005-2.831z"
      />
    </svg>
  );
};

export default StarIcon;
