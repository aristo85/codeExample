import type { Transaction } from 'modules/transaction/types/transaction.types';
import type { ResourceObject } from 'modules/core/types/resource.types';
import type { PaginationProps } from 'modules/core/components/pagination/pagination.interface';

export type TransactionsListProps = {
  transactions: ResourceObject<Transaction>[];
  paginationProps: PaginationProps;
  isLoading: boolean;
};
