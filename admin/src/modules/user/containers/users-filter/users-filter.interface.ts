import type { FilterBoxProps } from 'modules/core/components/filter-box/filter-box.interface';

export type UsersFilterValues = {
  user_id: string;
  user_email: string;
  user_name: string;
  user_group: string[];
  user_surname: string;
  user_acc_type: string;
  user_verification: string;
  user_status: string;
  created_from: string;
  created_to: string;
  updated_from: string;
  updated_to: string;
};

export type UsersFilterProps = {
  onApply: (value: UsersFilterValues) => void;
  onReset: () => void;
  profileFilters: UsersFilterValues | null;
} & FilterBoxProps;
