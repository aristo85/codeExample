export type TransactionsListFilterValues = {
  operationId: string;
  from: Date | null;
  to: Date | null;
  type: string | null;
  status: string | null;
};

export type TransactionsListFilterProps = {
  isOpen: boolean;
  onApply: (data: TransactionsListFilterValues) => void;
};
