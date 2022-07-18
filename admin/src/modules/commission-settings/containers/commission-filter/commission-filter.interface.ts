import type { FilterBoxProps } from 'modules/core/components/filter-box/filter-box.interface';

export type CommissionFilterValues = {
  id: string;
  name: string;
  currency: string[];
  transaction_type: string[];
  min_amount: number | null;
  fix_amount: number | null;
  percent: number | null;
  user_group_id: string[];
  created_from: string;
  created_to: string;
  updated_from: string;
  updated_to: string;
};

export type OptionSelectionTypes = {
  value: string;
  text: string;
};

export type CommissionFilterProps = {
  // onApply?: (value: CommissionFilterValues) => void;
  // onReset?: () => void;
  commissionFilters: CommissionFilterValues | null;
  operationOptions: OptionSelectionTypes[];
  currencyOptions: OptionSelectionTypes[];
  groupOptions: OptionSelectionTypes[];
} & FilterBoxProps;
