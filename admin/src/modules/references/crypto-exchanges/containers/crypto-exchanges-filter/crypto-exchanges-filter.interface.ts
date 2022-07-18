import type { FilterBoxProps } from 'modules/core/components/filter-box/filter-box.interface';

export type CryptoExchangesFilterValues = {
  burse_id: string;
  burse_name: string;
  created_from: string;
  created_to: string;
  updated_from: string;
  updated_to: string;
};

export type CryptoExchangesFilterProps = {
  onApply?: (value: CryptoExchangesFilterValues) => void;
  onReset?: () => void;
} & FilterBoxProps;
