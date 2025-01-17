import * as React from 'react';
import {SVGProps} from 'react';

const TransportIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    {...props}>
    <g fill={props.fill ?? '#222121'} fillRule="evenodd" clipRule="evenodd">
      <path d="M5.28 15.17c0-.93.754-1.687 1.68-1.687.926 0 1.68.756 1.68 1.686 0 .93-.754 1.687-1.68 1.687-.926 0-1.68-.757-1.68-1.687Zm.739 0c0 .52.422.944.941.944a.944.944 0 0 0 0-1.89.944.944 0 0 0-.941.945ZM17.076 13.424c-.926 0-1.68.757-1.68 1.687s.754 1.686 1.68 1.686c.927 0 1.68-.756 1.68-1.686 0-.93-.753-1.687-1.68-1.687Zm0 2.632a.944.944 0 0 1 0-1.89.944.944 0 0 1 0 1.89Z" />
      <path d="M6.37 2.4h11.26a2.77 2.77 0 0 1 2.77 2.764V18.36c0 .197-.16.356-.357.356H18.72v1.634c0 1.658-3.36 1.668-3.36.01v-1.644H8.64l.008 1.644c0 1.657-3.368 1.653-3.368-.005v-1.639H3.957a.356.356 0 0 1-.357-.356V5.165a.144.144 0 0 1 0-.02.06.06 0 0 0 0-.005v-.005c0-.006 0-.011.002-.017v-.01A2.769 2.769 0 0 1 6.37 2.4Zm5.67 7.64c1.104 0 2.021.805 2.199 1.859l5.447-.008V5.47l-15.372.02v6.422l5.524-.007a2.234 2.234 0 0 1 2.202-1.865Zm-1.474 1.864 2.945-.004a1.52 1.52 0 0 0-2.945.004Zm7.065-8.792H6.369a2.058 2.058 0 0 0-2.018 1.666l15.294-.02a2.058 2.058 0 0 0-2.014-1.646ZM4.314 12.624v5.379h15.372v-5.399l-5.676.008a.354.354 0 0 1-.094.014.356.356 0 0 1-.094-.014l-3.581.005a.37.37 0 0 1-.156 0l-5.771.007Zm11.766 7.537c0 1.045 1.92 1.045 1.92 0v-1.438h-1.92v1.438Zm-8.166 0c0 1.045-1.92 1.045-1.92 0v-1.438h1.92v1.438Z" />
    </g>
  </svg>
);

export default TransportIcon;
