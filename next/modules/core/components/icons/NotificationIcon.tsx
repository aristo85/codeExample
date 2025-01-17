import * as React from 'react';
import {SVGProps} from 'react';
const NotificationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={20}
    fill="none"
    {...props}>
    <path
      fill="#F29200"
      d="M15 13.984 17.016 16v.984H.984V16L3 13.984V9.016c0-1.563.39-2.922 1.172-4.079.812-1.156 1.922-1.906 3.328-2.25v-.703c0-.406.14-.75.422-1.03.281-.313.64-.47 1.078-.47.438 0 .797.157 1.078.47.281.28.422.624.422 1.03v.704c1.406.343 2.5 1.093 3.281 2.25C14.594 6.093 15 7.453 15 9.015v4.968Zm-6 6a2.069 2.069 0 0 1-1.453-.562c-.375-.375-.563-.844-.563-1.406h4.032c0 .53-.204 1-.61 1.406A2.011 2.011 0 0 1 9 19.984Z"
    />
  </svg>
);
export default NotificationIcon;
