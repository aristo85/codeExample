import React, {SVGProps} from 'react';

const CloseBtnIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={49}
      fill="none"
      {...props}>
      <rect width={48} height={48} y={0.5} fill="#8DAEC1" rx={24} />
      <path
        fill="#fff"
        d="M16.71 15.8a.987.987 0 00-1.417 0 1.04 1.04 0 000 1.447l7.305 7.465-6.89 7.04a1.04 1.04 0 000 1.448c.391.4 1.026.4 1.417 0l6.89-7.04 6.86 7.01c.391.4 1.026.4 1.417 0a1.04 1.04 0 000-1.447l-6.86-7.011 7.275-7.435a1.04 1.04 0 000-1.447.987.987 0 00-1.417 0l-7.275 7.435L16.71 15.8z"
      />
    </svg>
  );
};

export default CloseBtnIcon;
