import * as React from 'react';
import type {SVGProps} from 'react';
const SvgSink = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 16 16" id="sink">
      <path
        d="M.889 7.996h14.223c0 2.603-3.184 4.712-7.111 4.712S.889 10.599.889 7.996zm14.815-2.364H.296A.297.297 0 000 5.928v1.186c0 .163.133.296.296.296h15.408A.299.299 0 0016 7.113V5.928a.297.297 0 00-.296-.296zm-9.185 7.307l.296.899h.297V15h1.777v-1.161h.297l.296-.899a17.143 17.143 0 01-2.963-.001zM6.29 2.186h.397l.714 1.446v.825h-.734v.889h2.666v-.889h-.746V3.355L7.424 1H5.105v2.123H6.29v-.937z"
        fill="#3d3d3d"
      />
    </symbol>
    <use href="#sink" />
  </svg>
);
export default SvgSink;
