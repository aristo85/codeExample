import type { AutocompleteInputProps } from 'modules/core/components/autocomplete-input/autocomplete-input.interface';

export type CitiesInputProps = {
  country: string | null;
} & Omit<AutocompleteInputProps, 'options'>;
