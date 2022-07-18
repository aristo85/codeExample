import { useQuery } from 'react-query';
// services
import currencyApiService from 'modules/currency/services/currency-api.service';
// types
import type { GetCurrenciesParams } from 'modules/currency/types/currency-api.types';

const CURRENCIES_LIST_CACHE_KEY = 'currencies_list';

export const useCurrenciesListQuery = (params: GetCurrenciesParams) => {
  return useQuery(CURRENCIES_LIST_CACHE_KEY, () =>
    currencyApiService.getCurrenciesList(params)
  );
};
