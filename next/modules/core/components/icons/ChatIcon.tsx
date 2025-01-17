import React, {SVGProps} from 'react';

const ChatIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}>
      <g clipPath="url(#a)">
        <g fill="#1D7ABD" clipPath="url(#b)">
          <path d="M23.914 18.836L22.52 14.78a10.168 10.168 0 001.029-4.438c.004-2.673-1.03-5.2-2.912-7.116A10.068 10.068 0 0013.576.19a10.06 10.06 0 00-7.333 2.968 10.053 10.053 0 00-2.968 7.036 7.389 7.389 0 00-2.242 9.076l-.96 2.795a1.31 1.31 0 00.314 1.36 1.31 1.31 0 001.361.315l2.795-.96a7.42 7.42 0 003.158.713h.011a7.376 7.376 0 005.965-3.033c1.452-.038 2.89-.39 4.189-1.025l4.056 1.394a1.557 1.557 0 001.617-.374 1.56 1.56 0 00.375-1.618zM7.712 22.064h-.009a5.976 5.976 0 01-2.775-.69.714.714 0 00-.566-.043l-2.865.984.984-2.865a.714.714 0 00-.044-.566 5.952 5.952 0 01.97-6.906 10.076 10.076 0 002.905 5.574 10.083 10.083 0 005.579 2.797 5.94 5.94 0 01-4.179 1.715zm14.817-2.62a.13.13 0 01-.143.033l-4.342-1.493a.715.715 0 00-.567.044 8.724 8.724 0 01-4.052 1.007h-.013c-4.728 0-8.634-3.841-8.708-8.568a8.643 8.643 0 012.55-6.3 8.644 8.644 0 016.3-2.55c4.73.076 8.574 3.988 8.566 8.722a8.726 8.726 0 01-1.006 4.053.714.714 0 00-.044.566l1.493 4.342a.13.13 0 01-.034.144z" />
          <path d="M17.667 6.54h-8.51a.714.714 0 000 1.428h8.51a.714.714 0 000-1.428zm0 2.937h-8.51a.714.714 0 000 1.429h8.51a.714.714 0 100-1.429zm-3.276 2.938H9.156a.714.714 0 100 1.429h5.235a.714.714 0 100-1.429z" />
        </g>
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
        <clipPath id="b">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ChatIcon;
