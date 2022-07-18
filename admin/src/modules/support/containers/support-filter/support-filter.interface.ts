import type { FilterBoxProps } from 'modules/core/components/filter-box/filter-box.interface';

export type SupportFilterValues = {
  id: string;
  name: string;
  description: string;
  status: string;
  user_uid: string;
  created_to: string;
  created_from: string;
  updated_from: string;
  updated_to: string;
};

export type SupportFilterProps = {
  // onApply?: (value: SupportFilterValues) => void;
  // onReset?: () => void;
  supportFilters: SupportFilterValues | null;
  // listCount: number | undefined;
} & FilterBoxProps;
