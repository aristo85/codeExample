import * as React from 'react';
import type {SVGProps} from 'react';
const SvgWarmFloor = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 16 16" id="warm-floor">
      <path
        fill="#3d3d3d"
        d="M0 16h7.424l.51-.51.51.51H16v-2.238l-.236-.236.236-.237V9.151l-.236-.236.236-.236V4.542l-.236-.236L16 4.07V0H0v16zm6.509-.5H4.152l1.541-1.54 1.178 1.179-.362.361zm2.849 0l-2.604-2.603 1.179-1.179 3.781 3.781H9.358zm6.142 0h-1.532L6.755 8.287l1.179-1.179 7.566 7.566v.826zm-.348-15l.348.348v2.309l-.024.024L12.796.5h2.356zm-4.609 0L15.5 5.456v2.31l-.024.024L8.187.5h2.356zm4.957 9.565v2.31l-.024.024-8.721-8.721 1.179-1.179 7.566 7.566zM.5.714L.714.5h2.357L.5 3.071V.714zm0 4.609L5.323.5h.737l.811.81L.5 7.681V5.323zm0 4.61L5.692 4.74l1.179 1.179L.5 12.29V9.933zm0 4.609L5.692 9.35l1.179 1.179L1.899 15.5H.5v-.958z"
      />
    </symbol>
    <use href="#warm-floor" />
  </svg>
);
export default SvgWarmFloor;
