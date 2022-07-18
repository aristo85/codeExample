import type { AutocompleteInputProps } from 'modules/core/components/autocomplete-input/autocomplete-input.interface';

export type CountryInputProps = {} & Omit<AutocompleteInputProps, 'options'>;
