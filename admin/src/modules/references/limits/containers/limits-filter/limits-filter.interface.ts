import { OptionSelectionTypes } from 'modules/commission-settings/containers/commission-filter/commission-filter.interface';
import type { FilterBoxProps } from 'modules/core/components/filter-box/filter-box.interface';

export type LimitsFilterValues = {
  id: string;
  name: string;
  currency: string;
  limit_type: string;
  transaction_type: string;
  user_group_id: string;
  created_from: string;
  created_to: string;
  updated_from: string;
  updated_to: string;
};

export type LimitsFilterProps = {
  // onApply?: (value: LimitsFilterValues) => void;
  // onReset?: () => void;
  limitFilters: LimitsFilterValues | null;
  operationOptions: OptionSelectionTypes[];
  currencyOptions: OptionSelectionTypes[];
  groupOptions: OptionSelectionTypes[];
} & FilterBoxProps;
