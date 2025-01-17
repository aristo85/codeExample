import * as React from 'react';
import type {SVGProps} from 'react';
const SvgUsb = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 61 60" id="usb">
      <path
        d="M43.77 19.44V0H17.433v19.44h-4.39V33c0 3.188 1.281 8.316 3.115 12.47 1.216 2.756 3.016 5.88 5.35 7.447v7.282h18.186v-7.282c2.335-1.566 4.135-4.691 5.351-7.447C46.88 41.316 48.16 36.188 48.16 33V19.44H43.77zm-21.32-8.153h5.016v5.017h-5.017v-5.017zm14.614 21.149c-.091.09-.19.171-.296.244v2.952l-4.703 3.123v5.7c.106.07.206.151.297.24a2.195 2.195 0 11-3.102 0c.09-.09.19-.17.296-.24v-1.484l-4.703-4.153v-2.846a2.21 2.21 0 01-.297-.245 2.193 2.193 0 010-3.104 2.247 2.247 0 013.103 0 2.195 2.195 0 010 3.105c-.092.09-.192.172-.297.244v1.714l2.194 1.938V28.917a2.22 2.22 0 01-.297-.244 2.193 2.193 0 010-3.104 2.247 2.247 0 013.103 0 2.195 2.195 0 010 3.105c-.092.09-.192.17-.297.243v6.828l2.194-1.458V32.68a2.21 2.21 0 01-.297-.245 2.193 2.193 0 010-3.104 2.246 2.246 0 013.103 0 2.193 2.193 0 010 3.105zm1.69-16.132h-5.017v-5.017h5.016v5.017z"
        fill="#3d3d3d"
      />
    </symbol>
    <use href="#usb" />
  </svg>
);
export default SvgUsb;