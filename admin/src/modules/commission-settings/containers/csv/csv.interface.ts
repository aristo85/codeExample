export type CSVFilterData = {
  // country_id: string;
  name?: string;
  currency?: string;
  transaction_type?: string;
  created_from: string;
  min_amount?: number | null;
  fix_amount?: number | null;
  percent?: number | null;
  user_group_id?: string;
  created_to: string;
  updated_from?: string;
  updated_to?: string;
};

export type SearchedFilters = {
  name_eq?: string;
  currency_in?: string[];
  transaction_type_in?: string[];
  fix_amount_eq?: number | undefined;
  min_amount_eq?: number | undefined;
  percent_eq?: number | undefined;
  user_group_id_eq?: string[];
  sorts?: string | undefined;
};

export type CSVProps = {
  filter: SearchedFilters | null;
  listCount: number | undefined;
  sortingByDate: boolean;
  setsortingByDate: (data: boolean) => void;
};

export type CSVCommissionData = {
  id: string;
  name: string;
  currency: string;
  transaction_type: string;
  min_amount: number;
  fix_amount: number;
  percent: number;
  group: string;
  description: string;
  created_at: string;
  updated_at: string;
};
