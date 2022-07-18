export type CSVFilterData = {
  transaction_id?: string;
  transaction_external_id?: string;
  user_id?: string;
  user_wallet_id?: string;
  destination_wallet_id?: string;
  destination_wallet_external_id?: string;
  type?: string;
  direction?: string;
  status?: string;
  amount?: string;
  currency?: string;
  created_from: string;
  created_to: string;
  commission: string;
  updated_from?: string;
  updated_to?: string;
};

export type SearchedFilters = {
  id_eq?: string | undefined;
  transaction_external_id_eq?: string | undefined;
  user_uid_eq?: string | undefined;
  user_wallet_id_eq?: string | undefined;
  to_wallet_id_eq?: string | undefined;
  to_wallet_external_id_eq?: string | undefined;
  direction_eq?: string | undefined;
  type_in?: string[] | undefined;
  status_eq?: string | undefined;
  amount_eq?: string | undefined;
  currency_in?: string[] | undefined;
  commission_eq?: string | undefined;
  commission_currency_eq?: string | undefined;
  created_at_gteq?: string | undefined;
  created_at_lteq?: string | undefined;
  updated_at_gteq?: string | undefined;
  updated_at_lteq?: string | undefined;
  sorts?: string | undefined;
};

export type CSVProps = {
  filter: SearchedFilters | null | undefined;
  sortingByDate: boolean;
  setsortingByDate: (data: boolean) => void;
  listCount: number | undefined;
};

export type CSVTransactionsData = {
  id: string;
  type: string;
  user_wallet_id: string;
  user_uid: string;
  amount: string;
  currency: string;
  direction: string;
  to_wallet_id: string;
  from_wallet_id: string;
  status: string;
  commission: string;
  commission_currency: string;
  commission_rate: string;
  commission_min: string;
  commission_fix: string;
  provider_commission: string;
  provider_commission_currency: string;
  provider_commission_rate: string;
  provider_commission_min: string;
  provider_commission_fix: string;
  transaction_external_id: string;
  to_wallet_external_id: string;
  from_wallet_external_id: string;
  parent_transaction_id: string;
  source_service: string;
  created_at: string;
  updated_at: string;
};
