import { ApiError } from './../../core/types/api.types';
import { useQuery } from 'react-query';
// services
import transactionApiService from 'modules/transaction/services/transaction-api.service';
import ApiService from 'modules/core/services/api-service';
// types
import type { GetTransactionsParams } from 'modules/transaction/types/transactions-api.types';

const apiService = new ApiService();

const TRANSACTION_LIST_CACHE_KEY = 'transaction_list';

export const useTransactionListQuery = (params: GetTransactionsParams) => {
  return useQuery(
    [TRANSACTION_LIST_CACHE_KEY, params],
    () => transactionApiService.getTransactionsList(params),
    {
      onError: (error: ApiError) => {
        apiService.showApiErrorToast(error, 'Unable to create commission');
      },
    }
  );
};

export const getAllTransactions = (params: any) => {
  return transactionApiService.getTransactionsList(params);
};
