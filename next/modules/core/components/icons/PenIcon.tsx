import * as React from 'react';
import {SVGProps} from 'react';

const PenIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <path
      fill="#8DAEC1"
      fillRule="evenodd"
      d="M11 20a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1ZM18 3.879c-.297 0-.583.118-.793.328L4.903 16.511l-.529 2.115 2.115-.529L18.793 5.793A1.123 1.123 0 0 0 18 3.879Zm-2.207-1.086a3.121 3.121 0 0 1 4.414 4.414l-12.5 12.5a1 1 0 0 1-.464.263l-4 1a1 1 0 0 1-1.213-1.212l1-4a1 1 0 0 1 .263-.465l12.5-12.5Z"
      clipRule="evenodd"
    />
  </svg>
);
export default PenIcon;
