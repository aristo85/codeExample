import React, { FC } from 'react';
import { useTheme } from 'styled-components';
// assets
import { ReactComponent as SpinnerSVG } from 'assets/icons/spinner.svg';

import type { SpinnerProps, SpinnerSize } from './spinner.interface';
import { Root } from './spinner.styled';

const sizeMap: Record<SpinnerSize, number> = {
  small: 40,
  medium: 75,
  big: 150,
};

const Spinner: FC<SpinnerProps> = ({
  isLoading,
  isAbsolute = false,
  children,
  size = 'medium',
  color = 'primary',
  style,
  className,
}) => {
  const theme = useTheme();
  const sizePx = sizeMap[size];

  if (isLoading) {
    return (
      <Root isAbsolute={isAbsolute} style={style} className={className}>
        <SpinnerSVG
          width={sizePx}
          height={sizePx}
          color={theme.palette.common[color]}
        />
      </Root>
    );
  }

  return <>{children}</>;
};

export default Spinner;
