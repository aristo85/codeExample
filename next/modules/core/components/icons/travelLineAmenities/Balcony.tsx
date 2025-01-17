import * as React from 'react';
import type {SVGProps} from 'react';
const SvgBalcony = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <symbol viewBox="0 0 16 16" id="balcony">
      <path
        d="M14.364 5.893c-.562-.813-1.048-1.515-.956-2.144.083-.418.313-.718.632-.822.301-.1.634-.011.911.243.17.156.255.464.202.731-.018.099-.074.269-.226.334-.093.024-.21.035-.267-.037a.223.223 0 01-.02-.229.416.416 0 00-.723-.409 1.06 1.06 0 00.091 1.153c.262.332.696.451 1.165.317l.028-.01c.397-.146.677-.496.769-.958.107-.551-.076-1.156-.458-1.505-.498-.455-1.144-.611-1.731-.419-.399.131-.719.424-.938.813H3.126c-.218-.387-.54-.681-.942-.813-.586-.193-1.233-.036-1.731.419-.382.35-.565.955-.458 1.505.092.462.371.812.768.958l.03.01c.467.133.903.014 1.165-.318.254-.322.291-.796.09-1.152a.414.414 0 00-.566-.157.414.414 0 00-.157.566.228.228 0 01-.02.229c-.057.072-.174.061-.267.037C.885 4.17.831 4 .812 3.901c-.053-.267.032-.575.203-.731.277-.253.608-.342.911-.243.318.104.549.404.628.801.095.65-.391 1.352-.953 2.165C.269 7.818-1.164 10.026 1.549 13v1.001h13.023v-1.178c2.55-2.929 1.138-4.986-.208-6.93zm-.683.472c1.274 1.844 2.256 3.266.668 5.419h-1.574c.638-2.311-.113-4.538-.749-5.791-.25-.493-.466-.943-.589-1.381h1.254c.19.592.58 1.162.99 1.753zm-3.671 5.419c.383-1.743.006-3.691-.375-4.972-.223-.75-.43-1.47-.479-2.2h1.428c.128.594.399 1.166.699 1.757.645 1.267 1.306 3.338.639 5.415H10.01zm-3.202 0c-.404-1.573-.057-3.471.319-4.735.233-.785.465-1.59.515-2.436h.683c.049.846.282 1.651.515 2.436.375 1.264.723 3.162.318 4.735h-2.35zm-2.765 0c-.667-2.076-.005-4.147.638-5.414.3-.591.572-1.163.7-1.757h1.428c-.049.73-.256 1.45-.479 2.2-.38 1.28-.758 3.229-.375 4.972H4.043zM2.285 6.365c.408-.589.797-1.158.988-1.752h1.256c-.124.437-.34.888-.59 1.381-.636 1.252-1.386 3.48-.748 5.791H1.622c-1.538-2.125-.574-3.633.663-5.42z"
        fill="#3d3d3d"
      />
    </symbol>
    <use href="#balcony" />
  </svg>
);
export default SvgBalcony;