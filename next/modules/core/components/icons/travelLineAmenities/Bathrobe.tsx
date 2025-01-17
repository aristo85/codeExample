import * as React from 'react';
import type {SVGProps} from 'react';
const SvgBathrobe = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 15 16" id="bathrobe">
      <path
        d="M6.963 5.288L3.236 1.056S4.287 0 7.43 0c2.662 0 4.043 1.056 4.043 1.056L6.524 7.479l-.178 2.214h-.408V7.391l3.943-6.064S9.318.946 7.331.946s-2.643.38-2.643.38l2.275 3.962zm-1.025 5.716V16l.326-4.996h-.326zm-1.458-.231h6.02v-.85H4.48v.85zm1.158-1.08V7.305l1.125-1.789-3.527-3.649-1.736.701L0 12.832h1.275l2.049-7.236-.956-1.74 1.147 1.611.985 4.226h1.138zm-1.101 1.311v.02l-1.1 4.133 2.2.223v-4.375h-1.1zm5.926 0H6.586l-.349 4.965 5.05-.885-.825-4.061.001-.019zM13.5 2.568l-1.913-.701-4.771 5.721-.156 2.105h3.84l.962-4.195.95-1.453-.741 1.486 2.053 7.301H15L13.5 2.568z"
        fill="#3d3d3d"
      />
    </symbol>
    <use href="#bathrobe" />
  </svg>
);
export default SvgBathrobe;
