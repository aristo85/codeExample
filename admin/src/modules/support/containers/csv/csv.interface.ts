export type CSVFilterData = {
  id?: string;
  name?: string;
  description?: string;
  created_from?: string;
  status?: string;
  created_to?: string;
  updated_from?: string;
  updated_to?: string;
};

export type SearchedFilters = {
  name_eq?: string | undefined;
  description_eq?: string | undefined;
  status_eq?: string | undefined;
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

export type CSVSupportData = {
  id: string;
  name: string;
  description: string;
  status: string;
  created_at: string;
  updated_at: string;
};
