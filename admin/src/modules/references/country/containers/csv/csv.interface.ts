export type CSVFilterData = {
  // country_id: string;
  name?: string;
  code?: string;
  // created_from: string;
  is_blocked?: string;
  // created_to: string;
  updated_from?: string;
  updated_to?: string;
};

export type SearchedFilters = {
  name_eq?: string | undefined;
  code_eq?: string | undefined;
  is_blocked_eq?: string | undefined;
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

export type CSVCountryData = {
  id: string;
  name: string;
  code: string;
  is_blocked: string;
  created_at: string;
  updated_at: string;
};
