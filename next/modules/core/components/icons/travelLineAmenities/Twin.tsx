import * as React from 'react';
import type {SVGProps} from 'react';
const SvgTwin = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 15 11.201" id="twin">
      <path
        d="M6.58 1.87A1.87 1.87 0 004.71 0H1.9A1.87 1.87 0 00.03 1.87H0V11.2h.972v-.897h4.696v.897h.912zm.015 5.593H.015V6.55h.538v-.403A1.07 1.07 0 011.615 5.07H4.98a1.07 1.07 0 011.062 1.077v.403h.553zM1.435 2.99c0-.3.225-.538.54-.538h2.661c.3 0 .538.239.538.538v1.72H1.436V2.99zm13.55-1.122A1.87 1.87 0 0013.115 0H10.32a1.86 1.86 0 00-1.87 1.87h-.03V11.2h.958v-.897h4.71v.897h.898zM15 7.463H8.435V6.55h.538v-.403a1.07 1.07 0 011.062-1.077H13.4a1.07 1.07 0 011.062 1.077v.403H15zM9.84 2.99c0-.3.24-.538.539-.538h2.662c.314 0 .538.239.538.538v1.72H9.84V2.99z"
        fill="#3d3d3d"
      />
    </symbol>
    <use href="#twin" />
  </svg>
);
export default SvgTwin;
