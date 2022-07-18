import { useQuery } from 'react-query';
// services
import transactionApiService from 'modules/transaction/services/transaction-api.service';

const TRANSACTION_TYPES_LIST_CACHE_KEY = 'transaction_types_list';

export const useTransactionTypesListQuery = () => {
  return useQuery(
    TRANSACTION_TYPES_LIST_CACHE_KEY,
    () => transactionApiService.getTransactionTypesList(),
    { staleTime: Infinity }
  );
};
