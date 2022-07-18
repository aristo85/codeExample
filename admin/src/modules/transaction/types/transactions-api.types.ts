import type {
  FilterParams,
  ListData,
  ListPaginationParams,
  ResourceObject,
} from 'modules/core/types/resource.types';
import type { Transaction } from 'modules/transaction/types/transaction.types';

export type GetTransactionsParams = ListPaginationParams & FilterParams;

export type GetTransactionsResponse = ListData<ResourceObject<Transaction>>;

export type GetTransactionTypesResponse = {
  types: string[];
};
