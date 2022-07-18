import { StylizationProps } from 'modules/core/types/stylization.types';

export type SelectOption = {
  readonly value: string;
  readonly label: string;
};

export type AsyncAutocompleteProps = {
  value: string;
  onChange: (value: any) => void;
  // onInputChange: (value: string) => void;
  loadOptions: (value: string) => any;
  label: string;
  placeholder?: string;
} & StylizationProps;
