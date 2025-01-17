import * as React from 'react';
import type {SVGProps} from 'react';
const SvgWritingMaterials = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 16 16" id="writing-materials">
      <path
        d="M12.997 8.684v5.941A1.38 1.38 0 0111.614 16H1.383A1.38 1.38 0 010 14.625V4.799c0-.161.064-.316.179-.43L4.393.178A.61.61 0 014.824 0h6.79c.729 0 1.32.564 1.372 1.275a1.956 1.956 0 00-.108.067l-.039-.038-.404.402-.553.521.014.015-.12.12v-.987a.16.16 0 00-.161-.16H5.48v2.863c0 .758-.615 1.372-1.379 1.373h-2.88v9.174c0 .09.072.16.162.16h10.231a.16.16 0 00.161-.16V9.898l1.222-1.214zm2.527-6.28c-.671-.669-1.852-.576-2.393-.063l2.453 2.441c.517-.54.611-1.714-.06-2.378zm-3.258.793L7.086 8.35l2.46 2.445 5.18-5.15-2.46-2.448zm-6.051 6.02l-.788 2.59.644.641 2.603-.785-2.459-2.446zm-1.214 3.135l-.575 1.09 1.096-.572-.521-.518z"
        fill="#3d3d3d"
      />
    </symbol>
    <use href="#writing-materials" />
  </svg>
);
export default SvgWritingMaterials;
