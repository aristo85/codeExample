import { FC } from 'react';

import type { PaperProps } from './paper.interface';
import { Root } from './paper.styled';

const Paper: FC<PaperProps> = ({
  style,
  className,
  children,
  border = true,
  elevation = 1,
  as,
}) => (
  <Root
    elevation={elevation}
    border={border}
    style={style}
    className={className}
    as={as}
  >
    {children}
  </Root>
);

export default Paper;
