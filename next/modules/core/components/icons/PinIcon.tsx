import * as React from 'react';
import {SVGProps} from 'react';
const PinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={58}
    height={72}
    fill="none"
    {...props}>
    <g filter="url(#a)">
      <mask
        id="b"
        width={46}
        height={60}
        x={6}
        y={2}
        fill="#000"
        maskUnits="userSpaceOnUse">
        <path fill="#fff" d="M6 2h46v60H6z" />
        <path
          fillRule="evenodd"
          d="M30.337 55.8c4.334-5.944 16.226-22.987 16.226-31.018C46.563 14.962 38.603 7 28.782 7 18.962 7 11 14.961 11 24.782c0 8.03 11.892 25.074 16.226 31.018a1.914 1.914 0 0 0 3.111 0Zm-1.555-25.684a5.334 5.334 0 1 0 0-10.669 5.334 5.334 0 0 0 0 10.669Z"
          clipRule="evenodd"
        />
      </mask>
      <path
        fill="#1D7ABD"
        fillRule="evenodd"
        d="M30.337 55.8c4.334-5.944 16.226-22.987 16.226-31.018C46.563 14.962 38.603 7 28.782 7 18.962 7 11 14.961 11 24.782c0 8.03 11.892 25.074 16.226 31.018a1.914 1.914 0 0 0 3.111 0Zm-1.555-25.684a5.334 5.334 0 1 0 0-10.669 5.334 5.334 0 0 0 0 10.669Z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        d="m30.337 55.8-4.04-2.946 4.04 2.946Zm-3.111 0-4.04 2.946 4.04-2.946Zm14.337-31.018c0 .982-.42 2.8-1.537 5.465-1.065 2.54-2.568 5.4-4.266 8.301-3.392 5.797-7.336 11.389-9.463 14.306l8.08 5.892c2.207-3.027 6.376-8.929 10.014-15.148 1.817-3.105 3.557-6.384 4.857-9.484 1.248-2.975 2.315-6.3 2.315-9.332h-10ZM28.782 12c7.059 0 12.781 5.723 12.781 12.782h10C51.563 12.2 41.363 2 28.782 2v10ZM16 24.782C16 17.722 21.723 12 28.782 12V2C16.2 2 6 12.2 6 24.782h10Zm15.266 28.072c-2.127-2.917-6.071-8.509-9.463-14.306-1.697-2.902-3.201-5.761-4.266-8.301C16.419 27.582 16 25.764 16 24.782H6c0 3.033 1.067 6.357 2.315 9.332 1.3 3.1 3.04 6.379 4.857 9.484 3.638 6.219 7.807 12.12 10.014 15.148l8.08-5.892Zm-4.969 0c1.22-1.673 3.75-1.673 4.969 0l-8.08 5.892c2.774 3.805 8.417 3.805 11.192 0l-8.08-5.892Zm2.819-28.072c0 .184-.15.334-.334.334v10c5.707 0 10.334-4.627 10.334-10.334h-10Zm-.334-.335c.184 0 .334.15.334.335h10c0-5.708-4.627-10.335-10.334-10.335v10Zm-.335.335c0-.185.15-.335.335-.335v-10c-5.708 0-10.335 4.627-10.335 10.335h10Zm.335.334a.334.334 0 0 1-.335-.334h-10c0 5.707 4.627 10.334 10.335 10.334v-10Z"
        mask="url(#b)"
      />
    </g>
    <defs>
      <filter
        id="a"
        width={57.563}
        height={71.599}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={3} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1976_51099"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1976_51099"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default PinIcon;
