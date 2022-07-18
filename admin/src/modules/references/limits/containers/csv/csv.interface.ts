export type CSVFilterData = {
  id: string;
  name: string;
  currency: string;
  limit_type: string;
  transaction_type: string;
  user_group_id: string;
  created_from: string;
  created_to: string;
  updated_from: string;
  updated_to: string;
};

export type SearchedFilters = {
  id_eq?: string | undefined;
  name_eq?: string;
  currency_eq?: string;
  limit_type_eq?: string;
  transaction_type_eq?: string;
  user_group_id_eq?: string;
  created_at_gteq?: string | undefined;
  created_at_lteq?: string | undefined;
  updated_at_gteq?: string | undefined;
  updated_at_lteq?: string | undefined;
  sorts?: string | undefined;
};

export type CSVProps = {
  filter: SearchedFilters | null;
  listCount: number | undefined;
  sortingByDate: boolean;
  setsortingByDate: (data: boolean) => void;
};

export type CSVLimitData = {
  id: string;
  name: string;
  currency: string;
  limit_type: string;
  transaction_type: string;
  user_group_id: string;
  created_from?: string;
  created_to?: string;
  updated_from?: string;
  updated_to?: string;
};
