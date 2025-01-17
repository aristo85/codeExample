import * as React from 'react';
import type {SVGProps} from 'react';
const SvgCookware = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 24 24" id="cookware">
      <path
        d="M3.064 10.723L20.44 5.065a9.318 9.318 0 01-1.824 7.536h-14.4a8.194 8.194 0 01-1.152-1.878zM1 13.444c.912 3.66 3.312 6.645 6.456 8.114v1.276h8.688v-1.276c3.144-1.445 5.544-4.43 6.456-8.114H1zm1.008-9.558a2.17 2.17 0 01.936-1.469 2.264 2.264 0 011.704-.385c.408.072.768.24 1.056.505l11.328 1.999c-.024.168-.024.337-.072.505-.024.12-.048.241-.072.337L7.336 8.484a6 6 0 01-1.68-2.407 2.221 2.221 0 01-1.392.481c-.12 0-.264 0-.384-.024-1.272-.24-2.088-1.42-1.872-2.648zm2.016 1.878a1.275 1.275 0 001.32-.626 5.045 5.045 0 01-.048-1.349 1.36 1.36 0 00-.816-.53h-.24a1.13 1.13 0 00-.72.241 1.365 1.365 0 00-.528.82c-.12.673.36 1.323 1.032 1.444z"
        fill="#3d3d3d"
      />
    </symbol>
    <use href="#cookware" />
  </svg>
);
export default SvgCookware;
