import type { StylizationProps } from 'modules/core/types/stylization.types';
import { ButtonHTMLAttributes } from 'react';

export type ButtonVariant = 'default' | 'primary' | 'destructive' | 'disabled';

export type ButtonProps = {
  variant?: ButtonVariant;
} & StylizationProps &
  ButtonHTMLAttributes<HTMLButtonElement>;
