import type { FilterBoxProps } from 'modules/core/components/filter-box/filter-box.interface';

export type CoountryFilterValues = {
  // country_id: string;
  name: string;
  code: string;
  // created_from: string;
  is_blocked: string;
  // created_to: string;
  updated_from: string;
  updated_to: string;
};

export type CoountryFilterProps = {
  // onApply?: (value: CoountryFilterValues) => void;
  // onReset?: () => void;
  countryFilters: CoountryFilterValues | null;
  // listCount: number | undefined;
} & FilterBoxProps;
