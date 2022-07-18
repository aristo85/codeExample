export type CSVFilterData = {
  id: string;
  code: string;
  default: string;
  active: string;
  popular: string;
  // is_token?: boolean;
  currency_type: string;
  created_from: string;
  created_to: string;
  updated_from: string;
  updated_to: string;
};

export type SearchedFilters = {
  id_eq?: string | undefined;
  code_eq?: string;
  default_eq?: string;
  active_eq?: string;
  popular_eq?: string;
  // is_token_eq?: boolean;
  currency_type_eq?: string;
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

export type CSVCurrencyData = {
  id: string;
  code: string;
  default: string;
  active: string;
  popular: string;
  // is_token?: boolean;
  currency_type: string;
  created_from?: string;
  created_to?: string;
  updated_from?: string;
  updated_to?: string;
};
