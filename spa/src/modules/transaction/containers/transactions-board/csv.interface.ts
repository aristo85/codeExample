export type CSVFilterData = {
  currency_eq?: string;
  id_eq?: string;
  created_at_lteq?: string;
  created_at_gteq?: string;
  type_eq?: string;
  sorts?: string;
};

export type CSVProps = {
  filter: CSVFilterData;
  sortingByDate: boolean;
  setsortingByDate: (data: boolean) => void;
};
