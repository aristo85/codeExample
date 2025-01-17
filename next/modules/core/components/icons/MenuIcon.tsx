import React, {SVGProps} from 'react';

const MenuIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={48}
      fill="none"
      {...props}>
      <rect width={24} height={3} x={10} y={13} fill="#1D7ABD" rx={1.5} />
      <rect width={24} height={3} x={10} y={22.5} fill="#1D7ABD" rx={1.5} />
      <rect width={24} height={3} x={10} y={32} fill="#1D7ABD" rx={1.5} />
    </svg>
  );
};

export default MenuIcon;
