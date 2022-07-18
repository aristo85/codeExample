import type {
  ListData,
  ListPaginationParams,
  ResourceObject,
} from 'modules/core/types/resource.types';
import type { Transaction } from 'modules/transaction/types/transaction.types';

export type GetTransactionsResponse = ListData<ResourceObject<Transaction>>;

export type GetTransactionsParams = ListPaginationParams & {
  q?: Record<string, string | number>;
  sorts?: string;
};

export type GetTransactionTypesResponse = {
  types: string[];
};
