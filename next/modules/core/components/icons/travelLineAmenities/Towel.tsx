import * as React from 'react';
import type {SVGProps} from 'react';
const SvgTowel = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 16 15.996" id="towel">
      <path
        d="M13.931.051C13.783.031 13.144 0 13.144 0H3.807C1.852 0 1.345 2.344 1.345 5.053v9.85s1.032-.741 4.771-.741 6.584 1.835 6.584 1.835V5.053c0-2.709-.041-4.686 1.915-4.686-.001 0 .033-.222-.684-.316zm-1.567 1.422c-.264.886-.264 2.058-.264 3.416v10.099c-1.172-.573-3.358-1.425-5.984-1.425-2.104 0-3.405.232-4.172.455V5.053C1.944.599 3.346.599 3.807.599h8.979c-.18.239-.32.531-.422.874zM1.17 1.838H.25S0 1.654 0 1.268C0 .88.25.743.25.743h1.373c-.181.31-.332.675-.453 1.095zM16 0v1.838h-2.547c.003-.012.005-.025.009-.037.192-.646.505-.887 1.152-.887h.496V0H16zm-.906 2.385v10.144l-1.848-.248V4.889c0-.964 0-1.826.096-2.504h1.752z"
        fill="#3d3d3d"
      />
    </symbol>
    <use href="#towel" />
  </svg>
);
export default SvgTowel;