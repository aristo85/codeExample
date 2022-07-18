import { StylizationProps } from 'modules/core/types/stylization.types';

export type SelectOption = {
  readonly value: string;
  readonly text: string;
};

export type MultiSelectProps = {
  value: SelectOption[];
  onChange: (value: any) => void;
  options: SelectOption[];
  label: string;
  placeholder?: string;
} & StylizationProps;
