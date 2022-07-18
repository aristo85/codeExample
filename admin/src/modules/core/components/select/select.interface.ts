import type { StylizationProps } from 'modules/core/types/stylization.types';

export type SelectOptionValue = string;

export type SelectOption = {
  value: SelectOptionValue;
  text: string;
};

export type SelectProps = {
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  label: string;
} & StylizationProps;
