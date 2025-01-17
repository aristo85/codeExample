import * as React from 'react';
import type {SVGProps} from 'react';
const SvgBottledWater = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 16 16" id="bottled-water">
      <path
        d="M6.012 9.375v5.664c0 .541-.371.98-.834.98 0 0-.234-.183-.576-.298a.647.647 0 01-.527.298.646.646 0 01-.531-.302c-.37.116-.644.303-.644.303-.463 0-.9-.439-.9-.98V9.375c0-1.277.651-2.124 1.146-2.406v-.95h1.719v.887c.477.194 1.147 1.075 1.147 2.469zm-.86-5.354H2.859v1.021h2.293V4.021zM14 5.81v9.066c0 .631-.564 1.144-1.286 1.144 0 0-.335-.198-.831-.334a1.271 1.271 0 01-.879.334c-.354 0-.669-.131-.879-.334-.498.136-.834.334-.834.334-.721 0-1.279-.513-1.279-1.144V5.81c0-1.729 1.43-2.87 2.206-3.014v-.779h1.575v.78C12.571 2.944 14 4.084 14 5.81zM12.203 0H9.809v1.041h2.395V0z"
        fill="#3d3d3d"
      />
    </symbol>
    <use href="#bottled-water" />
  </svg>
);
export default SvgBottledWater;
