import React, {SVGProps} from 'react';

const CloseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      fill="none"
      {...props}>
      <path
        fill={props.fill ?? '#1D7ABD'}
        d="M1.71.3A.987.987 0 00.293.3a1.04 1.04 0 000 1.447l7.305 7.465-6.89 7.04a1.04 1.04 0 000 1.448c.391.4 1.026.4 1.417 0l6.89-7.04 6.86 7.01c.391.4 1.026.4 1.417 0a1.04 1.04 0 000-1.447l-6.86-7.011 7.275-7.435a1.04 1.04 0 000-1.447.987.987 0 00-1.417 0L9.015 7.764 1.71.3z"
      />
    </svg>
  );
};

export default CloseIcon;
