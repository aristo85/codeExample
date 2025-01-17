import React, {SVGProps} from 'react';

const ProfileIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}>
      <g clipPath="url(#profile-icon)">
        <path
          fill="#1D7ABD"
          fillRule="evenodd"
          d="M16.444 14.2c2.988 0 5.425 2.335 5.55 5.261L22 19.7v1.1a2.21 2.21 0 01-2.056 2.194l-.166.006H4.222a2.213 2.213 0 01-2.216-2.036L2 20.8v-1.1c0-2.958 2.358-5.37 5.315-5.495l.24-.005h8.89zm0 2.2H7.556c-1.776 0-3.227 1.374-3.328 3.106l-.006.194v1.1h15.556v-1.1c0-1.758-1.388-3.194-3.138-3.294l-.196-.006zM12 1c3.068 0 5.556 2.462 5.556 5.5S15.068 12 12 12 6.444 9.538 6.444 6.5 8.932 1 12 1zm0 2.2c-1.841 0-3.333 1.477-3.333 3.3 0 1.823 1.492 3.3 3.333 3.3 1.841 0 3.333-1.477 3.333-3.3 0-1.823-1.492-3.3-3.333-3.3z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="profile-icon">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ProfileIcon;
