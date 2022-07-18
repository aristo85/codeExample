import type { FilterBoxProps } from 'modules/core/components/filter-box/filter-box.interface';

export type StatusFilterValues = {
  status_id: string;
  status_type: string;
  created_from: string;
  created_to: string;
  updated_from: string;
  updated_to: string;
};

export type StatusFilterProps = {
  onApply?: (value: StatusFilterValues) => void;
  onReset?: () => void;
} & FilterBoxProps;
