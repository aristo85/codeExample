import { FC, memo } from 'react';
// components
import Icon from 'modules/core/components/icon';

import type { SocialButtonProps } from './social-button.interface';
import { Root } from './social-button.styled';

const SocialButton: FC<SocialButtonProps> = ({ name }) => (
  <Root>
    <Icon name={name} />
  </Root>
);

export default memo(SocialButton);
