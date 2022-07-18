import { WalletType } from 'modules/wallet/types/wallet.types';

export type CSVFilterData = {
  wallet_id: string;
  user_id: string;
  type: string;
  amount: string;
  amount_currency: string;
  currency: string;
  email: string;
  name: string;
  surname: string;
  account_type: string;
  verification: string;
  created_from: string;
  created_to: string;
  updated_from: string;
  updated_to: string;
};

export type SearchedFilters = {
  id_eq?: string;
  user_uid_eq?: string;
  wallet_type_eq?: string;
  amount_eq?: string;
  currency_eq?: string;
  created_at_gteq?: string;
  created_at_lteq?: string;
  updated_at_gteq?: string;
  updated_at_lteq?: string;
  sorts?: string;
};

export type CSVProps = {
  filter: SearchedFilters | undefined;
  listCount: number | undefined;
  sortingByDate: boolean;
  setsortingByDate: (data: boolean) => void;
};

export type CSVWalletsData = {
  id: string;
  amount: string;
  hold: number;
  currency: string;
  user_uid: string;
  code: string;
  wallet_type: WalletType;
  created_from?: string;
  created_to?: string;
  updated_from?: string;
  updated_to?: string;
};
