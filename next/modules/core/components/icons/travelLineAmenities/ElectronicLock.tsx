import * as React from "react";
import type { SVGProps } from "react";
const SvgElectronicLock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 16 16" id="electronic-lock">
      <path
        d="M13.516 3.436l2.111 2.112a1.286 1.286 0 010 1.812l-8.268 8.267a1.283 1.283 0 01-1.811 0l-2.112-2.111.837-.837 2.111 2.111a.1.1 0 00.137 0l8.269-8.268a.1.1 0 000-.137l-2.112-2.111.838-.838zM1.391 9.794l-.18-.179a.102.102 0 010-.137L9.479 1.21a.1.1 0 01.137 0l.178.18.837-.837-.178-.18a1.286 1.286 0 00-1.812 0L.374 8.642a1.284 1.284 0 000 1.811l.179.179.838-.838zM11.05.971L.971 11.05l2.047 2.046L13.097 3.018 11.05.971z"
        fill="#3d3d3d"
      />
    </symbol>
    <use href="#electronic-lock" />
  </svg>
);
export default SvgElectronicLock;
