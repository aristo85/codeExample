import type { FilterBoxProps } from 'modules/core/components/filter-box/filter-box.interface';

export type WalletsFilterValues = {
  wallet_id: string;
  user_id: string;
  type: string;
  amount: string;
  amount_currency: string;
  created_from: string;
  created_to: string;
  updated_from: string;
  updated_to: string;
  currency: string;
  email: string;
  name: string;
  surname: string;
  account_type: string;
  verification: string;
};

export type TransactionsFilterProps = {
  onApply: (value: WalletsFilterValues) => void;
  onReset: () => void;
} & FilterBoxProps;
