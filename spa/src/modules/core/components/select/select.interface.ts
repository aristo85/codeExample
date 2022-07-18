import type { ReactNode } from 'react';
import type { StylizationProps } from 'modules/core/types/stylization.types';

export type SelectOptionValue = string | null;

export type SelectOption = {
  value: SelectOptionValue;
  title: string;
  subtitle?: string;
  startAdornment?: ReactNode;
};

export type SelectProps = {
  value: SelectOptionValue;
  options: SelectOption[];
  onChange?: (value: SelectOptionValue) => void;
  label?: string;
  error?: string | boolean;
  disabled?: boolean;
} & StylizationProps;
