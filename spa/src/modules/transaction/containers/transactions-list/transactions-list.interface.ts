export type TransactionsListFilterData = {
  currency_eq?: string;
  id_eq?: string;
  created_at_lteq?: string;
  created_at_gteq?: string;
  type_eq?: string;
  status_eq?: string;
  sorts?: string;
};

export type TransactionsListProps = {
  filter: TransactionsListFilterData;
  sortingByDate: boolean;
  setsortingByDate: (data: boolean) => void;
};
