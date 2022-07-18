export type CSVFilterData = {
  // country_id: string;
  name?: string;
  description?: string;
  is_blocked?: string;
  created_from?: string;
  created_to?: string;
  updated_from?: string;
  updated_to?: string;
};

export type SearchedFilters = {
  id_eq?: string | undefined;
  name_eq?: string;
  is_blocked_eq?: any;
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

export type CSVGroupData = {
  id: string;
  name: string;
  description: string;
  is_blocked: string;
  created_at: string;
  updated_at: string;
};
