import { useQuery } from 'react-query';
// services
import currenciesApiService from '../services/currencies.api.service';
// types
import { GetCurrenciesParams } from '../types/currencies-api.types';

const CURRENCY_LIST_CACHE_KEY = 'currency_list';

export const useCurrencyListQuery = (params: GetCurrenciesParams) => {
  return useQuery([CURRENCY_LIST_CACHE_KEY, params], () =>
    currenciesApiService.getCurrenciesList(params)
  );
};

export const getAllCurrencies = (params: any) => {
  return currenciesApiService.getCurrenciesList(params);
};
