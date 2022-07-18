import type { ButtonHTMLAttributes } from 'react';
import type { BorderRadius, Color } from 'styles/theme.types';
import type { StylizationProps } from 'modules/core/types/stylization.types';

export type ButtonVariant = 'text' | 'contained';

export type ButtonProps = {
  text: string;
  borderRadius?: BorderRadius;
  backgroundColor?: Color;
  disabled?: boolean;
  isLoading?: boolean;
  variant?: ButtonVariant;
} & StylizationProps &
  ButtonHTMLAttributes<HTMLButtonElement>;
