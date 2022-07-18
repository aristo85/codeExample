import type { FilterBoxProps } from 'modules/core/components/filter-box/filter-box.interface';

export type TransactionsFilterValues = {
  transaction_id: string;
  total_id: string;
  transaction_external_id: string;
  user_id: string;
  user_wallet_id: string;
  destination_wallet_id: string;
  destination_wallet_external_id: string;
  direction: string;
  status: string;
  created_from: string;
  created_to: string;
  updated_from: string;
  updated_to: string;
  amount: string;
  currency: string[];
  commission: string;
  commission_currency: string;
  description: string;
  type: string[];
};

export type TransactionsFilterProps = {
  onApply: (value: TransactionsFilterValues) => void;
  onReset: () => void;
} & FilterBoxProps;
