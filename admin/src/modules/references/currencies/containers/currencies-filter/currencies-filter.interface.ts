import type { FilterBoxProps } from 'modules/core/components/filter-box/filter-box.interface';

export type CurrenciesFilterValues = {
  id: string;
  code: string;
  default: string;
  active: string;
  popular: string;
  is_token: string;
  currency_type: string;
  created_from: string;
  created_to: string;
  updated_from: string;
  updated_to: string;
};

export type CurrenciesFilterProps = {
  // onApply?: (value: CurrenciesFilterValues) => void;
  // onReset?: () => void;
  currencyFilters: CurrenciesFilterValues | null;
} & FilterBoxProps;
