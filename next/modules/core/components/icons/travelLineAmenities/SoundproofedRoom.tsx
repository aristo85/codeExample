import * as React from 'react';
import type {SVGProps} from 'react';
const SvgSoundproofedRoom = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 16 16" id="soundproofed-room">
      <path
        fill="#3d3d3d"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.051 5.825h1.403v4.35H3.051v-4.35zm2.014 4.35l2.478 2v-8.35l-2.478 2v4.35zm7.884-3.573l-.681-.682-1.398 1.399-1.4-1.399-.68.682L10.188 8 8.79 9.4l.679.68 1.4-1.399 1.398 1.399.682-.68L11.55 8l1.399-1.398zM8 1.185C4.242 1.185 1.185 4.242 1.185 8S4.242 14.814 8 14.814 14.814 11.758 14.814 8 11.758 1.185 8 1.185M8 0a8 8 0 110 16A8 8 0 018 0z"
      />
    </symbol>
    <use href="#soundproofed-room" />
  </svg>
);
export default SvgSoundproofedRoom;
