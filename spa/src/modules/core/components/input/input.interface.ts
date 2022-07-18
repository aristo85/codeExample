import type { ReactNode, InputHTMLAttributes } from 'react';
import type { StylizationProps } from 'modules/core/types/stylization.types';

export type InputProps = {
  name: string;
  label?: string;
  placeholder?: string;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  disabled?: boolean;
  error?: string;
} & StylizationProps &
  InputHTMLAttributes<HTMLInputElement>;

export type TextareaProps = {
  name: string;
  label?: string;
  placeholder?: string;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  disabled?: boolean;
  error?: string;
  textarea?: boolean;
} & StylizationProps &
  InputHTMLAttributes<HTMLTextAreaElement>;
