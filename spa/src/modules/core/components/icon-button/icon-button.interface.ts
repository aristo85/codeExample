import type { ButtonHTMLAttributes } from 'react';
import type { BorderRadius } from 'styles/theme.types';
import type { IconName } from 'modules/core/components/icon/icon.interface';

export type IconButtonSize = 'small';

export type IconButtonProps = {
  size: IconButtonSize;
  icon: IconName;
  borderRadius?: BorderRadius;
} & ButtonHTMLAttributes<HTMLButtonElement>;
