import type { FilterBoxProps } from 'modules/core/components/filter-box/filter-box.interface';

export type OperationFilterValues = {
  operation_id: string;
  operation_type: string;
  // country_code: string;
  created_from: string;
  created_to: string;
  updated_from: string;
  updated_to: string;
};

export type OperationFilterProps = {
  onApply?: (value: OperationFilterValues) => void;
  onReset?: () => void;
} & FilterBoxProps;
