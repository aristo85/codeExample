import * as React from 'react';
import type {SVGProps} from 'react';
const SvgChair = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 11.417 16" id="chair">
      <path
        d="M10.824 8.852c.326 0 .593.267.593.593V15.409a.595.595 0 01-.593.593h-.592a.595.595 0 01-.593-.593v-4.185a.595.595 0 00-.593-.593h-5.89a.595.595 0 00-.592.593v4.185a.593.593 0 01-.591.591H1.38a.594.594 0 01-.592-.593V5.203c0-.325-.051-.854-.113-1.174L.011.582A.471.471 0 01.491 0h.593c.325 0 .643.262.704.582l.665 3.447c.062.32.112.849.112 1.174v3.056c0 .326.267.593.592.593h7.667zm.012-.766c-.23-.23-.686-.42-1.012-.42H4.047c-.325 0-.781.189-1.012.42l-.051.051c-.23.23-.152.419.173.419h7.557c.325 0 .403-.188.173-.419l-.051-.051zM3.033 4.264a.823.823 0 00.11-.534L2.601.914A.832.832 0 002.302.46l-.03-.021C2.138.35 2.054.405 2.083.563l.709 3.685c.031.159.131.18.221.045l.02-.029z"
        fill="#3d3d3d"
      />
    </symbol>
    <use href="#chair" />
  </svg>
);
export default SvgChair;
