import * as React from 'react';
import {SVGProps} from 'react';
const ClosedEyeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <rect
      width={1.553}
      height={22.097}
      x={4}
      y={5}
      fill={props.fill ? props.fill : '#222121'}
      rx={0.776}
      transform="rotate(-45 4 5)"
    />
    <path
      fill={props.fill ? props.fill : '#222121'}
      d="M12 15.89c-5.346 0-5.346-7.779 0-7.779 5.286 0 5.514 7.778 0 7.778Zm0-6.223c-3.24 0-3.24 4.667 0 4.667s3.24-4.667 0-4.667Z"
    />
    <path
      fill={props.fill ? props.fill : '#222121'}
      d="M12 19c-4.009 0-7.848-2.045-10.53-5.61A2.304 2.304 0 0 1 1 12c0-.499.164-.985.47-1.39C4.151 7.046 7.99 5 12 5c4.009 0 7.848 2.045 10.53 5.61.306.405.47.891.47 1.39 0 .499-.164.985-.47 1.39C19.849 16.954 16.01 19 12 19Zm-9.22-6.522C5.19 15.68 8.465 17.444 12 17.444c3.534 0 6.808-1.764 9.22-4.966a.793.793 0 0 0 0-.956C18.809 8.32 15.535 6.556 12 6.556c-3.534 0-6.809 1.764-9.22 4.966a.793.793 0 0 0 0 .956Z"
    />
  </svg>
);
export default ClosedEyeIcon;
