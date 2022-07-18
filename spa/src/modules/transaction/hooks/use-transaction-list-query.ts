import { useQuery } from 'react-query';
// services
import transactionApiService from 'modules/transaction/services/transaction-api.service';
// types
import type { GetTransactionsParams } from 'modules/transaction/types/transactions-api.types';

const TRANSACTION_LIST_CACHE_KEY = 'transaction_list';

export const useTransactionListQuery = (params: GetTransactionsParams) => {
  return useQuery([TRANSACTION_LIST_CACHE_KEY, params], () =>
    transactionApiService.getTransactionsList(params)
  );
};
