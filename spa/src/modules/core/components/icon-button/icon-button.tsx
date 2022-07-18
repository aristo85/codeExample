import { FC, memo } from 'react';
// components
import Icon from 'modules/core/components/icon';

import type { IconButtonProps } from './icon-button.interface';
import { Root } from './icon-button.styled';

const IconButton: FC<IconButtonProps> = ({
  size,
  icon,
  borderRadius = 'circle',
  ...props
}) => (
  <Root borderRadius={borderRadius} size={size} type='button' {...props}>
    <Icon name={icon} width={10} height={10} color='gray' />
  </Root>
);

export default memo(IconButton);
