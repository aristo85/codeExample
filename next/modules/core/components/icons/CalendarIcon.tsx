import * as React from 'react';
import {SVGProps} from 'react';
const CalendarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={8}
    fill="none"
    {...props}>
    <g fill="#8DAEC1" clipPath="url(#a)">
      <path d="M.234 5.953h6.125c.055 0 .108-.019.15-.054.06-.05 1.401-1.204 1.483-3.696H1.414C1.332 4.465.096 5.53.084 5.54a.235.235 0 0 0 .15.414ZM7.766.797H6.594V.563a.232.232 0 0 0-.235-.235.232.232 0 0 0-.234.235v.234H4.937V.563a.232.232 0 0 0-.234-.235.232.232 0 0 0-.234.235v.234H3.297V.563a.232.232 0 0 0-.235-.235.232.232 0 0 0-.234.235v.234H1.656a.232.232 0 0 0-.234.234v.703H8v-.703a.232.232 0 0 0-.234-.234Z" />
      <path d="M6.81 6.258a.705.705 0 0 1-.45.164H1.42v.703c0 .13.105.235.235.235h6.11c.129 0 .234-.105.234-.235V4.498c-.452 1.108-1.083 1.67-1.19 1.76Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h8v8H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default CalendarIcon;
