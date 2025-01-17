import React, {SVGProps} from 'react';

const CopyIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}>
      <path
        fill="#8DAEC1"
        d="M21.188 24H8.438a2.815 2.815 0 01-2.813-2.813V8.438a2.815 2.815 0 012.813-2.812h12.75A2.815 2.815 0 0124 8.438v12.75A2.815 2.815 0 0121.187 24zM8.438 7.5a.939.939 0 00-.938.938v12.75c0 .516.42.937.938.937h12.75c.516 0 .937-.42.937-.938V8.438a.939.939 0 00-.938-.937H8.438zm-4.688 9h-.938a.939.939 0 01-.937-.938V2.813c0-.516.42-.937.938-.937h12.75c.516 0 .937.42.937.938v.89h1.875v-.89A2.815 2.815 0 0015.562 0H2.813A2.815 2.815 0 000 2.813v12.75a2.815 2.815 0 002.813 2.812h.937V16.5z"
      />
    </svg>
  );
};

export default CopyIcon;