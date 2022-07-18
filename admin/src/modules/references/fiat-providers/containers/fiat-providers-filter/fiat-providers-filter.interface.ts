import type { FilterBoxProps } from 'modules/core/components/filter-box/filter-box.interface';

export type FiatProvidersFilterValues = {
  provider_id: string;
  provider_name: string;
  created_from: string;
  created_to: string;
  updated_from: string;
  updated_to: string;
};

export type FiatProvidersFilterProps = {
  onApply?: (value: FiatProvidersFilterValues) => void;
  onReset?: () => void;
} & FilterBoxProps;
