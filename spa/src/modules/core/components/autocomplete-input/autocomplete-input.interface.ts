import type { InputProps } from 'modules/core/components/input/input.interface';

export type AutocompleteOption = {
  name: string;
  key: string;
};

export type AutocompleteInputProps = {
  value: string | null;
  onChange: (key: string | null) => void;
  options: AutocompleteOption[];
} & Omit<InputProps, 'value' | 'onChange'>;
