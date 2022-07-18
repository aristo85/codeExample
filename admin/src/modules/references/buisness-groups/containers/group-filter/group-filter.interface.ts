import type { FilterBoxProps } from 'modules/core/components/filter-box/filter-box.interface';

export type GroupFilterValues = {
  id: string;
  name: string;
  is_blocked: string;
  // description: string;
  created_from: string;
  created_to: string;
  updated_from: string;
  updated_to: string;
};

export type GroupFilterProps = {
  // onApply?: (value: GroupFilterValues) => void;
  // onReset?: () => void;
  groupFilters: GroupFilterValues | null;
} & FilterBoxProps;
