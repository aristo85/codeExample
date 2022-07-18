import { useQuery } from 'react-query';
// services
import currencyApiService from 'modules/currency/services/currency-api.service';
// types
import type { GetCurrencyListParams } from 'modules/currency/types/currency-api.types';

const CURRENCY_LIST_CACHE_KEY = 'currency_list';

export const useCurrencyListQuery = (params: GetCurrencyListParams) => {
  return useQuery(CURRENCY_LIST_CACHE_KEY, () =>
    currencyApiService.getCurrencyList(params)
  );
};
